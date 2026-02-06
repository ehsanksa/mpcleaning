import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";
import { testimonials } from "@/data/services";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            {t("Testimonials", "آراء العملاء")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {t("Trusted by Dubai Families", "موثوقة من عائلات دبي")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "See what our satisfied customers have to say about our services",
              "اطلع على آراء عملائنا الراضين عن خدماتنا"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                "{t(testimonial.text.en, testimonial.text.ar)}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-sm text-foreground">
                  {t(testimonial.name.en, testimonial.name.ar)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(testimonial.service.en, testimonial.service.ar)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
