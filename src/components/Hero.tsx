import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const heroImages = [
    "/hero-carousel/carousel-1.jpg",
    "/hero-carousel/carousel-2.jpg",
    "/hero-carousel/carousel-3.jpg",
    "/hero-carousel/carousel-4.jpg",
    "/hero-carousel/carousel-5.jpg",
    "/hero-carousel/carousel-6.jpg",
    "/hero-carousel/carousel-7.jpg",
    "/hero-carousel/carousel-8.jpg",
    "/hero-carousel/carousel-9.jpg",
    "/hero-carousel/carousel-10.jpg",
    "/hero-carousel/carousel-34.jpg",  
  ];

  const stats = [
    { icon: Star, value: "100+", label: t("Happy Clients", "عملاء سعداء") },
    { icon: Shield, value: "4+", label: t("Years Experience", "سنوات خبرة") },
    { icon: Clock, value: "24/7", label: t("Emergency Support", "دعم طوارئ") },
  ];

  return (
    <section className="relative overflow-hidden min-h-[90svh] sm:min-h-[85vh] md:min-h-[80vh]">
      {/* Hero Background Carousel - uses min-h-full to fill section on all viewports */}
      <div className="absolute inset-0 z-0 min-h-full">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full h-full min-h-full"
        >
          <CarouselContent className="h-full min-h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full min-h-full">
                <img
                  src={image}
                  alt={`Professional cleaning services carousel ${index + 1}`}
                  className="w-full h-full min-h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="left-4 right-auto" />
          <CarouselNext className="right-4 left-auto" /> */}
        </Carousel>
        {/* Overlay - positioned to cover entire background, responsive across all viewports */}
        <div className="absolute inset-0 min-h-full bg-foreground/60" aria-hidden />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-5 py-12 sm:py-16 md:py-24 lg:py-32 min-h-[90svh] sm:min-h-[85vh] md:min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-medium mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            {t("Licensed & Trusted in Dubai", "مرخصة وموثوقة في دبي")}
          </div>

          {/* Headline */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-background leading-tight mb-4 animate-slide-up">
            {t(
              "Professional Cleaning Services in Dubai",
              "خدمات تنظيف احترافية في دبي"
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-background/80 leading-relaxed mb-6 sm:mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {t(
              "From water tanks to carpets, we deliver spotless results. Trusted by 100+ Dubai homes and businesses.",
              "من خزانات المياه إلى السجاد، نقدم نتائج نظيفة تمامًا. موثوقة من قبل أكثر من 500 منزل ومؤسسة في دبي."
            )}
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-3 mb-12 animate-slide-up`} style={{ animationDelay: "0.2s" }}>
            <Link to="/contact">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                {t("Get Free Quote", "احصل على عرض مجاني")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
            </Link>
            <a href="https://wa.me/971509116282?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                {t("WhatsApp Us", "راسلنا واتساب")}
              </Button>
            </a>
            <a href="tel:+971509116282">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background">
                <Phone className="w-5 h-5" />
                {t("Call Now", "اتصل الآن")}
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {stats.map((stat) => (
              <div key={stat.value} className="text-center p-2 sm:p-3 rounded-xl bg-background/10 backdrop-blur-sm border border-background/10">
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-background">{stat.value}</p>
                <p className="text-[10px] xs:text-xs sm:text-sm text-background/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
