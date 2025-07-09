import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFilesSelect: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in bytes
}

export default function FileUpload({
  onFilesSelect,
  accept = ".pdf",
  multiple = false,
  maxFiles = 1,
  maxSize = 10 * 1024 * 1024, // 10MB
}: FileUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    setError(null);
    
    if (rejectedFiles.length > 0) {
      const rejection = rejectedFiles[0];
      if (rejection.errors[0]?.code === 'file-too-large') {
        setError(`File is too large. Maximum size is ${maxSize / 1024 / 1024}MB.`);
      } else if (rejection.errors[0]?.code === 'file-invalid-type') {
        setError(`Invalid file type. Please select ${accept} files.`);
      } else {
        setError('File upload failed. Please try again.');
      }
      return;
    }

    if (acceptedFiles.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed.`);
      return;
    }

    const newFiles = multiple ? [...selectedFiles, ...acceptedFiles].slice(0, maxFiles) : acceptedFiles;
    setSelectedFiles(newFiles);
    onFilesSelect(newFiles);
  }, [selectedFiles, multiple, maxFiles, maxSize, accept, onFilesSelect]);

  // MIME 타입 매핑
  const getMimeTypes = (acceptString: string) => {
    const mimeMap: Record<string, string[]> = {
      '.pdf': ['application/pdf'],
      '.doc': ['application/msword'],
      '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      '.jpg': ['image/jpeg'],
      '.jpeg': ['image/jpeg'],
      '.png': ['image/png']
    };
    
    const result: Record<string, string[]> = {};
    acceptString.split(',').forEach(ext => {
      const trimmed = ext.trim();
      if (mimeMap[trimmed]) {
        mimeMap[trimmed].forEach(mime => {
          result[mime] = [];
        });
      }
    });
    return result;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getMimeTypes(accept),
    multiple,
    maxFiles,
    maxSize,
  });

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelect(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-3 sm:p-6">
          <div
            {...getRootProps()}
            className={cn(
              "upload-area",
              isDragActive && "drag-over",
              error && "border-red-300"
            )}
          >
            <input {...getInputProps()} />
            <div className="text-center">
              <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg font-semibold text-slate-700 mb-2">
                {isDragActive ? "Drop your files here" : "Drop your PDF here"}
              </p>
              <p className="text-sm sm:text-base text-slate-500 mb-3 sm:mb-4">or click to browse files</p>
              <Button type="button" variant="outline" size="sm" className="text-sm sm:text-base">
                Select {accept.toUpperCase()} Files
              </Button>
            </div>
          </div>
          
          {error && (
            <div className="mt-3 sm:mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedFiles.length > 0 && (
        <Card>
          <CardContent className="p-3 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Selected Files</h3>
            <div className="space-y-2 sm:space-y-3">
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center p-2 sm:p-3 bg-slate-50 rounded-lg">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{file.name}</p>
                    <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700 ml-2 p-1 h-auto"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
