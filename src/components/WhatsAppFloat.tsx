import { SITE } from "@/config/site";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${SITE.phoneWhatsApp}?text=${encodeURIComponent(SITE.defaultWhatsAppText)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-md hover:bg-[#1ebe57]"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}