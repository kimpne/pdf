import { Shield, Lock, FileText, Clock, Users, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const currentLang = getCurrentLanguage();
  const lastUpdated = "January 8, 2024";

  return (
    <>
      <MultiLangSEOHead
        title="Privacy Policy - PDF Tools Data Protection & File Security"
        description="Comprehensive privacy policy for our online PDF tools. Learn how we protect your data, handle file uploads, and ensure GDPR compliance with automatic file deletion."
        keywords="PDF privacy policy, online PDF tools privacy, file upload privacy, GDPR compliant PDF tools, free PDF tools privacy policy, data protection PDF"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/privacy-policy' : `/${currentLang}/privacy-policy`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your privacy is important to us. This privacy policy explains how we collect, use, and protect 
              your information when you use our online PDF tools.
            </p>
            <div className="flex justify-center mt-6">
              <div className="bg-slate-100 px-4 py-2 rounded-md">
                <p className="text-sm text-slate-700">
                  <strong>Last Updated:</strong> {lastUpdated}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Privacy Summary:</strong> We prioritize your privacy. We don't store your files permanently, 
              don't sell your data, and automatically delete all uploaded files within 1 hour. We use minimal 
              cookies for essential functionality only.
            </AlertDescription>
          </Alert>

          {/* Information Collection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Information We Collect
              </CardTitle>
              <CardDescription>
                Understanding what data we collect and how we use it for our PDF tools privacy policy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Email Addresses:</strong> Only collected if you contact us for support via support@pdfo.dev</li>
                    <li>• <strong>IP Addresses:</strong> Temporarily logged for security purposes and abuse prevention</li>
                    <li>• <strong>Browser Information:</strong> Basic browser type and version for compatibility purposes</li>
                    <li>• <strong>No Account Required:</strong> Our free PDF tools don't require user registration or personal accounts</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">File Upload Data</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Uploaded Files:</strong> PDF documents and other files you upload for processing</li>
                    <li>• <strong>File Metadata:</strong> File names, sizes, and timestamps for processing purposes</li>
                    <li>• <strong>Processing Data:</strong> Temporary data created during PDF manipulation (merge, split, compress)</li>
                    <li>• <strong>No Content Analysis:</strong> We don't read, analyze, or index the content of your files</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Cookie Usage Policy
              </CardTitle>
              <CardDescription>
                How we use cookies on our online PDF tools platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Essential Cookies</h3>
                  <p className="text-slate-700 mb-3">
                    We use minimal essential cookies required for our PDF tools to function properly:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Session Cookies:</strong> To maintain your session during file processing</li>
                    <li>• <strong>Security Cookies:</strong> For CSRF protection and secure file uploads</li>
                    <li>• <strong>Preference Cookies:</strong> To remember your language and interface preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Analytics Cookies</h3>
                  <p className="text-slate-700">
                    We use privacy-focused analytics to improve our PDF tools:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Usage Statistics:</strong> Anonymous data about which PDF tools are most used</li>
                    <li>• <strong>Performance Monitoring:</strong> To identify and fix technical issues</li>
                    <li>• <strong>No Personal Tracking:</strong> We don't track individual users across sessions</li>
                  </ul>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Cookie Control:</strong> You can disable cookies in your browser settings, but this may 
                    affect the functionality of our PDF tools.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* File Upload & Storage Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                File Upload & Storage Policy
              </CardTitle>
              <CardDescription>
                How we handle your uploaded files and ensure file upload privacy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">File Processing</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Temporary Storage:</strong> Files are stored temporarily in secure server memory during processing</li>
                    <li>• <strong>Encryption:</strong> All file uploads use SSL/TLS encryption during transmission</li>
                    <li>• <strong>Processing Only:</strong> Files are used solely for the PDF operations you request</li>
                    <li>• <strong>No Backup Copies:</strong> We don't create backup copies of your uploaded files</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Automatic File Deletion</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium mb-2">🔒 Automatic Privacy Protection</p>
                    <ul className="space-y-1 text-green-700">
                      <li>• <strong>1-Hour Deletion:</strong> All uploaded files are automatically deleted within 1 hour</li>
                      <li>• <strong>Immediate Cleanup:</strong> Files are deleted immediately after processing when possible</li>
                      <li>• <strong>No Permanent Storage:</strong> We never store your files permanently on our servers</li>
                      <li>• <strong>Secure Deletion:</strong> Files are securely overwritten, not just marked as deleted</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">File Security Measures</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Isolated Processing:</strong> Each file is processed in an isolated environment</li>
                    <li>• <strong>Access Control:</strong> Only authorized systems can access uploaded files</li>
                    <li>• <strong>Regular Security Audits:</strong> We conduct regular security assessments</li>
                    <li>• <strong>No File Sharing:</strong> Your files are never shared with other users</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Data Retention Policy
              </CardTitle>
              <CardDescription>
                How long we retain different types of data from our PDF tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">File Data</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• <strong>Uploaded Files:</strong> Maximum 1 hour</li>
                      <li>• <strong>Processed Files:</strong> Deleted immediately after download</li>
                      <li>• <strong>Temporary Data:</strong> Cleared within 15 minutes</li>
                      <li>• <strong>Processing Logs:</strong> 24 hours for error tracking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">System Data</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• <strong>IP Addresses:</strong> 30 days for security</li>
                      <li>• <strong>Error Logs:</strong> 90 days for system improvement</li>
                      <li>• <strong>Analytics Data:</strong> 12 months (anonymized)</li>
                      <li>• <strong>Support Emails:</strong> 2 years for reference</li>
                    </ul>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Data Minimization:</strong> We follow the principle of data minimization, 
                    collecting and retaining only the minimum data necessary for our PDF tools to function.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Data Sharing Policy
              </CardTitle>
              <CardDescription>
                Our commitment to not sharing your data with third parties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium mb-2">🛡️ No Data Selling</p>
                  <p className="text-blue-700">
                    We never sell, rent, or trade your personal information or files to third parties. 
                    Your privacy is not for sale.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Limited Data Sharing</h3>
                  <p className="text-slate-700 mb-3">
                    We only share data in these specific, limited circumstances:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Service Providers:</strong> Essential services like hosting and security (with strict contracts)</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law or court order</li>
                    <li>• <strong>Security Threats:</strong> To prevent fraud or protect our systems</li>
                    <li>• <strong>Business Transfer:</strong> In case of merger or acquisition (with same privacy protections)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Third-Party Services</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>CDN Services:</strong> For faster global delivery of our PDF tools</li>
                    <li>• <strong>Security Services:</strong> For DDoS protection and threat prevention</li>
                    <li>• <strong>Analytics:</strong> Privacy-focused analytics that don't track individuals</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Your Privacy Rights
              </CardTitle>
              <CardDescription>
                Your rights regarding data protection and GDPR compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">GDPR Compliance</h3>
                  <p className="text-slate-700 mb-3">
                    As GDPR compliant PDF tools, we ensure your rights are protected:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Right to Access:</strong> Request information about data we have about you</li>
                    <li>• <strong>Right to Rectification:</strong> Correct any inaccurate personal data</li>
                    <li>• <strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                    <li>• <strong>Right to Portability:</strong> Receive your data in a structured format</li>
                    <li>• <strong>Right to Object:</strong> Object to processing of your personal data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">How to Exercise Your Rights</h3>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <p className="text-slate-700 mb-2">
                      <strong>Contact Us:</strong> Email us at support@pdfo.dev with your request
                    </p>
                    <p className="text-slate-700 mb-2">
                      <strong>Response Time:</strong> We'll respond within 30 days
                    </p>
                    <p className="text-slate-700">
                      <strong>Verification:</strong> We may need to verify your identity for security
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Data Protection Officer</h3>
                  <p className="text-slate-700">
                    For data protection inquiries, contact our Data Protection Officer at support@pdfo.dev
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
              <CardDescription>
                Special protections for users under 18
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 mb-4">
                Our PDF tools are designed for general use and don't specifically target children. 
                However, we take extra care to protect young users:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Age Verification:</strong> We don't collect age information, making our tools accessible to all</li>
                <li>• <strong>No Tracking:</strong> We don't track or profile any users, including children</li>
                <li>• <strong>Parental Rights:</strong> Parents can contact us to request deletion of any data</li>
                <li>• <strong>Educational Use:</strong> Our tools are suitable for educational purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* International Data Transfers */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
              <CardDescription>
                How we handle data across borders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700">
                  Our PDF tools may process data in different countries to provide global service:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Adequate Protection:</strong> We only transfer data to countries with adequate privacy laws</li>
                  <li>• <strong>Safeguards:</strong> We use Standard Contractual Clauses for EU data transfers</li>
                  <li>• <strong>Encryption:</strong> All data transfers use strong encryption</li>
                  <li>• <strong>Minimal Transfers:</strong> We minimize cross-border data movement</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
              <CardDescription>
                How we notify you of policy updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700">
                  We may update this privacy policy to reflect changes in our practices or legal requirements:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• <strong>Notification:</strong> Major changes will be prominently displayed on our website</li>
                  <li>• <strong>Version History:</strong> We maintain a history of policy versions</li>
                  <li>• <strong>Effective Date:</strong> Changes take effect 30 days after posting</li>
                  <li>• <strong>Continued Use:</strong> Using our PDF tools after changes means you accept the new policy</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us About Privacy
              </CardTitle>
              <CardDescription>
                Get in touch with questions about our privacy practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Privacy Questions</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Email:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Subject Line:</strong> "Privacy Policy Question"
                      </li>
                      <li>
                        <strong>Response Time:</strong> Within 48 hours
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Data Protection Rights</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>GDPR Requests:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Data Deletion:</strong> Include "Delete My Data" in subject
                      </li>
                      <li>
                        <strong>Data Access:</strong> Include "Data Access Request" in subject
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Security Tip:</strong> When contacting us about privacy matters, 
                    please don't include sensitive information in your initial email.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}