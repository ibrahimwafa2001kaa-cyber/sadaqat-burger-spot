import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Flame, Leaf } from "lucide-react";
import beefBurger from "@/assets/beef-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "صداقت کلاسیک",
      description: "برگر گوشت گاو تازه با پنیر چدار، کاهو، گوجه، پیاز و سس مخصوص",
      price: "۱۲۵,۰۰۰",
      image: beefBurger,
      rating: 4.9,
      isPopular: true,
      isSpicy: false,
      category: "گوشت گاو"
    },
    {
      id: 2,
      name: "صداقت چیکن دلوکس",
      description: "برگر مرغ کریسپی با سس رنچ، کاهو تازه، گوجه و پنیر موزارلا",
      price: "۱۱۰,۰۰۰",
      image: chickenBurger,
      rating: 4.8,
      isPopular: false,
      isSpicy: true,
      category: "مرغ"
    },
    {
      id: 3,
      name: "صداقت وجی",
      description: "برگر گیاهی با سبزیجات تازه، آووکادو، پنیر وگان و سس طبیعی",
      price: "۹۵,۰۰۰",
      image: veggieBurger,
      rating: 4.7,
      isPopular: false,
      isSpicy: false,
      category: "گیاهی"
    },
    {
      id: 4,
      name: "صداقت دبل",
      description: "دو عدد برگر گوشت گاو، دو لایه پنیر، بیکن، سس ویژه و سبزیجات",
      price: "۱۶۵,۰۰۰",
      image: beefBurger,
      rating: 4.9,
      isPopular: true,
      isSpicy: false,
      category: "گوشت گاو"
    },
    {
      id: 5,
      name: "صداقت اسپایسی",
      description: "برگر مرغ تند با فلفل جالاپینو، سس سریراچا و پنیر پپرجک",
      price: "۱۲۰,۰۰۰",
      image: chickenBurger,
      rating: 4.6,
      isPopular: false,
      isSpicy: true,
      category: "مرغ"
    },
    {
      id: 6,
      name: "صداقت آووکادو",
      description: "برگر گیاهی پریمیوم با آووکادو تازه، قارچ گریل و سس پستو",
      price: "۱۰۵,۰۰۰",
      image: veggieBurger,
      rating: 4.8,
      isPopular: false,
      isSpicy: false,
      category: "گیاهی"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-persian text-primary">
            منو صداقت برگر
          </h2>
          <p className="text-xl text-muted-foreground font-persian max-w-2xl mx-auto">
            انتخاب کنید از میان بهترین برگرهای شهر، هر کدام با طعم منحصر به فرد
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="secondary" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            همه موارد
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            گوشت گاو
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            مرغ
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            گیاهی
          </Badge>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-warm transition-smooth border-0 shadow-card bg-card overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                {item.isPopular && (
                  <Badge className="absolute top-4 right-4 bg-warm-gold text-warm-wood font-persian">
                    محبوب
                  </Badge>
                )}
                {item.isSpicy && (
                  <div className="absolute top-4 left-4 bg-warm-red text-white rounded-full p-2">
                    <Flame className="w-4 h-4" />
                  </div>
                )}
                {item.category === "گیاهی" && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full p-2">
                    <Leaf className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold font-persian text-card-foreground">{item.name}</h3>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 font-persian text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-2xl font-bold text-primary font-persian">{item.price}</span>
                    <span className="text-sm text-muted-foreground font-persian">تومان</span>
                  </div>
                  
                  <Button variant="food" size="sm" className="font-persian">
                    <Plus className="w-4 h-4 ml-2" />
                    افزودن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 font-persian">
            مشاهده منو کامل
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;