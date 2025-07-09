import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface ProgressIndicatorProps {
  status: "processing" | "completed" | "error";
  progress?: number;
  message?: string;
}

export default function ProgressIndicator({
  status,
  progress = 0,
  message = "Processing...",
}: ProgressIndicatorProps) {
  const getStatusIcon = () => {
    switch (status) {
      case "processing":
        return <Loader2 className="w-5 h-5 animate-spin text-primary" />;
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Loader2 className="w-5 h-5 animate-spin text-primary" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "processing":
        return "text-primary";
      case "completed":
        return "text-green-600";
      case "error":
        return "text-red-600";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        {getStatusIcon()}
        <span className={`font-medium ${getStatusColor()}`}>{message}</span>
      </div>
      
      {status === "processing" && (
        <Progress value={progress} className="w-full" />
      )}
    </div>
  );
}
