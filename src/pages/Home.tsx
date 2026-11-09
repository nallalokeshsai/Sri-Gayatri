import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Building2,
  Users,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import heroCampusImg from "@/assets/venkateswara-campus.jpg";
import directorImg from "@/assets/Naidu photo.jpg";
import {
  COLLEGE_DETAILS,
  BRANCHES_DATA,
  COURSES_DATA,
  TOPPERS_DATA,
  FAQS_DATA,
} from "@/data/collegeData";
import { useLayout } from "@/context/LayoutContext";
import { toast } from "sonner";

export const Home = () => {
  const { openAdmissionModal } = useLayout();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick Enquiry Form state
  const [quickForm, setQuickForm] = useState({
    studentName: "",
    phone: "",
    stream: "mpc",
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.studentName.trim() || !quickForm.phone.trim()) {
      toast.error("Please enter student name and mobile number.");
      return;
    }
    const cleanPhone = quickForm.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      toast.error("Please provide a valid 10-digit mobile number.");
      return;
    }
    toast.success("Enquiry Received", {
      description: "Our admissions counselor will contact you within 24 hours.",
    });
    setQuickForm({ studentName: "", phone: "", stream: "mpc" });
  };

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-oxford-950 text-white overflow-hidden border-b border-gold-500">
        {/* Background Image with Dark Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCampusImg}
            alt="Sri Gayatri College Campus"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-oxford-950 via-oxford-900/90 to-oxford-950/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-gold-400/40 px-3 py-1.5 rounded text-xs font-medium text-gold-300">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>BIEAP Recognized • College Code: {COLLEGE_DETAILS.collegeCode} • Estd. 1999</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  25+ Years of Dedicated Intermediate Mentoring in Visakhapatnam
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Premier 2-Year Intermediate Education across 5 campuses. Combining thorough BIEAP board mastery with synchronized IIT-JEE, NEET-UG, AP EAPCET, and CA Foundation coaching—all taught within college hours.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openAdmissionModal()}
                  className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-sm shadow transition-all duration-150 flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for Admissions 2026–27</span>
                </button>
                <Link
                  to="/courses"
                  className="px-6 py-3 border border-slate-400 hover:border-white text-white rounded text-sm font-medium transition-colors flex items-center gap-2 hover:bg-white/5"
                >
                  <span>Explore Academic Streams</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> 100% In-College Doubt Clearing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> Zero Outside Tuitions Needed
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" /> Day & AC Residential Hostels
                </span>
              </div>
            </div>

            {/* Right Column: Quick Admissions Enquiry Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-lg p-6 sm:p-7 shadow-xl border border-slate-200">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <span className="text-xs uppercase font-serif font-bold text-oxford-800 tracking-wider block">
                    Fast-Track Enquiry
                  </span>
                  <h3 className="text-lg font-serif font-bold text-oxford-950">
                    Admissions Open for 2026–2027
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Request scholarship eligibility and campus counseling.
                  </p>
                </div>

                <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Student Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. K. Sai Praneeth"
                      value={quickForm.studentName}
                      onChange={(e) => setQuickForm({ ...quickForm, studentName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Parent Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      Interested Stream
                    </label>
                    <select
                      value={quickForm.stream}
                      onChange={(e) => setQuickForm({ ...quickForm, stream: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800 bg-white"
                    >
                      <option value="mpc">MPC (IIT-JEE / AP EAPCET)</option>
                      <option value="bipc">BiPC (NEET Medical / Pharma)</option>
                      <option value="mec">MEC (CA Foundation / IPMAT)</option>
                      <option value="cec">CEC (CLAT Law / Civil Services)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-oxford-900 hover:bg-oxford-800 text-white font-medium rounded text-xs transition-colors shadow-sm mt-2"
                  >
                    Request Callback & Prospectus
                  </button>

                  <div className="text-[11px] text-center text-slate-500 pt-1">
                    Or call our central desk:{" "}
                    <a
                      href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
                      className="text-oxford-900 font-semibold underline"
                    >
                      {COLLEGE_DETAILS.centralContacts.admissionsPhone}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS RIBBON */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              25+ Years
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Established 1999
            </span>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              5 Campuses
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Across Visakhapatnam
            </span>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              98.6%
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Board Pass Rate (IPE)
            </span>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              12,000+
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Successful Alumni
            </span>
          </div>
        </div>
      </section>

      {/* 3. THE SRI GAYATRI PROMISE (CORE METHODOLOGY) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Our Academic Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-oxford-950">
              Why Sri Gayatri Stands Apart
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We reject high-pressure commercial coaching factories. Every child deserves clear concept explanations, patient doubt resolution, and genuine encouragement from teachers who care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-oxford-50 text-oxford-800 rounded flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-serif font-bold text-oxford-950">
                Zero External Tuitions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All theory derivations, daily practice questions, and competitive problem solving are completed within college hours. No exhausting post-college tuition travel.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-oxford-50 text-oxford-800 rounded flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-serif font-bold text-oxford-950">
                Synchronized Curriculum
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Morning hours cover official BIEAP board textbooks while afternoons are dedicated to parallel JEE, NEET, EAPCET, or CA Foundation application drills.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-oxford-50 text-oxford-800 rounded flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-serif font-bold text-oxford-950">
                Supervised Study Hours
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Study sessions are conducted under the direct physical guidance of subject lecturers, allowing students to clear doubts immediately without hesitation.
              </p>
            </div>

            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-oxford-50 text-oxford-800 rounded flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-serif font-bold text-oxford-950">
                Distraction-Free Environment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A strict zero-smartphone policy ensures sustained focus. For residential students, separate secure hostels with resident wardens provide a healthy routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC PROGRAMS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                Two-Year Intermediate Courses
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-oxford-950">
                Academic Streams & Integrated Coaching
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Affiliated with BIEAP. Each stream is enhanced with parallel national entrance preparation.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-oxford-900 hover:text-gold-700 transition-colors"
            >
              <span>View detailed syllabus & schedule</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES_DATA.map((course) => (
              <div
                key={course.id}
                className="bg-[#F9FAFB] border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.fullName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-oxford-900 text-white font-serif font-bold text-sm px-2.5 py-1 rounded">
                      {course.name}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-serif font-bold text-base text-oxford-950">
                      {course.fullName}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {course.tagline}
                    </p>

                    <div className="pt-2 border-t border-slate-200 space-y-1.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Integrated Coaching:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {course.integratedCoaching.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-gold-600 rounded-full"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-200/60 mt-4">
                  <Link
                    to="/courses"
                    className="text-xs font-medium text-oxford-900 hover:underline"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => openAdmissionModal(course.id)}
                    className="px-3 py-1.5 bg-oxford-900 hover:bg-oxford-800 text-white text-xs font-medium rounded transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VISAKHAPATNAM CAMPUSES */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                5 Locations Across Visakhapatnam
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-oxford-950">
                Our Campuses & Residential Hostels
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Conveniently situated learning centers offering day scholar, semi-residential, and full hostel accommodations.
              </p>
            </div>

            <Link
              to="/branches"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-oxford-900 hover:text-gold-700 transition-colors"
            >
              <span>Explore all campus facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES_DATA.slice(0, 3).map((branch) => (
              <div
                key={branch.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-oxford-900/90 text-white text-[11px] font-medium px-2.5 py-1 rounded">
                      {branch.type}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-serif font-bold text-base text-oxford-950">
                      {branch.shortName} Campus
                    </h3>
                    <p className="text-xs text-slate-600 flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Timings:</span>
                      <span className="font-medium text-slate-800">{branch.timings}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
                  <a
                    href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                    className="text-xs text-oxford-900 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" /> {branch.phone}
                  </a>
                  <Link
                    to="/branches"
                    className="text-xs font-medium text-slate-500 hover:text-oxford-900"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner for Remaining Campuses */}
          <div className="bg-white p-5 rounded border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-semibold text-oxford-900 block">
                Looking for NAD Junction or Tallavalasa Campus?
              </span>
              <p className="text-xs text-slate-500">
                Explore our specialized Commerce Wing at NAD Junction and Eco-Friendly Campus at Tallavalasa.
              </p>
            </div>
            <Link
              to="/branches"
              className="px-4 py-2 bg-oxford-900 hover:bg-oxford-800 text-white rounded text-xs font-medium shrink-0 transition-colors"
            >
              View All 5 Campuses
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER'S MESSAGE */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Director Photo */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative inline-block mx-auto">
                <img
                  src={directorImg}
                  alt={COLLEGE_DETAILS.director.name}
                  className="w-56 h-72 sm:w-64 sm:h-80 object-cover rounded shadow-md border-4 border-white"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-oxford-900 text-white px-3 py-1 rounded text-[11px] font-semibold whitespace-nowrap shadow">
                  30+ Years Mentoring
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                  Academic Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
                  A Message from Our Founder & Director
                </h2>
                <span className="text-sm font-semibold text-oxford-900 block">
                  {COLLEGE_DETAILS.director.name} • {COLLEGE_DETAILS.director.designation}
                </span>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-2 border-gold-500 pl-4 my-3 font-serif">
                "{COLLEGE_DETAILS.director.message}"
              </blockquote>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                At Sri Gayatri, every student receives the individual respect and academic attention they need to flourish. Whether their ambition is an IIT engineering seat, a government medical college, a corporate chartered accountancy credential, or civil services leadership, our dedicated faculty ensures their foundation is rock solid.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-oxford-900 hover:text-gold-700 transition-colors"
                >
                  <span>Learn about our governance and faculty</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HALL OF FAME / TOPPERS HIGHLIGHT */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-oxford-950">
              Academic Hall of Fame
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Authentic scores achieved by regular classroom scholars across Visakhapatnam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOPPERS_DATA.slice(0, 3).map((topper) => (
              <div
                key={topper.id}
                className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-oxford-900">
                      {topper.score}
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold px-2 py-0.5 rounded">
                      {topper.rankBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-base text-slate-900">
                      {topper.name}
                    </h3>
                    <span className="text-xs text-slate-500 block">
                      {topper.exam} • {topper.branch}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed pt-2 border-t border-slate-100">
                    "{topper.quote}"
                  </p>
                </div>

                <div className="text-[11px] text-slate-400 font-medium">
                  Batch: {topper.year} • {topper.stream}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/results"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:border-oxford-900 text-oxford-900 rounded text-xs font-semibold shadow-sm transition-colors"
            >
              <span>View All Toppers & Competitive Exam Selections</span>
              <ArrowRight className="w-4 h-4 text-gold-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Clear Answers for Parents
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-oxford-950">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans animate-in fade-in-50 duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. READY TO ENROLL CTA */}
      <section className="bg-oxford-900 text-white py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-serif tracking-widest text-gold-400 font-bold block">
              Join Visakhapatnam's Proven Intermediate College
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
              Admissions Open for Academic Year 2026–2027
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Secure your child's seat in MPC, BiPC, MEC, or CEC. Merit scholarships up to 100% available based on 10th board GPA and SGTSE talent test performance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAdmissionModal()}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-xs sm:text-sm shadow transition-colors"
            >
              Fill Online Admission Application
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 border border-slate-400 hover:border-white text-white rounded text-xs sm:text-sm font-medium transition-colors hover:bg-white/5"
            >
              Visit Nearest Campus
            </Link>
          </div>

          <div className="text-xs text-slate-400 pt-2">
            Central Admissions Desk:{" "}
            <a
              href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
              className="text-gold-300 font-semibold underline"
            >
              {COLLEGE_DETAILS.centralContacts.admissionsPhone}
            </a>{" "}
            • Open Mon–Sat: 8:00 AM – 6:00 PM
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
