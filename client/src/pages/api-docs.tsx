import { useState } from "react";
import { Copy, Check, Code, Key, FileText, Settings, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";
import { getCurrentLanguage } from "@/lib/i18n";

interface CodeExample {
  title: string;
  language: string;
  code: string;
}

interface APIEndpoint {
  method: string;
  path: string;
  description: string;
  parameters: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  examples: CodeExample[];
  response: string;
}

const apiEndpoints: APIEndpoint[] = [
  {
    method: "POST",
    path: "/api/pdf/merge",
    description: "Merge multiple PDF files into a single document",
    parameters: [
      {
        name: "files",
        type: "File[]",
        required: true,
        description: "Array of PDF files to merge (max 20 files, 100MB each)"
      },
      {
        name: "filename",
        type: "string",
        required: false,
        description: "Custom filename for the merged PDF (default: 'merged.pdf')"
      }
    ],
    examples: [
      {
        title: "cURL",
        language: "bash",
        code: `curl -X POST "https://api.pdftools.com/api/pdf/merge" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "files=@file1.pdf" \\
  -F "files=@file2.pdf" \\
  -F "filename=combined_document.pdf"`
      },
      {
        title: "JavaScript",
        language: "javascript",
        code: `const formData = new FormData();
formData.append('files', file1);
formData.append('files', file2);
formData.append('filename', 'combined_document.pdf');

const response = await fetch('https://api.pdftools.com/api/pdf/merge', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const blob = await response.blob();
// Download or process the merged PDF`
      }
    ],
    response: `{
  "success": true,
  "message": "PDF files merged successfully",
  "filename": "combined_document.pdf",
  "size": 2048576,
  "pages": 25
}`
  },
  {
    method: "POST",
    path: "/api/pdf/split",
    description: "Split a PDF document into smaller files",
    parameters: [
      {
        name: "file",
        type: "File",
        required: true,
        description: "PDF file to split (max 100MB)"
      },
      {
        name: "mode",
        type: "string",
        required: true,
        description: "Split mode: 'pages' or 'range'"
      },
      {
        name: "pageRange",
        type: "string",
        required: false,
        description: "Page range for splitting (e.g., '1-5,10-15')"
      }
    ],
    examples: [
      {
        title: "cURL",
        language: "bash",
        code: `curl -X POST "https://api.pdftools.com/api/pdf/split" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@document.pdf" \\
  -F "mode=range" \\
  -F "pageRange=1-5,10-15"`
      },
      {
        title: "JavaScript",
        language: "javascript",
        code: `const formData = new FormData();
formData.append('file', pdfFile);
formData.append('mode', 'range');
formData.append('pageRange', '1-5,10-15');

const response = await fetch('https://api.pdftools.com/api/pdf/split', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const zipBlob = await response.blob();
// Extract split PDF files from ZIP`
      }
    ],
    response: `{
  "success": true,
  "message": "PDF split successfully",
  "files": [
    {
      "filename": "document_pages_1-5.pdf",
      "size": 524288,
      "pages": 5
    },
    {
      "filename": "document_pages_10-15.pdf",
      "size": 786432,
      "pages": 6
    }
  ]
}`
  },
  {
    method: "POST",
    path: "/api/pdf/compress",
    description: "Compress PDF files to reduce file size",
    parameters: [
      {
        name: "file",
        type: "File",
        required: true,
        description: "PDF file to compress (max 100MB)"
      },
      {
        name: "quality",
        type: "string",
        required: false,
        description: "Compression quality: 'low', 'medium', 'high' (default: 'medium')"
      }
    ],
    examples: [
      {
        title: "cURL",
        language: "bash",
        code: `curl -X POST "https://api.pdftools.com/api/pdf/compress" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@large_document.pdf" \\
  -F "quality=medium"`
      },
      {
        title: "JavaScript",
        language: "javascript",
        code: `const formData = new FormData();
formData.append('file', pdfFile);
formData.append('quality', 'medium');

const response = await fetch('https://api.pdftools.com/api/pdf/compress', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const compressedBlob = await response.blob();
// Download compressed PDF`
      }
    ],
    response: `{
  "success": true,
  "message": "PDF compressed successfully",
  "originalSize": 5242880,
  "compressedSize": 2621440,
  "compressionRatio": "50%",
  "filename": "compressed_document.pdf"
}`
  },
  {
    method: "POST",
    path: "/api/pdf/to-word",
    description: "Convert PDF documents to Word format",
    parameters: [
      {
        name: "file",
        type: "File",
        required: true,
        description: "PDF file to convert (max 100MB)"
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "Output format: 'docx' or 'doc' (default: 'docx')"
      }
    ],
    examples: [
      {
        title: "cURL",
        language: "bash",
        code: `curl -X POST "https://api.pdftools.com/api/pdf/to-word" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@document.pdf" \\
  -F "format=docx"`
      },
      {
        title: "JavaScript",
        language: "javascript",
        code: `const formData = new FormData();
formData.append('file', pdfFile);
formData.append('format', 'docx');

const response = await fetch('https://api.pdftools.com/api/pdf/to-word', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const wordBlob = await response.blob();
// Download converted Word document`
      }
    ],
    response: `{
  "success": true,
  "message": "PDF converted to Word successfully",
  "filename": "document.docx",
  "size": 1048576,
  "format": "docx"
}`
  }
];

export default function APIDocs() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const currentLang = getCurrentLanguage();

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <MultiLangSEOHead
        title="PDF API Documentation - Developer Guide for Online PDF Tools"
        description="Complete API documentation for integrating PDF tools into your applications. Learn how to merge, split, compress, and convert PDF files programmatically with our REST API."
        keywords="PDF API, merge PDF API, split PDF API, compress PDF API, PDF to Word API, PDF conversion API, online PDF tools API, REST API documentation"
        canonical={`https://your-domain.com${currentLang === 'en' ? '/api-docs' : `/${currentLang}/api-docs`}`}
        languageCode={currentLang}
        structuredDataType="SoftwareApplication"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              PDF API Documentation
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Integrate powerful PDF processing capabilities into your applications with our comprehensive REST API. 
              Merge, split, compress, and convert PDF files programmatically.
            </p>
            <div className="flex justify-center mt-6">
              <Badge variant="secondary" className="px-4 py-2">
                <Code className="w-4 h-4 mr-2" />
                REST API v1.0
              </Badge>
            </div>
          </div>

          {/* Overview Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                API Overview
              </CardTitle>
              <CardDescription>
                Get started with our PDF processing API in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2">✓</Badge>
                      <span>Merge multiple PDF files</span>
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2">✓</Badge>
                      <span>Split PDF documents</span>
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2">✓</Badge>
                      <span>Compress PDF files</span>
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2">✓</Badge>
                      <span>Convert PDF to Word</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">API Specifications</h3>
                  <ul className="space-y-2">
                    <li><strong>Base URL:</strong> https://api.pdftools.com</li>
                    <li><strong>Authentication:</strong> Bearer Token</li>
                    <li><strong>Rate Limit:</strong> 1000 requests/hour</li>
                    <li><strong>Max File Size:</strong> 100MB per file</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Authentication Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Authentication
              </CardTitle>
              <CardDescription>
                Secure your API requests with authentication tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Free API Access:</strong> Get started with our free tier that includes 1000 API calls per month. 
                    Perfect for testing and small projects.
                  </AlertDescription>
                </Alert>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Getting Your API Key</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Sign up for a free developer account</li>
                      <li>Navigate to the API section in your dashboard</li>
                      <li>Generate a new API key</li>
                      <li>Copy your API key and store it securely</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Using Your API Key</h4>
                    <div className="bg-slate-100 rounded-md p-3">
                      <code className="text-sm">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Endpoints Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                API Endpoints
              </CardTitle>
              <CardDescription>
                Complete reference for all available PDF processing endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                          {endpoint.path}
                        </code>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{endpoint.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Name</th>
                                <th className="text-left p-2">Type</th>
                                <th className="text-left p-2">Required</th>
                                <th className="text-left p-2">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {endpoint.parameters.map((param, paramIndex) => (
                                <tr key={paramIndex} className="border-b">
                                  <td className="p-2 font-mono">{param.name}</td>
                                  <td className="p-2">
                                    <code className="bg-slate-100 px-1 rounded text-xs">
                                      {param.type}
                                    </code>
                                  </td>
                                  <td className="p-2">
                                    <Badge variant={param.required ? 'destructive' : 'secondary'} className="text-xs">
                                      {param.required ? 'Required' : 'Optional'}
                                    </Badge>
                                  </td>
                                  <td className="p-2">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Examples</h4>
                        <Tabs defaultValue="0" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            {endpoint.examples.map((example, exampleIndex) => (
                              <TabsTrigger key={exampleIndex} value={exampleIndex.toString()}>
                                {example.title}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          {endpoint.examples.map((example, exampleIndex) => (
                            <TabsContent key={exampleIndex} value={exampleIndex.toString()}>
                              <div className="relative">
                                <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto">
                                  <code>{example.code}</code>
                                </pre>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="absolute top-2 right-2 text-slate-400 hover:text-slate-100"
                                  onClick={() => copyToClipboard(example.code, `${index}-${exampleIndex}`)}
                                >
                                  {copiedCode === `${index}-${exampleIndex}` ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </Button>
                              </div>
                            </TabsContent>
                          ))}
                        </Tabs>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Response</h4>
                        <pre className="bg-slate-50 p-4 rounded-md overflow-x-auto">
                          <code>{endpoint.response}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Error Handling Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Error Handling</CardTitle>
              <CardDescription>
                Understanding API error responses and status codes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Common Error Codes</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Status Code</th>
                          <th className="text-left p-2">Error</th>
                          <th className="text-left p-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-mono">400</td>
                          <td className="p-2">Bad Request</td>
                          <td className="p-2">Invalid request parameters or malformed data</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-mono">401</td>
                          <td className="p-2">Unauthorized</td>
                          <td className="p-2">Missing or invalid API key</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-mono">413</td>
                          <td className="p-2">Payload Too Large</td>
                          <td className="p-2">File size exceeds 100MB limit</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-mono">429</td>
                          <td className="p-2">Too Many Requests</td>
                          <td className="p-2">Rate limit exceeded</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-mono">500</td>
                          <td className="p-2">Internal Server Error</td>
                          <td className="p-2">Server processing error</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Error Response Format</h4>
                  <pre className="bg-slate-50 p-4 rounded-md">
                    <code>{`{
  "success": false,
  "error": {
    "code": "INVALID_FILE_TYPE",
    "message": "Only PDF files are supported for this operation",
    "details": "File type 'image/png' is not supported"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>API Pricing</CardTitle>
              <CardDescription>
                Simple, transparent pricing for developers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Free Tier</h3>
                  <div className="text-3xl font-bold mb-2">$0</div>
                  <p className="text-slate-600 mb-4">Perfect for testing and small projects</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>1,000 API calls/month</li>
                    <li>100MB file size limit</li>
                    <li>Basic support</li>
                  </ul>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </div>
                
                <div className="border rounded-lg p-6 text-center border-blue-200 bg-blue-50">
                  <h3 className="font-semibold text-lg mb-2">Pro</h3>
                  <div className="text-3xl font-bold mb-2">$29</div>
                  <p className="text-slate-600 mb-4">For growing applications</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>50,000 API calls/month</li>
                    <li>500MB file size limit</li>
                    <li>Priority support</li>
                  </ul>
                  <Button className="w-full">Choose Pro</Button>
                </div>
                
                <div className="border rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-2">Custom</div>
                  <p className="text-slate-600 mb-4">For large-scale operations</p>
                  <ul className="text-sm space-y-1 mb-4">
                    <li>Unlimited API calls</li>
                    <li>No file size limits</li>
                    <li>24/7 dedicated support</li>
                  </ul>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card>
            <CardHeader>
              <CardTitle>Support & Contact</CardTitle>
              <CardDescription>
                Get help with API integration and technical questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Developer Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="/help-center" className="text-blue-600 hover:underline">
                        Help Center & Guides
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="text-blue-600 hover:underline">
                        Frequently Asked Questions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        SDKs & Code Examples
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        API Status Page
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <ul className="space-y-2">
                    <li>
                      <strong>Technical Support:</strong> support@pdfo.dev
                    </li>
                    <li>
                      <strong>Sales Inquiries:</strong> support@pdfo.dev
                    </li>
                    <li>
                      <strong>Response Time:</strong> Within 24 hours
                    </li>
                    <li>
                      <strong>Business Hours:</strong> Mon-Fri, 9AM-6PM EST
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}