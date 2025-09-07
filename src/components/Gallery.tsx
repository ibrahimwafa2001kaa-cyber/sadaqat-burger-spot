import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// لیست عکس‌ها (۱۰ عدد)
const images = [
  "/lovable-uploads/ba47a0da-0b6f-409a-8168-aa905be1bde9.png", // عکس آپلود شده
  "/images/gallery2.jpg", // جای خالی
  "/images/gallery3.jpg", // جای خالی
  "/images/gallery4.jpg", // جای خالی
  "/images/gallery5.jpg", // جای خالی
  "/images/gallery6.jpg", // جای خالی
  "/images/gallery7.jpg", // جای خالی
  "/images/gallery8.jpg", // جای خالی
  "/images/gallery9.jpg", // جای خالی
  "/images/gallery10.jpg", // جای خالی
];

export default function Gallery() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  // تغییر خودکار هر 4 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-persian">
            {t('gallery')}
          </h2>
          <p className="text-muted-foreground text-lg font-persian">
            {t('galleryDescription')}
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={t('galleryAlt')}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          {/* نقاط پایین برای نشانگر عکس‌ها */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === index ? "bg-primary w-6" : "bg-white/70"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          {/* دکمه‌های ناوبری */}
          <button
            onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label={t('previousImage')}
          >
            ←
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label={t('nextImage')}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}