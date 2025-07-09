import { Scale, FileText, Shield, AlertTriangle, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

export default function TermsOfService() {
  const currentLang = getCurrentLanguage();
  const lastUpdated = "January 8, 2024";

  return (
    <>
      <MultiLangSEOHead
        title="Terms of Service - PDF Tools Usage Policy & User Agreement"
        description="Complete terms of service for our online PDF tools. Understand your rights, responsibilities, and our service limitations when using our free PDF conversion and editing tools."
        keywords="PDF tools terms of service, online PDF tools terms, PDF service usage policy, user agreement for PDF tools, PDF tools legal terms"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/terms-of-service' : `/${currentLang}/terms-of-service`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our online PDF tools. By using our services, 
              you agree to be bound by these terms and conditions.
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
            <Scale className="h-4 w-4" />
            <AlertDescription>
              <strong>Key Points:</strong> By using our PDF tools, you agree to use them legally and responsibly. 
              We provide the service "as-is" and are not liable for file content or processing results. 
              These terms may change, and continued use means acceptance of updates.
            </AlertDescription>
          </Alert>

          {/* Acceptance of Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                1. Acceptance of Terms
              </CardTitle>
              <CardDescription>
                By using our online PDF tools, you agree to these terms of service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700">
                  By accessing and using our PDF tools website and services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Agreement to Terms</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Binding Agreement:</strong> These terms create a legal agreement between you and our PDF tools service</li>
                    <li>• <strong>Capacity:</strong> You must be at least 13 years old or have parental consent to use our services</li>
                    <li>• <strong>Authority:</strong> If using on behalf of an organization, you have authority to bind that entity</li>
                    <li>• <strong>Compliance:</strong> You agree to comply with all applicable local, state, and federal laws</li>
                  </ul>
                </div>
                
                <p className="text-slate-700">
                  <strong>Rejection of Terms:</strong> If you do not agree to these terms, you may not use our PDF tools or services. 
                  Your continued use of our services constitutes acceptance of any updated terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                2. User Responsibilities & Acceptable Use
              </CardTitle>
              <CardDescription>
                Your obligations when using our PDF tools and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Permitted Uses</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Personal Use:</strong> Use PDF tools for personal, educational, or business purposes</li>
                    <li>• <strong>File Processing:</strong> Upload and process files you own or have permission to use</li>
                    <li>• <strong>Legitimate Purposes:</strong> Use services for lawful purposes only</li>
                    <li>• <strong>Reasonable Usage:</strong> Use services within reasonable limits to ensure availability for all users</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Prohibited Uses</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium mb-2">⚠️ The following activities are strictly prohibited:</p>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Illegal Content:</strong> Upload or process files containing illegal, harmful, or offensive material</li>
                      <li>• <strong>Copyright Violation:</strong> Process copyrighted materials without proper authorization</li>
                      <li>• <strong>Malware Distribution:</strong> Upload files containing viruses, malware, or malicious code</li>
                      <li>• <strong>Service Abuse:</strong> Attempt to overload, hack, or disrupt our PDF tools service</li>
                      <li>• <strong>Automated Abuse:</strong> Use bots or scripts to abuse our services</li>
                      <li>• <strong>Reverse Engineering:</strong> Attempt to reverse engineer or copy our PDF tools</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Content Responsibility</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>File Ownership:</strong> You must own or have rights to all files you upload</li>
                    <li>• <strong>Content Liability:</strong> You are solely responsible for the content of your uploaded files</li>
                    <li>• <strong>Legal Compliance:</strong> Ensure all uploaded content complies with applicable laws</li>
                    <li>• <strong>Privacy Respect:</strong> Do not upload files containing others' private information without consent</li>
                  </ul>
                </div>
                
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Violation Consequences:</strong> Violating these terms may result in immediate termination 
                    of your access to our PDF tools service and potential legal action.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* File Handling Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                3. File Handling & Service Disclaimer
              </CardTitle>
              <CardDescription>
                Understanding our limitations and your responsibilities for file processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">"As-Is" Service Provision</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 font-medium mb-2">⚠️ Important Service Limitations</p>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>No Warranties:</strong> Our PDF tools are provided "as-is" without any warranties</li>
                      <li>• <strong>No Guarantees:</strong> We don't guarantee perfect results or error-free processing</li>
                      <li>• <strong>Service Availability:</strong> Services may be temporarily unavailable due to maintenance</li>
                      <li>• <strong>Processing Results:</strong> You are responsible for verifying the accuracy of processed files</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">File Processing Disclaimers</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Quality Variance:</strong> Output quality may vary depending on source file characteristics</li>
                    <li>• <strong>Format Limitations:</strong> Some file formats or features may not be fully supported</li>
                    <li>• <strong>File Size Limits:</strong> Large files may be rejected or processed with limitations</li>
                    <li>• <strong>Processing Time:</strong> Processing time varies based on file complexity and server load</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">User File Responsibility</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Backup Originals:</strong> Always keep backups of your original files</li>
                    <li>• <strong>Verify Results:</strong> Review processed files before relying on them</li>
                    <li>• <strong>Sensitive Data:</strong> Use caution when processing files with sensitive information</li>
                    <li>• <strong>File Security:</strong> We implement security measures but cannot guarantee absolute security</li>
                  </ul>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>File Deletion:</strong> All uploaded files are automatically deleted within 1 hour. 
                    We are not responsible for retrieving deleted files.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                4. Intellectual Property Rights
              </CardTitle>
              <CardDescription>
                Ownership and usage rights for our PDF tools and your content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Intellectual Property</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">🛡️ Protected Content</p>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Website Design:</strong> All website design, layout, and user interface elements</li>
                      <li>• <strong>Software Code:</strong> All source code, algorithms, and technical implementations</li>
                      <li>• <strong>Brand Assets:</strong> Logos, trademarks, and brand materials</li>
                      <li>• <strong>Content:</strong> All text, images, and multimedia content on our website</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Your Content Rights</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Ownership Retained:</strong> You retain all ownership rights to your uploaded files</li>
                    <li>• <strong>Processing License:</strong> You grant us temporary license to process your files</li>
                    <li>• <strong>No Permanent Rights:</strong> We claim no permanent rights to your content</li>
                    <li>• <strong>Automatic Deletion:</strong> Files are automatically deleted, ending our processing license</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Usage Restrictions</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>No Copying:</strong> You may not copy, modify, or distribute our PDF tools code</li>
                    <li>• <strong>No Reverse Engineering:</strong> Attempting to reverse engineer our tools is prohibited</li>
                    <li>• <strong>No Redistribution:</strong> You may not redistribute or resell our services</li>
                    <li>• <strong>No Commercial Use:</strong> You may not use our brand assets for commercial purposes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">DMCA Compliance</h3>
                  <p className="text-slate-700 mb-2">
                    We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA):
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Copyright Notices:</strong> Report copyright infringement to support@pdfo.dev</li>
                    <li>• <strong>Takedown Procedure:</strong> We will investigate and remove infringing content</li>
                    <li>• <strong>Counter-Notices:</strong> Users may file counter-notices for wrongful takedowns</li>
                    <li>• <strong>Repeat Offenders:</strong> Accounts with repeated violations may be terminated</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                5. Limitation of Liability
              </CardTitle>
              <CardDescription>
                Understanding our liability limitations for PDF tools service usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Liability Limitations</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 font-medium mb-2">⚠️ Important Legal Limitations</p>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>No Indirect Damages:</strong> We are not liable for indirect, incidental, or consequential damages</li>
                      <li>• <strong>No Business Losses:</strong> We are not responsible for lost profits, data, or business opportunities</li>
                      <li>• <strong>Maximum Liability:</strong> Our total liability is limited to $100 USD or fees paid (whichever is greater)</li>
                      <li>• <strong>Time Limitation:</strong> Claims must be made within one year of the incident</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Specific Disclaimers</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>File Corruption:</strong> We are not liable for file corruption or data loss during processing</li>
                    <li>• <strong>Processing Errors:</strong> We are not responsible for errors in PDF conversion or manipulation</li>
                    <li>• <strong>Third-Party Content:</strong> We are not liable for content in files you upload and process</li>
                    <li>• <strong>Service Interruption:</strong> We are not liable for service downtime or interruptions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">User Indemnification</h3>
                  <p className="text-slate-700 mb-2">
                    By using our PDF tools, you agree to indemnify and hold us harmless from:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>User Content:</strong> Any claims related to files you upload or process</li>
                    <li>• <strong>Terms Violations:</strong> Any damages resulting from your violation of these terms</li>
                    <li>• <strong>Third-Party Claims:</strong> Any third-party claims arising from your use of our services</li>
                    <li>• <strong>Legal Costs:</strong> Reasonable attorneys' fees and costs related to defending such claims</li>
                  </ul>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Jurisdiction Note:</strong> Some jurisdictions do not allow limitation of liability. 
                    In such cases, our liability is limited to the maximum extent permitted by law.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>6. Service Availability & Modifications</CardTitle>
              <CardDescription>
                Our rights to modify or discontinue PDF tools services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Service Modifications</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Feature Updates:</strong> We may add, modify, or remove features without notice</li>
                    <li>• <strong>Performance Improvements:</strong> We continuously work to improve our PDF tools</li>
                    <li>• <strong>Security Updates:</strong> We may implement security measures that affect functionality</li>
                    <li>• <strong>Maintenance:</strong> Regular maintenance may temporarily affect service availability</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Service Termination</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Right to Terminate:</strong> We reserve the right to discontinue services at any time</li>
                    <li>• <strong>Notice Period:</strong> We will provide reasonable notice for permanent discontinuation</li>
                    <li>• <strong>No Refunds:</strong> No refunds will be provided for free services</li>
                    <li>• <strong>Data Deletion:</strong> All user data will be deleted upon service termination</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>7. Changes to Terms of Service</CardTitle>
              <CardDescription>
                How we update these terms and notify users of changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Term Updates</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Right to Modify:</strong> We may update these terms at any time to reflect changes in our services</li>
                    <li>• <strong>Notification Method:</strong> Changes will be posted on this page with an updated "Last Modified" date</li>
                    <li>• <strong>Material Changes:</strong> Significant changes will be highlighted prominently on our website</li>
                    <li>• <strong>Effective Date:</strong> Changes become effective immediately upon posting</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">User Acceptance</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Continued Use:</strong> Continued use of our PDF tools after changes constitutes acceptance</li>
                      <li>• <strong>Disagreement:</strong> If you disagree with changes, you must stop using our services</li>
                      <li>• <strong>Regular Review:</strong> We recommend reviewing these terms periodically</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>8. Governing Law & Dispute Resolution</CardTitle>
              <CardDescription>
                Legal jurisdiction and dispute resolution procedures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Applicable Law</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Governing Jurisdiction:</strong> These terms are governed by the laws of the United States</li>
                    <li>• <strong>Federal Law:</strong> Federal laws apply where applicable</li>
                    <li>• <strong>International Users:</strong> International users agree to U.S. jurisdiction for disputes</li>
                    <li>• <strong>Conflict Resolution:</strong> U.S. law governs in case of conflicts with local laws</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Dispute Resolution</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Informal Resolution:</strong> Contact support@pdfo.dev for dispute resolution attempts</li>
                    <li>• <strong>Mediation:</strong> We encourage mediation before formal legal proceedings</li>
                    <li>• <strong>Arbitration:</strong> Binding arbitration may be required for certain disputes</li>
                    <li>• <strong>Class Action Waiver:</strong> Users waive rights to participate in class action lawsuits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
              <CardDescription>
                How to reach us regarding these terms or service questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Legal Questions</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Email:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Subject Line:</strong> "Terms of Service Question"
                      </li>
                      <li>
                        <strong>Response Time:</strong> Within 48 hours
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Service Support</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Technical Support:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Service Issues:</strong> Include "Service Issue" in subject
                      </li>
                      <li>
                        <strong>Account Problems:</strong> Include "Account Issue" in subject
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> These Terms of Service constitute the entire agreement between you and our 
                    PDF tools service. No other agreements, representations, or warranties apply unless explicitly stated.
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