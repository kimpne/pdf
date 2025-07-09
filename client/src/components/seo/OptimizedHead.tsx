import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export default function OptimizedHead({
  title = "Free PDF Tools Online - Merge, Split, Compress PDFs | PDFo.dev",
  description = "Free online PDF tools for merging, splitting, compressing, and converting PDFs. Fast, secure, and no registration required. Process your PDF files instantly at PDFo.dev.",
  keywords = "PDF tools, merge PDF, split PDF, compress PDF, convert PDF to Word, online PDF editor, PDF converter, free PDF tools, PDF merger, PDF splitter",
  canonical = "https://pdfo.dev/",
  ogImage = "https://pdfo.dev/og-image.jpg",
  ogType = "website",
  structuredData
}: OptimizedHeadProps) {
  const defaultStructuredData = {
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
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PDFo.dev" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PDFo.dev" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pdfodev" />
      <meta name="twitter:creator" content="@pdfodev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-navbutton-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-title" content="PDFo.dev" />
      <meta name="application-name" content="PDFo.dev" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
    </Helmet>
  );
}

// Specific structured data for different page types
export const createWebApplicationStructuredData = (toolName: string, toolDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": `${toolName} - PDFo.dev`,
  "description": toolDescription,
  "url": "https://pdfo.dev",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PDFo.dev",
    "url": "https://pdfo.dev"
  },
  "featureList": [
    "Free PDF processing",
    "No registration required",
    "Secure file handling",
    "Fast processing",
    "Multiple file formats"
  ]
});

export const createArticleStructuredData = (title: string, description: string, slug: string, publishDate: string, author: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": `https://pdfo.dev/blog/${slug}`,
  "datePublished": publishDate,
  "dateModified": publishDate,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "PDFo.dev",
    "url": "https://pdfo.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pdfo.dev/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://pdfo.dev/blog/${slug}`
  }
});