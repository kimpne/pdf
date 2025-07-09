/**
 * SEO 템플릿 및 메타 태그 생성 유틸리티
 * 서버 사이드에서 기본적인 SEO 정보를 제공하여 검색엔진 크롤링 향상
 */

interface SEOTemplate {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  structuredData: object;
}

// 기본 SEO 템플릿
const DEFAULT_SEO: SEOTemplate = {
  title: "Free PDF Tools Online - Merge, Split, Compress PDFs | PDFo.dev",
  description: "Free online PDF tools for merging, splitting, compressing, and converting PDFs. Fast, secure, and no registration required. Process your PDF files instantly at PDFo.dev.",
  keywords: "PDF tools, merge PDF, split PDF, compress PDF, convert PDF to Word, online PDF editor, PDF converter, free PDF tools, PDF merger, PDF splitter",
  canonical: "https://pdfo.dev/",
  ogImage: "https://pdfo.dev/og-image.jpg",
  ogType: "website",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PDFo.dev - Free Online PDF Tools",
    "description": "Free online PDF tools for merging, splitting, compressing, and converting PDFs. Fast, secure, and no registration required.",
    "url": "https://pdfo.dev",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pdfo.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PDFo.dev",
      "url": "https://pdfo.dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pdfo.dev/logo.png",
        "width": 512,
        "height": 512
      }
    },
    "sameAs": [
      "https://twitter.com/pdfodev",
      "https://facebook.com/pdfodev",
      "https://linkedin.com/company/pdfodev"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free online PDF tools"
    }
  }
};

// 페이지별 SEO 설정
const PAGE_SEO: Record<string, Partial<SEOTemplate>> = {
  '/': DEFAULT_SEO,
  '/merge-pdf': {
    title: "Merge PDF Files Online Free - Combine Multiple PDFs | PDFo.dev",
    description: "Merge multiple PDF files into one document online for free. Fast, secure PDF merger with no registration required. Combine your PDFs instantly at PDFo.dev.",
    keywords: "merge PDF, combine PDF, PDF merger, join PDF files, PDF combiner, free PDF merge tool",
    canonical: "https://pdfo.dev/merge-pdf",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "PDF Merger - PDFo.dev",
      "description": "Merge multiple PDF files into one document online for free.",
      "url": "https://pdfo.dev/merge-pdf",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  },
  '/split-pdf': {
    title: "Split PDF Files Online Free - Extract PDF Pages | PDFo.dev",
    description: "Split PDF files online for free. Extract specific pages or split into multiple documents. Fast, secure PDF splitter with no registration required.",
    keywords: "split PDF, PDF splitter, extract PDF pages, divide PDF, PDF page extractor",
    canonical: "https://pdfo.dev/split-pdf",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "PDF Splitter - PDFo.dev",
      "description": "Split PDF files online for free. Extract specific pages or split into multiple documents.",
      "url": "https://pdfo.dev/split-pdf"
    }
  },
  '/compress-pdf': {
    title: "Compress PDF Files Online Free - Reduce PDF Size | PDFo.dev",
    description: "Compress PDF files online for free. Reduce PDF file size while maintaining quality. Fast, secure PDF compression with no registration required.",
    keywords: "compress PDF, reduce PDF size, PDF compressor, optimize PDF, shrink PDF file",
    canonical: "https://pdfo.dev/compress-pdf",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "PDF Compressor - PDFo.dev",
      "description": "Compress PDF files online for free. Reduce PDF file size while maintaining quality.",
      "url": "https://pdfo.dev/compress-pdf"
    }
  },
  '/pdf-to-word': {
    title: "Convert PDF to Word Online Free - PDF to DOC Converter | PDFo.dev",
    description: "Convert PDF to Word documents online for free. High-quality PDF to DOC/DOCX conversion with no registration required. Edit your PDFs as Word files.",
    keywords: "PDF to Word, convert PDF to DOC, PDF to DOCX, PDF converter, edit PDF in Word",
    canonical: "https://pdfo.dev/pdf-to-word",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "PDF to Word Converter - PDFo.dev",
      "description": "Convert PDF to Word documents online for free.",
      "url": "https://pdfo.dev/pdf-to-word"
    }
  },
  '/word-to-pdf': {
    title: "Convert Word to PDF Online Free - DOC to PDF Converter | PDFo.dev",
    description: "Convert Word documents to PDF online for free. High-quality DOC/DOCX to PDF conversion with no registration required. Create PDFs from Word files.",
    keywords: "Word to PDF, convert DOC to PDF, DOCX to PDF, Word converter, create PDF from Word",
    canonical: "https://pdfo.dev/word-to-pdf",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Word to PDF Converter - PDFo.dev",
      "description": "Convert Word documents to PDF online for free.",
      "url": "https://pdfo.dev/word-to-pdf"
    }
  },
  '/pdf-to-jpg': {
    title: "Convert PDF to JPG Online Free - PDF to Image Converter | PDFo.dev",
    description: "Convert PDF pages to JPG images online for free. High-quality PDF to image conversion with no registration required. Extract images from PDFs.",
    keywords: "PDF to JPG, convert PDF to image, PDF to JPEG, extract images from PDF, PDF image converter",
    canonical: "https://pdfo.dev/pdf-to-jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "PDF to JPG Converter - PDFo.dev",
      "description": "Convert PDF pages to JPG images online for free.",
      "url": "https://pdfo.dev/pdf-to-jpg"
    }
  },
  '/blog': {
    title: "PDF Tools Blog - Tips, Tricks & Tutorials | PDFo.dev",
    description: "Learn about PDF tools, tips, tricks, and best practices. Comprehensive guides for PDF editing, conversion, and optimization.",
    keywords: "PDF blog, PDF tips, PDF tutorials, PDF guides, PDF best practices",
    canonical: "https://pdfo.dev/blog",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "PDFo.dev Blog",
      "description": "Learn about PDF tools, tips, tricks, and best practices.",
      "url": "https://pdfo.dev/blog"
    }
  }
};

// 블로그 포스트 데이터
const BLOG_POSTS: Record<string, {
  title: string;
  description: string;
  content: string;
  publishDate: string;
  readTime: string;
  keywords: string;
}> = {
  'how-to-convert-pdf-to-word-safely': {
    title: 'How to Convert PDF to Word Safely - Complete Security Guide',
    description: 'Learn how to convert PDF to Word documents safely with our comprehensive security guide. Protect your sensitive data during PDF to Word conversion.',
    content: `The Importance of Secure PDF to Word Conversion

Converting PDF documents to Word format is a common task, but it often involves sensitive information that requires careful handling. This guide provides comprehensive security measures to protect your data during the conversion process.

## Security Risks in PDF to Word Conversion

### Data Exposure
When using online conversion tools, your documents are temporarily stored on external servers, potentially exposing:
- Personal information
- Financial data
- Business secrets
- Legal documents

### Malware Risks
Malicious conversion tools might:
- Inject malware into converted files
- Steal document contents
- Install tracking software
- Compromise your system

## Choosing Secure Conversion Tools

### Key Security Features to Look For
- **SSL/TLS Encryption**: Ensures data is encrypted during transmission
- **Automatic File Deletion**: Files are deleted immediately after processing
- **No Registration Required**: Reduces data collection and storage
- **Privacy Policy**: Clear statements about data handling
- **GDPR Compliance**: Adherence to privacy regulations

### Red Flags to Avoid
- Tools requiring personal information
- Services without clear privacy policies
- Platforms with excessive ads or pop-ups
- Tools that require software installation
- Services with poor security certificates

## Step-by-Step Secure Conversion Process

### Pre-Conversion Security Checks
1. **Verify Tool Security**: Check for HTTPS encryption and security certificates
2. **Review Privacy Policy**: Understand how your data will be handled
3. **Create Backups**: Always keep original files secure
4. **Remove Sensitive Data**: Redact confidential information if possible

### During Conversion
1. **Use Secure Connection**: Ensure you're on a trusted network
2. **Monitor Progress**: Watch for unusual behavior or requests
3. **Avoid Interruptions**: Don't close the browser or navigate away
4. **Download Immediately**: Get your converted file as soon as it's ready

### Post-Conversion Security
1. **Scan for Malware**: Check the converted file with antivirus software
2. **Verify Content**: Ensure all content was converted accurately
3. **Check Formatting**: Verify that sensitive information wasn't corrupted
4. **Secure Storage**: Store the converted file in a secure location

Learn more about secure PDF conversion at PDFo.dev - your trusted source for free, secure PDF tools.`,
    publishDate: '2024-01-15',
    readTime: '8 min read',
    keywords: 'PDF to Word security, secure PDF conversion, protect PDF data, safe file conversion, PDF privacy'
  }
};

export function getSEOData(path: string): SEOTemplate {
  // 블로그 포스트 처리
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    const post = BLOG_POSTS[slug];
    
    if (post) {
      return {
        title: `${post.title} | PDFo.dev Blog`,
        description: post.description,
        keywords: post.keywords,
        canonical: `https://pdfo.dev${path}`,
        ogImage: "https://pdfo.dev/og-image.jpg",
        ogType: "article",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "author": {
            "@type": "Organization",
            "name": "PDFo.dev"
          },
          "publisher": {
            "@type": "Organization",
            "name": "PDFo.dev",
            "logo": {
              "@type": "ImageObject",
              "url": "https://pdfo.dev/logo.png"
            }
          },
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://pdfo.dev${path}`
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://pdfo.dev/og-image.jpg",
            "width": 1200,
            "height": 630
          },
          "articleBody": post.content.substring(0, 1000) + "...",
          "wordCount": post.content.split(' ').length,
          "timeRequired": post.readTime,
          "url": `https://pdfo.dev${path}`
        }
      };
    }
  }
  
  const pageSEO = PAGE_SEO[path] || {};
  return {
    ...DEFAULT_SEO,
    ...pageSEO
  };
}

export function generateMetaTags(seoData: SEOTemplate): string {
  return `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    <meta name="author" content="PDFo.dev" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="en" />
    <meta name="revisit-after" content="7 days" />
    <meta name="distribution" content="global" />
    <meta name="rating" content="general" />
    
    <link rel="canonical" href="${seoData.canonical}" />
    
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:url" content="${seoData.canonical}" />
    <meta property="og:type" content="${seoData.ogType}" />
    <meta property="og:image" content="${seoData.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="PDFo.dev" />
    <meta property="og:locale" content="en_US" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@pdfodev" />
    <meta name="twitter:creator" content="@pdfodev" />
    <meta name="twitter:title" content="${seoData.title}" />
    <meta name="twitter:description" content="${seoData.description}" />
    <meta name="twitter:image" content="${seoData.ogImage}" />
    
    <script type="application/ld+json">
    ${JSON.stringify(seoData.structuredData, null, 2)}
    </script>
  `;
}

export function generateFullHTML(path: string, content: string = ''): string {
  const seoData = getSEOData(path);
  const metaTags = generateMetaTags(seoData);
  
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    
    ${metaTags}
    
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="PDFo.dev" />
    <meta name="application-name" content="PDFo.dev" />
    
    <meta name="theme-color" content="#3b82f6" />
    <meta name="msapplication-TileColor" content="#3b82f6" />
    <meta name="msapplication-navbutton-color" content="#3b82f6" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <style>
      /* 기본 스타일 - 로딩 중 표시 */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8fafc;
        line-height: 1.6;
        color: #1e293b;
      }
      
      header {
        background: #ffffff;
        padding: 16px 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        margin-bottom: 24px;
      }
      
      header h1 {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
        font-size: 24px;
        color: #3b82f6;
      }
      
      nav ul {
        list-style: none;
        padding: 0;
        margin: 8px auto 0;
        max-width: 1200px;
        padding: 0 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }
      
      nav a {
        color: #64748b;
        text-decoration: none;
        padding: 8px 12px;
        border-radius: 4px;
        transition: background-color 0.2s;
      }
      
      nav a:hover {
        background-color: #f1f5f9;
        color: #3b82f6;
      }
      
      main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
      }
      
      section {
        margin-bottom: 48px;
      }
      
      h2 {
        color: #1e293b;
        font-size: 28px;
        margin-bottom: 16px;
      }
      
      p {
        color: #64748b;
        margin-bottom: 16px;
        font-size: 16px;
      }
      
      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      
      .tool-card {
        background: #ffffff;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #e2e8f0;
      }
      
      .tool-card h3 {
        margin: 0 0 12px 0;
        font-size: 18px;
      }
      
      .tool-card h3 a {
        color: #3b82f6;
        text-decoration: none;
      }
      
      .tool-card h3 a:hover {
        text-decoration: underline;
      }
      
      .tool-card p {
        margin: 0;
        font-size: 14px;
      }
      
      ul {
        color: #64748b;
      }
      
      ul li {
        margin-bottom: 8px;
      }
      
      ul li strong {
        color: #1e293b;
      }
      
      footer {
        background: #ffffff;
        border-top: 1px solid #e2e8f0;
        padding: 24px 0;
        margin-top: 48px;
        text-align: center;
      }
      
      footer p {
        margin: 0 0 16px 0;
        color: #64748b;
        font-size: 14px;
      }
      
      footer nav {
        font-size: 14px;
      }
      
      footer nav a {
        color: #64748b;
        text-decoration: none;
        margin: 0 8px;
      }
      
      footer nav a:hover {
        color: #3b82f6;
      }
      
      .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(248, 250, 252, 0.9);
        z-index: 1000;
      }
      
      .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #e5e7eb;
        border-top: 4px solid #3b82f6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 16px;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .loading-text {
        color: #64748b;
        font-size: 16px;
        margin-bottom: 8px;
      }
      
      .noscript-message {
        max-width: 600px;
        margin: 0 auto;
        padding: 24px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        text-align: center;
      }
      
      .noscript-message h1 {
        color: #1e293b;
        margin-bottom: 16px;
      }
      
      .noscript-message p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 16px;
      }
      
      @media (max-width: 768px) {
        nav ul {
          flex-direction: column;
          gap: 8px;
        }
        
        .tools-grid {
          grid-template-columns: 1fr;
        }
        
        h2 {
          font-size: 24px;
        }
        
        .tool-card {
          padding: 16px;
        }
      }
    </style>
  </head>
  <body>
    <div id="root">
      <!-- SEO 콘텐츠 - 검색엔진 크롤러용 -->
      <header>
        <h1>PDFo.dev - Free PDF Tools Online</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/merge-pdf">Merge PDF</a></li>
            <li><a href="/split-pdf">Split PDF</a></li>
            <li><a href="/compress-pdf">Compress PDF</a></li>
            <li><a href="/pdf-to-word">PDF to Word</a></li>
            <li><a href="/word-to-pdf">Word to PDF</a></li>
            <li><a href="/pdf-to-jpg">PDF to JPG</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section>
          <h2>Free Online PDF Tools</h2>
          <p>PDFo.dev offers a comprehensive suite of free online PDF tools for all your document processing needs. Our tools are fast, secure, and require no registration.</p>
          
          <div class="tools-grid">
            <div class="tool-card">
              <h3><a href="/merge-pdf">Merge PDF Files</a></h3>
              <p>Combine multiple PDF files into a single document quickly and easily.</p>
            </div>
            
            <div class="tool-card">
              <h3><a href="/split-pdf">Split PDF Files</a></h3>
              <p>Extract specific pages or split PDF documents into multiple files.</p>
            </div>
            
            <div class="tool-card">
              <h3><a href="/compress-pdf">Compress PDF Files</a></h3>
              <p>Reduce PDF file size while maintaining document quality.</p>
            </div>
            
            <div class="tool-card">
              <h3><a href="/pdf-to-word">Convert PDF to Word</a></h3>
              <p>Transform PDF documents into editable Word files (DOC/DOCX).</p>
            </div>
            
            <div class="tool-card">
              <h3><a href="/word-to-pdf">Convert Word to PDF</a></h3>
              <p>Create PDF documents from Word files with perfect formatting.</p>
            </div>
            
            <div class="tool-card">
              <h3><a href="/pdf-to-jpg">Convert PDF to Images</a></h3>
              <p>Extract PDF pages as high-quality JPG images.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2>Why Choose PDFo.dev?</h2>
          <ul>
            <li><strong>100% Free:</strong> All tools are completely free to use with no hidden fees</li>
            <li><strong>Secure:</strong> Files are processed securely and deleted after 1 hour</li>
            <li><strong>Fast:</strong> Lightning-fast processing with cloud infrastructure</li>
            <li><strong>No Registration:</strong> Start using tools immediately without signing up</li>
            <li><strong>Browser-Based:</strong> Works on any device with a web browser</li>
            <li><strong>High Quality:</strong> Maintain original document quality during processing</li>
          </ul>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 PDFo.dev - Free PDF Tools Online. All rights reserved.</p>
        <nav>
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service">Terms of Service</a> | 
          <a href="/cookie-policy">Cookie Policy</a> | 
          <a href="/security">Security</a> | 
          <a href="/about">About</a>
        </nav>
      </footer>
      
      <div class="loading" style="display: none;">
        <div class="spinner"></div>
        <div class="loading-text">Loading PDFo.dev...</div>
        <div class="loading-text">Free PDF Tools Online</div>
      </div>
    </div>
    
    <noscript>
      <div class="noscript-message">
        <h1>PDFo.dev - Free PDF Tools Online</h1>
        <p>Free online PDF tools for merging, splitting, compressing, and converting PDFs. Fast, secure, and no registration required.</p>
        <p><strong>JavaScript is required</strong> to use our PDF tools. Please enable JavaScript in your browser to access all features.</p>
        <p>Our tools work entirely in your browser for maximum security and privacy.</p>
      </div>
    </noscript>
    
    <script type="module" src="/src/main.tsx"></script>
    <script type="text/javascript" src="https://replit.com/public/js/replit-dev-banner.js"></script>
  </body>
</html>`;
}