import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Combine, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/pdf-tools/file-upload";
import ProgressIndicator from "@/components/pdf-tools/progress-indicator";
import SEOHead from "@/components/layout/seo-head";

interface CompressRequest {
  file: File;
  quality: 'low' | 'medium' | 'high';
}

export default function CompressPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('medium');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [compressionStats, setCompressionStats] = useState<{
    originalSize: number;
    compressedSize: number;
    compressionRatio: number;
  } | null>(null);
  const { toast } = useToast();

  const compressMutation = useMutation({
    mutationFn: async (data: CompressRequest) => {
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('quality', data.quality);
      
      const response = await apiRequest('POST', '/api/pdf/compress', formData);
      return response;
    },
    onSuccess: async (response) => {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      
      // Get compression stats from response headers
      const originalSize = parseInt(response.headers.get('X-Original-Size') || '0');
      const compressedSize = parseInt(response.headers.get('X-Compressed-Size') || '0');
      const compressionRatio = parseFloat(response.headers.get('X-Compression-Ratio') || '0');
      
      setCompressionStats({
        originalSize,
        compressedSize,
        compressionRatio
      });
      
      toast({
        title: "Success",
        description: "PDF compressed successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to compress PDF",
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (files: File[]) => {
    setFile(files[0]);
    setDownloadUrl(null);
    setCompressionStats(null);
  };

  const handleCompress = () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a PDF file to compress",
        variant: "destructive",
      });
      return;
    }
    
    compressMutation.mutate({ file, quality });
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'compressed.pdf';
      a.click();
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      <SEOHead 
        title="Combine PDF Files Online - Free PDF Compressor Tool"
        description="Reduce PDF file size while maintaining quality. Free online PDF compressor with multiple compression levels. No registration required."
        keywords="compress PDF online, reduce PDF size, PDF compressor, shrink PDF file"
      />
      
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Combine className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Compress PDF Files
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Reduce the file size of your PDF documents while maintaining quality. Choose from different compression levels.
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
                  <h3 className="text-lg font-semibold mb-4">Compression Quality</h3>
                  
                  <RadioGroup value={quality} onValueChange={(value) => setQuality(value as 'low' | 'medium' | 'high')}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="high" />
                      <Label htmlFor="high">High Quality (Smaller compression)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium">Medium Quality (Balanced)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="low" />
                      <Label htmlFor="low">Low Quality (Maximum compression)</Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Original file size:</strong> {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              )}

              {compressMutation.isPending && (
                <div className="mt-6">
                  <ProgressIndicator 
                    status="processing"
                    message="Compressing PDF file..."
                  />
                </div>
              )}

              {compressionStats && (
                <div className="mt-6">
                  <Alert>
                    <Combine className="w-4 h-4" />
                    <AlertDescription>
                      Compression complete! File size reduced by {compressionStats.compressionRatio}%
                    </AlertDescription>
                  </Alert>
                  
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold">Original Size:</p>
                        <p>{formatFileSize(compressionStats.originalSize)}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Compressed Size:</p>
                        <p>{formatFileSize(compressionStats.compressedSize)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {downloadUrl && (
                <Button 
                  onClick={handleDownload}
                  className="mt-4 w-full"
                  size="lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Compressed PDF
                </Button>
              )}

              {file && !compressMutation.isPending && !downloadUrl && (
                <Button 
                  onClick={handleCompress}
                  className="mt-6 w-full"
                  size="lg"
                >
                  <Combine className="w-4 h-4 mr-2" />
                  Combine PDF
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
