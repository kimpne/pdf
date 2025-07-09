import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import MergePDF from "@/pages/merge-pdf";
import SplitPDF from "@/pages/split-pdf";
import CompressPDF from "@/pages/compress-pdf";
import PDFToWord from "@/pages/pdf-to-word";
import WordToPDF from "@/pages/word-to-pdf";
import PDFToJPG from "@/pages/pdf-to-jpg";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/merge-pdf" component={MergePDF} />
          <Route path="/split-pdf" component={SplitPDF} />
          <Route path="/compress-pdf" component={CompressPDF} />
          <Route path="/pdf-to-word" component={PDFToWord} />
          <Route path="/word-to-pdf" component={WordToPDF} />
          <Route path="/pdf-to-jpg" component={PDFToJPG} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
