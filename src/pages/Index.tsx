import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReviewSection from "@/components/ReviewSection";
import GoogleMaps from "@/components/GoogleMaps";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded font-persian z-50">
        پرش به محتوای اصلی
      </a>
      
      <Header />
      <main id="main-content">
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <ReviewSection />
        <GoogleMaps />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;