import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/services";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  service: z.string().min(1, "Service is required"),
  location: z.string().trim().min(1, "Location is required").max(200),
  message: z.string().max(1000).optional(),
});

const BookingForm = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hi, I'd like to book a cleaning service.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location}\n${formData.message ? `Message: ${formData.message}` : ""}`
    );
    window.open(`https://wa.me/971509116282?text=${whatsappMessage}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 rounded-2xl bg-card shadow-card">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {t("Thank You!", "شكرًا لك!")}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t(
            "Your request has been sent via WhatsApp. We'll get back to you shortly!",
            "تم إرسال طلبك عبر واتساب. سنتواصل معك قريبًا!"
          )}
        </p>
        <Button variant="default" onClick={() => setSubmitted(false)}>
          {t("Submit Another Request", "إرسال طلب آخر")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6 md:p-8 rounded-2xl bg-card shadow-card">
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
        {t("Get a Free Quote", "احصل على عرض مجاني")}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {t("Fill in the form and we'll contact you within 30 minutes", "املأ النموذج وسنتواصل معك خلال 30 دقيقة")}
      </p>

      <div className="space-y-3">
        <div>
          <Input
            placeholder={t("Your Name", "اسمك")}
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Input
            placeholder={t("Phone Number", "رقم الهاتف")}
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData((p) => ({ ...p, service: value }))}
          >
            <SelectTrigger className={errors.service ? "border-destructive" : ""}>
              <SelectValue placeholder={t("Select Service", "اختر الخدمة")} />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={language === "en" ? s.title.en : s.title.ar}>
                  {t(s.title.en, s.title.ar)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
        </div>

        <div>
          <Input
            placeholder={t("Your Location in Dubai", "موقعك في دبي")}
            value={formData.location}
            onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
            className={errors.location ? "border-destructive" : ""}
          />
          {errors.location && <p className="text-xs text-destructive mt-1">{errors.location}</p>}
        </div>

        <Textarea
          placeholder={t("Additional details (optional)", "تفاصيل إضافية (اختياري)")}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          rows={3}
        />
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full">
        <Send className="w-4 h-4" />
        {t("Send via WhatsApp", "إرسال عبر واتساب")}
      </Button>
    </form>
  );
};

export default BookingForm;
