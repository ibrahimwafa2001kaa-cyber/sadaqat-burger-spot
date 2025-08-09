import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-white font-persian">۴۰۴</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-white font-persian">صفحه پیدا نشد!</h1>
          <p className="text-xl text-white/90 mb-6 font-persian leading-relaxed">
            متأسفانه صفحه‌ای که دنبالش می‌گردید وجود ندارد یا ممکن است حذف شده باشد.
          </p>
          <p className="text-lg text-white/70 mb-8 font-persian">
            ولی نگران نباشید، می‌تونید به صفحه اصلی برگردید و از برگرهای خوشمزه ما لذت ببرید!
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-warm-wood hover:bg-warm-cream border-white font-persian w-full"
            onClick={() => window.location.href = "/"}
          >
            <Home className="w-5 h-5 ml-2" />
            بازگشت به خانه
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 font-persian"
            onClick={() => window.history.back()}
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            بازگشت به صفحه قبل
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default NotFound;