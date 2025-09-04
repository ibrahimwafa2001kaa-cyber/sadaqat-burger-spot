import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import heroBurger from "@/assets/hero-burger.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src={heroBurger}
          alt={`${t('sedaghatBurger')} - ${t('bestForFamily')}`}
          className="w-full h-full object-cover"
          priority={true}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Rating */}
          <div className="flex items-center justify-center space-x-1 space-x-reverse mb-6 animate-fade-in-up">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-persian mr-2">{t('rating5of5')}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up font-persian leading-tight">
            {t('sedaghatBurger')}
            <span className="block text-lg md:text-xl lg:text-2xl text-white/80 font-light mt-2">
              {t('established2016')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 animate-fade-in-up font-persian">
            {t('authentictaste')}
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in-up font-persian">
            {t('bestForFamily')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 font-persian">
              {t('viewMenu')}
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-black font-persian" asChild>
              <a href="tel:+93789963664">{t('phoneOrder')}: +93789963664</a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2 font-persian">{t('freshIngredients')}</h3>
              <p className="text-gray-200 font-persian">{t('freshIngredientsDesc')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2 font-persian">{t('uniqueTaste')}</h3>
              <p className="text-gray-200 font-persian">{t('uniqueTasteDesc')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-2 font-persian">{t('fastService')}</h3>
              <p className="text-gray-200 font-persian">{t('fastServiceDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;