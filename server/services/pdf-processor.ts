import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import archiver from 'archiver';
import { Readable } from 'stream';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

export class PDFProcessor {
  async mergePDFs(files: Express.Multer.File[]): Promise<Buffer> {
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
      const pdfBytes = await readFile(file.path);
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach(page => mergedPdf.addPage(page));
      
      // Clean up temporary file
      await unlink(file.path);
    }
    
    const pdfBytes = await mergedPdf.save();
    return Buffer.from(pdfBytes);
  }

  async splitPDF(file: Express.Multer.File, mode: string, pageRange?: string): Promise<Buffer> {
    const pdfBytes = await readFile(file.path);
    const pdf = await PDFDocument.load(pdfBytes);
    const totalPages = pdf.getPageCount();
    
    const archive = archiver('zip', { zlib: { level: 9 } });
    const chunks: Buffer[] = [];
    
    archive.on('data', (chunk) => chunks.push(chunk));
    
    if (mode === 'pages') {
      // Split into individual pages
      for (let i = 0; i < totalPages; i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdf, [i]);
        newPdf.addPage(copiedPage);
        
        const pageBytes = await newPdf.save();
        archive.append(Buffer.from(pageBytes), { name: `page_${i + 1}.pdf` });
      }
    } else if (mode === 'range' && pageRange) {
      // Split by page range
      const ranges = this.parsePageRange(pageRange, totalPages);
      
      for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        const newPdf = await PDFDocument.create();
        const pageIndices = Array.from(
          { length: range.end - range.start + 1 }, 
          (_, idx) => range.start + idx - 1
        );
        
        const copiedPages = await newPdf.copyPages(pdf, pageIndices);
        copiedPages.forEach(page => newPdf.addPage(page));
        
        const rangeBytes = await newPdf.save();
        archive.append(Buffer.from(rangeBytes), { 
          name: `pages_${range.start}-${range.end}.pdf` 
        });
      }
    }
    
    await archive.finalize();
    await unlink(file.path);
    
    return Buffer.concat(chunks);
  }

  async compressPDF(file: Express.Multer.File, quality: string): Promise<Buffer> {
    const pdfBytes = await readFile(file.path);
    const pdf = await PDFDocument.load(pdfBytes);
    
    // Basic compression by re-saving with optimizations
    // In production, you'd use more sophisticated compression libraries
    const compressedBytes = await pdf.save({
      useObjectStreams: true,
      addDefaultPage: false,
      objectsPerTick: 50,
    });
    
    await unlink(file.path);
    return Buffer.from(compressedBytes);
  }

  async convertPDFToWord(file: Express.Multer.File): Promise<Buffer> {
    // This is a placeholder implementation
    // In production, you'd use libraries like pdf2docx or similar
    const pdfBytes = await readFile(file.path);
    
    // For now, return a simple text file as placeholder
    const textContent = `Converted from PDF: ${file.originalname}`;
    const buffer = Buffer.from(textContent, 'utf-8');
    
    await unlink(file.path);
    return buffer;
  }

  async convertWordToPDF(file: Express.Multer.File): Promise<Buffer> {
    // This is a placeholder implementation
    // In production, you'd use libraries like docx2pdf or similar
    const wordBytes = await readFile(file.path);
    
    // Create a simple PDF with the Word content
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    
    page.drawText(`Converted from Word: ${file.originalname}`, {
      x: 50,
      y: height - 50,
      size: 12,
    });
    
    const pdfBytes = await pdfDoc.save();
    await unlink(file.path);
    
    return Buffer.from(pdfBytes);
  }

  async convertPDFToJPG(file: Express.Multer.File, quality: string): Promise<Buffer> {
    // This is a placeholder implementation
    // In production, you'd use libraries like pdf2pic or similar
    const pdfBytes = await readFile(file.path);
    
    const archive = archiver('zip', { zlib: { level: 9 } });
    const chunks: Buffer[] = [];
    
    archive.on('data', (chunk) => chunks.push(chunk));
    
    // Placeholder: create a simple text file for each "page"
    const pdf = await PDFDocument.load(pdfBytes);
    const totalPages = pdf.getPageCount();
    
    for (let i = 0; i < totalPages; i++) {
      const placeholder = `JPG image for page ${i + 1}`;
      archive.append(Buffer.from(placeholder), { name: `page_${i + 1}.jpg` });
    }
    
    await archive.finalize();
    await unlink(file.path);
    
    return Buffer.concat(chunks);
  }

  private parsePageRange(pageRange: string, totalPages: number): { start: number; end: number }[] {
    const ranges: { start: number; end: number }[] = [];
    const parts = pageRange.split(',');
    
    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.includes('-')) {
        const [start, end] = trimmed.split('-').map(n => parseInt(n.trim()));
        if (start >= 1 && end <= totalPages && start <= end) {
          ranges.push({ start, end });
        }
      } else {
        const page = parseInt(trimmed);
        if (page >= 1 && page <= totalPages) {
          ranges.push({ start: page, end: page });
        }
      }
    }
    
    return ranges;
  }
}
