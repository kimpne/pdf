import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Scissors, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/pdf-tools/file-upload";
import ProgressIndicator from "@/components/pdf-tools/progress-indicator";
import SEOHead from "@/components/layout/seo-head";

interface SplitRequest {
  file: File;
  mode: 'pages' | 'range';
  pageRange?: string;
}

export default function SplitPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [splitMode, setSplitMode] = useState<'pages' | 'range'>('pages');
  const [pageRange, setPageRange] = useState('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const splitMutation = useMutation({
    mutationFn: async (data: SplitRequest) => {
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('mode', data.mode);
      if (data.pageRange) {
        formData.append('pageRange', data.pageRange);
      }
      
      const response = await apiRequest('POST', '/api/pdf/split', formData);
      return response.blob();
    },
    onSuccess: (blob) => {
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast({
        title: "Success",
        description: "PDF split successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to split PDF",
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (files: File[]) => {
    setFile(files[0]);
    setDownloadUrl(null);
  };

  const handleSplit = () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to split",
        variant: "destructive",
      });
      return;
    }
    
    if (splitMode === 'range' && !pageRange.trim()) {
      toast({
        title: "Error",
        description: "Please enter a page range",
        variant: "destructive",
      });
      return;
    }
    
    splitMutation.mutate({ file, mode: splitMode, pageRange: pageRange.trim() });
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'split-pages.zip';
      a.click();
    }
  };

  return (
    <>
      <SEOHead 
        title="Split PDF Files Online - Free PDF Splitter Tool"
        description="Split PDF files into separate pages or extract specific page ranges. Free online PDF splitter with no registration required."
        keywords="split PDF online, extract PDF pages, PDF splitter, separate PDF pages"
      />
      
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scissors className="w-10 h-10 text-blue-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Split PDF Files
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Extract pages from your PDF or split into separate files. Choose to split all pages or specify a custom range.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload PDF File</CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload
                onFilesSelect={handleFileSelect}
                accept=".pdf"
                multiple={false}
                maxFiles={1}
              />
              
              {file && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Split Options</h3>
                  
                  <RadioGroup value={splitMode} onValueChange={(value) => setSplitMode(value as 'pages' | 'range')}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pages" id="pages" />
                      <Label htmlFor="pages">Split into individual pages</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="range" id="range" />
                      <Label htmlFor="range">Extract specific page range</Label>
                    </div>
                  </RadioGroup>

                  {splitMode === 'range' && (
                    <div className="mt-4">
                      <Label htmlFor="pageRange">Page Range (e.g., 1-5, 10-15)</Label>
                      <Input
                        id="pageRange"
                        placeholder="Enter page range (e.g., 1-5)"
                        value={pageRange}
                        onChange={(e) => setPageRange(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>
              )}

              {splitMutation.isPending && (
                <div className="mt-6">
                  <ProgressIndicator 
                    status="processing"
                    message="Splitting PDF file..."
                  />
                </div>
              )}

              {downloadUrl && (
                <div className="mt-6">
                  <Alert>
                    <Download className="w-4 h-4" />
                    <AlertDescription>
                      Your split PDF files are ready for download!
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    onClick={handleDownload}
                    className="mt-4 w-full"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Split Files
                  </Button>
                </div>
              )}

              {file && !splitMutation.isPending && !downloadUrl && (
                <Button 
                  onClick={handleSplit}
                  className="mt-6 w-full"
                  size="lg"
                >
                  <Scissors className="w-4 h-4 mr-2" />
                  Split PDF
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
