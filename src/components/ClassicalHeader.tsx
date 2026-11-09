import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import collegeLogo from "@/assets/Logo.png";
import { COLLEGE_DETAILS } from "@/data/collegeData";

interface ClassicalHeaderProps {
  onOpenAdmissionModal: () => void;
}

export const ClassicalHeader = ({ onOpenAdmissionModal }: ClassicalHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academic Programs", path: "/courses" },
    { name: "Campuses", path: "/branches" },
    { name: "Results", path: "/results" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-200">
      {/* 1. TOP UTILITY STRIP */}
      <div className="bg-oxford-900 text-slate-200 text-xs py-2 px-4 border-b border-oxford-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Affiliation & Estd */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-gold-500 text-oxford-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> BIEAP Recognized
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              College Code: <strong className="text-white font-medium">{COLLEGE_DETAILS.collegeCode}</strong>
            </span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline text-[11px] sm:text-xs">
              Estd. {COLLEGE_DETAILS.establishedYear} (25+ Years of Excellence)
            </span>
          </div>

          {/* Right: Phone & Timings */}
          <div className="flex items-center gap-4 text-xs ml-auto">
            <a
              href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-gold-300 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{COLLEGE_DETAILS.centralContacts.admissionsPhone}</span>
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="text-slate-300 hidden lg:flex items-center gap-1 text-[11px]">
              <Clock className="w-3 h-3 text-slate-400" /> Mon–Sat: 8:00 AM – 6:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={collegeLogo}
              alt="Sri Gayatri Junior College Emblem"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-oxford-900 leading-tight tracking-tight">
                Sri Gayatri
              </span>
              <span className="text-xs font-semibold text-oxford-700 uppercase tracking-wider">
                Junior Colleges
              </span>
              <span className="text-[10px] text-slate-500 font-sans hidden sm:inline">
                Visakhapatnam, Andhra Pradesh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded transition-all duration-150 ${
                    active
                      ? "text-oxford-900 bg-slate-100 font-semibold border-b-2 border-gold-500"
                      : "text-slate-600 hover:text-oxford-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center justify-center gap-2 bg-oxford-900 text-white hover:bg-oxford-800 px-4 py-2.5 rounded text-sm font-medium shadow-sm transition-all duration-150 hover:shadow"
            >
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span>Apply Online</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center justify-center px-3 py-1.5 rounded text-xs font-semibold bg-oxford-900 text-white shadow-sm"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-700 hover:text-oxford-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    active
                      ? "bg-oxford-50 text-oxford-900 font-semibold border-l-4 border-gold-500"
                      : "text-slate-700 hover:bg-slate-50 hover:text-oxford-900"
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-3 pb-2 border-t border-slate-100 mt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-oxford-900 text-white py-2.5 px-4 rounded text-sm font-semibold shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-gold-400" />
                <span>Admissions 2026-27 Application</span>
              </button>
              <a
                href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-800 py-2 px-4 rounded text-xs font-medium hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-oxford-800" />
                <span>Call Admissions: {COLLEGE_DETAILS.centralContacts.admissionsPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
