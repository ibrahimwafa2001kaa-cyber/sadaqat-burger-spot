import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// Logo uploaded by user

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "خانه", href: "#home" },
    { name: "منو", href: "#menu" },
    { name: "درباره ما", href: "#about" },
    { name: "تماس با ما", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-glow">
              <img 
                src="/lovable-uploads/66dc480d-3098-49a3-8978-69d5f37a2196.png" 
                alt="صداقت برگر لوگو" 
                style={{maxWidth:"100%", height:"auto"}}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-persian text-primary">صداقت برگر</h1>
              <p className="text-sm text-muted-foreground font-persian">طعم اصیل، کیفیت برتر</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-persian font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <a href="tel:+93789963664" className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-smooth">
              <Phone className="w-4 h-4" />
              <span className="font-persian">+93789963664</span>
            </a>
            <Button variant="warm" size="sm" className="font-persian">
              سفارش آنلاین
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">ص</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold font-persian text-primary">صداقت برگر</h2>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-smooth font-persian text-lg py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col space-y-4 pt-4 border-t border-border">
                  <a href="tel:+93789963664" className="flex items-center space-x-2 space-x-reverse text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="font-persian">+93789963664</span>
                  </a>
                  <Button variant="warm" className="font-persian">
                    سفارش آنلاین
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;