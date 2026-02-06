import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-carousel/carousel-7.jpg"
              alt="Professional cleaning services"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-background mb-4">
              {t("Our Cleaning Services", "خدمات التنظيف لدينا")}
            </h1>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              {t(
                "Professional cleaning solutions for homes, offices, and commercial properties across Dubai",
                "حلول تنظيف احترافية للمنازل والمكاتب والعقارات التجارية في جميع أنحاء دبي"
              )}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {t(service.title.en, service.title.ar)}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {t(service.shortDesc.en, service.shortDesc.ar)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                      {t("Learn More", "اعرف المزيد")}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
