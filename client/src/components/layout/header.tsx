import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, FileText } from "lucide-react";
import { getCurrentLanguage, localizeUrl } from "@/lib/i18n";

export default function Header() {
  const [location] = useLocation();
  const currentLang = getCurrentLanguage();
  const homeUrl = localizeUrl('/', currentLang);

  const navItems = [
    { href: "#tools", label: "Tools" },
    { href: currentLang === 'en' ? "/blog" : `/${currentLang}/blog`, label: "Blog" },
    { href: currentLang === 'en' ? "/help-center" : `/${currentLang}/help-center`, label: "Help" },
    { href: currentLang === 'en' ? "/about" : `/${currentLang}/about`, label: "About" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href={homeUrl} className="flex items-center hover:opacity-80 transition-opacity">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-2" />
              <span className="text-lg sm:text-xl font-bold text-slate-800">PDF Tools</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-primary transition-colors text-sm lg:text-base"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-primary transition-colors text-sm lg:text-base"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button className="hidden md:block text-sm lg:text-base px-3 lg:px-4">
              Start PDF Editing
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href={homeUrl} className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-red-500 mr-2" />
                    <span className="text-lg font-bold text-slate-800">PDF Tools</span>
                  </Link>
                  
                  {navItems.map((item) => (
                    item.href.startsWith('#') ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-slate-600 hover:text-primary transition-colors py-3 text-base border-b border-slate-100 last:border-b-0"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-slate-600 hover:text-primary transition-colors py-3 text-base border-b border-slate-100 last:border-b-0"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                  
                  <Button className="mt-6 w-full">
                    Start PDF Editing
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
