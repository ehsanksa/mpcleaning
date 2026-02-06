import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ClientsLogoCarousel from "@/components/ClientsLogoCarousel";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <ClientsLogoCarousel />

        {/* Quick Booking Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                  {t("Quick Booking", "حجز سريع")}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  {t("Book Your Cleaning Service", "احجز خدمة التنظيف")}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {t(
                    "Fill in the form and we'll get back to you within 30 minutes with a free quote. No obligations, just clean results!",
                    "املأ النموذج وسنتواصل معك خلال 30 دقيقة مع عرض مجاني. بدون التزامات، فقط نتائج نظيفة!"
                  )}
                </p>
                <div className="space-y-3">
                  {[
                    t("✓ Free, no-obligation quotes", "✓ عروض مجانية بدون التزام"),
                    t("✓ Response within 30 minutes", "✓ رد خلال 30 دقيقة"),
                    t("✓ Licensed & insured team", "✓ فريق مرخص ومؤمن"),
                    t("✓ Satisfaction guaranteed", "✓ ضمان الرضا"),
                  ].map((item, i) => (
                    <p key={i} className="text-foreground font-medium">{item}</p>
                  ))}
                </div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>

        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
