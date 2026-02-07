import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesOverview = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            {t("Our Services", "خدماتنا")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {t("Complete Cleaning Solutions", "حلول تنظيف شاملة")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t(
              "Professional cleaning services tailored for Dubai homes and businesses",
              "خدمات تنظيف احترافية مصممة خصيصًا للمنازل والمؤسسات في دبي"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm leading-tight">
                {t(service.title.en, service.title.ar)}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                {t(service.shortDesc.en, service.shortDesc.ar)}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="default" size="lg">
              {t("View All Services", "عرض جميع الخدمات")}
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
