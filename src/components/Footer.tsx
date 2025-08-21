import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin,
  Clock,
  Heart
} from "lucide-react";
import managerPhoto from "@/assets/manager-photo.png";
import sedaghatLogo from "@/assets/sedaghat-logo.png";
import facebookLogo from "@/assets/facebook-logo.png";
import mapsLogo from "@/assets/maps-logo.png";
import whatsappLogo from "@/assets/whatsapp-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "خانه", href: "#home" },
    { name: "منو", href: "#menu" },
    { name: "درباره ما", href: "#about" },
    { name: "تماس با ما", href: "#contact" }
  ];

  const menuHighlights = [
    "برگر کوچک - ۱۰ افغانی",
    "برگر متوسط - ۳۰ افغانی",
    "برگر بزرگ - ۵۰ افغانی",
    "برگر دوبل - ۷۰ افغانی"
  ];

  return (
    <footer className="bg-warm-wood text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-glow">
                <img 
                  src={sedaghatLogo} 
                  alt="صداقت برگر لوگو" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-persian">صداقت برگر</h3>
                <p className="text-sm text-warm-cream font-persian">طعم اصیل، کیفیت برتر</p>
              </div>
            </div>
            
            <p className="text-warm-cream/90 font-persian leading-relaxed">
              صداقت برگر تحت مدیریت قاری صاحب صفی الله محمدی، 
              برای خود و خانواده تان بهترین غذا را ارائه می‌دهد.
            </p>
            
            {/* Manager Photo */}
            <div className="flex items-center space-x-3 space-x-reverse mt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-warm-gold">
                <img 
                  src={managerPhoto} 
                  alt="قاری صاحب صفی الله محمدی - مدیر صداقت برگر" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-warm-gold font-bold font-persian">قاری صاحب صفی الله محمدی</p>
                <p className="text-warm-cream/80 text-sm font-persian">مدیر عامل</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge className="bg-warm-gold text-warm-wood font-persian">
                <Heart className="w-4 h-4 mr-2" />
                ساخته شده با عشق
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-persian text-warm-gold">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-warm-cream/90 hover:text-warm-gold transition-smooth font-persian inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-persian text-warm-gold">برگرهای محبوب</h4>
            <ul className="space-y-3">
              {menuHighlights.map((item, index) => (
                <li key={index} className="text-warm-cream/90 font-persian">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-persian text-warm-gold">اطلاعات تماس</h4>
            
            <div className="space-y-4">
              <a href="tel:+93789963664" className="flex items-start space-x-3 space-x-reverse hover:text-warm-gold transition-smooth group">
                <Phone className="w-5 h-5 text-warm-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-smooth" />
                <div>
                  <p className="text-warm-cream/90 font-persian group-hover:text-warm-gold transition-smooth">+93789963664</p>
                </div>
              </a>
              
              <a href="https://maps.app.goo.gl/RYrz56uhyhrVX4NdA" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 space-x-reverse hover:text-warm-gold transition-smooth group">
                <MapPin className="w-5 h-5 text-warm-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-smooth" />
                <div>
                  <p className="text-warm-cream/90 font-persian group-hover:text-warm-gold transition-smooth">افغانستان، پروان، شهر چاریکار</p>
                  <p className="text-warm-cream/90 font-persian group-hover:text-warm-gold transition-smooth">جنب گذر اکرم خان مقابل شیریخ پزی حاجی جان آغا</p>
                </div>
              </a>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-5 h-5 text-warm-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-cream/90 font-persian">شنبه تا پنج‌شنبه: ۶ صبح - ۸ شب</p>
                  <p className="text-warm-cream/90 font-persian">جمعه‌ها: ۵:۳۰ صبح - ۷:۴۵ شب</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="https://wa.me/93789963664"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-smooth"
              >
                <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19cPtVJQrg/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-smooth"
              >
                <img src={facebookLogo} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/RYrz56uhyhrVX4NdA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 p-2 rounded-full hover:bg-gray-600 transition-smooth"
              >
                <img src={mapsLogo} alt="Google Maps" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-cream/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-cream/70 text-center md:text-left font-persian">
              © {currentYear} صداقت برگر. تمامی حقوق محفوظ است.
            </p>
            
            <div className="flex items-center space-x-6 space-x-reverse">
              <a href="#" className="text-warm-cream/70 hover:text-warm-gold transition-smooth text-sm font-persian">
                حریم خصوصی
              </a>
              <a href="#" className="text-warm-cream/70 hover:text-warm-gold transition-smooth text-sm font-persian">
                شرایط استفاده
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;