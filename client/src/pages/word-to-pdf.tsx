import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/pdf-tools/file-upload";
import ProgressIndicator from "@/components/pdf-tools/progress-indicator";
import SEOHead from "@/components/layout/seo-head";

interface ConvertRequest {
  file: File;
}

export default function WordToPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const convertMutation = useMutation({
    mutationFn: async (data: ConvertRequest) => {
      const formData = new FormData();
      formData.append('file', data.file);
      
      const response = await apiRequest('POST', '/api/pdf/from-word', formData);
      return response.blob();
    },
    onSuccess: (blob) => {
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast({
        title: "Success",
        description: "Word document converted to PDF successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to convert Word to PDF",
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (files: File[]) => {
    setFile(files[0]);
    setDownloadUrl(null);
  };

  const handleConvert = () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a Word document to convert",
        variant: "destructive",
      });
      return;
    }
    
    convertMutation.mutate({ file });
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'converted.pdf';
      a.click();
    }
  };

  return (
    <>
      <SEOHead 
        title="Word to PDF Converter - Free Online DOCX to PDF Tool"
        description="Convert Word documents (DOCX, DOC) to PDF format for free. Preserve formatting and create professional PDF documents."
        keywords="Word to PDF converter, DOCX to PDF, convert Word to PDF online, Word document to PDF"
      />
      
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-orange-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Word to PDF Converter
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Convert your Word documents (DOCX, DOC) to PDF format. Perfect for sharing and preserving document formatting.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload Word Document</CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload
                onFilesSelect={handleFileSelect}
                accept=".doc,.docx"
                multiple={false}
                maxFiles={1}
              />
              
              {file && (
                <div className="mt-6">
                  <div className="p-4 bg-slate-100 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-blue-500 mr-3" />
                      <div className="flex-1">
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-slate-500">
                          {(file.size / 1024 / 1024).toFixed(1)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {convertMutation.isPending && (
                <div className="mt-6">
                  <ProgressIndicator 
                    status="processing"
                    message="Converting Word to PDF..."
                  />
                </div>
              )}

              {downloadUrl && (
                <div className="mt-6">
                  <Alert>
                    <Download className="w-4 h-4" />
                    <AlertDescription>
                      Your PDF document is ready for download!
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    onClick={handleDownload}
                    className="mt-4 w-full"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Document
                  </Button>
                </div>
              )}

              {file && !convertMutation.isPending && !downloadUrl && (
                <Button 
                  onClick={handleConvert}
                  className="mt-6 w-full"
                  size="lg"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Convert to PDF
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Why Convert Word to PDF?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">🔒 Preserve Formatting</h3>
                    <p className="text-sm text-slate-600">
                      Maintain exact layout, fonts, and styling across all devices
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📤 Easy Sharing</h3>
                    <p className="text-sm text-slate-600">
                      PDF files can be viewed on any device without Word installed
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📋 Professional Look</h3>
                    <p className="text-sm text-slate-600">
                      Create professional documents for reports, contracts, and presentations
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🛡️ Document Security</h3>
                    <p className="text-sm text-slate-600">
                      Protect your content from unauthorized editing and changes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
