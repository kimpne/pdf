import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { z } from "zod";
import { storage } from "./storage";
import { PDFProcessor } from "./services/pdf-processor";
import { generateFullHTML } from "./seo-templates";

// Extend Express Request type for multer
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}

const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

const pdfProcessor = new PDFProcessor();

export async function registerRoutes(app: Express): Promise<Server> {
  // PDF Merge endpoint
  app.post('/api/pdf/merge', upload.array('file'), async (req: MulterRequest, res: Response) => {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length < 2) {
        return res.status(400).json({ message: 'At least 2 PDF files are required' });
      }

      const files = req.files as Express.Multer.File[];
      const jobId = `merge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Create job record
      await storage.createPdfJob({
        jobId,
        operation: 'merge',
        originalFilename: files.map(f => f.originalname).join(', ')
      });

      // Process files
      const result = await pdfProcessor.mergePDFs(files);
      
      // Update job status
      await storage.updatePdfJob(jobId, {
        status: 'completed',
        resultFilename: 'merged.pdf'
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="merged.pdf"');
      res.send(result);

    } catch (error) {
      console.error('PDF merge error:', error);
      res.status(500).json({ message: 'Failed to merge PDF files' });
    }
  });

  // PDF Split endpoint
  app.post('/api/pdf/split', upload.single('file'), async (req: MulterRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'PDF file is required' });
      }

      const { mode, pageRange } = req.body;
      const jobId = `split_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await storage.createPdfJob({
        jobId,
        operation: 'split',
        originalFilename: req.file.originalname
      });

      const result = await pdfProcessor.splitPDF(req.file, mode, pageRange);
      
      await storage.updatePdfJob(jobId, {
        status: 'completed',
        resultFilename: 'split-pages.zip'
      });

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="split-pages.zip"');
      res.send(result);

    } catch (error) {
      console.error('PDF split error:', error);
      res.status(500).json({ message: 'Failed to split PDF file' });
    }
  });

  // PDF Compress endpoint
  app.post('/api/pdf/compress', upload.single('file'), async (req: MulterRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'PDF file is required' });
      }

      const { quality } = req.body;
      const jobId = `compress_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await storage.createPdfJob({
        jobId,
        operation: 'compress',
        originalFilename: req.file.originalname
      });

      const result = await pdfProcessor.compressPDF(req.file, quality || 'medium');
      
      await storage.updatePdfJob(jobId, {
        status: 'completed',
        resultFilename: 'compressed.pdf'
      });

      // Add compression stats to headers
      res.setHeader('X-Original-Size', req.file.size.toString());
      res.setHeader('X-Compressed-Size', result.length.toString());
      res.setHeader('X-Compression-Ratio', ((1 - result.length / req.file.size) * 100).toFixed(1));
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="compressed.pdf"');
      res.send(result);

    } catch (error) {
      console.error('PDF compress error:', error);
      res.status(500).json({ message: 'Failed to compress PDF file' });
    }
  });

  // PDF to Word endpoint
  app.post('/api/pdf/to-word', upload.single('file'), async (req: MulterRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'PDF file is required' });
      }

      const jobId = `pdf_to_word_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await storage.createPdfJob({
        jobId,
        operation: 'pdf-to-word',
        originalFilename: req.file.originalname
      });

      const result = await pdfProcessor.convertPDFToWord(req.file);
      
      await storage.updatePdfJob(jobId, {
        status: 'completed',
        resultFilename: 'converted.docx'
      });

      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.setHeader('Content-Disposition', 'attachment; filename="converted.docx"');
      res.send(result);

    } catch (error) {
      console.error('PDF to Word error:', error);
      res.status(500).json({ message: 'Failed to convert PDF to Word' });
    }
  });

  // Word to PDF endpoint
  app.post('/api/pdf/from-word', upload.single('file'), async (req: MulterRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Word file is required' });
      }

      const jobId = `word_to_pdf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await storage.createPdfJob({
        jobId,
        operation: 'word-to-pdf',
        originalFilename: req.file.originalname
      });

      const result = await pdfProcessor.convertWordToPDF(req.file);
      
      await storage.updatePdfJob(jobId, {
        status: 'completed',
        resultFilename: 'converted.pdf'
      });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');
      res.send(result);

    } catch (error) {
      console.error('Word to PDF error:', error);
      res.status(500).json({ message: 'Failed to convert Word to PDF' });
    }
  });

  // PDF to JPG endpoint
  app.post('/api/pdf/to-jpg', upload.single('file'), async (req: MulterRequest, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'PDF file is required' });
      }

      const { quality } = req.body;
      const jobId = `pdf_to_jpg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await storage.createPdfJob({
        jobId,
        operation: 'pdf-to-jpg',
        originalFilename: req.file.originalname
      });

      const result = await pdfProcessor.convertPDFToJPG(req.file, quality || 'medium');
      
      await storage.updatePdfJob(jobId, {
        status: 'completed',
        resultFilename: 'pdf-images.zip'
      });

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="pdf-images.zip"');
      res.send(result);

    } catch (error) {
      console.error('PDF to JPG error:', error);
      res.status(500).json({ message: 'Failed to convert PDF to JPG' });
    }
  });

  // Job status endpoint
  app.get('/api/pdf/status/:jobId', async (req: Request, res: Response) => {
    try {
      const job = await storage.getPdfJob(req.params.jobId);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.json(job);
    } catch (error) {
      console.error('Job status error:', error);
      res.status(500).json({ message: 'Failed to get job status' });
    }
  });

  // SEO 최적화된 HTML 라우트 - 검색엔진 크롤러용
  const seoRoutes = [
    '/',
    '/merge-pdf',
    '/split-pdf', 
    '/compress-pdf',
    '/pdf-to-word',
    '/word-to-pdf',
    '/pdf-to-jpg',
    '/blog',
    '/about',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/security',
    '/faq',
    '/help-center',
    '/api-docs',
    '/status'
  ];

  // 각 라우트에 대해 SEO 최적화된 HTML 제공
  seoRoutes.forEach(route => {
    app.get(route, (req: Request, res: Response) => {
      const userAgent = req.get('User-Agent') || '';
      const isBot = /bot|crawler|spider|crawling/i.test(userAgent);
      
      if (isBot) {
        // 검색엔진 크롤러인 경우 SEO 최적화된 HTML 제공
        const seoHtml = generateFullHTML(route);
        res.setHeader('Content-Type', 'text/html');
        res.send(seoHtml);
      } else {
        // 일반 사용자는 기본 React 앱으로 리디렉션
        res.redirect('/#' + route);
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
