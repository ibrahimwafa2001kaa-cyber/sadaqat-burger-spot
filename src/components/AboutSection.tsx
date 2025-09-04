import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Clock } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Users,
      number: "۱۰,۰۰۰+",
      label: t('satisfiedCustomers')
    },
    {
      icon: Award,
      number: "۱۰+",
      label: t('yearsExperience')
    },
    {
      icon: Heart,
      number: "۱۰۰%",
      label: t('customerSatisfaction')
    },
    {
      icon: Clock,
      number: "۱۰",
      label: t('preparationTime')
    }
  ];

  const values = [
    {
      title: t('premiumQuality'),
      description: t('premiumQualityDesc'),
      color: "warm-orange"
    },
    {
      title: t('authenticTasteValue'),
      description: t('authenticTasteValueDesc'),
      color: "warm-red"
    },
    {
      title: t('fastServiceValue'),
      description: t('fastServiceValueDesc'),
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
              {t('ourStory')}
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-persian text-primary">
              {t('sedaghatBurger')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 font-persian leading-relaxed">
              {t('aboutDescription1')}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 font-persian leading-relaxed">
              {t('aboutDescription2')}
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
              {t('learnMore')}
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <LazyImage
                src={restaurantInterior}
                alt={`${t('sedaghatBurger')} - فضای داخلی رستوران`}
                className="w-full h-[500px] object-cover"
                width={800}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
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