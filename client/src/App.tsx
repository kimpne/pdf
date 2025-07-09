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
import HelpCenter from "@/pages/help-center";
import FAQ from "@/pages/faq";
import APIDocs from "@/pages/api-docs";
import Status from "@/pages/status";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          {/* English (default) routes */}
          <Route path="/" component={Home} />
          <Route path="/merge-pdf" component={MergePDF} />
          <Route path="/split-pdf" component={SplitPDF} />
          <Route path="/compress-pdf" component={CompressPDF} />
          <Route path="/pdf-to-word" component={PDFToWord} />
          <Route path="/word-to-pdf" component={WordToPDF} />
          <Route path="/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/help-center" component={HelpCenter} />
          <Route path="/faq" component={FAQ} />
          <Route path="/api-docs" component={APIDocs} />
          <Route path="/status" component={Status} />
          {/* Legacy redirect for old lp-center path */}
          <Route path="/lp-center" component={HelpCenter} />
          
          {/* Spanish routes */}
          <Route path="/es" component={Home} />
          <Route path="/es/merge-pdf" component={MergePDF} />
          <Route path="/es/split-pdf" component={SplitPDF} />
          <Route path="/es/compress-pdf" component={CompressPDF} />
          <Route path="/es/pdf-to-word" component={PDFToWord} />
          <Route path="/es/word-to-pdf" component={WordToPDF} />
          <Route path="/es/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/es/help-center" component={HelpCenter} />
          <Route path="/es/faq" component={FAQ} />
          <Route path="/es/api-docs" component={APIDocs} />
          <Route path="/es/status" component={Status} />
          <Route path="/es/lp-center" component={HelpCenter} />
          
          {/* French routes */}
          <Route path="/fr" component={Home} />
          <Route path="/fr/merge-pdf" component={MergePDF} />
          <Route path="/fr/split-pdf" component={SplitPDF} />
          <Route path="/fr/compress-pdf" component={CompressPDF} />
          <Route path="/fr/pdf-to-word" component={PDFToWord} />
          <Route path="/fr/word-to-pdf" component={WordToPDF} />
          <Route path="/fr/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/fr/help-center" component={HelpCenter} />
          
          {/* German routes */}
          <Route path="/de" component={Home} />
          <Route path="/de/merge-pdf" component={MergePDF} />
          <Route path="/de/split-pdf" component={SplitPDF} />
          <Route path="/de/compress-pdf" component={CompressPDF} />
          <Route path="/de/pdf-to-word" component={PDFToWord} />
          <Route path="/de/word-to-pdf" component={WordToPDF} />
          <Route path="/de/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/de/help-center" component={HelpCenter} />
          
          {/* Korean routes */}
          <Route path="/ko" component={Home} />
          <Route path="/ko/merge-pdf" component={MergePDF} />
          <Route path="/ko/split-pdf" component={SplitPDF} />
          <Route path="/ko/compress-pdf" component={CompressPDF} />
          <Route path="/ko/pdf-to-word" component={PDFToWord} />
          <Route path="/ko/word-to-pdf" component={WordToPDF} />
          <Route path="/ko/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/ko/help-center" component={HelpCenter} />
          <Route path="/ko/faq" component={FAQ} />
          <Route path="/ko/api-docs" component={APIDocs} />
          <Route path="/ko/status" component={Status} />
          <Route path="/ko/lp-center" component={HelpCenter} />
          
          {/* Japanese routes */}
          <Route path="/ja" component={Home} />
          <Route path="/ja/merge-pdf" component={MergePDF} />
          <Route path="/ja/split-pdf" component={SplitPDF} />
          <Route path="/ja/compress-pdf" component={CompressPDF} />
          <Route path="/ja/pdf-to-word" component={PDFToWord} />
          <Route path="/ja/word-to-pdf" component={WordToPDF} />
          <Route path="/ja/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/ja/help-center" component={HelpCenter} />
          
          {/* Chinese Simplified routes */}
          <Route path="/zh-cn" component={Home} />
          <Route path="/zh-cn/merge-pdf" component={MergePDF} />
          <Route path="/zh-cn/split-pdf" component={SplitPDF} />
          <Route path="/zh-cn/compress-pdf" component={CompressPDF} />
          <Route path="/zh-cn/pdf-to-word" component={PDFToWord} />
          <Route path="/zh-cn/word-to-pdf" component={WordToPDF} />
          <Route path="/zh-cn/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/zh-cn/help-center" component={HelpCenter} />
          
          {/* Chinese Traditional routes */}
          <Route path="/zh-tw" component={Home} />
          <Route path="/zh-tw/merge-pdf" component={MergePDF} />
          <Route path="/zh-tw/split-pdf" component={SplitPDF} />
          <Route path="/zh-tw/compress-pdf" component={CompressPDF} />
          <Route path="/zh-tw/pdf-to-word" component={PDFToWord} />
          <Route path="/zh-tw/word-to-pdf" component={WordToPDF} />
          <Route path="/zh-tw/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/zh-tw/help-center" component={HelpCenter} />
          
          {/* Portuguese routes */}
          <Route path="/pt" component={Home} />
          <Route path="/pt/merge-pdf" component={MergePDF} />
          <Route path="/pt/split-pdf" component={SplitPDF} />
          <Route path="/pt/compress-pdf" component={CompressPDF} />
          <Route path="/pt/pdf-to-word" component={PDFToWord} />
          <Route path="/pt/word-to-pdf" component={WordToPDF} />
          <Route path="/pt/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/pt/help-center" component={HelpCenter} />
          
          {/* Italian routes */}
          <Route path="/it" component={Home} />
          <Route path="/it/merge-pdf" component={MergePDF} />
          <Route path="/it/split-pdf" component={SplitPDF} />
          <Route path="/it/compress-pdf" component={CompressPDF} />
          <Route path="/it/pdf-to-word" component={PDFToWord} />
          <Route path="/it/word-to-pdf" component={WordToPDF} />
          <Route path="/it/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/it/help-center" component={HelpCenter} />
          
          {/* Russian routes */}
          <Route path="/ru" component={Home} />
          <Route path="/ru/merge-pdf" component={MergePDF} />
          <Route path="/ru/split-pdf" component={SplitPDF} />
          <Route path="/ru/compress-pdf" component={CompressPDF} />
          <Route path="/ru/pdf-to-word" component={PDFToWord} />
          <Route path="/ru/word-to-pdf" component={WordToPDF} />
          <Route path="/ru/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/ru/help-center" component={HelpCenter} />
          
          {/* Arabic routes */}
          <Route path="/ar" component={Home} />
          <Route path="/ar/merge-pdf" component={MergePDF} />
          <Route path="/ar/split-pdf" component={SplitPDF} />
          <Route path="/ar/compress-pdf" component={CompressPDF} />
          <Route path="/ar/pdf-to-word" component={PDFToWord} />
          <Route path="/ar/word-to-pdf" component={WordToPDF} />
          <Route path="/ar/pdf-to-jpg" component={PDFToJPG} />
          <Route path="/ar/help-center" component={HelpCenter} />
          
          {/* 404 - Must be last */}
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
