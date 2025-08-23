import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, User, Calendar } from "lucide-react";
import { toast } from "sonner";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([
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
  ]);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 5,
    text: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.location || !formData.text) {
      toast.error("لطفاً تمام فیلدها را پر کنید");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      ...formData,
      date: "همین الان"
    };

    setReviews(prev => [newReview, ...prev]);
    setFormData({ name: "", location: "", rating: 5, text: "" });
    toast.success("نظر شما با موفقیت ثبت شد!");
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Review Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-card sticky top-8">
              <CardHeader>
                <CardTitle className="font-persian text-primary">
                  نظر خود را بنویسید
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium font-persian text-card-foreground block mb-2">
                      نام
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="نام خود را وارد کنید"
                      className="font-persian"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium font-persian text-card-foreground block mb-2">
                      شهر
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="شهر خود را وارد کنید"
                      className="font-persian"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium font-persian text-card-foreground block mb-2">
                      امتیاز
                    </label>
                    <div className="flex space-x-1 space-x-reverse">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                          className="text-2xl focus:outline-none"
                        >
                          <Star 
                            className={`w-6 h-6 ${
                              star <= formData.rating 
                                ? "fill-yellow-400 text-yellow-400" 
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium font-persian text-card-foreground block mb-2">
                      نظر شما
                    </label>
                    <Textarea
                      value={formData.text}
                      onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
                      placeholder="تجربه خود را با ما به اشتراک بگذارید..."
                      rows={4}
                      className="font-persian"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full font-persian">
                    ثبت نظر
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="bg-primary/10 rounded-full p-2">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold font-persian text-card-foreground">
                            {review.name}
                          </h4>
                          <p className="text-sm text-muted-foreground font-persian">
                            {review.location}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="flex space-x-1 space-x-reverse">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground font-persian">
                          <Calendar className="w-3 h-3 ml-1" />
                          {review.date}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-persian leading-relaxed">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;