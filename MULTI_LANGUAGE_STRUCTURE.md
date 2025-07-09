# Multi-Language Folder Structure for React + Express

## Recommended Directory Structure

```
project/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── seo-head.tsx                    # Original SEO component
│   │   │   │   ├── multi-lang-seo-head.tsx         # Multi-language SEO component
│   │   │   │   ├── language-switcher.tsx           # Language switching UI
│   │   │   │   ├── header.tsx                      # Header with language switcher
│   │   │   │   └── footer.tsx                      # Footer with language menu
│   │   │   ├── examples/
│   │   │   │   └── multi-lang-example.tsx          # Implementation example
│   │   │   └── ui/                                 # Reusable UI components
│   │   ├── lib/
│   │   │   ├── i18n.ts                            # Language configuration & utilities
│   │   │   ├── translations.ts                    # Translation data & functions
│   │   │   └── utils.ts                           # General utilities
│   │   ├── pages/
│   │   │   ├── home.tsx                           # Multi-language home page
│   │   │   ├── merge-pdf.tsx                      # PDF tools pages
│   │   │   ├── split-pdf.tsx
│   │   │   └── [other-tool-pages].tsx
│   │   └── App.tsx                                # Main app with routing
│   └── public/
│       ├── og-pdf-tools.svg                       # Open Graph image
│       └── [other-assets]
├── server/
│   ├── routes.ts                                  # API routes
│   ├── index.ts                                   # Server entry point
│   └── [other-server-files]
└── shared/
    └── schema.ts                                  # Shared types & schemas
```

## Key Components

### 1. Multi-Language SEO Head Component
**File:** `client/src/components/layout/multi-lang-seo-head.tsx`

**Features:**
- Automatic language detection from URL
- Dynamic hreflang tag generation
- RTL language support
- Structured data with language variants
- Open Graph & Twitter Card optimization

**Usage:**
```tsx
<MultiLangSEOHead 
  title={translation.seo.title}
  description={translation.seo.description}
  keywords={translation.seo.keywords}
  ogImage="/og-pdf-tools.svg"
  structuredDataType="SoftwareApplication"
  languageCode={currentLang}
/>
```

### 2. Language Switcher Components
**File:** `client/src/components/layout/language-switcher.tsx`

**Three Variants:**
- **LanguageSwitcher**: Full dropdown with flags and native names
- **CompactLanguageSwitcher**: Select dropdown for mobile
- **HorizontalLanguageMenu**: Horizontal layout for footer

**Usage:**
```tsx
// Header
<LanguageSwitcher />

// Mobile
<CompactLanguageSwitcher />

// Footer
<HorizontalLanguageMenu />
```

### 3. Translation System
**File:** `client/src/lib/translations.ts`

**Structure:**
```typescript
interface Translation {
  seo: { title: string; description: string; keywords: string; };
  nav: { home: string; tools: string; about: string; };
  hero: { title: string; subtitle: string; cta: string; };
  tools: { merge: { name: string; description: string; }; };
  ui: { upload: string; download: string; process: string; };
  footer: { about: string; privacy: string; terms: string; };
}
```

**Usage:**
```tsx
const translation = getTranslation(currentLang);
const text = t('hero.title', currentLang);
```

### 4. Internationalization Utilities
**File:** `client/src/lib/i18n.ts`

**Key Functions:**
- `getCurrentLanguage()`: Get current language from URL
- `localizeUrl(path, langCode)`: Generate localized URLs
- `getHreflangUrls(currentPath)`: Generate hreflang alternatives
- `isRTL(langCode)`: Check if language is right-to-left

## URL Structure

### Recommended URL Pattern
```
English (default): https://example.com/
Spanish:           https://example.com/es/
Korean:            https://example.com/ko/
Chinese:           https://example.com/zh-cn/

Tool pages:
English: https://example.com/merge-pdf
Spanish: https://example.com/es/merge-pdf
Korean:  https://example.com/ko/merge-pdf
```

### Implementation in React Router (Wouter)
```tsx
// App.tsx
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/es" component={Home} />
      <Route path="/ko" component={Home} />
      <Route path="/zh-cn" component={Home} />
      
      <Route path="/merge-pdf" component={MergePDF} />
      <Route path="/es/merge-pdf" component={MergePDF} />
      <Route path="/ko/merge-pdf" component={MergePDF} />
      <Route path="/zh-cn/merge-pdf" component={MergePDF} />
    </Switch>
  );
}
```

## Supported Languages

### Current Implementation (12 Languages)
1. **English** (en) - Default
2. **Spanish** (es) - Español
3. **French** (fr) - Français
4. **German** (de) - Deutsch
5. **Korean** (ko) - 한국어
6. **Japanese** (ja) - 日本語
7. **Chinese Simplified** (zh-cn) - 简体中文
8. **Chinese Traditional** (zh-tw) - 繁體中文
9. **Portuguese** (pt) - Português
10. **Italian** (it) - Italiano
11. **Russian** (ru) - Русский
12. **Arabic** (ar) - العربية (RTL)

### Adding New Languages
1. Add language to `SUPPORTED_LANGUAGES` in `i18n.ts`
2. Add translation object to `translations.ts`
3. Add routes to `App.tsx`
4. Test hreflang generation

## SEO Best Practices

### 1. Hreflang Implementation
- Self-referencing hreflang tags
- x-default for default language
- Proper language codes (ISO 639-1)
- Consistent URL structure

### 2. Content Optimization
- Localized meta titles (50-60 chars)
- Localized meta descriptions (150-160 chars)
- Translated keywords
- Native language names in switcher

### 3. Technical SEO
- Canonical URLs for each language
- Language-specific structured data
- RTL support for Arabic
- Proper HTML lang attribute

### 4. Performance
- Lazy loading for non-critical languages
- CDN for static assets
- Preconnect to external domains
- Optimized images (WebP, proper sizes)

## Express.js Server Configuration

### Static File Serving
```typescript
// server/index.ts
app.use(express.static('public'));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

### API Routes
```typescript
// server/routes.ts
app.get('/api/languages', (req, res) => {
  res.json(SUPPORTED_LANGUAGES);
});

app.post('/api/pdf/merge', (req, res) => {
  // Handle PDF processing
});
```

## Testing Multi-Language Setup

### 1. URL Testing
- Test all language URLs work correctly
- Verify language detection from URL
- Check fallback to default language

### 2. SEO Testing
- Validate hreflang tags in source
- Test structured data with Google's tool
- Check meta tags for each language

### 3. UI Testing
- Test language switcher functionality
- Verify translations display correctly
- Check RTL layout for Arabic

### 4. Performance Testing
- Measure page load times
- Test on different devices
- Monitor bundle size impact

## Deployment Considerations

### 1. Build Process
```bash
# Build for production
npm run build

# Serve static files
npm run preview
```

### 2. Server Configuration
- Configure proper MIME types
- Set up compression (gzip/brotli)
- Enable HTTP/2 if possible
- Set proper cache headers

### 3. CDN Setup
- Serve static assets from CDN
- Configure proper cache-control
- Enable geographic distribution

### 4. Monitoring
- Track language usage analytics
- Monitor SEO performance
- Set up error tracking
- Monitor Core Web Vitals

## Future Enhancements

### 1. Dynamic Loading
- Lazy load language packs
- Route-based code splitting
- Dynamic imports for translations

### 2. User Preferences
- Remember user's language choice
- Browser language detection
- Geolocation-based suggestions

### 3. Advanced SEO
- Language-specific sitemaps
- Automatic translation updates
- Content management integration

### 4. Performance Optimization
- Service worker caching
- Preload critical resources
- Optimize font loading