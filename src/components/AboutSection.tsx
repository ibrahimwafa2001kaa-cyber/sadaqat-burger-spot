import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Clock } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "۱۰,۰۰۰+",
      label: "مشتری راضی"
    },
    {
      icon: Award,
      number: "۱۰+",
      label: "سال تجربه"
    },
    {
      icon: Heart,
      number: "۱۰۰%",
      label: "رضایت مشتری"
    },
    {
      icon: Clock,
      number: "۱۰",
      label: "دقیقه آماده‌سازی"
    }
  ];

  const values = [
    {
      title: "کیفیت برتر",
      description: "استفاده از بهترین و تازه‌ترین مواد اولیه",
      color: "warm-orange"
    },
    {
      title: "طعم اصیل",
      description: "دستور پخت منحصر به فرد و سنتی",
      color: "warm-red"
    },
    {
      title: "سرویس سریع",
      description: "تحویل در کمترین زمان با بالاترین کیفیت",
      color: "warm-gold"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <Badge className="bg-warm-gold text-warm-wood mb-6 font-persian">
              داستان ما
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-persian text-primary">
              صداقت برگر
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 font-persian leading-relaxed">
              صداقت برگر تحت مدیریت قاری صاحب صفی الله محمدی، 
              با هدف ارائه بهترین برگرها و غذاهای سالم برای خانواده‌ها در سال ۲۰۱۶ شروع به کار کرد.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 font-persian leading-relaxed">
              ما معتقدیم که برای خود و خانواده تان بهترین غذا را بدهید. با استفاده از گوشت تازه روزانه، 
              نان تازه پخت و سبزیجات طبیعی، هر برگری که سرو می‌کنیم حاوی عشق و دقت است.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className={`w-3 h-3 rounded-full bg-${value.color} mt-2 flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-bold text-lg font-persian text-card-foreground">{value.title}</h4>
                    <p className="text-muted-foreground font-persian">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="warm" size="lg" className="font-persian">
              بیشتر بدانید
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img
                src={restaurantInterior}
                alt="فضای داخلی رستوران صداقت برگر"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 right-8 bg-white shadow-card border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary font-persian">{stat.number}</div>
                      <div className="text-sm text-muted-foreground font-persian">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;