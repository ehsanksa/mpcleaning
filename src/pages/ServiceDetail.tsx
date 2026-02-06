import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, isRTL } = useLanguage();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("Service Not Found", "الخدمة غير موجودة")}</h1>
          <Link to="/services">
            <Button variant="default">{t("View All Services", "عرض جميع الخدمات")}</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              {t("Back to Services", "العودة للخدمات")}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
                {t(service.title.en, service.title.ar)}
              </h1>
            </div>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              {t(service.shortDesc.en, service.shortDesc.ar)}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {t("Service Description", "وصف الخدمة")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t(service.description.en, service.description.ar)}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {t("What's Included", "ما الذي يتضمنه")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(t(service.includes.en.join("|||"), service.includes.ar.join("|||"))).split("|||").map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-muted">
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.seoContent.en, service.seoContent.ar)}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact">
                    <Button variant="cta" size="lg">
                      {t("Get Free Quote", "احصل على عرض مجاني")}
                    </Button>
                  </Link>
                  <a href="https://wa.me/971509116282?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg">
                      <MessageCircle className="w-4 h-4" />
                      {t("WhatsApp Us", "راسلنا واتساب")}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Sidebar Form */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
