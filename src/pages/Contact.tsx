import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t("Phone", "الهاتف"),
      lines: [
        { text: "+971 50 911 6282", href: "tel:+971509116282" },
        { text: "+971 58 672 2428", href: "tel:+971586722428" },
      ],
    },
    {
      icon: Mail,
      title: t("Email", "البريد الإلكتروني"),
      lines: [{ text: "info@mpforyoucleaning.com", href: "mailto:info@mpforyoucleaning.com" }],
    },
    {
      icon: MapPin,
      title: t("Location", "الموقع"),
      lines: [{ text: t("Karama, Dubai – UAE", "كرامة، دبي – الإمارات"), href: undefined }],
    },
    {
      icon: Clock,
      title: t("Working Hours", "ساعات العمل"),
      lines: [
        { text: t("Mon–Sat: 9AM – 6PM", "الإثنين–السبت: 9ص – 6م"), href: undefined },
        { text: t("Sunday: Closed", "الأحد: مغلق"), href: undefined },
      ],
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
              src="/hero-carousel/contact-hero.jpg"
              alt="Contact us professional cleaning"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-background mb-4">
              {t("Contact Us", "اتصل بنا")}
            </h1>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              {t(
                "Get in touch for a free quote or to schedule your cleaning service",
                "تواصل معنا للحصول على عرض مجاني أو لجدولة خدمة التنظيف"
              )}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {t("Get In Touch", "تواصل معنا")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="p-5 rounded-2xl bg-card border border-border">
                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.lines.map((line, i) => (
                          <div key={i}>
                            {line.href ? (
                              <a href={line.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {line.text}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{line.text}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="p-6 rounded-2xl bg-whatsapp/10 border border-whatsapp/20">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-whatsapp" />
                    {t("Quick Response via WhatsApp", "رد سريع عبر واتساب")}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(
                      "For the fastest response, message us directly on WhatsApp!",
                      "للحصول على أسرع رد، راسلنا مباشرة على واتساب!"
                    )}
                  </p>
                  <a href="https://wa.me/971509116282?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20cleaning%20services." target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="lg">
                      <MessageCircle className="w-4 h-4" />
                      {t("Chat on WhatsApp", "الدردشة على واتساب")}
                    </Button>
                  </a>
                </div>

                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden border border-border">
                  <iframe
                    title="MASARATH PARVEEN Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7!2d55.3!3d25.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzI0LjAiTiA1NcKwMTgnMDAuMCJF!5e0!3m2!1sen!2sae!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Booking Form */}
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

export default Contact;
