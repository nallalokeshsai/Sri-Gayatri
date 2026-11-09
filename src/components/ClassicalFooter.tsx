import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import collegeLogo from "@/assets/Logo.png";
import { COLLEGE_DETAILS, BRANCHES_DATA } from "@/data/collegeData";

export const ClassicalFooter = () => {
  return (
    <footer className="bg-oxford-950 text-slate-300 font-sans border-t-2 border-gold-600">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Identity & Accreditation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={collegeLogo}
                alt="Sri Gayatri Junior College Emblem"
                className="h-12 w-auto object-contain bg-white/10 p-1 rounded"
              />
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-tight">
                  Sri Gayatri Junior Colleges
                </span>
                <span className="text-xs text-gold-400 font-medium tracking-wide">
                  Visakhapatnam, Andhra Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 1999 under the visionary leadership of Mr. N.A. Naidu. Committed to foundational concept learning, dedicated faculty mentorship, and zero-external-tuitions for intermediate education.
            </p>

            <div className="pt-2 border-t border-oxford-800 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Affiliated to Board of Intermediate Education, AP (BIEAP)</span>
              </div>
              <div className="text-[11px] text-slate-400 pl-6">
                Official College Code: <strong className="text-white font-medium">{COLLEGE_DETAILS.collegeCode}</strong>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-serif font-semibold tracking-wider text-white border-b border-oxford-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">
                  About & Legacy
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-gold-300 transition-colors">
                  Academic Streams
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-gold-300 transition-colors">
                  Campuses & Hostels
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-gold-300 transition-colors">
                  Results & Achievements
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-gold-300 transition-colors">
                  Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">
                  Contact Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campuses (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-serif font-semibold tracking-wider text-white border-b border-oxford-800 pb-2">
              Visakhapatnam Campuses
            </h4>
            <ul className="space-y-2.5 text-xs">
              {BRANCHES_DATA.map((branch) => (
                <li key={branch.id} className="group">
                  <Link
                    to="/branches"
                    className="flex flex-col text-slate-300 group-hover:text-white transition-colors"
                  >
                    <span className="font-medium text-slate-200 group-hover:text-gold-300 flex items-center justify-between">
                      {branch.shortName}
                      <span className="text-[10px] text-slate-500 font-normal">{branch.type}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 truncate">
                      {branch.location} • {branch.phone}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Central Admissions Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-serif font-semibold tracking-wider text-white border-b border-oxford-800 pb-2">
              Central Admissions Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{COLLEGE_DETAILS.centralContacts.headOfficeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
                  className="hover:text-white font-medium"
                >
                  {COLLEGE_DETAILS.centralContacts.admissionsPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${COLLEGE_DETAILS.centralContacts.admissionsEmail}`}
                  className="hover:text-white"
                >
                  {COLLEGE_DETAILS.centralContacts.admissionsEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COLLEGE_DETAILS.centralContacts.officeHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="bg-black/40 border-t border-oxford-900 text-slate-500 text-[11px] py-4 px-4 sm:px-6 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Sri Gayatri Junior Colleges, Visakhapatnam. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>BIEAP College Code: {COLLEGE_DETAILS.collegeCode}</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Campus Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
