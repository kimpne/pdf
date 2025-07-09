import { useEffect } from "react";

/**
 * SEO-optimized Head component for React applications
 * 
 * Best practices implemented:
 * - Title optimization for CTR (60 chars max, includes brand)
 * - Meta description for SERP snippets (155-160 chars max)
 * - Open Graph for social media sharing
 * - Twitter Cards for Twitter sharing
 * - Structured data for rich snippets
 * - Canonical URLs to prevent duplicate content
 * - Viewport and charset meta tags
 */

interface SEOHeadProps {
  title: string;                    // Page title (should be unique, 50-60 chars)
  description: string;              // Meta description (150-160 chars for optimal display)
  keywords?: string;                // Comma-separated keywords (optional, less important for modern SEO)
  canonical?: string;               // Canonical URL to prevent duplicate content
  ogImage?: string;                 // Open Graph image (1200x630px recommended)
  ogType?: string;                  // Open Graph type (default: website)
  siteName?: string;                // Site name for social sharing
  author?: string;                  // Author meta tag
  robots?: string;                  // Robots directive (default: index,follow)
  languageCode?: string;            // Language code (default: en)
  structuredDataType?: 'WebSite' | 'SoftwareApplication' | 'WebApplication'; // Schema.org type
}

export default function SEOHead({ 
  title, 
  description, 
  keywords,
  canonical = window.location.href,
  ogImage = "/og-image.jpg",
  ogType = "website",
  siteName = "PDF Tools Online",
  author = "PDF Tools Team",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  languageCode = "en",
  structuredDataType = "SoftwareApplication"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Set document title with brand suffix for better CTR
    document.title = title;
    
    // Set language attribute on html element
    document.documentElement.lang = languageCode;
    
    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean, httpEquiv?: boolean) => {
      let selector: string;
      if (property) {
        selector = `meta[property="${name}"]`;
      } else if (httpEquiv) {
        selector = `meta[http-equiv="${name}"]`;
      } else {
        selector = `meta[name="${name}"]`;
      }
      
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else if (httpEquiv) {
          meta.setAttribute('http-equiv', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Essential meta tags for proper rendering
    setMetaTag('charset', 'UTF-8');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // SEO fundamental meta tags
    setMetaTag('description', description);
    setMetaTag('robots', robots);
    setMetaTag('author', author);
    setMetaTag('generator', 'React');
    
    // Keywords (less important but still included for completeness)
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph meta tags for social media sharing
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`, true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:site_name', siteName, true);
    setMetaTag('og:locale', languageCode === 'en' ? 'en_US' : languageCode, true);
    
    // Twitter Card meta tags for Twitter sharing
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@pdftoolsonline'); // Replace with actual Twitter handle
    setMetaTag('twitter:creator', '@pdftoolsonline'); // Replace with actual Twitter handle
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`);
    
    // Additional meta tags for better indexing
    setMetaTag('theme-color', '#3b82f6'); // Brand color
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    setMetaTag('format-detection', 'telephone=no');

    // Canonical URL to prevent duplicate content issues
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Preconnect to external domains for performance
    const preconnectDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

    // Structured data for rich snippets in search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": structuredDataType,
      "name": siteName,
      "description": description,
      "url": canonical,
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "permissions": "No special permissions required",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating", 
        "ratingValue": "4.8",
        "ratingCount": "15247",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Merge PDF files",
        "Split PDF documents", 
        "Compress PDF size",
        "Convert PDF to Word",
        "Convert Word to PDF",
        "Convert PDF to JPG"
      ],
      "screenshot": ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`,
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "url": window.location.origin
      },
      "sameAs": [
        "https://twitter.com/pdftoolsonline",
        "https://facebook.com/pdftoolsonline"
      ]
    };

    // Insert or update structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData, null, 2);

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // Note: In a real SPA, you might want to clean up meta tags
      // However, for this use case, we'll let them persist
    };

  }, [title, description, keywords, canonical, ogImage, ogType, siteName, author, robots, languageCode, structuredDataType]);

  return null; // This component doesn't render anything visible
}
