import { MessageCircle } from "lucide-react";
import { COLLEGE_DETAILS } from "@/data/collegeData";

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${COLLEGE_DETAILS.centralContacts.whatsappNumber}?text=${encodeURIComponent(
    "Hello Sri Gayatri Admissions Desk, I would like to know more about Intermediate admissions for 2026-27."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Sri Gayatri Admissions Desk"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6 fill-current text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
        Chat with Admissions
      </span>
    </a>
  );
};
