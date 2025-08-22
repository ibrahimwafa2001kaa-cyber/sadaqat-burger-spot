import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "احمد رضایی",
      location: "چاریکار، پروان",
      rating: 5,
      text: "واقعاً بهترین برگری که تا حالا خورده‌ام! گوشت تازه و طعم فوق‌العاده. خدمات هم عالی.",
      date: "۲ هفته پیش"
    },
    {
      id: 2,
      name: "فاطمه احمدی",
      location: "کابل",
      rating: 5,
      text: "هر بار که به پروان می‌آیم حتماً از صداقت برگر سفارش می‌دهم. کیفیت عالی و قیمت مناسب.",
      date: "۱ ماه پیش"
    },
    {
      id: 3,
      name: "محمد علی",
      location: "چاریکار، پروان",
      rating: 5,
      text: "کرایی و املت‌شان هم خیلی خوشمزه است. مخصوصاً صبحانه‌هایشان عالی. پیشنهاد می‌کنم.",
      date: "۳ هفته پیش"
    }
  ];

  const trustBadges = [
    {
      title: "۱۰+ سال تجربه",
      description: "از ۲۰۱۶ در خدمت شما"
    },
    {
      title: "مواد اولیه تازه",
      description: "روزانه از بازار محلی"
    },
    {
      title: "طعم اصیل",
      description: "دستور پخت سنتی"
    },
    {
      title: "۱۰۰% حلال",
      description: "گوشت تازه و حلال"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-6 font-persian">
            نظرات مشتریان
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-persian text-primary">
            نظر مشتریان عزیز
          </h2>
          <p className="text-xl text-muted-foreground font-persian max-w-2xl mx-auto">
            رضایت شما افتخار ماست
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-50 mb-2" />
                  <div className="flex items-center space-x-1 mr-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground font-persian mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold font-persian text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-persian">
                        {testimonial.location}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground font-persian">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 font-persian text-primary">
            چرا صداقت برگر؟
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="font-bold font-persian text-card-foreground mb-2">
                  {badge.title}
                </h4>
                <p className="text-sm text-muted-foreground font-persian">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;