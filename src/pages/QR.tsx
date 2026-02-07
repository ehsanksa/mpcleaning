import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Globe,
  Star,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Droplets,
  PipetteIcon,
  Wind,
  Flame,
  Building2,
  Trash2,
  Sofa,
  Layers,
  Wrench,
  Waves,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/data/services";
import { SOCIAL_LINKS } from "@/data/social";
import logo from "@/assets/logo.png";

// Service icons mapping for QR carousel
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "water-tank-cleaning": Droplets,
  "pipeline-disinfection": PipetteIcon,
  "ac-duct-cleaning": Wind,
  "kitchen-duct-cleaning": Flame,
  "building-cleaning": Building2,
  "garbage-chute-cleaning": Trash2,
  "sofa-cleaning": Sofa,
  "carpet-cleaning": Layers,
  "water-tank-repairing": Wrench,
  "drain-line-jetting": Waves,
};

// Carousel services (subset for display)
const CAROUSEL_SERVICES = services.slice(0, 9);

const AnimateOnScroll = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SocialButton = ({
  href,
  label,
  icon: Icon,
  className,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group relative inline-flex items-center justify-center gap-2.5
      min-w-[220px] sm:min-w-[250px] px-6 py-4 rounded-full font-semibold
      text-white shadow-lg hover:shadow-xl hover:-translate-y-1
      transition-all duration-300 overflow-hidden
      ${className}
    `}
  >
    <Icon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform relative z-10" />
    <span className="relative z-10">{label}</span>
    <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
  </a>
);

const QR = () => {
  useEffect(() => {
    document.title = "MASARATH PARVEEN Cleaning Services | Professional Cleaning in Dubai";
    return () => {
      document.title = "MASARATH PARVEEN Cleaning Services | Professional Cleaning Dubai";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fa] overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-5">
          <AnimateOnScroll>
            <div className="bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-500 max-w-md mx-auto">
              <img
                src={logo}
                alt="MASARATH PARVEEN Cleaning Services LLC"
                className="w-40 sm:w-48 h-auto mx-auto drop-shadow-lg"
              />
              <h1 className="mt-6 text-xl sm:text-2xl font-bold text-primary text-center">
                MASARATH PARVEEN Cleaning Services LLC
              </h1>
              <p className="mt-2 text-secondary-foreground text-center font-medium text-sm sm:text-base">
                شركة مسرات بروين لخدمات التنظيف ذ.م.م
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimateOnScroll delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-[1.02]">
                <div className="aspect-[4/3] sm:aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230902.21503589101!2d55.017570486718746!3d25.275728100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43007c0d7135%3A0x1ffb4e10a44b9a62!2sMASARAH%20PARVEEN%20Cleaning%20Services%20LLC!5e0!3m2!1sen!2sin!4v1744489444035!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                    title="Map location"
                  />
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-video bg-black">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src="/ea0ac.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Social Buttons Section */}
      <section
        className="py-14 sm:py-20"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-5">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10 sm:mb-14">
              Connect With Us
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <AnimateOnScroll delay={100}>
              <SocialButton
                href={SOCIAL_LINKS.whatsapp}
                label="Message on WhatsApp"
                icon={MessageCircle}
                className="bg-[#25d366] hover:bg-[#20bd5a]"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <SocialButton
                href={SOCIAL_LINKS.whatsappChannel}
                label="WhatsApp Channel"
                icon={MessageCircle}
                className="bg-[#25d366] hover:bg-[#20bd5a]"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <SocialButton
                href={SOCIAL_LINKS.instagram}
                label="Follow on Instagram"
                icon={({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                className="bg-gradient-to-r from-[#405de6] via-[#833ab4] to-[#fd1d1d] hover:opacity-90"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={250}>
              <SocialButton
                href={SOCIAL_LINKS.tiktok}
                label="Follow on TikTok"
                icon={({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.77 1.52V6.94a4.85 4.85 0 0 1-1.01-.25z" />
                  </svg>
                )}
                className="bg-black hover:bg-gray-900"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <SocialButton
                href={SOCIAL_LINKS.website}
                label="Visit our Website"
                icon={Globe}
                className="bg-primary"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={350}>
              <SocialButton
                href={SOCIAL_LINKS.youtube}
                label="Subscribe on YouTube"
                icon={({ className }: { className?: string }) => (
                  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
                className="bg-[#ff0000] hover:bg-[#cc0000]"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <SocialButton
                href={SOCIAL_LINKS.googleReview}
                label="Review us on Google"
                icon={Star}
                className="bg-[#4285f4] hover:bg-[#3367d6]"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section
        className="py-16 sm:py-24 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 sm:px-5">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10 sm:mb-14">
              Our Services
            </h2>
          </AnimateOnScroll>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {CAROUSEL_SERVICES.map((service) => {
                  const Icon = SERVICE_ICONS[service.slug] || Droplets;
                  return (
                    <CarouselItem
                      key={service.slug}
                      className="pl-4 basis-full lg:basis-1/3"
                    >
                      <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 h-full">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-bold text-secondary-foreground mb-2 text-sm sm:text-base">
                          {service.title.en}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                          {service.shortDesc.en}
                        </p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:-left-12 border-white/30 bg-white/10 hover:bg-white/20 text-white" />
              <CarouselNext className="right-0 sm:-right-12 border-white/30 bg-white/10 hover:bg-white/20 text-white" />
            </Carousel>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold transition-colors"
            >
              View All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-5">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-14">
              Contact Us
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimateOnScroll delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">Our Office</h3>
                <p className="text-white/90">
                  Karama, Dubai
                  <br />
                  U.A.E
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">Email Us</h3>
                <a
                  href="mailto:info@mpforyoucleaning.com"
                  className="text-white/90 hover:text-white hover:underline"
                >
                  info@mpforyoucleaning.com
                </a>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">Call Us</h3>
                <p className="text-white/90 space-y-1">
                  <a
                    href="tel:+971509116282"
                    className="block hover:text-white hover:underline"
                  >
                    +971 50 911 6282
                  </a>
                  <a
                    href="tel:+971586722428"
                    className="block hover:text-white hover:underline"
                  >
                    +971 58 672 2428
                  </a>
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QR;
