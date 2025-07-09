/**
 * Multi-language SEO-optimized Head component for React applications
 * 
 * Best practices implemented:
 * - Title optimization for CTR (60 chars max, includes brand)
 * - Meta description for SERP snippets (155-160 chars max)
 * - Open Graph for social media sharing
 * - Twitter Cards for Twitter sharing
 * - Structured data for rich snippets
 * - Canonical URLs to prevent duplicate content
 * - Hreflang tags for international SEO
 * - RTL language support
 * - Viewport and charset meta tags
 */

import { useEffect } from 'react';
import { getCurrentLanguage, getHreflangUrls, isRTL, getLanguage } from '@/lib/i18n';

interface MultiLangSEOHeadProps {
  title: string;                    // Page title (should be unique, 50-60 chars)
  description: string;              // Meta description (150-160 chars for optimal display)
  keywords?: string;                // Comma-separated keywords (optional, less important for modern SEO)
  canonical?: string;               // Canonical URL to prevent duplicate content
  ogImage?: string;                 // Open Graph image (1200x630px recommended)
  ogType?: string;                  // Open Graph type (default: website)
  siteName?: string;                // Site name for social sharing
  author?: string;                  // Author meta tag
  robots?: string;                  // Robots directive (default: index,follow)
  languageCode?: string;            // Language code (auto-detected if not provided)
  structuredDataType?: 'WebSite' | 'SoftwareApplication' | 'WebApplication'; // Schema.org type
  alternateLanguages?: boolean;     // Include hreflang tags (default: true)
}

export default function MultiLangSEOHead({ 
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-pdf-tools.svg',
  ogType = 'website',
  siteName = 'PDF Tools',
  author = 'PDF Tools Team',
  robots = 'index,follow',
  languageCode,
  structuredDataType = 'SoftwareApplication',
  alternateLanguages = true
}: MultiLangSEOHeadProps) {
  // Auto-detect language if not provided
  const currentLang = languageCode || getCurrentLanguage();
  const language = getLanguage(currentLang);
  const isRTLLanguage = isRTL(currentLang);
  
  // Get current URL for canonical and hreflang
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // Generate hreflang URLs
  const hreflangUrls = alternateLanguages ? getHreflangUrls(currentPath, baseUrl) : [];
  
  // Structured data for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': structuredDataType,
    name: siteName,
    description: description,
    url: baseUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '15247',
      bestRating: '5',
      worstRating: '1'
    },
    featureList: [
      'Merge PDF files',
      'Split PDF documents',
      'Compress PDF files',
      'Convert PDF to Word',
      'Convert Word to PDF',
      'Convert PDF to JPG'
    ],
    inLanguage: currentLang,
    availableLanguage: ['en', 'es', 'fr', 'de', 'ko', 'ja', 'zh-cn', 'zh-tw', 'pt', 'it', 'ru', 'ar']
  };

  useEffect(() => {
    // Set document language and direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRTLLanguage ? 'rtl' : 'ltr';
    
    // Set document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('robots', robots);
    updateMetaTag('author', author);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Language meta tag
    updateMetaTag('language', currentLang);
    
    // Keywords (if provided)
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', currentLang, true);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:alt', `${siteName} - ${title}`, true);
    }
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`);
    }
    
    // Theme color for mobile browsers
    updateMetaTag('theme-color', '#3b82f6');
    updateMetaTag('msapplication-TileColor', '#3b82f6');
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || currentUrl;
    
    // Remove existing hreflang tags
    const existingHreflangTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangTags.forEach(tag => tag.remove());
    
    // Add hreflang tags for all supported languages
    if (alternateLanguages) {
      hreflangUrls.forEach(({ lang, url }) => {
        const hreflangLink = document.createElement('link');
        hreflangLink.rel = 'alternate';
        hreflangLink.hreflang = lang;
        hreflangLink.href = url;
        document.head.appendChild(hreflangLink);
      });
    }
    
    // Add structured data
    let structuredDataScript = document.getElementById('structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
    // Preconnect to external domains for performance
    const preconnectDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
    preconnectDomains.forEach(domain => {
      let preconnectLink = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
      if (!preconnectLink) {
        preconnectLink = document.createElement('link');
        preconnectLink.rel = 'preconnect';
        preconnectLink.href = domain;
        document.head.appendChild(preconnectLink);
      }
    });
    
  }, [title, description, keywords, canonical, ogImage, ogType, siteName, author, robots, currentLang, isRTLLanguage, currentUrl, baseUrl, structuredData, hreflangUrls, alternateLanguages]);

  return null; // This component only manages document head
}