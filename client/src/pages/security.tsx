import { Shield, Lock, Server, AlertTriangle, CheckCircle, Eye, FileX, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

export default function Security() {
  const currentLang = getCurrentLanguage();
  const lastUpdated = "January 8, 2024";

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All file transfers use SSL/TLS encryption",
      status: "Active",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: FileX,
      title: "Auto-File Deletion",
      description: "Files automatically deleted within 1 hour",
      status: "Active",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade cloud security",
      status: "Active",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: Eye,
      title: "No File Inspection",
      description: "We never read or analyze your file content",
      status: "Guaranteed",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const securityTips = [
    {
      title: "Avoid Sensitive Documents",
      description: "Don't upload confidential business documents, legal papers, or personal identification",
      level: "Critical",
      color: "text-red-600"
    },
    {
      title: "Use Strong Passwords",
      description: "If your PDF files are password-protected, use strong, unique passwords",
      level: "Important",
      color: "text-orange-600"
    },
    {
      title: "Verify Downloaded Files",
      description: "Always verify that downloaded files contain the expected content",
      level: "Recommended",
      color: "text-blue-600"
    },
    {
      title: "Keep Software Updated",
      description: "Use updated browsers and antivirus software for additional protection",
      level: "Recommended",
      color: "text-green-600"
    }
  ];

  return (
    <>
      <MultiLangSEOHead
        title="Security - PDF Tools File Protection & Data Encryption"
        description="Learn about our comprehensive security measures for online PDF tools. SSL encryption, auto-deletion, secure infrastructure, and file privacy protection for your documents."
        keywords="PDF tools security, online PDF tools encryption, file privacy for PDF tools, secure PDF tools, file protection PDF editor, PDF security policy"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/security' : `/${currentLang}/security`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Security & Data Protection
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your security and privacy are our top priorities. Learn how we protect your files 
              and data with enterprise-grade security measures for our online PDF tools.
            </p>
            <div className="flex justify-center mt-6">
              <div className="bg-slate-100 px-4 py-2 rounded-md">
                <p className="text-sm text-slate-700">
                  <strong>Last Updated:</strong> {lastUpdated}
                </p>
              </div>
            </div>
          </div>

          {/* Security Overview */}
          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>Security Promise:</strong> We use military-grade encryption, automatic file deletion, 
              and never store your documents permanently. Your privacy and file security are guaranteed 
              with our secure PDF tools platform.
            </AlertDescription>
          </Alert>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <feature.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <Badge className={feature.color}>{feature.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Encryption */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Data Encryption & Secure Transmission
              </CardTitle>
              <CardDescription>
                How we protect your files during upload, processing, and download
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">SSL/TLS Encryption</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium mb-2">🔒 Bank-Level Security</p>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>TLS 1.3 Protocol:</strong> Latest encryption standard for all data transmission</li>
                      <li>• <strong>256-bit Encryption:</strong> Military-grade encryption for file uploads and downloads</li>
                      <li>• <strong>Certificate Validation:</strong> Verified SSL certificates ensure secure connections</li>
                      <li>• <strong>Perfect Forward Secrecy:</strong> Each session uses unique encryption keys</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">File Processing Security</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Encrypted Storage:</strong> Files encrypted at rest during processing</li>
                    <li>• <strong>Isolated Processing:</strong> Each file processed in a secure, isolated environment</li>
                    <li>• <strong>Memory Protection:</strong> Secure memory allocation prevents data leaks</li>
                    <li>• <strong>Process Isolation:</strong> No cross-contamination between user files</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Network Security</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>DDoS Protection:</strong> Advanced protection against distributed denial of service attacks</li>
                    <li>• <strong>Firewall Security:</strong> Multi-layer firewall protection for our PDF tools infrastructure</li>
                    <li>• <strong>Intrusion Detection:</strong> Real-time monitoring for suspicious activities</li>
                    <li>• <strong>Rate Limiting:</strong> Protection against abuse and automated attacks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Privacy & Auto-Deletion */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileX className="w-5 h-5 mr-2" />
                File Privacy & Automatic Deletion Policy
              </CardTitle>
              <CardDescription>
                How we ensure your files remain private and are automatically deleted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Automatic File Deletion</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">⏰ Guaranteed Deletion Timeline</p>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>1-Hour Maximum:</strong> All uploaded files automatically deleted within 1 hour</li>
                      <li>• <strong>Immediate Cleanup:</strong> Files deleted immediately after processing when possible</li>
                      <li>• <strong>Secure Deletion:</strong> Files are cryptographically wiped, not just marked as deleted</li>
                      <li>• <strong>No Recovery:</strong> Deleted files cannot be recovered by anyone, including our team</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">File Privacy Protection</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>No Content Analysis:</strong> We never read, analyze, or index your file content</li>
                    <li>• <strong>No File Sharing:</strong> Your files are never shared with other users or third parties</li>
                    <li>• <strong>Private Processing:</strong> Each file is processed independently in isolation</li>
                    <li>• <strong>No Backup Copies:</strong> We don't create backup copies of your uploaded files</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Access Control</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Unique URLs:</strong> Processed files accessible only through unique, temporary URLs</li>
                    <li>• <strong>Time-Limited Access:</strong> Download links expire automatically</li>
                    <li>• <strong>No User Tracking:</strong> We don't track which files belong to which users</li>
                    <li>• <strong>Anonymous Processing:</strong> File processing is completely anonymous</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure Security */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Infrastructure Security & Monitoring
              </CardTitle>
              <CardDescription>
                Enterprise-grade security measures protecting our PDF tools platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cloud Infrastructure Security</h3>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-purple-800 font-medium mb-2">☁️ Enterprise-Grade Infrastructure</p>
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>Tier-1 Cloud Providers:</strong> Hosted on industry-leading cloud platforms</li>
                      <li>• <strong>Geographic Distribution:</strong> Multiple data centers for reliability and speed</li>
                      <li>• <strong>ISO 27001 Compliance:</strong> Our infrastructure meets international security standards</li>
                      <li>• <strong>SOC 2 Type II:</strong> Third-party audited security controls</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">24/7 Security Monitoring</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Real-Time Monitoring:</strong> Continuous monitoring of all system components</li>
                    <li>• <strong>Automated Alerts:</strong> Immediate notification of security events</li>
                    <li>• <strong>Threat Detection:</strong> Advanced AI-powered threat detection systems</li>
                    <li>• <strong>Security Logging:</strong> Comprehensive logging for security analysis and forensics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Server Security</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Hardened Servers:</strong> Minimal attack surface with unnecessary services disabled</li>
                    <li>• <strong>Regular Updates:</strong> Automatic security patches and updates</li>
                    <li>• <strong>Access Control:</strong> Multi-factor authentication for all administrative access</li>
                    <li>• <strong>Principle of Least Privilege:</strong> Minimal permissions for all system components</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Backup & Disaster Recovery</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>System Backups:</strong> Regular backups of system configurations (not user files)</li>
                    <li>• <strong>Disaster Recovery Plan:</strong> Comprehensive plan for service continuity</li>
                    <li>• <strong>Redundancy:</strong> Multiple server instances for high availability</li>
                    <li>• <strong>Recovery Testing:</strong> Regular testing of disaster recovery procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Security Tips */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                User Security Best Practices
              </CardTitle>
              <CardDescription>
                How you can protect yourself when using online PDF tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Security Recommendations</h3>
                  <div className="space-y-4">
                    {securityTips.map((tip, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{tip.title}</h4>
                          <span className={`text-sm font-medium ${tip.color}`}>{tip.level}</span>
                        </div>
                        <p className="text-slate-700">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">What NOT to Upload</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium mb-2">⚠️ Avoid Uploading These File Types:</p>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Personal IDs:</strong> Passports, driver's licenses, social security cards</li>
                      <li>• <strong>Financial Documents:</strong> Bank statements, tax returns, credit card information</li>
                      <li>• <strong>Legal Documents:</strong> Contracts, legal agreements, confidential correspondence</li>
                      <li>• <strong>Medical Records:</strong> Health information, medical reports, insurance documents</li>
                      <li>• <strong>Business Secrets:</strong> Trade secrets, proprietary information, confidential data</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Safe Usage Guidelines</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Use Secure Networks:</strong> Avoid public Wi-Fi for sensitive file processing</li>
                    <li>• <strong>Verify URLs:</strong> Always check that you're on the correct website</li>
                    <li>• <strong>Clear Browser Data:</strong> Clear downloads and cache after use on shared computers</li>
                    <li>• <strong>Log Out Properly:</strong> Close all browser tabs when finished</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incident Response */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Security Incident Response
              </CardTitle>
              <CardDescription>
                How we handle and respond to security incidents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Incident Response Process</h3>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-orange-800 font-medium mb-2">🚨 24/7 Response Team</p>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Immediate Detection:</strong> Automated systems detect and alert on security incidents</li>
                      <li>• <strong>Rapid Response:</strong> Security team responds within 15 minutes of detection</li>
                      <li>• <strong>Containment:</strong> Immediate isolation and containment of affected systems</li>
                      <li>• <strong>Investigation:</strong> Thorough investigation to determine impact and root cause</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">User Notification</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Transparency:</strong> We will notify users of any security incidents that may affect them</li>
                    <li>• <strong>Timely Communication:</strong> Notifications sent within 72 hours of discovery</li>
                    <li>• <strong>Clear Information:</strong> What happened, what data was affected, and what we're doing</li>
                    <li>• <strong>Regular Updates:</strong> Ongoing updates as investigation progresses</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recovery & Prevention</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Service Restoration:</strong> Priority on restoring secure service as quickly as possible</li>
                    <li>• <strong>Security Improvements:</strong> Implement additional security measures to prevent recurrence</li>
                    <li>• <strong>Post-Incident Review:</strong> Comprehensive review and security audit after incidents</li>
                    <li>• <strong>Third-Party Audits:</strong> Independent security audits following major incidents</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Reporting Security Issues</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">🔍 Help Us Stay Secure</p>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Report Issues:</strong> Email security concerns to support@pdfo.dev</li>
                      <li>• <strong>Responsible Disclosure:</strong> We support responsible security disclosure</li>
                      <li>• <strong>Bug Bounty:</strong> Rewards for security researchers who report valid vulnerabilities</li>
                      <li>• <strong>Quick Response:</strong> All security reports reviewed within 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance & Certifications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Compliance & Security Certifications
              </CardTitle>
              <CardDescription>
                Industry standards and regulations we comply with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Privacy Compliance</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>GDPR (EU):</strong> General Data Protection Regulation compliance</li>
                    <li>• <strong>CCPA (California):</strong> California Consumer Privacy Act compliance</li>
                    <li>• <strong>PIPEDA (Canada):</strong> Personal Information Protection compliance</li>
                    <li>• <strong>LGPD (Brazil):</strong> Lei Geral de Proteção de Dados compliance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Security Standards</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>ISO 27001:</strong> Information Security Management System</li>
                    <li>• <strong>SOC 2 Type II:</strong> Security, Availability, and Confidentiality</li>
                    <li>• <strong>PCI DSS:</strong> Payment Card Industry Data Security Standard</li>
                    <li>• <strong>OWASP:</strong> Following OWASP Top 10 security guidelines</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Security Team */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Contact Our Security Team
              </CardTitle>
              <CardDescription>
                Questions about security or reporting security issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Security Questions</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Email:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Subject Line:</strong> "Security Question"
                      </li>
                      <li>
                        <strong>Response Time:</strong> Within 24 hours
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Security Issues</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Security Reports:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Subject Line:</strong> "SECURITY ISSUE - Urgent"
                      </li>
                      <li>
                        <strong>Response Time:</strong> Within 4 hours
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Emergency Security Issues:</strong> For critical security vulnerabilities, 
                    please email us immediately with "CRITICAL SECURITY" in the subject line. 
                    We monitor security emails 24/7.
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