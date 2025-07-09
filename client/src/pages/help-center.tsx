import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Split, 
  Archive, 
  FileImage, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  Zap,
  Shield,
  Clock,
  Users
} from "lucide-react";
import SEOHead from "@/components/layout/seo-head";
import { getCurrentLanguage, localizeUrl } from "@/lib/i18n";

export default function HelpCenter() {
  const currentLang = getCurrentLanguage();
  const homeUrl = localizeUrl('/', currentLang);
  const contactUrl = localizeUrl('/contact', currentLang);
  const faqUrl = localizeUrl('/faq', currentLang);

  const popularGuides = [
    {
      title: "How to Merge PDF Files Online",
      description: "Step-by-step guide to combine multiple PDF documents into one file quickly and securely.",
      icon: FileText,
      href: localizeUrl('/merge-pdf', currentLang),
      badge: "Most Popular",
      keywords: "merge PDF online, combine PDF files"
    },
    {
      title: "Split PDF Files into Separate Pages",
      description: "Learn how to extract specific pages or split large PDF files into smaller documents.",
      icon: Split,
      href: localizeUrl('/split-pdf', currentLang),
      badge: "Essential",
      keywords: "split PDF files, extract PDF pages"
    },
    {
      title: "Compress PDF Files for Smaller Size",
      description: "Reduce PDF file size without losing quality using our advanced compression tools.",
      icon: Archive,
      href: localizeUrl('/compress-pdf', currentLang),
      badge: "Popular",
      keywords: "compress PDF, reduce PDF size"
    },
    {
      title: "Convert PDF to Word Documents",
      description: "Transform PDF files into editable Word documents while preserving formatting.",
      icon: FileText,
      href: localizeUrl('/pdf-to-word', currentLang),
      badge: "New",
      keywords: "PDF to Word converter, convert PDF to DOC"
    },
    {
      title: "Convert Word to PDF Online",
      description: "Convert Word documents, PowerPoint presentations, and Excel files to PDF format.",
      icon: FileText,
      href: localizeUrl('/word-to-pdf', currentLang),
      badge: "Essential",
      keywords: "Word to PDF, convert documents to PDF"
    },
    {
      title: "Convert PDF to Images (JPG/PNG)",
      description: "Extract images from PDF or convert PDF pages to high-quality JPG or PNG files.",
      icon: FileImage,
      href: localizeUrl('/pdf-to-jpg', currentLang),
      badge: "Trending",
      keywords: "PDF to JPG, convert PDF to images"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Our advanced algorithms process your PDF files in seconds, not minutes."
    },
    {
      icon: Shield,
      title: "100% Secure & Private",
      description: "Your files are encrypted and automatically deleted after processing. No data is stored on our servers."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access our free PDF tools anytime, anywhere. No software installation required."
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "Over 10 million users worldwide trust our PDF tools for their document processing needs."
    }
  ];

  return (
    <>
      <SEOHead
        title="Help Center - PDF Tools Guide & Tutorials | Free Online PDF Editor"
        description="Learn how to merge, split, compress, and convert PDF files online. Step-by-step tutorials for all PDF tools. Free online PDF editor with comprehensive guides and FAQs."
        keywords="merge PDF online, split PDF files, compress PDF, PDF to Word converter, convert images to PDF, online PDF tools, free PDF editor, PDF tutorials"
        canonical="https://your-domain.com/help-center"
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <HelpCircle className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PDF Tools Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to our comprehensive guide for all your PDF processing needs. 
              Learn how to merge, split, compress, and convert PDF files online with our 
              step-by-step tutorials and expert tips.
            </p>
          </div>

          {/* Popular Guides Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Popular PDF Guides</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularGuides.map((guide, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <guide.icon className="w-8 h-8 text-blue-600" />
                      <Badge variant="secondary" className="text-xs">
                        {guide.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {guide.keywords}
                      </span>
                      <Link href={guide.href}>
                        <Button size="sm" className="group-hover:bg-blue-600 transition-colors">
                          Try Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Use Our PDF Tools Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Online PDF Tools?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the key benefits that make our free PDF editor the preferred choice 
                for millions of users worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Preview Section */}
          <section className="mb-16">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Find quick answers to common questions about our PDF tools and file processing services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-gray-900">Is it free to use?</h3>
                        <p className="text-sm text-gray-600">Yes, all our PDF tools are completely free with no hidden charges.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-gray-900">Are my files secure?</h3>
                        <p className="text-sm text-gray-600">Files are encrypted and automatically deleted after processing.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-gray-900">What file formats are supported?</h3>
                        <p className="text-sm text-gray-600">We support PDF, Word, Excel, PowerPoint, and image formats.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-gray-900">Is there a file size limit?</h3>
                        <p className="text-sm text-gray-600">You can process files up to 100MB in size for free.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Can't find what you're looking for? Our support team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={contactUrl}>
                <Button size="lg" variant="secondary" className="min-w-[180px]">
                  Contact Support
                </Button>
              </Link>
              <Link href={faqUrl}>
                <Button size="lg" variant="outline" className="min-w-[180px] border-white text-white hover:bg-white hover:text-blue-600">
                  View Full FAQ
                </Button>
              </Link>
              <Link href={homeUrl}>
                <Button size="lg" variant="outline" className="min-w-[180px] border-white text-white hover:bg-white hover:text-blue-600">
                  Back to Tools
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}