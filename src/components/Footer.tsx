import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="MASARATH PARVEEN Cleaning Services" className="h-16 w-auto brightness-0 invert" />
            <h3 className="font-bold text-lg text-background">MP Cleaning Services LLC</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {t(
                "Professional cleaning services in Dubai. Licensed, trained, and trusted by hundreds of satisfied customers.",
                "خدمات تنظيف احترافية في دبي. مرخصة ومدربة وموثوقة من قبل مئات العملاء الراضين."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("Quick Links", "روابط سريعة")}</h3>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: t("Home", "الرئيسية") },
                { to: "/services", label: t("Services", "الخدمات") },
                { to: "/about", label: t("About Us", "من نحن") },
                { to: "/contact", label: t("Contact", "اتصل بنا") },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("Contact Us", "اتصل بنا")}</h3>
            <div className="space-y-3">
              <a href="tel:+971509116282" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+971 50 911 6282</span>
              </a>
              <a href="tel:+971586722428" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+971 58 672 2428</span>
              </a>
              <a href="mailto:info@mpforyoucleaning.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@mpforyoucleaning.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{t("Karama, Dubai – UAE", "كرامة، دبي – الإمارات")}</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("Working Hours", "ساعات العمل")}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm opacity-70">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{t("Mon–Sat: 9AM – 6PM", "الإثنين–السبت: 9ص – 6م")}</span>
              </div>
              <p className="text-sm opacity-50">{t("Sunday: Closed", "الأحد: مغلق")}</p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/mp_cleaning_services_llc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@mp.cleaning.servi8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.77 1.52V6.94a4.85 4.85 0 0 1-1.01-.25z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@mp_cleaning_services_llc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg> 
              </a>
                <a
                href="https://whatsapp.com/channel/0029Vb7KalJKmCPMYqxlit02"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
                </svg> 
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} MASARATH PARVEEN Cleaning Services L.L.C. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
