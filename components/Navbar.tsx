"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PRACTICE_INFO } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/osteopathie", label: "L'ostéopathie" },
  { href: "/expertises", label: "Expertises" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/cabinet-acces", label: "Cabinet & Accès" },
  { href: "/tarifs-horaires", label: "Tarifs & Horaires" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-serif font-semibold text-brand-900">
              {PRACTICE_INFO.name}
              <span className="block text-sm lg:text-base font-normal text-muted">
                {PRACTICE_INFO.title}
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-brand-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PRACTICE_INFO.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-brand-100 focus:outline-none focus:ring-2 focus:ring-brand-700"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-brand-100 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PRACTICE_INFO.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-md text-center transition-all"
            >
              Prendre RDV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

