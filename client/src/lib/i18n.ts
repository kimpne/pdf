/**
 * Internationalization (i18n) configuration and utilities
 * 
 * Best practices implemented:
 * - Language code standardization (ISO 639-1 and BCP 47)
 * - SEO-friendly URL structure
 * - Proper hreflang implementation
 * - RTL language support detection
 */

export interface Language {
  code: string;           // ISO 639-1 language code
  name: string;          // Native language name
  englishName: string;   // English name for reference
  flag: string;          // Unicode flag emoji
  dir: 'ltr' | 'rtl';   // Text direction
  region?: string;       // Optional region code for localization
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    englishName: 'English',
    flag: '🇺🇸',
    dir: 'ltr'
  },
  {
    code: 'es',
    name: 'Español',
    englishName: 'Spanish',
    flag: '🇪🇸',
    dir: 'ltr'
  },
  {
    code: 'fr',
    name: 'Français',
    englishName: 'French',
    flag: '🇫🇷',
    dir: 'ltr'
  },
  {
    code: 'de',
    name: 'Deutsch',
    englishName: 'German',
    flag: '🇩🇪',
    dir: 'ltr'
  },
  {
    code: 'ko',
    name: '한국어',
    englishName: 'Korean',
    flag: '🇰🇷',
    dir: 'ltr'
  },
  {
    code: 'ja',
    name: '日本語',
    englishName: 'Japanese',
    flag: '🇯🇵',
    dir: 'ltr'
  },
  {
    code: 'zh-cn',
    name: '简体中文',
    englishName: 'Chinese (Simplified)',
    flag: '🇨🇳',
    dir: 'ltr'
  },
  {
    code: 'zh-tw',
    name: '繁體中文',
    englishName: 'Chinese (Traditional)',
    flag: '🇹🇼',
    dir: 'ltr'
  },
  {
    code: 'pt',
    name: 'Português',
    englishName: 'Portuguese',
    flag: '🇵🇹',
    dir: 'ltr'
  },
  {
    code: 'it',
    name: 'Italiano',
    englishName: 'Italian',
    flag: '🇮🇹',
    dir: 'ltr'
  },
  {
    code: 'ru',
    name: 'Русский',
    englishName: 'Russian',
    flag: '🇷🇺',
    dir: 'ltr'
  },
  {
    code: 'ar',
    name: 'العربية',
    englishName: 'Arabic',
    flag: '🇦🇪',
    dir: 'rtl'
  }
];

export const DEFAULT_LANGUAGE = 'en';

/**
 * Get language from URL path
 * Examples: /es/merge-pdf -> 'es', /merge-pdf -> 'en'
 */
export function getLanguageFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // Check if first segment is a supported language code
  const language = SUPPORTED_LANGUAGES.find(lang => lang.code === firstSegment);
  return language ? language.code : DEFAULT_LANGUAGE;
}

/**
 * Get current language from browser location
 */
export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  return getLanguageFromPath(window.location.pathname);
}

/**
 * Get localized path for a given language
 * Examples: localizeUrl('/merge-pdf', 'es') -> '/es/merge-pdf'
 */
export function localizeUrl(path: string, langCode: string): string {
  // Remove existing language prefix if any
  const cleanPath = path.replace(/^\/[a-z]{2}(-[a-z]{2})?/, '');
  
  // Add language prefix for non-default languages
  if (langCode === DEFAULT_LANGUAGE) {
    return cleanPath || '/';
  }
  
  return `/${langCode}${cleanPath || ''}`;
}

/**
 * Get all language variants of current URL for hreflang tags
 */
export function getHreflangUrls(currentPath: string, baseUrl?: string): Array<{lang: string, url: string}> {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
  const cleanPath = currentPath.replace(/^\/[a-z]{2}(-[a-z]{2})?/, '');
  
  return SUPPORTED_LANGUAGES.map(language => ({
    lang: language.code === DEFAULT_LANGUAGE ? 'x-default' : language.code,
    url: `${base}${localizeUrl(cleanPath, language.code)}`
  })).concat([
    // Add x-default for the default language
    {
      lang: 'x-default',
      url: `${base}${cleanPath || '/'}`
    }
  ]);
}

/**
 * Get language object by code
 */
export function getLanguage(code: string): Language | undefined {
  return SUPPORTED_LANGUAGES.find(lang => lang.code === code);
}

/**
 * Check if language is RTL
 */
export function isRTL(langCode: string): boolean {
  const language = getLanguage(langCode);
  return language?.dir === 'rtl';
}

/**
 * Get browser's preferred language from Accept-Language header or navigator
 */
export function getBrowserLanguage(): string {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language.toLowerCase();
  
  // Try exact match first
  let match = SUPPORTED_LANGUAGES.find(lang => lang.code === browserLang);
  if (match) return match.code;
  
  // Try language without region (e.g., 'en-US' -> 'en')
  const langWithoutRegion = browserLang.split('-')[0];
  match = SUPPORTED_LANGUAGES.find(lang => lang.code === langWithoutRegion);
  if (match) return match.code;
  
  return DEFAULT_LANGUAGE;
}