import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/pdf-tools/file-upload";
import ProgressIndicator from "@/components/pdf-tools/progress-indicator";
import SEOHead from "@/components/layout/seo-head";

interface MergeRequest {
  files: File[];
}

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const mergeMutation = useMutation({
    mutationFn: async (data: MergeRequest) => {
      const formData = new FormData();
      data.files.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });
      
      const response = await apiRequest('POST', '/api/pdf/merge', formData);
      return response.blob();
    },
    onSuccess: (blob) => {
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast({
        title: "Success",
        description: "PDF files merged successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to merge PDF files",
        variant: "destructive",
      });
    },
  });

  const handleFilesSelect = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setDownloadUrl(null);
  };

  const handleMerge = () => {
    if (files.length < 2) {
      toast({
        title: "Error",
        description: "Please select at least 2 PDF files to merge",
        variant: "destructive",
      });
      return;
    }
    
    mergeMutation.mutate({ files });
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'merged.pdf';
      a.click();
    }
  };

  return (
    <>
      <SEOHead 
        title="Merge PDF Files Online - Free PDF Merger Tool"
        description="Combine multiple PDF files into one document for free. Easy-to-use online PDF merger with drag-and-drop interface. No registration required."
        keywords="merge PDF online, combine PDF files, PDF merger, join PDF documents"
      />
      
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Merge PDF Files
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Combine multiple PDF files into one document. Simply upload your files and we'll merge them in the order you specify.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload PDF Files</CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload
                onFilesSelect={handleFilesSelect}
                accept=".pdf"
                multiple
                maxFiles={10}
              />
              
              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Files to Merge ({files.length})</h3>
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center p-3 bg-slate-100 rounded-lg">
                        <FileText className="w-5 h-5 text-red-500 mr-3" />
                        <span className="flex-1 text-sm font-medium">{file.name}</span>
                        <span className="text-xs text-slate-500">
                          {(file.size / 1024 / 1024).toFixed(1)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {mergeMutation.isPending && (
                <div className="mt-6">
                  <ProgressIndicator 
                    status="processing"
                    message="Merging PDF files..."
                  />
                </div>
              )}

              {downloadUrl && (
                <div className="mt-6">
                  <Alert>
                    <Download className="w-4 h-4" />
                    <AlertDescription>
                      Your merged PDF is ready for download!
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    onClick={handleDownload}
                    className="mt-4 w-full"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Merged PDF
                  </Button>
                </div>
              )}

              {files.length >= 2 && !mergeMutation.isPending && !downloadUrl && (
                <Button 
                  onClick={handleMerge}
                  className="mt-6 w-full"
                  size="lg"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Merge PDF Files
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">How to Merge PDF Files</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Upload Files</h3>
                <p className="text-sm text-slate-600">Select multiple PDF files from your device</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Arrange Order</h3>
                <p className="text-sm text-slate-600">Files will be merged in the order shown</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-slate-600">Get your merged PDF file instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
