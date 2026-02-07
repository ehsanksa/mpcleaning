import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const ClientsLogoCarousel = () => {
  const { t } = useLanguage();
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const clientLogos = [
    "/clients-logo-carousel/AL-SHIRAWI-FM.jpg",
    "/clients-logo-carousel/CHICK-BOY-INASAL-RESTAURANT.png",
    "/clients-logo-carousel/CHINA-MEMORY-RESTAURANT-DUBAI.jpeg",
    "/clients-logo-carousel/Chicboy-inasal-logo.webp",
    "/clients-logo-carousel/DMCC_Logo.jpg",
    "/clients-logo-carousel/ELITE-COMMUNITY-MANAGEMENT.webp",
    "/clients-logo-carousel/EMAAR.png",
    "/clients-logo-carousel/Farnek-logo-orange.png",
    "/clients-logo-carousel/GOLDEN-FORK-RESTAURANT.jpg",
    "/clients-logo-carousel/GSS-Palace-hotel.jpeg",
    "/clients-logo-carousel/MR-CHAAT.jpg",
    "/clients-logo-carousel/OLIVE-HUT.png",
    "/clients-logo-carousel/PIRATES-BAY-SEAFOOD-RESTAURANT.webp",
    "/clients-logo-carousel/RAS-TIKKA-CORNER-UAE.jpg",
    "/clients-logo-carousel/SBK-REALESTATE.png",
    "/clients-logo-carousel/TATEL-DUBAI.png",
    "/clients-logo-carousel/afridi-inn-logo.png",
    "/clients-logo-carousel/aldaem-uae.png",
    "/clients-logo-carousel/ansar-gallery-logo.webp",
    "/clients-logo-carousel/aspen-clinic-uae.png",
    "/clients-logo-carousel/asteco.png",
    "/clients-logo-carousel/baran-restaurant-and-cafe.jpg",
    "/clients-logo-carousel/buset-contracting.png",
    "/clients-logo-carousel/city-night-contracting-llc.jpeg",
    "/clients-logo-carousel/dsc-facilities-services.png",
    "/clients-logo-carousel/emirates-sand-contracting-llc.png",
    "/clients-logo-carousel/grab-house-restaurant-uae.jpg",
    "/clients-logo-carousel/healthcare-uae.png",
    "/clients-logo-carousel/j5-hotels-dubai.png",
    "/clients-logo-carousel/lets-move-in-real-estates.jpeg",
    "/clients-logo-carousel/marriott-logo-png-transparent.png",
    "/clients-logo-carousel/mra-grand-hotel.png",
    "/clients-logo-carousel/naif-medical-center.jpg",
    "/clients-logo-carousel/pacific-1992.png",
    "/clients-logo-carousel/paragon-since-1939-UAE.png",
    "/clients-logo-carousel/salkara-restaurant-once-upon-a-time-in-malabar.png",
    "/clients-logo-carousel/stratum-owners-association-management.jpeg",
    "/clients-logo-carousel/time-palace-hotel.jpg",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-5">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            {t("Trusted By", "موثوق من قبل")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
            {t("Our Valued Clients", "عملاؤنا الموثوقون")}
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-center">
                <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsLogoCarousel;
