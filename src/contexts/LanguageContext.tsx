import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fa' | 'ps';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  fa: Record<string, string>;
  ps: Record<string, string>;
}

const translations: Translations = {
  fa: {
    // Header
    home: "خانه",
    menu: "منو",
    about: "درباره ما",
    contact: "تماس با ما",
    orderOnline: "سفارش آنلاین",
    phoneOrder: "سفارش تلفنی",
    skipToContent: "پرش به محتوای اصلی",
    
    // Hero Section
    rating5of5: "رتبه ۵ از ۵ در طعم و کیفیت",
    sedaghatBurger: "صداقت برگر",
    established2016: "تاسیس ۲۰۱۶",
    authentictaste: "طعم اصیل، کیفیت برتر، لذت بی‌پایان",
    bestForFamily: "برای خود و خانواده تان بهترین غذا را بدهید",
    viewMenu: "مشاهده منو",
    freshIngredients: "مواد اولیه تازه",
    freshIngredientsDesc: "استفاده از تازه‌ترین مواد اولیه روزانه",
    uniqueTaste: "طعم بی‌نظیر",
    uniqueTasteDesc: "دستور پخت منحصر به فرد و طعم اصیل",
    fastService: "سرویس سریع",
    fastServiceDesc: "آماده سازی و تحویل در کمترین زمان",
    
    // Menu Section
    menuFood: "منوی غذا",
    sedaghatBurgerMenu: "منوی صداقت برگر",
    authenticTasteQuality: "طعم اصیل و کیفیت برتر در هر لقمه",
    downloadMenu: "دانلود منو",
    allItems: "همه موارد",
    burger: "برگر",
    drinks: "نوشیدنی",
    breakfast: "صبحانه",
    appetizer: "پیش غذا",
    popular: "محبوب",
    add: "افزودن",
    afghani: "افغانی",
    viewFullMenu: "مشاهده منو کامل",
    
    // About Section
    ourStory: "داستان ما",
    aboutDescription1: "صداقت برگر تحت مدیریت قاری صاحب صفی الله محمدی، با هدف ارائه بهترین برگرها و غذاهای سالم برای خانواده‌ها در سال ۲۰۱۶ شروع به کار کرد.",
    aboutDescription2: "ما معتقدیم که برای خود و خانواده تان بهترین غذا را بدهید. با استفاده از گوشت تازه روزانه، نان تازه پخت و سبزیجات طبیعی، هر برگری که سرو می‌کنیم حاوی عشق و دقت است.",
    premiumQuality: "کیفیت برتر",
    premiumQualityDesc: "استفاده از بهترین و تازه‌ترین مواد اولیه",
    authenticTasteValue: "طعم اصیل",
    authenticTasteValueDesc: "دستور پخت منحصر به فرد و سنتی",
    fastServiceValue: "سرویس سریع",
    fastServiceValueDesc: "تحویل در کمترین زمان با بالاترین کیفیت",
    learnMore: "بیشتر بدانید",
    satisfiedCustomers: "مشتری راضی",
    yearsExperience: "سال تجربه",
    customerSatisfaction: "رضایت مشتری",
    preparationTime: "دقیقه آماده‌سازی",
    
    // Customer Reviews
    customerReviews: "نظر مشتریان",
    submitReview: "ارسال نظر",
    fullName: "نام و نام خانوادگی",
    address: "آدرس",
    selectProvince: "انتخاب ولایت",
    writeReview: "نظر خود را بنویسید...",
    
    // Footer
    authenticTasteQualityFooter: "طعم اصیل، کیفیت برتر",
    managerDescription: "صداقت برگر تحت مدیریت قاری صاحب صفی الله محمدی، برای خود و خانواده تان بهترین غذا را ارائه می‌دهد.",
    manager: "قاری صاحب صفی الله محمدی",
    ceo: "مدیر عامل",
    madeWithLove: "ساخته شده با عشق",
    quickAccess: "دسترسی سریع",
    popularBurgers: "برگرهای محبوب",
    contactInfo: "اطلاعات تماس",
    location1: "افغانستان، پروان، شهر چاریکار",
    location2: "جنب گذر اکرم خان مقابل شیریخ پزی حاجی جان آغا",
    workingHours1: "شنبه تا پنج‌شنبه: ۶ صبح - ۸ شب",
    workingHours2: "جمعه‌ها: ۵:۳۰ صبح - ۷:۴۵ شب",
    allRightsReserved: "تمامی حقوق محفوظ است.",
    privacy: "حریم خصوصی",
    terms: "شرایط استفاده",
    
    // Sidebar
    language: "زبان",
    share: "اشتراک‌گذاری",
    darkMode: "حالت تاریک",
    shareDescription: "لینک رستوران ما را با دوستانتان به اشتراک بگذارید",
    copyLink: "کپی لینک",
    copied: "کپی شد!",
    light: "روشن",
    dark: "تیره",
    system: "خودکار",
    whatsapp: "واتساپ",
    telegram: "تلگرام",
    facebook: "فیسبوک",
    twitter: "توییتر",
    dari: "دری",
    pashto: "پشتو"
  },
  ps: {
    // Header
    home: "کور",
    menu: "مینو",
    about: "زموږ په اړه",
    contact: "اړیکه",
    orderOnline: "آنلاین امر",
    phoneOrder: "د تلیفون امر",
    skipToContent: "اصلي منځپانګې ته ورشه",
    
    // Hero Section
    rating5of5: "د ۵ څخه ۵ درجه د خوند او کیفیت کې",
    sedaghatBurger: "صداقت برګر",
    established2016: "تاسیس ۲۰۱۶",
    authentictaste: "اصلي خوند، غوره کیفیت، بې پایه خوښي",
    bestForFamily: "د خپل ځان او کورنۍ لپاره غوره خواړه ورکړئ",
    viewMenu: "مینو وګورئ",
    freshIngredients: "تازه توکي",
    freshIngredientsDesc: "د ورځني تازه موادو کارول",
    uniqueTaste: "بې نظیره خوند",
    uniqueTasteDesc: "ځانګړي پخلي طریقه او اصلي خوند",
    fastService: "ګړندۍ خدماتو",
    fastServiceDesc: "د لږ وخت کې چمتو کول او سپارول",
    
    // Menu Section
    menuFood: "د خواړو مینو",
    sedaghatBurgerMenu: "د صداقت برګر مینو",
    authenticTasteQuality: "په هر ټکه کې اصلي خوند او غوره کیفیت",
    downloadMenu: "مینو ډاونلوډ کړئ",
    allItems: "ټول توکي",
    burger: "برګر",
    drinks: "څښاک",
    breakfast: "سهارنۍ",
    appetizer: "مخکنۍ خواړه",
    popular: "مشهور",
    add: "اضافه کول",
    afghani: "افغانۍ",
    viewFullMenu: "بشپړ مینو وګورئ",
    
    // About Section
    ourStory: "زموږ کیسه",
    aboutDescription1: "د صداقت برګر د قاري صاحب صفي الله محمدي په مدیریت سره، د ۲۰۱۶ کال کې د کورنیو لپاره د غوړو برګرونو او صحي خواړو وړاندې کولو موخه پیل شو.",
    aboutDescription2: "موږ پدې باور یو چې د خپل ځان او کورنۍ لپاره غوره خواړه ورکړئ. د ورځني تازه غوښې، تازه پخ شوي ډوډۍ او طبیعي سبزیجاتو کارولو سره، هر برګر چې موږ یې خدماتو وړاندې کوو د مینې او دقت لرونکی دی.",
    premiumQuality: "غوره کیفیت",
    premiumQualityDesc: "د غوړو او تازه موادو کارول",
    authenticTasteValue: "اصلي خوند",
    authenticTasteValueDesc: "ځانګړي او دودیز پخلي طریقه",
    fastServiceValue: "ګړندۍ خدماتو",
    fastServiceValueDesc: "د لږ وخت کې د لوړ کیفیت سره سپارول",
    learnMore: "نور پوه شئ",
    satisfiedCustomers: "راضي پیرودونکي",
    yearsExperience: "کلنۍ تجربه",
    customerSatisfaction: "د پیرودونکي رضایت",
    preparationTime: "دقیقې چمتو کول",
    
    // Customer Reviews
    customerReviews: "د پیرودونکو نظرونه",
    submitReview: "نظر واستوئ",
    fullName: "نوم او د پلار نوم",
    address: "آدرس",
    selectProvince: "ولایت وټاکئ",
    writeReview: "خپل نظر وکړئ...",
    
    // Footer
    authenticTasteQualityFooter: "اصلي خوند، غوره کیفیت",
    managerDescription: "د صداقت برګر د قاري صاحب صفي الله محمدي په مدیریت سره، د تاسو ځان او کورنۍ لپاره غوره خواړه وړاندې کوي.",
    manager: "قاري صاحب صفي الله محمدي",
    ceo: "اجرائیه رئیس",
    madeWithLove: "د مینې سره جوړ شوی",
    quickAccess: "ګړندۍ لاسرسۍ",
    popularBurgers: "مشهور برګرونه",
    contactInfo: "د اړیکو معلومات",
    location1: "افغانستان، پروان، د چاریکار ښار",
    location2: "د اکرم خان د تیرېدو څنګ ته د حاجي جان آغا د شیرینۍ پزونې مخ ته",
    workingHours1: "شنبه څخه پنج شنبه: ۶ سهار - ۸ ماښام",
    workingHours2: "جمعه: ۵:۳۰ سهار - ۷:۴۵ ماښام",
    allRightsReserved: "ټول حقونه خوندي دي.",
    privacy: "د محرمیت پالیسي",
    terms: "د کارولو شرایط",
    
    // Sidebar
    language: "ژبه",
    share: "شریکول",
    darkMode: "تیاره حالت",
    shareDescription: "زموږ د رستورانت لینک د خپلو ملګرو سره شریک کړئ",
    copyLink: "لینک کاپي کړئ",
    copied: "کاپي شو!",
    light: "ر lightا",
    dark: "تیاره",
    system: "خودکار",
    whatsapp: "واټس ایپ",
    telegram: "ټلیګرام",
    facebook: "فیسبوک",
    twitter: "ټویټر",
    dari: "دري",
    pashto: "پښتو"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fa');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};