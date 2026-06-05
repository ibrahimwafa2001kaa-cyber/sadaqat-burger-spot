import { useState, useEffect } from "react";
import { Phone, MessageCircle, X, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE = "+93789963664";
const WA_NUMBER = "93789963664";

export default function FloatingContact() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waMessage = encodeURIComponent(t('whatsappDefaultMessage'));

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('contactWhatsapp')}
          className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-persian"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-bold">{t('contactWhatsapp')}</span>
        </a>
        <a
          href={`tel:${PHONE}`}
          aria-label={t('contactCall')}
          className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-persian"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm font-bold">{t('contactCall')}</span>
        </a>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t('contactToggle')}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform relative"
      >
        {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
        )}
      </button>
    </div>
  );
}
