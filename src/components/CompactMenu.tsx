import { useMemo, useState } from "react";
import { Info, Plus, Star, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import LazyImage from "@/components/LazyImage";
import { useCart } from "@/components/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import frenchFries from "@/assets/french-fries.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

type Item = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  isPopular?: boolean;
  isSpicy?: boolean;
};

const CompactMenu = () => {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const [active, setActive] = useState<string>("all");

  const items: Item[] = useMemo(() => [
    { id: 2, name: t("simpleburger"), description: t("simpleburgerdesc"), price: "۲۰", image: "/lovable-uploads/5aea4498-383d-4eff-b64f-6edb39bdcd9a.png", category: "burger", rating: 4.6 },
    { id: 3, name: t("mediumburger"), description: t("mediumburgerdesc"), price: "۳۰", image: veggieBurger, category: "burger", rating: 4.8, isPopular: true },
    { id: 4, name: t("largeburger"), description: t("largeburgerdesc"), price: "۵۰", image: heroBurger, category: "burger", rating: 4.9, isPopular: true },
    { id: 5, name: t("doubleburger"), description: t("doubleburgerdesc"), price: "۷۰", image: frenchFries, category: "burger", rating: 4.9, isPopular: true },
    { id: 6, name: t("energyxball"), description: t("energyxballdesc"), price: "۳۰", image: "/lovable-uploads/fcdb4591-64fa-4e41-9949-cc04bdee1cd5.png", category: "drinks", rating: 4.3 },
    { id: 7, name: t("pepsi"), description: t("pepsidesc"), price: "۲۰", image: "/lovable-uploads/65063039-1c43-4a62-a6b4-acff78350c9e.png", category: "drinks", rating: 4.5, isPopular: true },
    { id: 8, name: t("cocacola"), description: t("cocacoladesc"), price: "۱۰", image: "/lovable-uploads/ffd70cb4-d749-4b31-bf14-605f4a9a67a9.png", category: "drinks", rating: 4.5 },
    { id: 9, name: t("energyalkozi"), description: t("energyalkozidesc"), price: "۴۰", image: "/lovable-uploads/771147af-1042-4be8-b8f1-e8f26f92f82a.png", category: "drinks", rating: 4.2 },
    { id: 10, name: t("paradise"), description: t("paradisedesc"), price: "۱۰", image: "/lovable-uploads/bffbe3bd-1034-4d12-8de2-a96610282cae.png", category: "drinks", rating: 4.4 },
    { id: 11, name: t("watersmall"), description: t("watersmalldesc"), price: "۱۰", image: "/lovable-uploads/98f0d13e-6844-4636-92bd-04feea0632af.png", category: "drinks", rating: 4.0 },
    { id: 12, name: t("waterlarge"), description: t("waterlargedesc"), price: "۲۰", image: "/lovable-uploads/24fd629c-696d-498e-986b-68b174fa998b.png", category: "drinks", rating: 4.0 },
    { id: 18, name: t("cocacolalarge"), description: t("cocacolargedesc"), price: "۵۰", image: "/lovable-uploads/7e097f7a-29d2-4787-9f6e-e88ca06b0696.png", category: "drinks", rating: 4.5 },
    { id: 19, name: t("aone"), description: t("aonedesc"), price: "۲۰", image: "/lovable-uploads/ddf5b82b-735c-4333-aba2-f4667f89fc51.png", category: "drinks", rating: 4.3 },
    { id: 13, name: t("boiledegg"), description: t("boiledeggdesc"), price: "۱۰", image: "/lovable-uploads/984d9553-af23-4eaf-b9b1-c2b403e52dd4.png", category: "breakfast", rating: 4.6 },
    { id: 14, name: t("omelet"), description: t("omeletdesc"), price: "۳۰", image: "/lovable-uploads/a4327bbf-d588-4c3d-899a-a024878bed61.png", category: "breakfast", rating: 4.7, isPopular: true },
    { id: 15, name: t("krayi"), description: t("krayidesc"), price: "۵۰", image: "/lovable-uploads/da8a2c9d-c0fa-4adc-8eab-133738e230a9.png", category: "breakfast", rating: 4.5 },
    { id: 16, name: t("greentea"), description: t("greentedesc"), price: "۲۰", image: "/lovable-uploads/3f0761a6-d4f3-475a-bf94-5d3926bbb9bd.png", category: "breakfast", rating: 4.8, isPopular: true },
    { id: 17, name: t("chips"), description: t("chipsdesc"), price: "۳۰", image: "/lovable-uploads/c32daf20-6b76-4801-85fc-c96060e041ac.png", category: "appetizer", rating: 4.7, isPopular: true },
  ], [t]);

  const categories = [
    { key: "all", label: t("allItems") },
    { key: "burger", label: t("burger") },
    { key: "drinks", label: t("drinks") },
    { key: "breakfast", label: t("breakfast") },
    { key: "appetizer", label: t("appetizer") },
  ];

  const filtered = active === "all" ? items : items.filter(i => i.category === active);

  return (
    <section id="compact-menu" className="py-16 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="bg-primary text-primary-foreground mb-3 font-persian">{t("menuFood")}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-persian text-primary">
            {t("sedaghatBurgerMenu")}
          </h2>
          <p className="mt-2 text-muted-foreground font-persian text-sm">
            {t("authenticTasteQuality")}
          </p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sticky top-2 z-10">
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-persian border transition-smooth ${
                active === c.key
                  ? "bg-primary text-primary-foreground border-primary shadow-warm"
                  : "bg-card text-foreground border-border hover:border-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Compact grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map(item => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-warm transition-smooth overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  width={300}
                  height={300}
                  sizes="(max-width: 640px) 50vw, 25vw"
                />

                {/* Info popover */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      aria-label="info"
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background/85 backdrop-blur flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-card"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent side="top" className="w-60 font-persian text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{item.rating}</span>
                      {item.isPopular && (
                        <Badge className="bg-warm-gold text-warm-wood text-[10px] py-0">{t("popular")}</Badge>
                      )}
                    </div>
                    <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </PopoverContent>
                </Popover>

                {item.isPopular && (
                  <span className="absolute top-2 left-2 bg-warm-gold text-warm-wood text-[10px] font-persian px-2 py-0.5 rounded-full">
                    {t("popular")}
                  </span>
                )}
                {item.isSpicy && (
                  <span className="absolute bottom-2 left-2 bg-warm-red text-white rounded-full p-1">
                    <Flame className="w-3 h-3" />
                  </span>
                )}

                {/* price overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex items-end justify-between">
                  <span className="text-white text-sm font-bold font-persian">
                    {item.price} <span className="text-[10px] opacity-80">{t("afghani")}</span>
                  </span>
                </div>
              </div>

              <div className="p-2.5 flex items-center justify-between gap-2">
                <h3 className="text-xs sm:text-sm font-bold font-persian truncate text-card-foreground">
                  {item.name}
                </h3>
                <Button
                  size="icon"
                  variant="food"
                  className="h-7 w-7 shrink-0 rounded-full"
                  onClick={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      category: item.category,
                    })
                  }
                  aria-label={t("add")}
                >
                  <Plus className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactMenu;
