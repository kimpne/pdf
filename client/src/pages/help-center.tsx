import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, HelpCircle, BookOpen, Zap, Shield, Clock, Users } from "lucide-react";
import SEOHead from "@/components/layout/seo-head";
import { getCurrentLanguage, localizeUrl } from "@/lib/i18n";

export default function HelpCenter() {
  const currentLang = getCurrentLanguage();
  const homeUrl = localizeUrl('/', currentLang);

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
              <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <Badge variant="secondary" className="text-xs">
                      Most Popular
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    How to Merge PDF Files Online
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Step-by-step guide to combine multiple PDF documents into one file quickly and securely.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      merge PDF online, combine PDF files
                    </span>
                    <Link href={localizeUrl('/merge-pdf', currentLang)}>
                      <Button size="sm" className="group-hover:bg-blue-600 transition-colors">
                        Try Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <Badge variant="secondary" className="text-xs">
                      Essential
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Split PDF Files into Separate Pages
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Learn how to extract specific pages or split large PDF files into smaller documents.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      split PDF files, extract PDF pages
                    </span>
                    <Link href={localizeUrl('/split-pdf', currentLang)}>
                      <Button size="sm" className="group-hover:bg-blue-600 transition-colors">
                        Try Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Compress PDF Files for Smaller Size
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Reduce PDF file size without losing quality using our advanced compression tools.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      compress PDF, reduce PDF size
                    </span>
                    <Link href={localizeUrl('/compress-pdf', currentLang)}>
                      <Button size="sm" className="group-hover:bg-blue-600 transition-colors">
                        Try Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Lightning Fast Processing
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our advanced algorithms process your PDF files in seconds, not minutes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    100% Secure & Private
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your files are encrypted and automatically deleted after processing. No data is stored on our servers.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    24/7 Availability
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access our free PDF tools anytime, anywhere. No software installation required.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Trusted by Millions
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Over 10 million users worldwide trust our PDF tools for their document processing needs.
                  </p>
                </CardContent>
              </Card>
            </div>
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