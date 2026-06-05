import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
    { q: t('faq6Q'), a: t('faq6A') },
  ];

  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h2 className="text-4xl font-bold mb-3 font-persian">{t('faqTitle')}</h2>
          <p className="text-muted-foreground font-persian">{t('faqDescription')}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-right font-persian text-base font-bold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-right font-persian text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
