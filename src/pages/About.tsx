import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Shield, Award, Users, Heart } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("Licensed & Certified", "مرخصة ومعتمدة"),
      desc: t(
        "Fully licensed and compliant with Dubai Municipality regulations. Our team holds all required certifications for safe, professional cleaning.",
        "مرخصة بالكامل ومتوافقة مع لوائح بلدية دبي. يحمل فريقنا جميع الشهادات المطلوبة للتنظيف الآمن والمحترف."
      ),
    },
    {
      icon: Award,
      title: t("Quality Standards", "معايير الجودة"),
      desc: t(
        "We use premium, eco-friendly cleaning products and state-of-the-art equipment to deliver consistently excellent results.",
        "نستخدم منتجات تنظيف ممتازة وصديقة للبيئة ومعدات حديثة لتقديم نتائج ممتازة باستمرار."
      ),
    },
    {
      icon: Users,
      title: t("Trained Staff", "طاقم مدرب"),
      desc: t(
        "Every team member undergoes rigorous training in cleaning techniques, safety protocols, and customer service.",
        "يخضع كل عضو في الفريق لتدريب صارم في تقنيات التنظيف وبروتوكولات السلامة وخدمة العملاء."
      ),
    },
    {
      icon: Heart,
      title: t("Customer First", "العميل أولاً"),
      desc: t(
        "Your satisfaction is our priority. We guarantee our work and are always available to address your concerns.",
        "رضاك هو أولويتنا. نحن نضمن عملنا ومتاحون دائمًا لمعالجة مخاوفك."
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-carousel/about-us.avif"
              alt="About us professional cleaning"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-background mb-4">
              {t("About MASARATH PARVEEN", "عن مسارات بارفين")}
            </h1>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              {t(
                "Your trusted cleaning partner in Dubai since over a decade",
                "شريكك الموثوق في التنظيف في دبي منذ أكثر من عقد"
              )}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                {t("Our Story", "قصتنا")}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                {t("A Decade of Excellence in Dubai", "عقد من التميز في دبي")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t(
                  "MASARATH PARVEEN Cleaning Services L.L.C. was founded with a simple mission: to provide Dubai residents and businesses with the highest quality cleaning services at fair prices. Based in Karama, we've grown from a small team to one of the most trusted names in professional cleaning across Dubai.",
                  "تأسست شركة مسارات بارفين لخدمات التنظيف ذ.م.م بمهمة بسيطة: تقديم أعلى جودة لخدمات التنظيف لسكان ومؤسسات دبي بأسعار عادلة. من مقرنا في كرامة، نمونا من فريق صغير إلى واحد من أكثر الأسماء موثوقية في التنظيف المحترف في دبي."
                )}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t(
                  "Our comprehensive range of services — from water tank cleaning to AC duct maintenance — makes us a one-stop solution for all your cleaning needs. Every job is handled by trained professionals using approved products and modern equipment.",
                  "مجموعة خدماتنا الشاملة — من تنظيف خزانات المياه إلى صيانة مجاري التكييف — تجعلنا الحل الشامل لجميع احتياجات التنظيف الخاصة بك. يتم التعامل مع كل مهمة من قبل محترفين مدربين باستخدام منتجات معتمدة ومعدات حديثة."
                )}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
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

export default About;
