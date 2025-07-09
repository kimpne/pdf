import { Link } from "wouter";
import { FileText, Scissors, Combine, Download, Image, RotateCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ToolMetadata } from "@shared/schema";

interface ToolCardProps {
  tool: ToolMetadata;
}

const iconMap = {
  "file-pdf": FileText,
  "scissors": Scissors,
  "compress": Combine,
  "file-word": FileText,
  "download": Download,
  "image": Image,
  "rotate-cw": RotateCw,
};

const colorMap = {
  red: "bg-red-100 group-hover:bg-red-200 text-red-500",
  blue: "bg-blue-100 group-hover:bg-blue-200 text-blue-500",
  green: "bg-green-100 group-hover:bg-green-200 text-green-500",
  purple: "bg-purple-100 group-hover:bg-purple-200 text-purple-500",
  orange: "bg-orange-100 group-hover:bg-orange-200 text-orange-500",
  pink: "bg-pink-100 group-hover:bg-pink-200 text-pink-500",
  teal: "bg-teal-100 group-hover:bg-teal-200 text-teal-500",
  indigo: "bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500",
};

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = iconMap[tool.icon as keyof typeof iconMap] || FileText;
  const colorClass = colorMap[tool.color as keyof typeof colorMap] || colorMap.blue;

  return (
    <Link href={tool.path}>
      <Card className="tool-card">
        <CardContent className="p-6">
          <div className="text-center">
            <div className={cn("tool-icon", colorClass)}>
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{tool.name}</h3>
            <p className="text-sm text-slate-600">{tool.description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
