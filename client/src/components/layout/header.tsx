import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, FileText } from "lucide-react";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "#tools", label: "Tools" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <FileText className="w-8 h-8 text-red-500 mr-2" />
              <span className="text-xl font-bold text-slate-800">PDF Tools</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block">
              Get Started
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-red-500 mr-2" />
                    <span className="text-lg font-bold text-slate-800">PDF Tools</span>
                  </Link>
                  
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-slate-600 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  <Button className="mt-6">
                    Get Started
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
