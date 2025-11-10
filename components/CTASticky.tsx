"use client";

import { Calendar } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";

export function CTASticky() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-brand-100 shadow-lg">
      <a
        href={PRACTICE_INFO.doctolibUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-6 py-4 rounded-2xl font-medium shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
      >
        <Calendar size={20} />
        <span>Prendre RDV</span>
      </a>
    </div>
  );
}

