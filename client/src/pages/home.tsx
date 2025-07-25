import { Link } from "wouter";
import { FileText, Scissors, Combine, File, Download, Image, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FileUpload from "@/components/pdf-tools/file-upload";
import ToolCard from "@/components/pdf-tools/tool-card";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import OptimizedHead from "@/components/seo/OptimizedHead";
import LanguageSwitcher from "@/components/layout/language-switcher";
import type { ToolMetadata } from "@shared/schema";
import { getCurrentLanguage } from "@/lib/i18n";
import { getTranslation, t } from "@/lib/translations";

const tools: ToolMetadata[] = [
  {
    id: "merge",
    name: "Merge PDF",
    description: "Combine multiple PDF files into one document",
    icon: "file-pdf",
    color: "red",
    path: "/merge-pdf"
  },
  {
    id: "split",
    name: "Split PDF", 
    description: "Extract pages from your PDF or split into multiple files",
    icon: "scissors",
    color: "blue",
    path: "/split-pdf"
  },
  {
    id: "compress",
    name: "Combine PDF",
    description: "Reduce file size while maintaining quality",
    icon: "compress",
    color: "green", 
    path: "/compress-pdf"
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF to editable Word documents",
    icon: "file-word",
    color: "purple",
    path: "/pdf-to-word"
  },
  {
    id: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word documents to PDF format",
    icon: "download",
    color: "orange",
    path: "/word-to-pdf"
  },
  {
    id: "pdf-to-jpg",
    name: "PDF to JPG",
    description: "Convert PDF pages to high-quality images",
    icon: "image",
    color: "pink",
    path: "/pdf-to-jpg"
  },
  {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    description: "Convert images to PDF documents",
    icon: "image",
    color: "teal",
    path: "/pdf-to-jpg"
  },
  {
    id: "rotate",
    name: "Rotate PDF",
    description: "Rotate PDF pages to the correct orientation",
    icon: "rotate-cw",
    color: "indigo",
    path: "/rotate-pdf"
  }
];

const features = [
  {
    icon: "shield",
    title: "100% Secure",
    description: "All file transfers are secured with SSL encryption. Your files are automatically deleted after processing."
  },
  {
    icon: "zap",
    title: "Lightning Fast", 
    description: "Process your PDF files in seconds with our optimized cloud infrastructure and advanced algorithms."
  },
  {
    icon: "smartphone",
    title: "Any Device",
    description: "Works on any device with a web browser. No software installation required."
  },
  {
    icon: "heart",
    title: "Free Forever",
    description: "All our PDF tools are completely free to use. No hidden fees or subscription required."
  },
  {
    icon: "users",
    title: "No Registration",
    description: "Start using our tools immediately without creating an account or providing personal information."
  },
  {
    icon: "star",
    title: "High Quality",
    description: "Maintain the original quality of your documents with our advanced processing technology."
  }
];

export default function Home() {
  const currentLang = getCurrentLanguage();
  const translation = getTranslation(currentLang);
  
  return (
    <>
      <OptimizedHead 
        title={translation.seo.title}
        description={translation.seo.description}
        keywords={translation.seo.keywords}
        canonical={`https://pdfo.dev${currentLang === 'en' ? '' : `/${currentLang}`}/`}
        ogImage="https://pdfo.dev/og-pdf-tools.jpg"
        ogType="website"
      />
      <MultiLangSEOHead 
        title={translation.seo.title}
        description={translation.seo.description}
        keywords={translation.seo.keywords}
        ogImage="/og-pdf-tools.svg"
        structuredDataType="SoftwareApplication"
        languageCode={currentLang}
      />
      
      {/* Hero Section */}
      <section className="gradient-hero py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Language Switcher */}
            <div className="flex justify-end mb-6 sm:mb-8">
              <LanguageSwitcher />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">
              {t('hero.title', currentLang)}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {t('hero.subtitle', currentLang)}
            </p>
            
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              <FileUpload />
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 px-4">
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-shield-alt text-green-500"></i>
                <span>{t('hero.features.secure', currentLang)}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-clock text-blue-500"></i>
                <span>Files deleted after 1 hour</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-globe text-purple-500"></i>
                <span>Works on any device</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Tools Grid */}
      <section id="tools" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-2">
              All-in-one PDF Tools
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Professional PDF tools to help you work more efficiently. 
              All tools are free and work directly in your browser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-2">
              Why Choose Our PDF Tools?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Fast, secure, and reliable PDF processing with industry-leading technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`fas fa-${feature.icon} text-2xl sm:text-3xl text-primary`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-2">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Simple 3-step process to get your PDF tasks done in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="step-number">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 px-2">Upload Files</h3>
              <p className="text-sm sm:text-base text-slate-600 px-4">
                Drag and drop your PDF files or click to browse and select from your device.
              </p>
            </div>
            
            <div className="text-center">
              <div className="step-number">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 px-2">Process</h3>
              <p className="text-sm sm:text-base text-slate-600 px-4">
                Our powerful servers process your files instantly using advanced algorithms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="step-number">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 px-2">Download</h3>
              <p className="text-sm sm:text-base text-slate-600 px-4">
                Download your processed files immediately. Files are deleted after 1 hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
            Ready to streamline your PDF workflow?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join millions of users who trust our PDF tools for their daily document needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-50 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Start PDF Editing
          </Button>
        </div>
      </section>
    </>
  );
}
