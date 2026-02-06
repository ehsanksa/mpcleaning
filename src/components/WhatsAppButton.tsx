import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/971509116282?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20cleaning%20services.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated hover:scale-110 transition-transform duration-200 flex items-center justify-center animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
