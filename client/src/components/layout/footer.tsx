import { Link } from "wouter";
import { FileText } from "lucide-react";
import { getCurrentLanguage, localizeUrl } from "@/lib/i18n";

export default function Footer() {
  const currentLang = getCurrentLanguage();
  const homeUrl = localizeUrl('/', currentLang);
  
  const toolLinks = [
    { href: localizeUrl("/merge-pdf", currentLang), label: "Merge PDF" },
    { href: localizeUrl("/split-pdf", currentLang), label: "Split PDF" },
    { href: localizeUrl("/compress-pdf", currentLang), label: "Compress PDF" },
    { href: localizeUrl("/pdf-to-word", currentLang), label: "PDF to Word" },
    { href: localizeUrl("/word-to-pdf", currentLang), label: "Word to PDF" },
  ];

  const supportLinks = [
    { href: currentLang === 'en' ? "/help-center" : `/${currentLang}/help-center`, label: "Help Center" },
    { href: currentLang === 'en' ? "/faq" : `/${currentLang}/faq`, label: "FAQ" },
    { href: currentLang === 'en' ? "/api-docs" : `/${currentLang}/api-docs`, label: "API" },
    { href: currentLang === 'en' ? "/status" : `/${currentLang}/status`, label: "Status" },
    { href: "mailto:support@pdfo.dev", label: "Contact Us" },
  ];

  const legalLinks = [
    { href: currentLang === 'en' ? "/privacy-policy" : `/${currentLang}/privacy-policy`, label: "Privacy Policy" },
    { href: currentLang === 'en' ? "/terms-of-service" : `/${currentLang}/terms-of-service`, label: "Terms of Service" },
    { href: currentLang === 'en' ? "/cookie-policy" : `/${currentLang}/cookie-policy`, label: "Cookie Policy" },
    { href: currentLang === 'en' ? "/security" : `/${currentLang}/security`, label: "Security" },
  ];

  return (
    <footer className="bg-slate-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={homeUrl} className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2" />
              <span className="text-lg sm:text-xl font-bold">PDF Tools</span>
            </Link>
            <p className="text-slate-400 mb-4 text-sm sm:text-base">
              The most comprehensive online PDF toolkit. 
              Fast, secure, and free to use.
            </p>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">PDF Tools</h3>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-slate-400">
          <p className="text-sm sm:text-base">&copy; 2024 PDF Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
