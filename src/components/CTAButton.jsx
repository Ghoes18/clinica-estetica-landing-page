import React from "react";
import { CalendarDays } from "lucide-react";

const CTAButton = ({ children, href = "#contacto", className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-5 py-3 text-white shadow-lg shadow-rose-300/50 transition hover:translate-y-[-1px] hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300 ${className}`}
  >
    <CalendarDays className="h-5 w-5" />
    {children}
  </a>
);

export default CTAButton;
