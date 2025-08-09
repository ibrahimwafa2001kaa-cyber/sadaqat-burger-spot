import { Badge } from "@/components/ui/badge";
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  MapPin,
  Clock,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "خانه", href: "#home" },
    { name: "منو", href: "#menu" },
    { name: "درباره ما", href: "#about" },
    { name: "تماس با ما", href: "#contact" }
  ];

  const menuHighlights = [
    "صداقت کلاسیک",
    "صداقت چیکن دلوکس",
    "صداقت دبل",
    "صداقت وجی"
  ];

  return (
    <footer className="bg-warm-wood text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl font-bold text-white">ص</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-persian">صداقت برگر</h3>
                <p className="text-sm text-warm-cream font-persian">طعم اصیل، کیفیت برتر</p>
              </div>
            </div>
            
            <p className="text-warm-cream/90 font-persian leading-relaxed">
              رستوران صداقت برگر با بیش از ۵ سال تجربه، بهترین برگرهای شهر را با 
              اصالت طعم و کیفیت بی‌نظیر به شما ارائه می‌دهد.
            </p>

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
              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-warm-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-cream/90 font-persian">۰۲۱-۱۲۳۴۵۶۷۸</p>
                  <p className="text-warm-cream/90 font-persian">۰۲۱-۸۷۶۵۴۳۲۱</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-warm-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-cream/90 font-persian">تهران، خیابان ولیعصر</p>
                  <p className="text-warm-cream/90 font-persian">نرسیده به میدان ونک، پلاک ۱۲۳</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-5 h-5 text-warm-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-cream/90 font-persian">شنبه تا پنج‌شنبه: ۱۰-۲۴</p>
                  <p className="text-warm-cream/90 font-persian">جمعه‌ها: ۱۲-۲۴</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="#"
                className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-cream/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-cream/70 text-center md:text-left font-persian">
              © {currentYear} رستوران صداقت برگر. تمامی حقوق محفوظ است.
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