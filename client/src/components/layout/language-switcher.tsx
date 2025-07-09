/**
 * Language switcher component for multi-language support
 * 
 * Features:
 * - Dropdown menu with all supported languages
 * - Native language names with flags
 * - Automatic URL generation for each language
 * - Current language highlighting
 * - Responsive design
 * - Accessibility support
 */

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES, getCurrentLanguage, localizeUrl, getLanguage } from '@/lib/i18n';

interface LanguageSwitcherProps {
  className?: string;
  showGlobeIcon?: boolean;
}

export default function LanguageSwitcher({ 
  className = '', 
  showGlobeIcon = true 
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLang = getCurrentLanguage();
  const currentLanguage = getLanguage(currentLang);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    const newUrl = localizeUrl(currentPath, langCode);
    window.location.href = newUrl;
    setIsOpen(false);
  };
  
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
        id="language-menu-button"
      >
        {showGlobeIcon && <Globe className="w-4 h-4" />}
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <span className="hidden md:inline">{currentLanguage?.name || 'English'}</span>
        <span className="sm:hidden">{currentLanguage?.flag || '🇺🇸'}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu-button">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
              Select Language
            </div>
            
            <ul className="lang__menu max-h-60 overflow-y-auto">
              {SUPPORTED_LANGUAGES.map((language) => {
                const isActive = language.code === currentLang;
                const localizedUrl = localizeUrl(currentPath, language.code);
                
                return (
                  <li key={language.code}>
                    <button
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full text-left px-3 py-2 text-sm flex items-center gap-3 hover:bg-gray-100 transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 font-medium' 
                          : 'text-gray-700'
                      }`}
                      role="menuitem"
                      lang={language.code}
                      dir={language.dir}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex-1">
                        <div className="font-medium">{language.name}</div>
                        <div className="text-xs text-gray-500">{language.englishName}</div>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Compact language switcher for mobile/small spaces
 */
export function CompactLanguageSwitcher({ className = '' }: { className?: string }) {
  const currentLang = getCurrentLanguage();
  const currentLanguage = getLanguage(currentLang);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = event.target.value;
    const newUrl = localizeUrl(currentPath, langCode);
    window.location.href = newUrl;
  };
  
  return (
    <div className={`relative ${className}`}>
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        aria-label="Select language"
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

/**
 * Horizontal language menu for footer or navigation
 */
export function HorizontalLanguageMenu({ className = '' }: { className?: string }) {
  const currentLang = getCurrentLanguage();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  const handleLanguageChange = (langCode: string) => {
    const newUrl = localizeUrl(currentPath, langCode);
    window.location.href = newUrl;
  };
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {SUPPORTED_LANGUAGES.slice(0, 6).map((language) => {
        const isActive = language.code === currentLang;
        
        return (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`px-2 py-1 text-sm rounded transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            lang={language.code}
            dir={language.dir}
            title={language.englishName}
          >
            {language.flag} {language.code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}