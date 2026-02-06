import {
  Droplets,
  Wind,
  Flame,
  Building2,
  Trash2,
  Sofa,
  Layers,
  Wrench,
  Waves,
  PipetteIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: typeof Droplets;
  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  description: { en: string; ar: string };
  includes: { en: string[]; ar: string[] };
  seoContent: { en: string; ar: string };
}

export const services: ServiceData[] = [
  {
    slug: "water-tank-cleaning",
    icon: Droplets,
    title: { en: "Domestic Water Tank Cleaning", ar: "تنظيف خزانات المياه المنزلية" },
    shortDesc: {
      en: "Professional water tank sanitization for safe, clean drinking water in your home.",
      ar: "تعقيم احترافي لخزانات المياه لضمان مياه شرب نظيفة وآمنة في منزلك.",
    },
    description: {
      en: "Our certified team provides thorough cleaning, disinfection, and sanitization of domestic water tanks across Dubai. We use approved chemicals and follow Dubai Municipality guidelines to ensure your family's water supply is safe and clean.",
      ar: "يقدم فريقنا المعتمد خدمة تنظيف وتطهير وتعقيم شاملة لخزانات المياه المنزلية في جميع أنحاء دبي. نستخدم مواد كيميائية معتمدة ونتبع إرشادات بلدية دبي لضمان سلامة ونظافة إمدادات المياه لعائلتك.",
    },
    includes: {
      en: ["Complete tank draining", "High-pressure scrubbing", "Anti-bacterial disinfection", "Water quality testing", "Post-cleaning report"],
      ar: ["تفريغ الخزان بالكامل", "فرك بالضغط العالي", "تطهير مضاد للبكتيريا", "فحص جودة المياه", "تقرير بعد التنظيف"],
    },
    seoContent: {
      en: "Looking for reliable water tank cleaning in Dubai? MASARATH PARVEEN Cleaning Services provides certified domestic water tank cleaning, disinfection, and maintenance across Dubai, including Karama, Bur Dubai, Deira, and surrounding areas.",
      ar: "هل تبحث عن خدمة تنظيف خزانات مياه موثوقة في دبي؟ توفر شركة مسارات بارفين لخدمات التنظيف خدمة تنظيف وتطهير وصيانة خزانات المياه المنزلية المعتمدة في جميع أنحاء دبي.",
    },
  },
  {
    slug: "pipeline-disinfection",
    icon: PipetteIcon,
    title: { en: "Pipeline Disinfection (Flush Outs)", ar: "تطهير خطوط الأنابيب" },
    shortDesc: {
      en: "Thorough pipeline flushing and disinfection for clean, safe water flow.",
      ar: "تنظيف وتطهير شامل لخطوط الأنابيب لضمان تدفق مياه نظيفة وآمنة.",
    },
    description: {
      en: "Our pipeline disinfection service ensures your building's water distribution system is free from contaminants, biofilm, and harmful bacteria. We perform comprehensive flush-outs using approved methods.",
      ar: "تضمن خدمة تطهير خطوط الأنابيب لدينا أن نظام توزيع المياه في مبناك خالٍ من الملوثات والأغشية الحيوية والبكتيريا الضارة.",
    },
    includes: {
      en: ["Full pipeline assessment", "High-pressure flushing", "Chemical disinfection", "Flow rate testing", "Compliance certificate"],
      ar: ["تقييم شامل للأنابيب", "تنظيف بالضغط العالي", "تطهير كيميائي", "اختبار معدل التدفق", "شهادة امتثال"],
    },
    seoContent: {
      en: "Professional pipeline disinfection and flush-out services in Dubai. Keep your building's water system clean and safe with MASARATH PARVEEN Cleaning Services.",
      ar: "خدمات تطهير وتنظيف خطوط الأنابيب الاحترافية في دبي. حافظ على نظافة وسلامة نظام المياه في مبناك مع شركة مسارات بارفين.",
    },
  },
  {
    slug: "ac-duct-cleaning",
    icon: Wind,
    title: { en: "AC Duct Cleaning", ar: "تنظيف مجاري الهواء" },
    shortDesc: {
      en: "Improve air quality and AC efficiency with professional duct cleaning.",
      ar: "حسّن جودة الهواء وكفاءة التكييف مع تنظيف مجاري الهواء الاحترافي.",
    },
    description: {
      en: "Breathe cleaner air with our professional AC duct cleaning service. We remove dust, allergens, mold, and debris from your HVAC system, improving indoor air quality and reducing energy costs.",
      ar: "تنفس هواءً أنظف مع خدمة تنظيف مجاري التكييف الاحترافية. نزيل الغبار والمواد المسببة للحساسية والعفن من نظام التهوية لتحسين جودة الهواء.",
    },
    includes: {
      en: ["Complete duct inspection", "HEPA vacuum cleaning", "Anti-microbial treatment", "Filter replacement", "Before & after photos"],
      ar: ["فحص شامل للمجاري", "تنظيف بمكنسة HEPA", "معالجة مضادة للميكروبات", "استبدال الفلاتر", "صور قبل وبعد"],
    },
    seoContent: {
      en: "Expert AC duct cleaning in Dubai. MASARATH PARVEEN provides thorough HVAC cleaning for homes and offices, improving air quality and cooling efficiency across Dubai.",
      ar: "تنظيف مجاري التكييف بخبرة في دبي. تقدم شركة مسارات بارفين تنظيفًا شاملاً لأنظمة التهوية للمنازل والمكاتب.",
    },
  },
  {
    slug: "kitchen-duct-cleaning",
    icon: Flame,
    title: { en: "Kitchen Duct Cleaning", ar: "تنظيف مجاري المطبخ" },
    shortDesc: {
      en: "Fire-safe kitchen exhaust cleaning for restaurants and commercial kitchens.",
      ar: "تنظيف مداخن المطبخ لضمان السلامة من الحرائق للمطاعم والمطابخ التجارية.",
    },
    description: {
      en: "Reduce fire risk and maintain hygiene compliance with our professional kitchen duct and exhaust cleaning. Essential for restaurants, hotels, and commercial kitchens in Dubai.",
      ar: "قلل من مخاطر الحرائق وحافظ على الامتثال الصحي مع خدمة تنظيف مجاري ومداخن المطبخ الاحترافية. ضرورية للمطاعم والفنادق والمطابخ التجارية في دبي.",
    },
    includes: {
      en: ["Exhaust hood cleaning", "Ductwork degreasing", "Fan cleaning", "Fire safety inspection", "Compliance documentation"],
      ar: ["تنظيف شفاطات العادم", "إزالة الشحوم من المجاري", "تنظيف المراوح", "فحص السلامة من الحرائق", "وثائق الامتثال"],
    },
    seoContent: {
      en: "Professional kitchen duct and exhaust cleaning in Dubai. Fire safety compliance and grease removal for restaurants and commercial kitchens.",
      ar: "تنظيف مجاري ومداخن المطبخ الاحترافي في دبي. الامتثال لمعايير السلامة من الحرائق وإزالة الشحوم للمطاعم والمطابخ التجارية.",
    },
  },
  {
    slug: "building-cleaning",
    icon: Building2,
    title: { en: "General Building Cleaning", ar: "تنظيف المباني العام" },
    shortDesc: {
      en: "Complete building maintenance and cleaning for residential & commercial properties.",
      ar: "صيانة وتنظيف شامل للمباني السكنية والتجارية.",
    },
    description: {
      en: "Comprehensive building cleaning services including common areas, lobbies, parking lots, facades, and exterior washing. Ideal for property managers and building owners in Dubai.",
      ar: "خدمات تنظيف شاملة للمباني تشمل المناطق المشتركة والردهات ومواقف السيارات والواجهات والغسيل الخارجي. مثالية لمديري العقارات وأصحاب المباني في دبي.",
    },
    includes: {
      en: ["Common area cleaning", "Lobby & entrance maintenance", "Parking lot cleaning", "Facade washing", "Regular schedule planning"],
      ar: ["تنظيف المناطق المشتركة", "صيانة الردهة والمدخل", "تنظيف مواقف السيارات", "غسل الواجهات", "تخطيط جدول منتظم"],
    },
    seoContent: {
      en: "Professional building cleaning services in Dubai. MASARATH PARVEEN offers complete building maintenance for residential and commercial properties.",
      ar: "خدمات تنظيف المباني الاحترافية في دبي. تقدم شركة مسارات بارفين صيانة شاملة للمباني السكنية والتجارية.",
    },
  },
  {
    slug: "garbage-chute-cleaning",
    icon: Trash2,
    title: { en: "Garbage Chute Cleaning", ar: "تنظيف مجاري القمامة" },
    shortDesc: {
      en: "Eliminate odors and bacteria with professional garbage chute sanitization.",
      ar: "تخلص من الروائح والبكتيريا مع تعقيم مجاري القمامة الاحترافي.",
    },
    description: {
      en: "Our garbage chute cleaning service eliminates foul odors, bacteria, and pest-attracting residues. We use high-pressure washing and antimicrobial treatments for a hygienic living environment.",
      ar: "تقضي خدمة تنظيف مجاري القمامة على الروائح الكريهة والبكتيريا والرواسب الجاذبة للآفات. نستخدم الغسيل بالضغط العالي والمعالجات المضادة للميكروبات.",
    },
    includes: {
      en: ["High-pressure washing", "Antimicrobial treatment", "Odor elimination", "Pest prevention", "Regular maintenance plans"],
      ar: ["غسيل بالضغط العالي", "معالجة مضادة للميكروبات", "إزالة الروائح", "مكافحة الآفات", "خطط صيانة دورية"],
    },
    seoContent: {
      en: "Garbage chute cleaning services in Dubai. Keep your building hygienic and odor-free with MASARATH PARVEEN professional chute cleaning.",
      ar: "خدمات تنظيف مجاري القمامة في دبي. حافظ على نظافة مبناك وخلوه من الروائح مع خدمة التنظيف الاحترافية.",
    },
  },
  {
    slug: "sofa-cleaning",
    icon: Sofa,
    title: { en: "Sofa Cleaning", ar: "تنظيف الأرائك" },
    shortDesc: {
      en: "Deep sofa & upholstery cleaning to restore freshness and remove stains.",
      ar: "تنظيف عميق للأرائك والمفروشات لاستعادة النظافة وإزالة البقع.",
    },
    description: {
      en: "Revitalize your furniture with our professional sofa and upholstery cleaning. We use eco-friendly products and advanced steam cleaning to remove deep stains, allergens, and odors.",
      ar: "جدد أثاثك مع خدمة تنظيف الأرائك والمفروشات الاحترافية. نستخدم منتجات صديقة للبيئة وتنظيف بالبخار المتقدم لإزالة البقع العميقة والمواد المسببة للحساسية والروائح.",
    },
    includes: {
      en: ["Pre-inspection & spot testing", "Deep steam cleaning", "Stain removal treatment", "Fabric conditioning", "Quick drying process"],
      ar: ["فحص مسبق واختبار البقع", "تنظيف عميق بالبخار", "معالجة إزالة البقع", "تكييف القماش", "عملية تجفيف سريعة"],
    },
    seoContent: {
      en: "Professional sofa cleaning in Dubai. MASARATH PARVEEN offers deep cleaning and stain removal for sofas and upholstery at competitive prices.",
      ar: "تنظيف الأرائك الاحترافي في دبي. تقدم شركة مسارات بارفين تنظيفًا عميقًا وإزالة البقع للأرائك والمفروشات بأسعار تنافسية.",
    },
  },
  {
    slug: "carpet-cleaning",
    icon: Layers,
    title: { en: "Carpet Cleaning", ar: "تنظيف السجاد" },
    shortDesc: {
      en: "Professional carpet cleaning for homes and offices — deep clean & sanitize.",
      ar: "تنظيف احترافي للسجاد للمنازل والمكاتب — تنظيف عميق وتعقيم.",
    },
    description: {
      en: "Our carpet cleaning service uses hot water extraction and professional-grade equipment to remove dirt, stains, allergens, and bacteria from all carpet types. Suitable for homes, offices, and commercial spaces.",
      ar: "تستخدم خدمة تنظيف السجاد لدينا تقنية الاستخلاص بالماء الساخن ومعدات احترافية لإزالة الأوساخ والبقع والمواد المسببة للحساسية والبكتيريا من جميع أنواع السجاد.",
    },
    includes: {
      en: ["Pre-vacuuming", "Hot water extraction", "Stain treatment", "Deodorizing", "Fast drying"],
      ar: ["كنس مسبق", "استخلاص بالماء الساخن", "معالجة البقع", "إزالة الروائح", "تجفيف سريع"],
    },
    seoContent: {
      en: "Expert carpet cleaning services in Dubai. Deep cleaning, stain removal, and sanitization for residential and commercial carpets.",
      ar: "خدمات تنظيف السجاد المتخصصة في دبي. تنظيف عميق وإزالة البقع وتعقيم للسجاد السكني والتجاري.",
    },
  },
  {
    slug: "water-tank-repairing",
    icon: Wrench,
    title: { en: "Water Tank Repairing", ar: "إصلاح خزانات المياه" },
    shortDesc: {
      en: "Expert water tank repair, waterproofing, and maintenance services.",
      ar: "خدمات إصلاح وعزل وصيانة خزانات المياه بخبرة.",
    },
    description: {
      en: "We provide comprehensive water tank repair services including leak fixing, waterproofing, structural repairs, and coating application. Our team handles all types of tanks — concrete, fiberglass, and plastic.",
      ar: "نقدم خدمات إصلاح شاملة لخزانات المياه تشمل إصلاح التسريبات والعزل المائي والإصلاحات الهيكلية وتطبيق الطلاء. يتعامل فريقنا مع جميع أنواع الخزانات.",
    },
    includes: {
      en: ["Leak detection & repair", "Waterproofing coating", "Structural assessment", "Anti-corrosion treatment", "Maintenance warranty"],
      ar: ["كشف وإصلاح التسريبات", "طلاء العزل المائي", "تقييم هيكلي", "معالجة مضادة للتآكل", "ضمان الصيانة"],
    },
    seoContent: {
      en: "Water tank repair and waterproofing in Dubai. MASARATH PARVEEN provides leak repair, structural fixes, and maintenance for all tank types.",
      ar: "إصلاح وعزل خزانات المياه في دبي. تقدم شركة مسارات بارفين إصلاح التسريبات والإصلاحات الهيكلية والصيانة لجميع أنواع الخزانات.",
    },
  },
  {
    slug: "drain-line-jetting",
    icon: Waves,
    title: { en: "Drain Line Jetting", ar: "تنظيف خطوط الصرف بالضغط" },
    shortDesc: {
      en: "High-pressure drain jetting to clear blockages and restore flow.",
      ar: "تنظيف المصارف بالضغط العالي لإزالة الانسدادات واستعادة التدفق.",
    },
    description: {
      en: "Our drain line jetting service uses high-pressure water to clear stubborn blockages, grease buildup, and tree root intrusions. Effective for residential, commercial, and industrial drain systems.",
      ar: "تستخدم خدمة تنظيف خطوط الصرف لدينا مياه عالية الضغط لإزالة الانسدادات العنيدة وتراكم الشحوم وتسرب جذور الأشجار. فعالة للأنظمة السكنية والتجارية والصناعية.",
    },
    includes: {
      en: ["CCTV drain survey", "High-pressure jetting", "Grease removal", "Root cutting", "Flow testing"],
      ar: ["مسح بالكاميرا للمصارف", "تنظيف بالضغط العالي", "إزالة الشحوم", "قطع الجذور", "اختبار التدفق"],
    },
    seoContent: {
      en: "Professional drain line jetting in Dubai. MASARATH PARVEEN offers high-pressure drain cleaning for blocked drains, sewers, and pipes.",
      ar: "تنظيف خطوط الصرف بالضغط العالي في دبي. تقدم شركة مسارات بارفين تنظيف المصارف المسدودة والمجاري والأنابيب.",
    },
  },
];

export const testimonials = [
  {
    name: { en: "Ahmed Al Rashid", ar: "أحمد الراشد" },
    text: {
      en: "Excellent water tank cleaning service! The team was professional, punctual, and thorough. Highly recommend for anyone in Dubai.",
      ar: "خدمة تنظيف خزانات مياه ممتازة! كان الفريق محترفًا ودقيقًا وشاملاً. أنصح بها بشدة لأي شخص في دبي.",
    },
    rating: 5,
    service: { en: "Water Tank Cleaning", ar: "تنظيف خزانات المياه" },
  },
  {
    name: { en: "Sara Mohammed", ar: "سارة محمد" },
    text: {
      en: "Had my AC ducts cleaned and the difference is amazing. Air quality improved significantly. Great value for the price!",
      ar: "قمت بتنظيف مجاري التكييف والفرق مذهل. تحسنت جودة الهواء بشكل كبير. قيمة ممتازة مقابل السعر!",
    },
    rating: 5,
    service: { en: "AC Duct Cleaning", ar: "تنظيف مجاري التكييف" },
  },
  {
    name: { en: "Fatima Al Zahra", ar: "فاطمة الزهراء" },
    text: {
      en: "My carpets look brand new after their deep cleaning. Stains that I thought were permanent are gone. Amazing work!",
      ar: "سجادي يبدو جديدًا تمامًا بعد التنظيف العميق. البقع التي ظننت أنها دائمة اختفت. عمل مذهل!",
    },
    rating: 5,
    service: { en: "Carpet Cleaning", ar: "تنظيف السجاد" },
  },
  {
    name: { en: "Khalid Hassan", ar: "خالد حسن" },
    text: {
      en: "Professional and reliable building cleaning service. They handle our entire building maintenance and we couldn't be happier.",
      ar: "خدمة تنظيف مباني محترفة وموثوقة. يتولون صيانة المبنى بالكامل ونحن سعداء جدًا.",
    },
    rating: 5,
    service: { en: "Building Cleaning", ar: "تنظيف المباني" },
  },
];
