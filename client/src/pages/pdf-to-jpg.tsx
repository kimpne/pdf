import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Image, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/pdf-tools/file-upload";
import ProgressIndicator from "@/components/pdf-tools/progress-indicator";
import SEOHead from "@/components/layout/seo-head";

interface ConvertRequest {
  file: File;
  quality: 'low' | 'medium' | 'high';
}

export default function PDFToJPG() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('medium');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const convertMutation = useMutation({
    mutationFn: async (data: ConvertRequest) => {
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('quality', data.quality);
      
      const response = await apiRequest('POST', '/api/pdf/to-jpg', formData);
      return response.blob();
    },
    onSuccess: (blob) => {
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      toast({
        title: "Success",
        description: "PDF converted to JPG images successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to convert PDF to JPG",
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
        description: "Please select a PDF file to convert",
        variant: "destructive",
      });
      return;
    }
    
    convertMutation.mutate({ file, quality });
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'pdf-images.zip';
      a.click();
    }
  };

  return (
    <>
      <SEOHead 
        title="PDF to JPG Converter - Free Online PDF to Image Tool"
        description="Convert PDF pages to high-quality JPG images for free. Extract images from PDF documents with customizable quality settings."
        keywords="PDF to JPG converter, PDF to image, convert PDF to JPG online, extract images from PDF"
      />
      
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image className="w-10 h-10 text-pink-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                PDF to JPG Converter
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Convert PDF pages to high-quality JPG images. Each page will be converted to a separate image file.
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
                  <h3 className="text-lg font-semibold mb-4">Image Quality</h3>
                  
                  <RadioGroup value={quality} onValueChange={(value) => setQuality(value as 'low' | 'medium' | 'high')}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">High Quality (300 DPI)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Medium Quality (150 DPI)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Low Quality (72 DPI)</Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                    <div className="flex items-center">
                      <Image className="w-5 h-5 text-red-500 mr-3" />
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
                    message="Converting PDF to JPG images..."
                  />
                </div>
              )}

              {downloadUrl && (
                <div className="mt-6">
                  <Alert>
                    <Download className="w-4 h-4" />
                    <AlertDescription>
                      Your JPG images are ready for download!
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    onClick={handleDownload}
                    className="mt-4 w-full"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download JPG Images
                  </Button>
                </div>
              )}

              {file && !convertMutation.isPending && !downloadUrl && (
                <Button 
                  onClick={handleConvert}
                  className="mt-6 w-full"
                  size="lg"
                >
                  <Image className="w-4 h-4 mr-2" />
                  Convert to JPG
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Use Cases for PDF to JPG</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">🌐 Web Publishing</h3>
                    <p className="text-sm text-slate-600">
                      Use images for websites, blogs, and social media posts
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📱 Mobile Viewing</h3>
                    <p className="text-sm text-slate-600">
                      View PDF content easily on mobile devices and tablets
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">🖼️ Presentations</h3>
                    <p className="text-sm text-slate-600">
                      Insert PDF pages as images into presentations and documents
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📧 Email Attachments</h3>
                    <p className="text-sm text-slate-600">
                      Share specific pages as images in emails and messages
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
