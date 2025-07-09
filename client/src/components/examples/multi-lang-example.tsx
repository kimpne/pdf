/**
 * Example component demonstrating multi-language SEO implementation
 * This shows how to use the multi-language system properly
 */

import { useState } from 'react';
import MultiLangSEOHead from '@/components/layout/multi-lang-seo-head';
import LanguageSwitcher, { CompactLanguageSwitcher, HorizontalLanguageMenu } from '@/components/layout/language-switcher';
import { getCurrentLanguage } from '@/lib/i18n';
import { getTranslation, t } from '@/lib/translations';

export default function MultiLangExample() {
  const currentLang = getCurrentLanguage();
  const translation = getTranslation(currentLang);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Head with multi-language support */}
      <MultiLangSEOHead 
        title={translation.seo.title}
        description={translation.seo.description}
        keywords={translation.seo.keywords}
        ogImage="/og-pdf-tools.svg"
        structuredDataType="SoftwareApplication"
        languageCode={currentLang}
      />
      
      {/* Header with language switcher */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {t('nav.home', currentLang)}
            </h1>
            
            {/* Main language switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      
      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('hero.title', currentLang)}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.subtitle', currentLang)}
            </p>
            
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>{t('hero.features.secure', currentLang)}</span>
              <span>{t('hero.features.fast', currentLang)}</span>
              <span>{t('hero.features.free', currentLang)}</span>
            </div>
          </section>
          
          {/* Tools Section */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('nav.tools', currentLang)}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tool cards with translated content */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('tools.merge.name', currentLang)}
                </h4>
                <p className="text-gray-600">
                  {t('tools.merge.description', currentLang)}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('tools.split.name', currentLang)}
                </h4>
                <p className="text-gray-600">
                  {t('tools.split.description', currentLang)}
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('tools.compress.name', currentLang)}
                </h4>
                <p className="text-gray-600">
                  {t('tools.compress.description', currentLang)}
                </p>
              </div>
            </div>
          </section>
          
          {/* Language Switcher Variants */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Language Switcher Examples
            </h3>
            
            <div className="space-y-6">
              {/* Full dropdown */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Full Dropdown (Default)
                </h4>
                <LanguageSwitcher />
              </div>
              
              {/* Compact select */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Compact Select
                </h4>
                <CompactLanguageSwitcher />
              </div>
              
              {/* Horizontal menu */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Horizontal Menu
                </h4>
                <HorizontalLanguageMenu />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>{t('footer.copyright', currentLang)}</p>
            <HorizontalLanguageMenu className="text-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Example of URL structure for different languages:
 * 
 * English (default): https://example.com/
 * Spanish: https://example.com/es/
 * Korean: https://example.com/ko/
 * Chinese: https://example.com/zh-cn/
 * 
 * Tool pages:
 * English: https://example.com/merge-pdf
 * Spanish: https://example.com/es/merge-pdf
 * Korean: https://example.com/ko/merge-pdf
 */