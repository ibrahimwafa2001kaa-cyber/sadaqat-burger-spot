import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import CustomerReviews from "@/components/CustomerReviews";
import Gallery from "@/components/Gallery";
import GoogleMaps from "@/components/GoogleMaps";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          {/* Skip to main content for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded font-persian z-50">
            پرش به محتوای اصلی
          </a>
          
          <AppSidebar />
          
          <div className="flex-1 flex flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              <HeroSection />
              <MenuSection />
              <AboutSection />
              <Gallery />
              <CustomerReviews />
              <GoogleMaps />
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </LanguageProvider>
  );
};

export default Index;