import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Flame, Leaf, Download } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import frenchFries from "@/assets/french-fries.jpg";
import afghanBreakfast from "@/assets/afghan-breakfast.jpg";
import teaWithBread from "@/assets/tea-with-bread.jpg";
import afghanDrinks from "@/assets/afghan-drinks.jpg";
import beefBurger from "@/assets/beef-burger.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

const MenuSection = () => {
  const menuItems = [
    // برگرها
    {
      id: 1,
      name: "برگر کوچک",
      description: "برگر ساده با نان و پتی",
      price: "۱۰",
      image: beefBurger,
      rating: 4.5,
      isPopular: false,
      isSpicy: false,
      category: "برگر"
    },
    {
      id: 2,
      name: "برگر ساده",
      description: "برگر با سبزیجات اساسی",
      price: "۲۰",
      image: chickenBurger,
      rating: 4.6,
      isPopular: false,
      isSpicy: false,
      category: "برگر"
    },
    {
      id: 3,
      name: "برگر متوسط",
      description: "برگر با پنیر و سبزیجات کامل",
      price: "۳۰",
      image: veggieBurger,
      rating: 4.8,
      isPopular: true,
      isSpicy: false,
      category: "برگر"
    },
    {
      id: 4,
      name: "برگر بزرگ",
      description: "برگر بزرگ با تمام مواد اولیه",
      price: "۵۰",
      image: heroBurger,
      rating: 4.9,
      isPopular: true,
      isSpicy: false,
      category: "برگر"
    },
    {
      id: 5,
      name: "برگر دوبل",
      description: "دو عدد پتی با پنیر و سبزیجات",
      price: "۷۰",
      image: frenchFries,
      rating: 4.9,
      isPopular: true,
      isSpicy: false,
      category: "برگر"
    },
    // نوشیدنی های سرد
    {
      id: 6,
      name: "انرژی ایکس بال",
      description: "نوشیدنی انرژی زا سرد",
      price: "۳۰",
      image: afghanDrinks,
      rating: 4.3,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 7,
      name: "پپسی",
      description: "نوشیدنی گازدار پپسی",
      price: "۲۰",
      image: afghanDrinks,
      rating: 4.5,
      isPopular: true,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 8,
      name: "کوکاکولا کوچک",
      description: "نوشیدنی گازدار کوکاکولا",
      price: "۱۰",
      image: afghanDrinks,
      rating: 4.5,
      isPopular: true,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 9,
      name: "انرژی الکوزی",
      description: "نوشیدنی انرژی زا الکوزی",
      price: "۴۰",
      image: afghanDrinks,
      rating: 4.2,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 10,
      name: "پارادایس",
      description: "آبمیوه طبیعی پارادایس",
      price: "۱۰",
      image: afghanDrinks,
      rating: 4.4,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 11,
      name: "آب معدنی کوچک",
      description: "بطری آب معدنی کوچک",
      price: "۱۰",
      image: afghanDrinks,
      rating: 4.0,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 12,
      name: "آب معدنی بزرگ",
      description: "بطری آب معدنی بزرگ",
      price: "۲۰",
      image: afghanDrinks,
      rating: 4.0,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 18,
      name: "کوکاکولا بزرگ",
      description: "نوشیدنی گازدار کوکاکولا بزرگ",
      price: "۵۰",
      image: afghanDrinks,
      rating: 4.5,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    {
      id: 19,
      name: "A ONE",
      description: "نوشیدنی انرژی زا A ONE",
      price: "۲۰",
      image: afghanDrinks,
      rating: 4.3,
      isPopular: false,
      isSpicy: false,
      category: "نوشیدنی"
    },
    // صبحانه
    {
      id: 13,
      name: "تخم مرغ جوشانده",
      description: "تخم مرغ تازه آب پز با نان",
      price: "۱۰",
      image: afghanBreakfast,
      rating: 4.6,
      isPopular: false,
      isSpicy: false,
      category: "صبحانه"
    },
    {
      id: 14,
      name: "املت",
      description: "املت تازه با سبزیجات",
      price: "۳۰",
      image: afghanBreakfast,
      rating: 4.7,
      isPopular: true,
      isSpicy: false,
      category: "صبحانه"
    },
    {
      id: 15,
      name: "کرایی",
      description: "تخم مرغ سرخ شده با طعم محلی",
      price: "۵۰",
      image: afghanBreakfast,
      rating: 4.5,
      isPopular: false,
      isSpicy: false,
      category: "صبحانه"
    },
    {
      id: 16,
      name: "چای سبز با نان داغ",
      description: "چای سبز تازه دم با نان گرم",
      price: "۲۰",
      image: teaWithBread,
      rating: 4.8,
      isPopular: true,
      isSpicy: false,
      category: "صبحانه"
    },
    // سیب زمینی
    {
      id: 17,
      name: "چپس با نان داغ",
      description: "چپس طلایی و کریسپی با نان تازه",
      price: "۳۰",
      image: frenchFries,
      rating: 4.7,
      isPopular: true,
      isSpicy: false,
      category: "پیش غذا"
    }
  ];

  const downloadMenu = () => {
    // Create a structured menu for download
    const menuText = menuItems.map(item => 
      `${item.name} - ${item.price} افغانی\n${item.description}\n`
    ).join('\n');
    
    const blob = new Blob([menuText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'menu-sedaghat-burger.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-6 font-persian">
            منوی غذا
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-persian text-primary">
            منوی صداقت برگر
          </h2>
          <p className="text-xl text-muted-foreground font-persian max-w-2xl mx-auto">
            طعم اصیل و کیفیت برتر در هر لقمه
          </p>
          
          {/* Download Menu Button */}
          <div className="mt-8">
            <Button 
              variant="outline" 
              onClick={downloadMenu}
              className="font-persian border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="w-4 h-4 ml-2" />
              دانلود منو
            </Button>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="secondary" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            همه موارد
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            برگر
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            نوشیدنی
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            صبحانه
          </Badge>
          <Badge variant="outline" className="px-6 py-2 text-sm font-persian cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
            پیش غذا
          </Badge>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-warm transition-smooth border-0 shadow-card bg-card overflow-hidden">
              <div className="relative">
                <LazyImage
                  src={item.image}
                  alt={`${item.name} - رستوران صداقت برگر`}
                  className={`w-full object-cover group-hover:scale-110 transition-smooth ${
                    item.category === "نوشیدنی" || item.category === "پیش غذا" 
                      ? "h-48" 
                      : "h-64"
                  }`}
                  width={400}
                  height={item.category === "نوشیدنی" || item.category === "پیش غذا" ? 200 : 260}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                {item.category === "صبحانه" && (
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
                    <span className="text-sm text-muted-foreground font-persian">افغانی</span>
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