import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    id: "merge-pdf-online",
    question: "How to merge PDF files online?",
    answer: `Merging PDF files online is quick and easy with our free PDF merger tool:

**Step-by-step process:**
1. **Upload your PDF files** - Click "Choose Files" or drag and drop multiple PDF files
2. **Arrange the order** - Drag files to reorder them as needed
3. **Merge PDFs** - Click "Merge PDF" to combine all files into one document
4. **Download** - Save the merged PDF file to your device

**Key benefits:**
• **No software installation** required - works directly in your browser
• **Secure processing** - files are automatically deleted after processing
• **Free to use** - no hidden fees or subscription required
• **Fast processing** - merge multiple PDFs in seconds
• **Maintain quality** - original formatting and quality preserved`,
    category: "PDF Merging",
    keywords: ["merge PDF online", "combine PDF files", "PDF merger tool"]
  },
  {
    id: "split-pdf-document",
    question: "How to split a PDF document?",
    answer: `Our PDF splitter tool makes it easy to divide large PDF documents into smaller files:

**Methods to split PDF:**
1. **Split by pages** - Extract specific pages (e.g., pages 1-5, 10-15)
2. **Split by range** - Divide into equal parts or custom ranges
3. **Extract single pages** - Get individual pages as separate PDF files

**How to use:**
1. **Upload your PDF** - Select the PDF file you want to split
2. **Choose split method** - Select pages, ranges, or extraction method
3. **Set parameters** - Specify page numbers or ranges
4. **Process** - Click "Split PDF" to generate separate files
5. **Download** - Get your split PDF files as a ZIP archive

**Perfect for:**
• Extracting specific chapters from documents
• Creating smaller files for email attachments
• Organizing large documents into sections`,
    category: "PDF Splitting",
    keywords: ["split PDF files", "divide PDF document", "PDF splitter"]
  },
  {
    id: "compress-pdf-quality",
    question: "How to compress PDF files without losing quality?",
    answer: `Our PDF compressor uses advanced algorithms to reduce file size while maintaining visual quality:

**Compression options:**
• **High Quality** - Minimal compression, best for printing (reduces size by 10-30%)
• **Medium Quality** - Balanced compression for general use (reduces size by 30-50%)
• **Low Quality** - Maximum compression for web sharing (reduces size by 50-70%)

**How to compress PDF:**
1. **Upload PDF file** - Select the PDF you want to compress
2. **Choose quality level** - Pick the compression level that suits your needs
3. **Process** - Our tool optimizes images and removes unnecessary data
4. **Download** - Get your compressed PDF file

**Smart compression features:**
• **Image optimization** - Reduces image file sizes without visible quality loss
• **Font optimization** - Removes unused fonts and optimizes text rendering
• **Metadata removal** - Strips unnecessary metadata to save space
• **Lossless compression** - Maintains document integrity and readability`,
    category: "PDF Compression",
    keywords: ["compress PDF", "reduce PDF size", "PDF compression tool"]
  },
  {
    id: "pdf-to-word-converter",
    question: "How to convert PDF to Word?",
    answer: `Convert PDF documents to editable Word format with our free PDF to Word converter:

**Conversion process:**
1. **Upload PDF file** - Select the PDF document you want to convert
2. **Choose format** - Select Word (.docx) as output format
3. **Convert** - Our OCR technology extracts text and formatting
4. **Download** - Get your editable Word document

**What gets converted:**
• **Text content** - All text is extracted and remains editable
• **Formatting** - Fonts, sizes, colors, and styles are preserved
• **Images** - Pictures and graphics are included in the Word document
• **Tables** - Table structures and data are maintained
• **Layout** - Document structure and page layout preserved

**Best practices:**
• **Use high-quality PDFs** - Better source quality = better conversion results
• **Check converted document** - Review formatting and make adjustments if needed
• **Works with scanned PDFs** - OCR technology can extract text from image-based PDFs

**Supported formats:** PDF to DOCX, PDF to DOC, PDF to RTF`,
    category: "PDF Conversion",
    keywords: ["PDF to Word converter", "convert PDF to DOCX", "PDF to Word online"]
  },
  {
    id: "images-to-pdf-converter",
    question: "How to convert images (JPG/PNG) to PDF?",
    answer: `Transform your images into professional PDF documents with our image to PDF converter:

**Supported image formats:**
• **JPG/JPEG** - Most common photo format
• **PNG** - Images with transparency
• **BMP** - Windows bitmap images
• **GIF** - Animated or static images
• **TIFF** - High-quality images

**Conversion steps:**
1. **Upload images** - Select multiple JPG, PNG, or other image files
2. **Arrange order** - Drag images to set the page order
3. **Adjust settings** - Choose page size, orientation, and margins
4. **Convert** - Click "Convert to PDF" to create your document
5. **Download** - Save your PDF file

**Customization options:**
• **Page size** - A4, Letter, Legal, or custom dimensions
• **Orientation** - Portrait or landscape layout
• **Margins** - Adjust spacing around images
• **Quality** - Choose between file size and image quality
• **Multiple images per page** - Combine several images on one page

**Perfect for:**
• Creating photo albums and portfolios
• Archiving important documents
• Sharing multiple images as one file`,
    category: "Image Conversion",
    keywords: ["convert images to PDF", "JPG to PDF", "PNG to PDF converter"]
  },
  {
    id: "free-pdf-editor-features",
    question: "What features does your free PDF editor include?",
    answer: `Our comprehensive PDF editor offers a complete suite of tools for all your PDF needs:

**Core editing features:**
• **Merge PDFs** - Combine multiple PDF files into one document
• **Split PDFs** - Divide large PDFs into smaller files
• **Compress PDFs** - Reduce file size without quality loss
• **Convert PDFs** - Transform to/from Word, Excel, PowerPoint
• **Image to PDF** - Convert JPG, PNG, and other images to PDF

**Advanced capabilities:**
• **Page management** - Add, delete, rotate, and reorder pages
• **Text editing** - Add, edit, or remove text content
• **Annotation tools** - Add comments, highlights, and notes
• **Form filling** - Fill out PDF forms and save responses
• **Digital signatures** - Sign documents electronically

**Security features:**
• **Password protection** - Secure PDFs with passwords
• **Watermarks** - Add text or image watermarks
• **Redaction** - Remove sensitive information permanently
• **Permissions** - Control printing, editing, and copying

**Why choose our PDF editor:**
• **100% free** - No hidden costs or premium subscriptions
• **Browser-based** - No software installation required
• **Secure** - Files processed locally and deleted after use
• **Fast** - Quick processing for all PDF operations
• **User-friendly** - Intuitive interface for all skill levels`,
    category: "PDF Editor",
    keywords: ["free PDF editor", "PDF editing tools", "online PDF editor"]
  },
  {
    id: "pdf-security-privacy",
    question: "Is it safe to upload PDF files to your online tools?",
    answer: `We take your privacy and document security seriously. Here's how we protect your files:

**Security measures:**
• **SSL encryption** - All file uploads use secure HTTPS encryption
• **Automatic deletion** - Files are permanently deleted within 1 hour
• **No file storage** - We don't store or keep copies of your documents
• **Privacy protection** - No one can access your uploaded files
• **Secure processing** - Files are processed in isolated, secure environments

**What we DON'T do:**
• Store your files on our servers
• Share files with third parties
• Use your content for any purpose
• Require registration or personal information
• Keep processing history or logs

**Best practices for users:**
• **Remove sensitive data** - Consider redacting confidential information
• **Use strong passwords** - If password-protecting PDFs
• **Check output** - Review processed files before sharing
• **Public computers** - Clear browser cache after use

**Compliance:**
• **GDPR compliant** - European privacy regulations
• **SOC 2 standards** - Industry security practices
• **Regular audits** - Continuous security monitoring

Your privacy is our priority. We've designed our tools to be secure, private, and trustworthy.`,
    category: "Security",
    keywords: ["PDF security", "online PDF safety", "secure PDF processing"]
  },
  {
    id: "pdf-file-size-limits",
    question: "What are the file size limits for PDF processing?",
    answer: `Our PDF tools are designed to handle files of various sizes efficiently:

**File size limits:**
• **Individual files** - Up to 100MB per PDF file
• **Batch processing** - Up to 20 files at once
• **Total upload** - Maximum 500MB per session
• **Image files** - Up to 50MB per image file

**Performance optimization:**
• **Fast processing** - Most files processed in under 30 seconds
• **Efficient compression** - Advanced algorithms for optimal results
• **Parallel processing** - Multiple files processed simultaneously
• **Progress tracking** - Real-time status updates

**For large files:**
• **Compress first** - Use our compression tool to reduce size
• **Split large PDFs** - Divide into smaller sections
• **Image optimization** - Reduce image quality if needed
• **Remove unnecessary elements** - Delete unused pages or content

**Tips for better performance:**
• **Stable internet** - Ensure good connection for uploads
• **Modern browser** - Use updated Chrome, Firefox, or Safari
• **Close other tabs** - Free up system resources
• **File preparation** - Optimize files before processing

**Enterprise solutions:**
Need to process larger files? Contact us for custom solutions with higher limits and dedicated processing power.`,
    category: "Technical",
    keywords: ["PDF file size limits", "large PDF processing", "PDF upload limits"]
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const currentLang = getCurrentLanguage();

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <>
      <MultiLangSEOHead
        title="PDF Tools FAQ - Common Questions About Online PDF Editor"
        description="Find answers to frequently asked questions about our free online PDF tools. Learn how to merge, split, compress, and convert PDF files with step-by-step guides."
        keywords="PDF tools FAQ, merge PDF online, split PDF files, compress PDF, PDF to Word converter, convert images to PDF, free PDF editor"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/faq' : `/${currentLang}/faq`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get answers to common questions about our free online PDF tools. 
              Learn how to merge, split, compress, and convert PDF files with ease.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <Badge 
              variant={selectedCategory === "All" ? "default" : "outline"}
              className="cursor-pointer px-4 py-2"
              onClick={() => setSelectedCategory("All")}
            >
              All Questions
            </Badge>
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <Card key={item.id} className="shadow-sm hover:shadow-md transition-shadow">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleItem(item.id)}
                  >
                    <CardHeader className="hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <CardTitle className="text-lg text-slate-900 mb-2">
                            {item.question}
                          </CardTitle>
                          <div className="flex flex-wrap gap-1">
                            {item.keywords.slice(0, 3).map((keyword, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {openItems.includes(item.id) ? (
                          <ChevronUp className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="prose prose-slate max-w-none">
                        {item.answer.split('\n').map((paragraph, index) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                            return (
                              <h3 key={index} className="text-lg font-semibold text-slate-900 mt-4 mb-2">
                                {paragraph.replace(/\*\*/g, '').replace(':', '')}
                              </h3>
                            );
                          }
                          if (paragraph.startsWith('• ')) {
                            return (
                              <li key={index} className="text-slate-700 mb-1">
                                {paragraph.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                              </li>
                            );
                          }
                          if (paragraph.trim()) {
                            return (
                              <p key={index} className="text-slate-700 mb-3" 
                                 dangerouslySetInnerHTML={{
                                   __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                 }}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Using Our PDF Tools?
            </h2>
            <p className="text-slate-600 mb-6">
              Try our free online PDF tools today. No registration required, completely secure, and easy to use.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/merge-pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Merge PDF Files
              </a>
              <a href="/split-pdf" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Split PDF Document
              </a>
              <a href="/compress-pdf" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Compress PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}