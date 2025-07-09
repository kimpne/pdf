import { Users, Target, CheckCircle, Zap, Shield, Globe, Mail, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

export default function About() {
  const currentLang = getCurrentLanguage();

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your files are automatically deleted within 1 hour. We never store or share your documents."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Lightning-fast processing with optimized algorithms for quick PDF conversions and edits."
    },
    {
      icon: Globe,
      title: "Accessible Everywhere",
      description: "Works on any device with a web browser. No downloads or installations required."
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Designed with simplicity in mind. Clean interface that anyone can use effortlessly."
    }
  ];

  const features = [
    {
      name: "PDF Merge",
      description: "Combine multiple PDF files into one document",
      status: "Available"
    },
    {
      name: "PDF Split",
      description: "Split large PDF files into smaller, manageable pieces",
      status: "Available"
    },
    {
      name: "PDF Compress",
      description: "Reduce file size while maintaining quality",
      status: "Available"
    },
    {
      name: "PDF to Word",
      description: "Convert PDF documents to editable Word format",
      status: "Available"
    },
    {
      name: "Word to PDF",
      description: "Transform Word documents into PDF format",
      status: "Available"
    },
    {
      name: "PDF to JPG",
      description: "Extract images from PDF or convert pages to JPG",
      status: "Available"
    }
  ];

  return (
    <>
      <MultiLangSEOHead
        title="About Us - Free PDF Tools Online | PDF Editor Team"
        description="Learn about our mission to provide free, secure PDF tools online. Discover our team's commitment to privacy, efficiency, and user-friendly PDF editing solutions."
        keywords="about PDF tools, free PDF tools online, online PDF editor team, PDF tools company, PDF software team, about us PDF tools"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/about' : `/${currentLang}/about`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About Our PDF Tools
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're dedicated to providing the best free PDF tools online, helping millions of users 
              worldwide work with their documents efficiently and securely.
            </p>
          </div>

          {/* Who We Are */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Who We Are
              </CardTitle>
              <CardDescription>
                Meet the team behind your favorite online PDF tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-slate-700 text-lg">
                  We are a passionate team of developers, designers, and PDF enthusiasts committed to 
                  making document management accessible to everyone. Our online PDF tools platform was 
                  born from a simple idea: PDF editing should be free, fast, and secure.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Our Story</h3>
                  <p className="text-blue-800">
                    Founded in 2024, we recognized the need for reliable, free PDF tools that don't 
                    compromise on privacy or functionality. What started as a small project has grown 
                    into a comprehensive PDF editor platform serving users globally, processing millions 
                    of documents while maintaining our commitment to user privacy and data security.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-slate-600">Files Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-slate-600">Privacy Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">6</div>
                    <div className="text-sm text-slate-600">Essential Tools</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Our Mission
              </CardTitle>
              <CardDescription>
                Democratizing PDF editing for everyone, everywhere
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700 text-lg">
                  Our mission is to provide free, secure, and user-friendly PDF tools that work for 
                  everyone, regardless of technical expertise or budget constraints. We believe that 
                  essential document editing capabilities should be accessible to all.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">What We Stand For</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• <strong>Accessibility:</strong> No downloads, registrations, or payments required</li>
                      <li>• <strong>Privacy:</strong> Your files are never stored or shared</li>
                      <li>• <strong>Simplicity:</strong> Clean, intuitive interface for all users</li>
                      <li>• <strong>Reliability:</strong> Consistent performance across all devices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Our Goals</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Eliminate barriers to PDF editing</li>
                      <li>• Maintain the highest security standards</li>
                      <li>• Continuously improve user experience</li>
                      <li>• Support global accessibility needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Why Choose Our PDF Tools?
              </CardTitle>
              <CardDescription>
                What sets our online PDF editor apart from the competition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <value.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{value.title}</h3>
                        <p className="text-slate-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    🌟 What Makes Us Different
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Security First</h4>
                      <p className="text-green-700 text-sm">
                        Military-grade encryption and automatic file deletion ensure your documents 
                        remain private and secure at all times.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">No Hidden Costs</h4>
                      <p className="text-green-700 text-sm">
                        All features are completely free with no limits, subscriptions, or 
                        premium tiers. Quality PDF tools for everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Tools */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our PDF Tools Collection</CardTitle>
              <CardDescription>
                Comprehensive suite of free PDF editing tools for all your document needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">{feature.name}</h3>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {feature.status}
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Coming Soon</h3>
                <p className="text-blue-800 text-sm">
                  We're constantly working on new features including PDF annotation, digital signatures, 
                  and advanced editing capabilities. Stay tuned for updates!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Core Values</CardTitle>
              <CardDescription>
                The principles that guide our PDF tools development and user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Trust & Security</h3>
                    <p className="text-slate-600 text-sm">
                      We prioritize user privacy and data security in every aspect of our PDF tools platform.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">User-Centric Design</h3>
                    <p className="text-slate-600 text-sm">
                      Every feature is designed with the user in mind, ensuring intuitive and efficient PDF editing.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Global Accessibility</h3>
                    <p className="text-slate-600 text-sm">
                      Our online PDF tools work for everyone, everywhere, breaking down barriers to document editing.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Commitment</h3>
                  <p className="text-slate-700">
                    We are committed to maintaining the highest standards of service while keeping our 
                    PDF tools completely free. Our success is measured by your satisfaction and the 
                    security of your documents. We continuously invest in improving our platform based 
                    on user feedback and emerging technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology & Innovation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technology & Innovation</CardTitle>
              <CardDescription>
                The technical foundation powering our PDF tools platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Modern Architecture</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• <strong>Cloud-Based:</strong> Scalable infrastructure for reliable performance</li>
                      <li>• <strong>Cross-Platform:</strong> Works seamlessly on all devices and browsers</li>
                      <li>• <strong>Real-Time Processing:</strong> Instant PDF conversions and edits</li>
                      <li>• <strong>Global CDN:</strong> Fast loading times worldwide</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Security Technology</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• <strong>SSL Encryption:</strong> End-to-end encryption for all transfers</li>
                      <li>• <strong>Auto-Deletion:</strong> Files removed within 1 hour automatically</li>
                      <li>• <strong>Isolated Processing:</strong> Each file processed in secure environment</li>
                      <li>• <strong>No Data Storage:</strong> Zero permanent storage of user files</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-900 mb-2">Continuous Innovation</h3>
                  <p className="text-orange-800 text-sm">
                    Our development team constantly explores new technologies and methods to improve 
                    our PDF tools. We stay ahead of industry trends to provide cutting-edge solutions 
                    while maintaining our commitment to simplicity and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </CardTitle>
              <CardDescription>
                We'd love to hear from you about our PDF tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Support & Questions</h3>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>Email:</strong> support@pdfo.dev</p>
                      <p><strong>Response Time:</strong> Within 24 hours</p>
                      <p><strong>Support Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Feature Requests</h3>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>Suggestions:</strong> support@pdfo.dev</p>
                      <p><strong>Subject Line:</strong> "Feature Request"</p>
                      <p><strong>Include:</strong> Detailed description and use case</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Community Feedback</h3>
                  <p className="text-blue-800 text-sm">
                    Your feedback helps us improve our PDF tools platform. Whether you have suggestions 
                    for new features, report bugs, or simply want to share your experience, we value 
                    every message from our community.
                  </p>
                </div>
                
                <div className="text-center pt-4">
                  <p className="text-slate-600">
                    Thank you for choosing our PDF tools. We're here to make your document editing 
                    experience as smooth and secure as possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}