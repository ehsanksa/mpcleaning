import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-5 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          {t("Ready for a Spotless Space?", "مستعد لمكان نظيف تمامًا؟")}
        </h2>
        <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-6 sm:mb-8">
          {t(
            "Get your free quote today. Our team is ready to make your home or office shine!",
            "احصل على عرضك المجاني اليوم. فريقنا جاهز لجعل منزلك أو مكتبك يلمع!"
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact">
            <Button variant="cta" size="xl">
              {t("Get Free Quote", "احصل على عرض مجاني")}
              <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
          </Link>
          <a href="https://wa.me/971509116282?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              {t("WhatsApp Us", "راسلنا واتساب")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
