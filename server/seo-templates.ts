interface SEOTemplate {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  structuredData: object;
}

const DEFAULT_SEO: SEOTemplate = {
  title: 'PDFo.dev - Free PDF Tools Online | Merge, Split, Compress PDFs',
  description: 'Free online PDF tools for everyone. Merge, split, compress, and convert PDF files securely and easily. No registration required.',
  keywords: 'PDF tools, merge PDF, split PDF, compress PDF, PDF converter, free PDF editor, online PDF tools',
  canonical: 'https://pdfo.dev/',
  ogImage: 'https://pdfo.dev/og-image.jpg',
  ogType: 'website',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PDFo.dev',
    description: 'Free online PDF tools for everyone',
    url: 'https://pdfo.dev',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pdfo.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
};

export function getSEOData(path: string): SEOTemplate {
  const seoData: Record<string, SEOTemplate> = {
    '/': DEFAULT_SEO,
    '/merge-pdf': {
      title: 'Merge PDF Files Online - Free PDF Merger Tool | PDFo.dev',
      description: 'Merge multiple PDF files into one document online for free. Easy, fast, and secure PDF merger tool. No software installation required.',
      keywords: 'merge PDF, combine PDF, PDF merger, join PDF files, merge documents online',
      canonical: 'https://pdfo.dev/merge-pdf',
      ogImage: 'https://pdfo.dev/og-merge-pdf.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Merge PDF Files Online',
        description: 'Merge multiple PDF files into one document online for free',
        url: 'https://pdfo.dev/merge-pdf'
      }
    },
    '/split-pdf': {
      title: 'Split PDF Files Online - Free PDF Splitter Tool | PDFo.dev',
      description: 'Split PDF files into separate pages or extract specific pages online for free. Fast and secure PDF splitter tool.',
      keywords: 'split PDF, extract PDF pages, PDF splitter, divide PDF, separate PDF pages',
      canonical: 'https://pdfo.dev/split-pdf',
      ogImage: 'https://pdfo.dev/og-split-pdf.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Split PDF Files Online',
        description: 'Split PDF files into separate pages or extract specific pages online for free',
        url: 'https://pdfo.dev/split-pdf'
      }
    },
    '/compress-pdf': {
      title: 'Compress PDF Files Online - Free PDF Compressor | PDFo.dev',
      description: 'Compress PDF files to reduce size while maintaining quality. Free online PDF compression tool with adjustable quality settings.',
      keywords: 'compress PDF, reduce PDF size, PDF compressor, optimize PDF, shrink PDF file',
      canonical: 'https://pdfo.dev/compress-pdf',
      ogImage: 'https://pdfo.dev/og-compress-pdf.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Compress PDF Files Online',
        description: 'Compress PDF files to reduce size while maintaining quality',
        url: 'https://pdfo.dev/compress-pdf'
      }
    },
    '/pdf-to-word': {
      title: 'Convert PDF to Word Online - Free PDF to DOC Converter | PDFo.dev',
      description: 'Convert PDF files to Word documents online for free. Maintain formatting and layout when converting PDF to DOC/DOCX.',
      keywords: 'PDF to Word, convert PDF to DOC, PDF to DOCX, PDF converter, document converter',
      canonical: 'https://pdfo.dev/pdf-to-word',
      ogImage: 'https://pdfo.dev/og-pdf-to-word.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Convert PDF to Word Online',
        description: 'Convert PDF files to Word documents online for free',
        url: 'https://pdfo.dev/pdf-to-word'
      }
    },
    '/word-to-pdf': {
      title: 'Convert Word to PDF Online - Free DOC to PDF Converter | PDFo.dev',
      description: 'Convert Word documents to PDF files online for free. Transform DOC and DOCX files to PDF format instantly.',
      keywords: 'Word to PDF, convert DOC to PDF, DOCX to PDF, document converter, create PDF',
      canonical: 'https://pdfo.dev/word-to-pdf',
      ogImage: 'https://pdfo.dev/og-word-to-pdf.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Convert Word to PDF Online',
        description: 'Convert Word documents to PDF files online for free',
        url: 'https://pdfo.dev/word-to-pdf'
      }
    },
    '/pdf-to-jpg': {
      title: 'Convert PDF to JPG Online - Free PDF to Image Converter | PDFo.dev',
      description: 'Convert PDF pages to JPG images online for free. High-quality PDF to image conversion with customizable settings.',
      keywords: 'PDF to JPG, convert PDF to image, PDF to PNG, extract images from PDF',
      canonical: 'https://pdfo.dev/pdf-to-jpg',
      ogImage: 'https://pdfo.dev/og-pdf-to-jpg.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Convert PDF to JPG Online',
        description: 'Convert PDF pages to JPG images online for free',
        url: 'https://pdfo.dev/pdf-to-jpg'
      }
    },
    '/about': {
      title: 'About PDFo.dev - Free Online PDF Tools | PDFo.dev',
      description: 'Learn about PDFo.dev, our mission to provide free, secure, and easy-to-use PDF tools for everyone worldwide.',
      keywords: 'about PDFo.dev, PDF tools company, free PDF software, online document tools',
      canonical: 'https://pdfo.dev/about',
      ogImage: 'https://pdfo.dev/og-about.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'About PDFo.dev',
        description: 'Learn about PDFo.dev and our mission to provide free PDF tools',
        url: 'https://pdfo.dev/about'
      }
    },
    '/blog': {
      title: 'PDF Tools Blog - Tips, Guides & Best Practices | PDFo.dev',
      description: 'Expert tips, comprehensive guides, and best practices for PDF editing, conversion, and optimization. Learn from PDF professionals.',
      keywords: 'PDF blog, PDF tips, PDF guides, document management, PDF best practices',
      canonical: 'https://pdfo.dev/blog',
      ogImage: 'https://pdfo.dev/og-blog.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'PDFo.dev Blog',
        description: 'Expert tips and guides for PDF tools and document management',
        url: 'https://pdfo.dev/blog'
      }
    },
    '/help-center': {
      title: 'Help Center - PDF Tools Support & Tutorials | PDFo.dev',
      description: 'Get help with PDFo.dev tools. Find tutorials, troubleshooting guides, and answers to common questions.',
      keywords: 'PDF help, PDF tutorials, PDF support, how to use PDF tools, PDF troubleshooting',
      canonical: 'https://pdfo.dev/help-center',
      ogImage: 'https://pdfo.dev/og-help.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Help Center',
        description: 'Get help with PDFo.dev tools and find tutorials',
        url: 'https://pdfo.dev/help-center'
      }
    },
    '/faq': {
      title: 'Frequently Asked Questions - PDF Tools FAQ | PDFo.dev',
      description: 'Find answers to common questions about PDFo.dev PDF tools, file security, supported formats, and more.',
      keywords: 'PDF FAQ, PDF questions, PDF help, PDF tools support, document conversion questions',
      canonical: 'https://pdfo.dev/faq',
      ogImage: 'https://pdfo.dev/og-faq.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Frequently Asked Questions',
        description: 'Find answers to common questions about PDFo.dev PDF tools',
        url: 'https://pdfo.dev/faq'
      }
    },
    '/privacy-policy': {
      title: 'Privacy Policy - Data Protection & Security | PDFo.dev',
      description: 'Read our privacy policy to understand how we protect your data and files when using PDFo.dev PDF tools.',
      keywords: 'privacy policy, data protection, file security, GDPR compliance, user privacy',
      canonical: 'https://pdfo.dev/privacy-policy',
      ogImage: 'https://pdfo.dev/og-privacy.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy',
        description: 'PDFo.dev privacy policy and data protection information',
        url: 'https://pdfo.dev/privacy-policy'
      }
    },
    '/terms-of-service': {
      title: 'Terms of Service - Usage Terms & Conditions | PDFo.dev',
      description: 'Read the terms of service for using PDFo.dev PDF tools. Understand your rights and responsibilities.',
      keywords: 'terms of service, usage terms, legal terms, service agreement, user agreement',
      canonical: 'https://pdfo.dev/terms-of-service',
      ogImage: 'https://pdfo.dev/og-terms.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms of Service',
        description: 'PDFo.dev terms of service and usage agreement',
        url: 'https://pdfo.dev/terms-of-service'
      }
    },
    '/security': {
      title: 'Security - File Protection & Data Safety | PDFo.dev',
      description: 'Learn about our security measures to protect your files and data when using PDFo.dev PDF tools.',
      keywords: 'PDF security, file protection, data safety, secure PDF tools, encryption',
      canonical: 'https://pdfo.dev/security',
      ogImage: 'https://pdfo.dev/og-security.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Security',
        description: 'PDFo.dev security measures and file protection',
        url: 'https://pdfo.dev/security'
      }
    },
    '/status': {
      title: 'System Status - Service Health & Uptime | PDFo.dev',
      description: 'Check the current status of PDFo.dev services. View uptime statistics and service health information.',
      keywords: 'system status, service uptime, PDF tools status, service health, system monitoring',
      canonical: 'https://pdfo.dev/status',
      ogImage: 'https://pdfo.dev/og-status.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'System Status',
        description: 'PDFo.dev system status and service health information',
        url: 'https://pdfo.dev/status'
      }
    },
    '/api-docs': {
      title: 'API Documentation - Developer Resources | PDFo.dev',
      description: 'Complete API documentation for PDFo.dev PDF processing services. Learn how to integrate our tools into your applications.',
      keywords: 'PDF API, developer documentation, API integration, PDF processing API, developer resources',
      canonical: 'https://pdfo.dev/api-docs',
      ogImage: 'https://pdfo.dev/og-api.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'API Documentation',
        description: 'Complete API documentation for PDFo.dev PDF processing services',
        url: 'https://pdfo.dev/api-docs'
      }
    },
    '/cookie-policy': {
      title: 'Cookie Policy - Browser Cookies & Tracking | PDFo.dev',
      description: 'Learn about our cookie policy and how we use cookies to improve your experience on PDFo.dev.',
      keywords: 'cookie policy, browser cookies, tracking policy, website cookies, privacy settings',
      canonical: 'https://pdfo.dev/cookie-policy',
      ogImage: 'https://pdfo.dev/og-cookies.jpg',
      ogType: 'website',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Cookie Policy',
        description: 'PDFo.dev cookie policy and tracking information',
        url: 'https://pdfo.dev/cookie-policy'
      }
    }
  };

  return seoData[path] || DEFAULT_SEO;
}

export function generateMetaTags(seoData: SEOTemplate): string {
  return `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    <link rel="canonical" href="${seoData.canonical}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:type" content="${seoData.ogType}" />
    <meta property="og:url" content="${seoData.canonical}" />
    <meta property="og:image" content="${seoData.ogImage}" />
    <meta property="og:site_name" content="PDFo.dev" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoData.title}" />
    <meta name="twitter:description" content="${seoData.description}" />
    <meta name="twitter:image" content="${seoData.ogImage}" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(seoData.structuredData, null, 2)}
    </script>
  `;
}

function convertMarkdownToHTML(markdown: string): string {
  return markdown
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h([1-6])>/g, '<h$1>')
    .replace(/<\/h([1-6])><\/p>/g, '</h$1>');
}

function generatePageContent(path: string): string {
  const pageContent: Record<string, string> = {
    '/': `
      <section class="hero">
        <h1>Every tool you need to work with PDFs in one place</h1>
        <p>Free, secure, and easy to use. Process PDF files online without software installation.</p>
        <div class="tools-grid">
          <div class="tool-card">
            <h3><a href="/merge-pdf">Merge PDF</a></h3>
            <p>Combine multiple PDF files into one document</p>
            <a href="/merge-pdf">Try Now</a>
          </div>
          <div class="tool-card">
            <h3><a href="/split-pdf">Split PDF</a></h3>
            <p>Extract pages or split PDF into separate files</p>
            <a href="/split-pdf">Try Now</a>
          </div>
          <div class="tool-card">
            <h3><a href="/compress-pdf">Compress PDF</a></h3>
            <p>Reduce PDF file size while maintaining quality</p>
            <a href="/compress-pdf">Try Now</a>
          </div>
          <div class="tool-card">
            <h3><a href="/pdf-to-word">PDF to Word</a></h3>
            <p>Convert PDF documents to editable Word files</p>
            <a href="/pdf-to-word">Try Now</a>
          </div>
          <div class="tool-card">
            <h3><a href="/word-to-pdf">Word to PDF</a></h3>
            <p>Convert Word documents to PDF format</p>
            <a href="/word-to-pdf">Try Now</a>
          </div>
          <div class="tool-card">
            <h3><a href="/pdf-to-jpg">PDF to JPG</a></h3>
            <p>Convert PDF pages to JPG images</p>
            <a href="/pdf-to-jpg">Try Now</a>
          </div>
        </div>
      </section>
      
      <section class="features">
        <h2>Why Choose PDFo.dev?</h2>
        <ul>
          <li><strong>100% Free:</strong> All tools are completely free to use</li>
          <li><strong>Secure:</strong> Files are processed securely and deleted automatically</li>
          <li><strong>Fast:</strong> Quick processing with optimized algorithms</li>
          <li><strong>No Installation:</strong> Works directly in your browser</li>
          <li><strong>Cross-Platform:</strong> Works on Windows, Mac, Linux, and mobile</li>
        </ul>
      </section>
    `,
    '/merge-pdf': `
      <section class="tool-page">
        <h1>Merge PDF Files Online</h1>
        <p>Combine multiple PDF files into one document easily and securely. Our PDF merger tool is free, fast, and works in your browser.</p>
        
        <div class="how-to">
          <h2>How to Merge PDF Files</h2>
          <ol>
            <li>Upload your PDF files by clicking "Choose Files" or dragging them here</li>
            <li>Arrange the files in the order you want them merged</li>
            <li>Click "Merge PDF" to combine all files into one document</li>
            <li>Download the merged PDF file to your device</li>
          </ol>
        </div>
        
        <div class="features">
          <h2>Features</h2>
          <ul>
            <li><strong>Multiple Files:</strong> Merge as many PDF files as you need</li>
            <li><strong>Preserve Quality:</strong> Original formatting and quality maintained</li>
            <li><strong>Secure Processing:</strong> Files are deleted after processing</li>
            <li><strong>No Size Limits:</strong> Merge large PDF files without restrictions</li>
            <li><strong>Fast Processing:</strong> Quick merging with optimized algorithms</li>
          </ul>
        </div>
      </section>
    `,
    '/split-pdf': `
      <section class="tool-page">
        <h1>Split PDF Files Online</h1>
        <p>Extract pages or split PDF documents into separate files. Our PDF splitter tool is free, secure, and easy to use.</p>
        
        <div class="how-to">
          <h2>How to Split PDF Files</h2>
          <ol>
            <li>Upload your PDF file by clicking "Choose File" or dragging it here</li>
            <li>Select splitting mode: individual pages or page ranges</li>
            <li>Specify page numbers or ranges if needed</li>
            <li>Click "Split PDF" to process the document</li>
            <li>Download the split PDF files as a ZIP archive</li>
          </ol>
        </div>
        
        <div class="features">
          <h2>Features</h2>
          <ul>
            <li><strong>Flexible Splitting:</strong> Split by pages, ranges, or extract specific pages</li>
            <li><strong>Batch Processing:</strong> Process multiple splits at once</li>
            <li><strong>Quality Preservation:</strong> Maintain original formatting and quality</li>
            <li><strong>Secure:</strong> Files are processed securely and deleted automatically</li>
            <li><strong>ZIP Download:</strong> Get all split files in one convenient download</li>
          </ul>
        </div>
      </section>
    `,
    '/compress-pdf': `
      <section class="tool-page">
        <h1>Compress PDF Files Online</h1>
        <p>Reduce PDF file size while maintaining quality. Our PDF compressor uses advanced algorithms to optimize your documents.</p>
        
        <div class="how-to">
          <h2>How to Compress PDF Files</h2>
          <ol>
            <li>Upload your PDF file by clicking "Choose File" or dragging it here</li>
            <li>Select compression quality: low, medium, or high</li>
            <li>Click "Compress PDF" to optimize the file</li>
            <li>Download the compressed PDF file</li>
          </ol>
        </div>
        
        <div class="features">
          <h2>Features</h2>
          <ul>
            <li><strong>Adjustable Quality:</strong> Choose compression level based on your needs</li>
            <li><strong>Significant Size Reduction:</strong> Reduce file size by up to 70%</li>
            <li><strong>Quality Preservation:</strong> Maintain readability and visual quality</li>
            <li><strong>Batch Processing:</strong> Compress multiple files at once</li>
            <li><strong>Preview:</strong> See file size reduction before downloading</li>
          </ul>
        </div>
      </section>
    `,
    '/pdf-to-word': `
      <section class="tool-page">
        <h1>Convert PDF to Word Online</h1>
        <p>Convert PDF files to editable Word documents with preserved formatting. Our PDF to Word converter is accurate and free.</p>
        
        <div class="how-to">
          <h2>How to Convert PDF to Word</h2>
          <ol>
            <li>Upload your PDF file by clicking "Choose File" or dragging it here</li>
            <li>Wait for the conversion to complete</li>
            <li>Download the converted Word document (.docx)</li>
            <li>Open in Microsoft Word or any compatible editor</li>
          </ol>
        </div>
        
        <div class="features">
          <h2>Features</h2>
          <ul>
            <li><strong>Accurate Conversion:</strong> Preserve layout, fonts, and formatting</li>
            <li><strong>Editable Output:</strong> Get fully editable Word documents</li>
            <li><strong>Table Support:</strong> Convert tables and complex layouts</li>
            <li><strong>Image Preservation:</strong> Keep all images and graphics</li>
            <li><strong>Fast Processing:</strong> Quick conversion with high accuracy</li>
          </ul>
        </div>
      </section>
    `,
    '/word-to-pdf': `
      <section class="tool-page">
        <h1>Convert Word to PDF Online</h1>
        <p>Convert Word documents to PDF format with perfect formatting preservation. Our Word to PDF converter is fast and reliable.</p>
        
        <div class="how-to">
          <h2>How to Convert Word to PDF</h2>
          <ol>
            <li>Upload your Word file (.doc or .docx) by clicking "Choose File" or dragging it here</li>
            <li>Wait for the conversion to complete</li>
            <li>Download the converted PDF file</li>
            <li>Share or print your PDF document</li>
          </ol>
        </div>
        
        <div class="features">
          <h2>Features</h2>
          <ul>
            <li><strong>Perfect Formatting:</strong> Preserve all formatting, fonts, and layouts</li>
            <li><strong>Multiple Formats:</strong> Support for DOC and DOCX files</li>
            <li><strong>High Quality:</strong> Professional PDF output quality</li>
            <li><strong>Cross-Platform:</strong> Works on all devices and browsers</li>
            <li><strong>Batch Conversion:</strong> Convert multiple files at once</li>
          </ul>
        </div>
      </section>
    `,
    '/pdf-to-jpg': `
      <section class="tool-page">
        <h1>Convert PDF to JPG Online</h1>
        <p>Convert PDF pages to high-quality JPG images. Our PDF to JPG converter offers customizable quality settings.</p>
        
        <div class="how-to">
          <h2>How to Convert PDF to JPG</h2>
          <ol>
            <li>Upload your PDF file by clicking "Choose File" or dragging it here</li>
            <li>Select image quality: low, medium, or high</li>
            <li>Click "Convert to JPG" to process the PDF</li>
            <li>Download individual JPG files or as a ZIP archive</li>
          </ol>
        </div>
        
        <div class="features">
          <h2>Features</h2>
          <ul>
            <li><strong>High Quality:</strong> Choose from multiple resolution options</li>
            <li><strong>All Pages:</strong> Convert all pages or select specific ones</li>
            <li><strong>Batch Download:</strong> Get all images in one ZIP file</li>
            <li><strong>Preview:</strong> See converted images before downloading</li>
            <li><strong>Multiple Formats:</strong> Support for JPG, PNG, and other formats</li>
          </ul>
        </div>
      </section>
    `,
    '/about': `
      <section class="about-page">
        <h1>About PDFo.dev</h1>
        <p>PDFo.dev is a leading provider of free online PDF tools designed to make document processing simple, secure, and accessible to everyone.</p>
        
        <div class="mission">
          <h2>Our Mission</h2>
          <p>We believe that everyone should have access to professional-grade PDF tools without the need for expensive software or complicated installations. Our mission is to provide free, secure, and user-friendly PDF processing tools that work directly in your browser.</p>
        </div>
        
        <div class="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Security First:</strong> Your files are processed securely and deleted automatically</li>
            <li><strong>User Privacy:</strong> We never store or share your personal documents</li>
            <li><strong>Quality:</strong> We use advanced algorithms to ensure high-quality output</li>
            <li><strong>Accessibility:</strong> Our tools work on all devices and platforms</li>
            <li><strong>Continuous Improvement:</strong> We regularly update and improve our tools</li>
          </ul>
        </div>
      </section>
    `,
    '/privacy-policy': `
      <section class="legal-page">
        <h1>Privacy Policy</h1>
        <p>At PDFo.dev, we are committed to protecting your privacy and ensuring the security of your personal information and files.</p>
        
        <div class="policy-section">
          <h2>Information We Collect</h2>
          <ul>
            <li>Files you upload for processing (temporarily stored only)</li>
            <li>Basic usage analytics to improve our services</li>
            <li>IP addresses for security and abuse prevention</li>
            <li>Browser information for compatibility purposes</li>
          </ul>
        </div>
        
        <div class="policy-section">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Process your files according to your selected tool</li>
            <li>Improve our services and user experience</li>
            <li>Prevent abuse and ensure service security</li>
            <li>Provide customer support when needed</li>
          </ul>
        </div>
        
        <div class="policy-section">
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul>
            <li>SSL encryption for all data transmission</li>
            <li>Automatic file deletion after processing</li>
            <li>Secure servers with regular security updates</li>
            <li>No permanent storage of user files</li>
          </ul>
        </div>
        
        <div class="policy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access information about your data processing</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of non-essential data collection</li>
            <li>Contact us about privacy concerns</li>
          </ul>
        </div>
      </section>
    `,
    '/security': `
      <section class="security-page">
        <h1>Security at PDFo.dev</h1>
        <p>We take the security of your files and data seriously. Learn about our comprehensive security measures.</p>
        
        <div class="security-feature">
          <h2>SSL Encryption</h2>
          <p>All data transmission between your browser and our servers is protected with industry-standard SSL encryption.</p>
        </div>
        
        <div class="security-feature">
          <h2>Automatic File Deletion</h2>
          <p>Your files are automatically deleted from our servers immediately after processing. We never store your documents permanently.</p>
        </div>
        
        <div class="security-feature">
          <h2>Secure Processing</h2>
          <p>All file processing happens in isolated, secure environments with no access to external networks during processing.</p>
        </div>
        
        <div class="security-feature">
          <h2>No File Storage</h2>
          <p>We never permanently store your files. All processing happens in temporary, secure containers that are destroyed after use.</p>
        </div>
      </section>
    `,
    '/terms-of-service': `
      <section class="legal-page">
        <h1>Terms of Service</h1>
        <p>Welcome to PDFo.dev. By using our services, you agree to these terms of service.</p>
        <div class="terms-section">
          <h2>Service Description</h2>
          <p>PDFo.dev provides free online PDF processing tools including merge, split, compress, and conversion services.</p>
        </div>
        <div class="terms-section">
          <h2>Acceptable Use</h2>
          <ul>
            <li>Use our services for legitimate purposes only</li>
            <li>Do not upload copyrighted material without permission</li>
            <li>Respect file size and processing limits</li>
            <li>Do not attempt to circumvent security measures</li>
          </ul>
        </div>
        <div class="terms-section">
          <h2>Disclaimer</h2>
          <p>Our services are provided "as is" without warranties. We are not responsible for any data loss or file corruption.</p>
        </div>
      </section>
    `,
    '/cookie-policy': `
      <section class="legal-page">
        <h1>Cookie Policy</h1>
        <p>This cookie policy explains how PDFo.dev uses cookies and similar technologies.</p>
        <div class="cookie-section">
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files stored on your device to enhance your browsing experience.</p>
        </div>
        <div class="cookie-section">
          <h2>How We Use Cookies</h2>
          <ul>
            <li>Essential cookies for site functionality</li>
            <li>Analytics cookies to improve our services</li>
            <li>Preference cookies to remember your settings</li>
          </ul>
        </div>
        <div class="cookie-section">
          <h2>Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
        </div>
      </section>
    `,
    '/faq': `
      <section class="faq-page">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about PDFo.dev's PDF tools.</p>
        <div class="faq-item">
          <h2>Is PDFo.dev really free?</h2>
          <p>Yes, all our PDF tools are completely free to use with no hidden fees or subscription requirements.</p>
        </div>
        <div class="faq-item">
          <h2>Is my data secure?</h2>
          <p>Absolutely. We use SSL encryption for all data transmission and automatically delete files after processing.</p>
        </div>
        <div class="faq-item">
          <h2>What file formats do you support?</h2>
          <p>We support PDF files for all tools, plus Word documents (DOC/DOCX) for conversion tools.</p>
        </div>
        <div class="faq-item">
          <h2>Are there file size limits?</h2>
          <p>We support files up to 100MB per file. For larger files, try compressing them first.</p>
        </div>
        <div class="faq-item">
          <h2>Do I need to register?</h2>
          <p>No registration is required. You can use all tools immediately without creating an account.</p>
        </div>
      </section>
    `,
    '/help-center': `
      <section class="help-page">
        <h1>Help Center</h1>
        <p>Get help with PDFo.dev's PDF tools. Find tutorials, troubleshooting guides, and support.</p>
        <div class="help-category">
          <h2>Getting Started</h2>
          <ul>
            <li>How to merge PDF files</li>
            <li>How to split PDF documents</li>
            <li>How to compress PDF files</li>
            <li>How to convert PDF to Word</li>
            <li>How to convert Word to PDF</li>
          </ul>
        </div>
        <div class="help-category">
          <h2>Troubleshooting</h2>
          <ul>
            <li>File won't upload</li>
            <li>Processing takes too long</li>
            <li>Download doesn't work</li>
            <li>Poor output quality</li>
            <li>Browser compatibility issues</li>
          </ul>
        </div>
        <div class="help-category">
          <h2>Advanced Features</h2>
          <ul>
            <li>Page range selection</li>
            <li>Compression quality settings</li>
            <li>Batch processing</li>
            <li>Password-protected PDFs</li>
            <li>Mobile usage tips</li>
          </ul>
        </div>
      </section>
    `,
    '/api-docs': `
      <section class="api-page">
        <h1>API Documentation</h1>
        <p>Complete API documentation for PDFo.dev's PDF processing services. Learn how to integrate our tools into your applications.</p>
        <div class="api-section">
          <h2>Authentication</h2>
          <p>Our API currently supports public access for basic operations. Rate limits apply to prevent abuse.</p>
          <code>Content-Type: multipart/form-data</code>
        </div>
        <div class="api-section">
          <h2>Endpoints</h2>
          <div class="endpoint">
            <h3>POST /api/pdf/merge</h3>
            <p>Merge multiple PDF files into one document.</p>
            <code>curl -X POST -F "file=@file1.pdf" -F "file=@file2.pdf" https://pdfo.dev/api/pdf/merge</code>
          </div>
          <div class="endpoint">
            <h3>POST /api/pdf/split</h3>
            <p>Split PDF file into separate pages or ranges.</p>
            <code>curl -X POST -F "file=@document.pdf" -F "mode=pages" https://pdfo.dev/api/pdf/split</code>
          </div>
          <div class="endpoint">
            <h3>POST /api/pdf/compress</h3>
            <p>Compress PDF file to reduce size.</p>
            <code>curl -X POST -F "file=@document.pdf" -F "quality=medium" https://pdfo.dev/api/pdf/compress</code>
          </div>
        </div>
        <div class="api-section">
          <h2>Response Format</h2>
          <p>All endpoints return binary data (PDF files) or JSON error responses.</p>
          <code>{"error": "Invalid file format", "code": 400}</code>
        </div>
      </section>
    `,
    '/status': `
      <section class="status-page">
        <h1>System Status</h1>
        <p>Real-time system status and performance monitoring for PDFo.dev services.</p>
        <div class="status-overview">
          <h2>Service Status</h2>
          <div class="service-status">
            <span class="status-indicator operational">●</span>
            <span class="service-name">PDF Merger</span>
            <span class="uptime">99.9% uptime</span>
          </div>
          <div class="service-status">
            <span class="status-indicator operational">●</span>
            <span class="service-name">PDF Splitter</span>
            <span class="uptime">99.8% uptime</span>
          </div>
          <div class="service-status">
            <span class="status-indicator operational">●</span>
            <span class="service-name">PDF Compressor</span>
            <span class="uptime">99.9% uptime</span>
          </div>
          <div class="service-status">
            <span class="status-indicator operational">●</span>
            <span class="service-name">PDF Converter</span>
            <span class="uptime">99.7% uptime</span>
          </div>
        </div>
        <div class="performance-metrics">
          <h2>Performance Metrics</h2>
          <div class="metric">
            <span class="metric-label">Average Response Time</span>
            <span class="metric-value">2.1s</span>
          </div>
          <div class="metric">
            <span class="metric-label">Files Processed Today</span>
            <span class="metric-value">15,847</span>
          </div>
          <div class="metric">
            <span class="metric-label">Success Rate</span>
            <span class="metric-value">99.2%</span>
          </div>
        </div>
      </section>
    `,
    '/blog': `
      <section class="blog-page">
        <h1>PDF Tools Blog</h1>
        <p>Learn about PDF tools, tips, tricks, and best practices. Comprehensive guides for PDF editing, conversion, and optimization.</p>
        <div class="blog-grid">
          <article class="blog-preview">
            <h2><a href="/blog/how-to-merge-pdf-files-online">How to Merge PDF Files Online - Complete Guide</a></h2>
            <p>Learn how to merge PDF files online safely and efficiently. Step-by-step guide with security tips...</p>
            <div class="blog-meta">
              <span>January 15, 2025</span>
              <span>8 min read</span>
            </div>
          </article>
          <article class="blog-preview">
            <h2><a href="/blog/best-pdf-compression-techniques">Best PDF Compression Techniques for 2025</a></h2>
            <p>Discover the most effective methods to reduce PDF file size while maintaining quality...</p>
            <div class="blog-meta">
              <span>January 12, 2025</span>
              <span>6 min read</span>
            </div>
          </article>
          <article class="blog-preview">
            <h2><a href="/blog/pdf-to-word-conversion-guide">PDF to Word Conversion - Complete Guide</a></h2>
            <p>Master the art of converting PDF to Word documents with our comprehensive guide...</p>
            <div class="blog-meta">
              <span>January 10, 2025</span>
              <span>7 min read</span>
            </div>
          </article>
        </div>
      </section>
    `
  };
  
  return pageContent[path] || `
    <section class="default-page">
      <h1>PDFo.dev - Free PDF Tools</h1>
      <p>Professional PDF processing tools available online for free. Secure, fast, and user-friendly.</p>
    </section>
  `;
}

export function generateFullHTML(path: string, content: string = ''): string {
  const seoData = getSEOData(path);
  const metaTags = generateMetaTags(seoData);
  const pageContent = generatePageContent(path);
  
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
      
      h1 {
        font-size: 48px;
        color: #1e293b;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      
      h2 {
        color: #1e293b;
        font-size: 28px;
        margin-bottom: 16px;
      }
      
      h3 {
        color: #1e293b;
        font-size: 20px;
        margin-bottom: 12px;
      }
      
      p {
        color: #64748b;
        margin-bottom: 16px;
        font-size: 16px;
      }
      
      .hero h1 {
        font-size: 48px;
        color: #1e293b;
        margin-bottom: 16px;
        line-height: 1.2;
      }
      
      .hero p {
        font-size: 20px;
        color: #64748b;
        margin-bottom: 32px;
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
        color: #64748b;
        margin-bottom: 16px;
        font-size: 14px;
      }
      
      .tool-card a {
        color: #3b82f6;
        text-decoration: none;
        font-weight: 500;
        padding: 8px 16px;
        border: 1px solid #3b82f6;
        border-radius: 4px;
        display: inline-block;
        transition: all 0.2s;
      }
      
      .tool-card a:hover {
        background-color: #3b82f6;
        color: #ffffff;
      }
      
      ul {
        color: #64748b;
        padding-left: 20px;
        margin-bottom: 16px;
      }
      
      li {
        margin-bottom: 8px;
      }
      
      ol {
        color: #64748b;
        padding-left: 20px;
        margin-bottom: 16px;
      }
      
      .features, .how-to {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .mission, .values {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .policy-section, .terms-section, .cookie-section {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .security-feature {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .faq-item {
        margin-bottom: 24px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .help-category {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .api-section {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .endpoint {
        margin-top: 24px;
        padding: 16px;
        background: #f8fafc;
        border-radius: 4px;
        border: 1px solid #e2e8f0;
      }
      
      code {
        background: #f1f5f9;
        color: #1e293b;
        padding: 2px 4px;
        border-radius: 3px;
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 13px;
      }
      
      .endpoint code {
        display: block;
        background: #1e293b;
        color: #f8fafc;
        padding: 12px;
        border-radius: 4px;
        margin-top: 8px;
        white-space: pre-wrap;
        overflow-x: auto;
      }
      
      .status-overview {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .service-status {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 0;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .service-status:last-child {
        border-bottom: none;
      }
      
      .status-indicator {
        font-size: 20px;
        line-height: 1;
      }
      
      .status-indicator.operational {
        color: #10b981;
      }
      
      .service-name {
        flex: 1;
        font-weight: 500;
        color: #1e293b;
      }
      
      .uptime {
        color: #64748b;
        font-size: 14px;
      }
      
      .performance-metrics {
        margin-top: 32px;
        padding: 24px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
      
      .metric {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .metric:last-child {
        border-bottom: none;
      }
      
      .metric-label {
        color: #64748b;
      }
      
      .metric-value {
        font-weight: 600;
        color: #1e293b;
      }
      
      .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin-top: 24px;
      }
      
      .blog-preview {
        background: #ffffff;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border: 1px solid #e2e8f0;
      }
      
      .blog-preview h2 {
        margin: 0 0 12px 0;
        font-size: 18px;
      }
      
      .blog-preview h2 a {
        color: #1e293b;
        text-decoration: none;
      }
      
      .blog-preview h2 a:hover {
        color: #3b82f6;
      }
      
      .blog-preview p {
        color: #64748b;
        margin-bottom: 16px;
        font-size: 14px;
      }
      
      .blog-preview .blog-meta {
        display: flex;
        gap: 16px;
        color: #94a3b8;
        font-size: 12px;
      }
      
      @media (max-width: 768px) {
        .tools-grid {
          grid-template-columns: 1fr;
        }
        
        .blog-grid {
          grid-template-columns: 1fr;
        }
        
        nav ul {
          flex-direction: column;
          gap: 8px;
        }
        
        .hero h1 {
          font-size: 36px;
        }
        
        .hero p {
          font-size: 18px;
        }
      }
      
      footer {
        background: #1e293b;
        color: #f8fafc;
        padding: 48px 0 24px;
        margin-top: 48px;
      }
      
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 32px;
      }
      
      .footer-section h3 {
        color: #f8fafc;
        margin-bottom: 16px;
        font-size: 18px;
      }
      
      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .footer-section li {
        margin-bottom: 8px;
      }
      
      .footer-section a {
        color: #94a3b8;
        text-decoration: none;
        transition: color 0.2s;
      }
      
      .footer-section a:hover {
        color: #f8fafc;
      }
      
      .footer-bottom {
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid #334155;
        text-align: center;
        color: #94a3b8;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>PDFo.dev</h1>
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
          <li><a href="/help-center">Help</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      ${pageContent}
    </main>
    
    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>PDF Tools</h3>
          <ul>
            <li><a href="/merge-pdf">Merge PDF</a></li>
            <li><a href="/split-pdf">Split PDF</a></li>
            <li><a href="/compress-pdf">Compress PDF</a></li>
            <li><a href="/pdf-to-word">PDF to Word</a></li>
            <li><a href="/word-to-pdf">Word to PDF</a></li>
            <li><a href="/pdf-to-jpg">PDF to JPG</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/api-docs">API Docs</a></li>
            <li><a href="/status">Status</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/security">Security</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 PDFo.dev. All rights reserved. Free online PDF tools for everyone.</p>
      </div>
    </footer>
  </body>
</html>`;
}