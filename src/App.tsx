import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import ImagePage from "./pages/Image";
import Packages from "./pages/Packages";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
          
        <BrowserRouter>
        <ScrollToTop />
          <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
          <CustomCursor />
          <Navbar />
          <main>
            <HelmetProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/image" element={<ImagePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </HelmetProvider>
          </main>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
