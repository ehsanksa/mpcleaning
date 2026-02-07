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

        {/* About Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  {t("About Us", "من نحن")}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                  {t(
                    "Transforming Spaces with Excellence Since Day One",
                    "نحوّل المساحات إلى التميز منذ اليوم الأول"
                  )}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-4">
                  {t(
                    "At Masarath Parveen, we don't just clean—we elevate. From luxury hotels to bustling restaurants, our dedicated team delivers spotless results that exceed expectations. Trusted by leading brands across Dubai and the UAE, we combine precision, professionalism, and passion in every service we provide.",
                    "في مساراث بارفين، لا ننظف فحسب—بل نرفع المستوى. من الفنادق الفاخرة إلى المطاعم النابضة بالحياة، يقدم فريقنا المتفاني نتائج لا تشوبها شائبة تتجاوز التوقعات. موثوق بنا من قبل العلامات التجارية الرائدة في دبي والإمارات، نجمع بين الدقة والاحترافية والشغف في كل خدمة نقدمها."
                  )}
                </p>
                <p className="text-muted-foreground text-base sm:text-lg">
                  {t(
                    "Your cleanliness is our commitment. Your satisfaction is our pride.",
                    "نظافتك التزامنا. رضاك فخرنا."
                  )}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <video
                  src="/ea0ac.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto aspect-video object-cover"
                  aria-label={t("Masarath Parveen cleaning services", "خدمات تنظيف مساراث بارفين")}
                />
              </div>
            </div>
          </div>
        </section>

        <ClientsLogoCarousel />

        {/* Quick Booking Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                  {t("Quick Booking", "حجز سريع")}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  {t("Book Your Cleaning Service", "احجز خدمة التنظيف")}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6">
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
