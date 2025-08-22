import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation, MapPin } from "lucide-react";

const GoogleMaps = () => {
  const handleDirections = () => {
    window.open('https://maps.app.goo.gl/RYrz56uhyhrVX4NdA', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-persian text-primary">
            موقعیت ما
          </h2>
          <p className="text-xl text-muted-foreground font-persian max-w-2xl mx-auto">
            به راحتی ما را پیدا کنید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="relative">
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.123456789!2d69.123456789!3d35.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI1LjIiTiA2OcKwMDcnMjUuMiJF!5e0!3m2!1sen!2saf!4v1234567890123!5m2!1sen!2saf"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعیت رستوران صداقت برگر"
                aria-label="نقشه گوگل نشان دهنده موقعیت رستوران صداقت برگر"
              ></iframe>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center font-persian text-xl">
                  <MapPin className="w-6 h-6 text-primary ml-2" />
                  آدرس کامل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-persian">
                <div>
                  <p className="text-lg font-medium text-card-foreground">
                    افغانستان، پروان، شهر چاریکار
                  </p>
                  <p className="text-muted-foreground">
                    جنب گذر اکرم خان مقابل شیریخ پزی حاجی جان آغا
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">نشانه‌های مهم:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• روبروی شیریخ پزی حاجی جان آغا</li>
                    <li>• در گذر اکرم خان</li>
                    <li>• قابل دسترسی با تمامی وسایل نقلیه</li>
                  </ul>
                </div>

                <Button 
                  onClick={handleDirections}
                  variant="hero" 
                  size="lg" 
                  className="w-full font-persian"
                >
                  <Navigation className="w-5 h-5 ml-2" />
                  مسیریابی با گوگل مپ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h4 className="font-bold font-persian text-lg mb-4 text-card-foreground">
                  ساعات کاری
                </h4>
                <div className="space-y-2 font-persian">
                  <div className="flex justify-between">
                    <span>شنبه تا پنج‌شنبه:</span>
                    <span className="font-medium">۶ صبح - ۸ شب</span>
                  </div>
                  <div className="flex justify-between">
                    <span>جمعه‌ها:</span>
                    <span className="font-medium">۵:۳۰ صبح - ۷:۴۵ شب</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;