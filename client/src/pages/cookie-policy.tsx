import { Cookie, Shield, Settings, Globe, Info, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

export default function CookiePolicy() {
  const currentLang = getCurrentLanguage();
  const lastUpdated = "January 8, 2024";

  const cookieTypes = [
    {
      name: "Essential Cookies",
      purpose: "Required for basic website functionality",
      examples: ["Session management", "Security tokens", "Language preferences"],
      duration: "Session or up to 30 days",
      canDisable: false,
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Analytics Cookies",
      purpose: "Help us understand website usage and improve performance",
      examples: ["Page views", "User interactions", "Error tracking"],
      duration: "Up to 12 months",
      canDisable: true,
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Functionality Cookies",
      purpose: "Remember your preferences and settings",
      examples: ["Theme preferences", "Tool settings", "Interface customization"],
      duration: "Up to 6 months",
      canDisable: true,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const browserGuides = [
    {
      browser: "Google Chrome",
      steps: [
        "Click the three dots menu (⋮) in the top right",
        "Select 'Settings'",
        "Click 'Privacy and security'",
        "Select 'Cookies and other site data'",
        "Choose your preferred cookie settings"
      ]
    },
    {
      browser: "Mozilla Firefox",
      steps: [
        "Click the menu button (≡) in the top right",
        "Select 'Settings'",
        "Click 'Privacy & Security'",
        "Find 'Cookies and Site Data'",
        "Click 'Manage Data' or adjust settings"
      ]
    },
    {
      browser: "Safari",
      steps: [
        "Click 'Safari' in the menu bar",
        "Select 'Preferences'",
        "Click the 'Privacy' tab",
        "Adjust cookie settings as needed",
        "Click 'Manage Website Data' to remove specific cookies"
      ]
    },
    {
      browser: "Microsoft Edge",
      steps: [
        "Click the three dots menu (...) in the top right",
        "Select 'Settings'",
        "Click 'Cookies and site permissions'",
        "Select 'Cookies and site data'",
        "Adjust your cookie preferences"
      ]
    }
  ];

  return (
    <>
      <MultiLangSEOHead
        title="Cookie Policy - PDF Tools Cookie Usage & Privacy Settings"
        description="Comprehensive cookie policy for our online PDF tools. Learn how we use cookies, manage your privacy settings, and comply with GDPR cookie regulations."
        keywords="PDF tools cookie policy, online PDF tools cookies, GDPR cookie policy for PDF tools, cookie usage for PDF tools, PDF cookie settings"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/cookie-policy' : `/${currentLang}/cookie-policy`}`}
        languageCode={currentLang}
        structuredDataType="WebSite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              This cookie policy explains how we use cookies and similar technologies on our 
              online PDF tools website to enhance your experience and comply with privacy regulations.
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
            <Cookie className="h-4 w-4" />
            <AlertDescription>
              <strong>Cookie Summary:</strong> We use essential cookies for basic functionality and analytics cookies 
              to improve our PDF tools. You can control most cookies through your browser settings, but disabling 
              essential cookies may affect website functionality.
            </AlertDescription>
          </Alert>

          {/* What Are Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 mr-2" />
                What Are Cookies?
              </CardTitle>
              <CardDescription>
                Understanding cookies and their role in our online PDF tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cookie Definition</h3>
                  <p className="text-slate-700 mb-4">
                    Cookies are small text files that are stored on your device when you visit our PDF tools website. 
                    They help us remember your preferences, analyze how you use our services, and provide a better 
                    user experience.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">How Cookies Work</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Storage:</strong> Cookies are stored locally on your device by your web browser</li>
                      <li>• <strong>Information:</strong> They contain small amounts of data about your visit and preferences</li>
                      <li>• <strong>Communication:</strong> They help our server recognize you when you return</li>
                      <li>• <strong>Expiration:</strong> Cookies have expiration dates and are automatically deleted when they expire</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                    <li>• <strong>Persistent Cookies:</strong> Remain on your device for a specified period</li>
                    <li>• <strong>First-Party Cookies:</strong> Set directly by our PDF tools website</li>
                    <li>• <strong>Third-Party Cookies:</strong> Set by external services we use (if applicable)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                How We Use Cookies
              </CardTitle>
              <CardDescription>
                Detailed breakdown of cookie usage on our PDF tools platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold">{type.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={type.color}>
                          {type.canDisable ? "Optional" : "Required"}
                        </Badge>
                        {!type.canDisable && <CheckCircle className="w-4 h-4 text-green-600" />}
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-3">{type.purpose}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Examples:</h4>
                        <ul className="space-y-1 text-sm text-slate-600">
                          {type.examples.map((example, i) => (
                            <li key={i}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Duration:</h4>
                        <p className="text-sm text-slate-600">{type.duration}</p>
                        <h4 className="font-semibold mb-2 mt-2">Can be disabled:</h4>
                        <p className="text-sm text-slate-600">
                          {type.canDisable ? "Yes, through browser settings" : "No, required for functionality"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cookie Consent */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Cookie Consent & Legal Compliance
              </CardTitle>
              <CardDescription>
                How we obtain consent and comply with privacy regulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">GDPR Compliance</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium mb-2">🛡️ Privacy Protection</p>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Lawful Basis:</strong> We use cookies based on legitimate interest and consent</li>
                      <li>• <strong>Essential Cookies:</strong> No consent required for cookies necessary for service operation</li>
                      <li>• <strong>Optional Cookies:</strong> We obtain consent before setting non-essential cookies</li>
                      <li>• <strong>Withdrawal:</strong> You can withdraw consent at any time through browser settings</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">How We Obtain Consent</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Cookie Banner:</strong> We display a cookie notice when you first visit our website</li>
                    <li>• <strong>Continued Use:</strong> Continuing to use our PDF tools implies consent to essential cookies</li>
                    <li>• <strong>Granular Control:</strong> You can accept or reject specific cookie categories</li>
                    <li>• <strong>Settings Page:</strong> Access cookie preferences through our settings (if available)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Global Privacy Laws</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>GDPR (EU):</strong> General Data Protection Regulation compliance</li>
                    <li>• <strong>CCPA (California):</strong> California Consumer Privacy Act compliance</li>
                    <li>• <strong>PECR (UK):</strong> Privacy and Electronic Communications Regulations</li>
                    <li>• <strong>LGPD (Brazil):</strong> Lei Geral de Proteção de Dados compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Managing Your Cookie Settings
              </CardTitle>
              <CardDescription>
                How to control, disable, or delete cookies in your browser
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Browser Cookie Controls</h3>
                  <p className="text-slate-700 mb-4">
                    You can manage cookies through your browser settings. Here's how to do it in popular browsers:
                  </p>
                  
                  <div className="grid gap-4">
                    {browserGuides.map((guide, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">{guide.browser}</h4>
                        <ol className="space-y-2 text-sm text-slate-700">
                          {guide.steps.map((step, i) => (
                            <li key={i} className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cookie Management Options</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">What You Can Do</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• <strong>Block All Cookies:</strong> Prevent all cookies from being stored</li>
                        <li>• <strong>Block Third-Party:</strong> Only allow cookies from our website</li>
                        <li>• <strong>Delete Existing:</strong> Remove cookies already stored</li>
                        <li>• <strong>Selective Blocking:</strong> Choose which sites can set cookies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Impact of Disabling Cookies</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• <strong>Reduced Functionality:</strong> Some PDF tools features may not work</li>
                        <li>• <strong>Lost Preferences:</strong> Settings won't be remembered</li>
                        <li>• <strong>Repeated Prompts:</strong> Cookie notices may appear repeatedly</li>
                        <li>• <strong>Basic Operation:</strong> Core PDF processing will still work</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> Disabling cookies may affect the functionality of our PDF tools. 
                    Essential cookies are required for basic security and operation.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Third-Party Services & Cookies</CardTitle>
              <CardDescription>
                External services that may set cookies on our PDF tools website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Analytics Services</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">📊 Website Analytics</p>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Purpose:</strong> Track website usage and improve PDF tools performance</li>
                      <li>• <strong>Data Collected:</strong> Page views, user interactions, device information</li>
                      <li>• <strong>Retention:</strong> Analytics data is retained for up to 26 months</li>
                      <li>• <strong>Opt-Out:</strong> You can opt out through browser settings or analytics settings</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Content Delivery Networks (CDN)</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Purpose:</strong> Deliver PDF tools content faster globally</li>
                    <li>• <strong>Cookies:</strong> May set performance and security cookies</li>
                    <li>• <strong>Duration:</strong> Typically short-term or session-based</li>
                    <li>• <strong>Control:</strong> Can be managed through browser settings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Security Services</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Purpose:</strong> Protect against malicious attacks and abuse</li>
                    <li>• <strong>Cookies:</strong> Security tokens and threat detection</li>
                    <li>• <strong>Necessity:</strong> Required for safe PDF file processing</li>
                    <li>• <strong>Privacy:</strong> No personal data is collected for security purposes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates to Cookie Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Updates to This Cookie Policy</CardTitle>
              <CardDescription>
                How we notify you of changes to our cookie practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Policy Changes</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Regular Updates:</strong> We may update this policy to reflect new cookie practices</li>
                    <li>• <strong>Legal Changes:</strong> Updates may be required due to new privacy regulations</li>
                    <li>• <strong>Feature Updates:</strong> New PDF tools features may require different cookie usage</li>
                    <li>• <strong>Effective Date:</strong> Changes take effect immediately upon posting</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">How We Notify You</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>Website Notice:</strong> Prominent notice on our PDF tools homepage</li>
                      <li>• <strong>Updated Date:</strong> "Last Updated" date at the top of this policy</li>
                      <li>• <strong>Cookie Banner:</strong> Updated cookie consent notice if applicable</li>
                      <li>• <strong>Email Notice:</strong> If you've provided your email for support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Contact Us About Cookies
              </CardTitle>
              <CardDescription>
                Questions about our cookie policy or privacy practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Cookie Questions</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Email:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Subject Line:</strong> "Cookie Policy Question"
                      </li>
                      <li>
                        <strong>Response Time:</strong> Within 48 hours
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Privacy Rights</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <strong>Data Requests:</strong> support@pdfo.dev
                      </li>
                      <li>
                        <strong>Cookie Complaints:</strong> Include "Cookie Complaint" in subject
                      </li>
                      <li>
                        <strong>Opt-Out Requests:</strong> Include "Cookie Opt-Out" in subject
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Additional Resources:</strong> For more information about cookies and privacy, 
                    visit our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> page.
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