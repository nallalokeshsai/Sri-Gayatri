import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Bus,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { BRANCHES_DATA, COLLEGE_DETAILS } from "@/data/collegeData";
import { useLayout } from "@/context/LayoutContext";

export const Branches = () => {
  const { openAdmissionModal } = useLayout();
  const [filterType, setFilterType] = useState<string>("All");

  const filteredBranches = BRANCHES_DATA.filter((branch) => {
    if (filterType === "All") return true;
    if (filterType === "Residential") return branch.type.includes("Residential");
    if (filterType === "Day Scholar") return branch.type === "Day Scholar";
    return true;
  });

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. PAGE HEADER */}
      <section className="bg-oxford-950 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-gold-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Campuses</span>
            <span>/</span>
            <span className="text-white">5 Visakhapatnam Locations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Our Campuses & Residential Hostels
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Five strategically located academic campuses across Visakhapatnam offering Day Scholar, Semi-Residential, and Full AC Hostel accommodations with strict zero-smartphone discipline and daily faculty supervision.
          </p>
        </div>
      </section>

      {/* 2. FILTER CONTROLS */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
              Filter By Type:
            </span>
            {["All", "Day Scholar", "Residential"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-1.5 rounded text-xs font-medium transition-colors ${
                  filterType === type
                    ? "bg-oxford-900 text-white font-semibold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {type === "All" ? "All 5 Campuses" : type}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            Showing <strong>{filteredBranches.length}</strong> centers in Visakhapatnam
          </div>
        </div>
      </section>

      {/* 3. CAMPUSES LIST */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-oxford-900/90 text-white text-xs font-semibold px-3 py-1 rounded shadow">
                      {branch.type}
                    </div>
                    {branch.isSisterCompany && (
                      <div className="absolute top-3 right-3 bg-emerald-800 text-white text-xs font-medium px-2.5 py-1 rounded shadow">
                        Sister Institution
                      </div>
                    )}
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-oxford-950">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-gold-700 font-medium">
                        {branch.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-oxford-800 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-slate-800 font-medium">{branch.address}</span>
                          {branch.landmark && (
                            <span className="text-[11px] text-slate-500 block">Landmark: {branch.landmark}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-oxford-800 shrink-0" />
                        <span>Timings: {branch.timings}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-oxford-800 shrink-0" />
                        <span>Campus Phone: </span>
                        <a
                          href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                          className="font-medium text-oxford-900 hover:underline"
                        >
                          {branch.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-oxford-800 shrink-0" />
                        <span>Campus Head: </span>
                        <strong className="text-slate-800">{branch.inCharge.name}</strong>
                        <span className="text-slate-500 text-[11px]">({branch.inCharge.designation})</span>
                      </div>
                    </div>

                    {/* Courses Available */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Streams Offered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {branch.courses.map((course, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-700 text-[11px] px-2 py-0.5 rounded font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Facilities Checklist */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Campus Facilities:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600">
                        {branch.facilities.slice(0, 4).map((f, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 mt-4">
                  <a
                    href={branch.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-oxford-900 font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Get Google Map Directions</span>
                  </a>

                  <button
                    onClick={() => openAdmissionModal("mpc", branch.id)}
                    className="px-4 py-2 bg-oxford-900 hover:bg-oxford-800 text-white rounded text-xs font-semibold shadow-sm transition-colors"
                  >
                    Apply for this Campus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSPORT & RESIDENTIAL OVERVIEW */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Transport */}
          <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 bg-oxford-900 text-white rounded flex items-center justify-center">
              <Bus className="w-5 h-5 text-gold-400" />
            </div>
            <h3 className="font-serif font-bold text-base text-oxford-950">
              Extensive College Bus Routes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our fleet of college buses covers key commuter belts across Visakhapatnam and surrounding areas, including Anakapalle, Steel Plant, Gajuwaka, Scindia, NAD, Simhachalam, Pendurthi, Kommadi, and Bheemili.
            </p>
            <ul className="space-y-1 text-xs text-slate-700 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Speed governors & trained drivers
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Live GPS vehicle tracking
              </li>
            </ul>
          </div>

          {/* Residential Hostels */}
          <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 bg-oxford-900 text-white rounded flex items-center justify-center">
              <Building2 className="w-5 h-5 text-gold-400" />
            </div>
            <h3 className="font-serif font-bold text-base text-oxford-950">
              Hostel Care at Madhurawada & Tallavalasa
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with separate blocks for boys and girls, 24/7 CCTV surveillance, resident wardens, and on-call physicians. Nutritious South Indian meals served daily with strict zero-smartphone study halls.
            </p>
            <ul className="space-y-1 text-xs text-slate-700 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Supervised night study (8:00 PM – 10:30 PM)
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-stage RO drinking water plants
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CAMPUS VISIT CTA */}
      <section className="bg-oxford-900 text-white py-12 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Schedule an In-Person Campus Tour
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Visit our lecture halls, laboratories, library, and hostel rooms. Our campus principals are available Monday to Saturday from 8:00 AM to 6:00 PM.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-xs shadow transition-colors inline-block"
            >
              Contact Campus Desks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
