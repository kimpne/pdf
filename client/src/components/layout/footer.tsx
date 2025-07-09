import { Link } from "wouter";
import { FileText, Facebook, Twitter, Linkedin } from "lucide-react";
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
    { href: homeUrl, label: "Terms of Service" },
    { href: homeUrl, label: "Cookie Policy" },
    { href: homeUrl, label: "Security" },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href={homeUrl} className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <FileText className="w-6 h-6 text-red-500 mr-2" />
              <span className="text-xl font-bold">PDF Tools</span>
            </Link>
            <p className="text-slate-400 mb-4">
              The most comprehensive online PDF toolkit. 
              Fast, secure, and free to use.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PDF Tools</h3>
            <ul className="space-y-2 text-slate-400">
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
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
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
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
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
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 PDF Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
