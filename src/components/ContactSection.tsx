import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  MessageCircle,
  Mail,
  Navigation
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "تلفن سفارش",
      details: ["۰۲۱-۱۲۳۴۵۶۷۸", "۰۲۱-۸۷۶۵۴۳۲۱"],
      color: "warm-orange"
    },
    {
      icon: MapPin,
      title: "آدرس",
      details: ["تهران، خیابان ولیعصر", "نرسیده به میدان ونک، پلاک ۱۲۳"],
      color: "warm-red"
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      details: ["شنبه تا پنج‌شنبه: ۱۰:۰۰ - ۲۴:۰۰", "جمعه‌ها: ۱۲:۰۰ - ۲۴:۰۰"],
      color: "warm-gold"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "اینستاگرام",
      handle: "@sedaghatburger",
      color: "bg-pink-500"
    },
    {
      icon: MessageCircle,
      name: "واتس‌اپ",
      handle: "۰۹۱۲۳۴۵۶۷۸۹",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-white text-warm-wood mb-6 font-persian">
            تماس با ما
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-persian text-white">
            ارتباط با رستوران صداقت
          </h2>
          <p className="text-xl text-white/90 font-persian max-w-2xl mx-auto">
            برای سفارش، رزرو میز یا هر سوال دیگری با ما در ارتباط باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className={`bg-${info.color} p-3 rounded-full flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 font-persian text-card-foreground">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground font-persian mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-card">
              <CardHeader>
                <CardTitle className="font-persian text-card-foreground">شبکه‌های اجتماعی</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-4 space-x-reverse">
                    <div className={`${social.color} p-2 rounded-full`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium font-persian text-card-foreground">{social.name}</h4>
                      <p className="text-muted-foreground font-persian">{social.handle}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="bg-white text-warm-wood hover:bg-warm-gold hover:text-white font-persian">
                <Navigation className="w-5 h-5 ml-2" />
                مسیریابی
              </Button>
              <Button variant="food" size="lg" className="font-persian">
                <Phone className="w-5 h-5 ml-2" />
                تماس فوری
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-persian text-card-foreground">
                پیام به ما ارسال کنید
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium font-persian text-card-foreground">نام</label>
                  <Input 
                    placeholder="نام خود را وارد کنید"
                    className="font-persian"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-persian text-card-foreground">شماره تماس</label>
                  <Input 
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="font-persian"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium font-persian text-card-foreground">ایمیل (اختیاری)</label>
                <Input 
                  type="email"
                  placeholder="example@email.com"
                  className="font-persian"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium font-persian text-card-foreground">پیام</label>
                <Textarea 
                  placeholder="پیام خود را بنویسید..."
                  rows={4}
                  className="font-persian"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full font-persian">
                <Mail className="w-5 h-5 ml-2" />
                ارسال پیام
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;