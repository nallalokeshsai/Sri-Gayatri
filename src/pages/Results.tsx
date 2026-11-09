import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  BookOpen,
  UserCheck,
} from "lucide-react";
import { TOPPERS_DATA, COLLEGE_DETAILS } from "@/data/collegeData";
import { useLayout } from "@/context/LayoutContext";

export const Results = () => {
  const { openAdmissionModal } = useLayout();
  const [streamFilter, setStreamFilter] = useState<string>("All");

  const filteredToppers = TOPPERS_DATA.filter((topper) => {
    if (streamFilter === "All") return true;
    return topper.stream.toLowerCase().includes(streamFilter.toLowerCase());
  });

  const parentFeedback = [
    {
      parent: "Sri M. Venkata Ramana",
      relation: "Father of M. Sai Kiran (MPC - Asilmetta Campus)",
      profession: "HPCL Visakh Refinery",
      location: "Gajuwaka, Visakhapatnam",
      quote:
        "When my son completed 10th, many people recommended corporate coaching chains with 14-hour pressure. We chose Sri Gayatri because Mr. N.A. Naidu assured us that study hours take place under direct teacher guidance without extreme stress. Sai Kiran scored 986 in IPE and secured a seat at NIT Warangal.",
    },
    {
      parent: "Smt. K. Lakshmi Devi",
      relation: "Mother of K. Ananya (BiPC - Madhurawada Residential)",
      profession: "Teacher in Govt ZP School",
      location: "Srikakulam",
      quote:
        "Sending my daughter away to a residential hostel was an anxious decision. But the resident wardens at Madhurawada cared for her health and food like family. The strict zero-smartphone rule kept her disciplined. Today she is studying MBBS at Andhra Medical College.",
    },
    {
      parent: "Sri Ch. Satyanarayana",
      relation: "Father of Ch. Akhil (MEC - NAD Junction Campus)",
      profession: "APSRTC Senior Staff",
      location: "Pendurthi, Visakhapatnam",
      quote:
        "As a middle-class family, we could not afford high external tuition fees after college. At Sri Gayatri NAD, every evening study hour was taken by the same subject lecturers. Not a single rupee was wasted on outside tuitions, and Akhil cleared CA Foundation on his first attempt.",
    },
  ];

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. PAGE HEADER */}
      <section className="bg-oxford-950 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-gold-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Academics</span>
            <span>/</span>
            <span className="text-white">Academic Hall of Fame & Results</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Academic Hall of Fame & Board Results
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Authentic merit achieved by regular classroom scholars across our Visakhapatnam campuses. Every rank, score, and professional college seat published here belongs to a genuine Sri Gayatri student.
          </p>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              992 / 1000
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Highest IPE Board Score
            </span>
            <p className="text-[11px] text-slate-400">BIEAP State Top 10</p>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              99.42 %ile
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Top JEE Main Score
            </span>
            <p className="text-[11px] text-slate-400">NIT Warangal CSE Allotted</p>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              678 / 720
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              NEET-UG High Score
            </span>
            <p className="text-[11px] text-slate-400">Govt AMC MBBS Seat</p>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-oxford-900 block">
              98.6%
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
              Overall College Pass Rate
            </span>
            <p className="text-[11px] text-slate-400">Class 12th BIEAP Exams</p>
          </div>
        </div>
      </section>

      {/* 3. STREAM FILTER & TOPPERS GRID */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                Merit List
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-oxford-950">
                Topper Highlights & Student Reflections
              </h2>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {["All", "MPC", "BiPC", "MEC", "CEC"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStreamFilter(s)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    streamFilter === s
                      ? "bg-oxford-900 text-white font-semibold"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {s === "All" ? "All Streams" : `${s} Stream`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredToppers.map((topper) => (
              <div
                key={topper.id}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-2xl font-serif font-bold text-oxford-950 block">
                        {topper.score}
                      </span>
                      <span className="text-xs text-slate-500">{topper.exam}</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded text-right">
                      {topper.rankBadge}
                    </span>
                  </div>

                  <div className="border-t border-slate-100 pt-3">
                    <h3 className="font-serif font-bold text-base text-slate-900">
                      {topper.name}
                    </h3>
                    <div className="text-xs text-slate-500 space-y-0.5 mt-0.5">
                      <div>Campus: <strong>{topper.branch}</strong></div>
                      <div>Track: {topper.stream}</div>
                    </div>
                  </div>

                  <blockquote className="text-xs text-slate-600 italic leading-relaxed border-l-2 border-gold-400 pl-3 py-1">
                    "{topper.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Batch of {topper.year}</span>
                  <span className="text-emerald-700 font-semibold">Verified Merit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARENT TESTIMONIALS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Family Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              Trusted by Parents Across Visakhapatnam
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Middle-class families value our moral commitment to disciplined teaching and zero outside tuitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parentFeedback.map((pf, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] border border-slate-200 rounded p-6 space-y-4 flex flex-col justify-between"
              >
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  "{pf.quote}"
                </blockquote>

                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-serif font-bold text-xs text-oxford-950">
                    {pf.parent}
                  </h4>
                  <p className="text-[11px] text-gold-700 font-medium">
                    {pf.relation}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {pf.profession} • {pf.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-oxford-900 text-white py-12 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Give Your Child the Foundation to Excel
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Admissions are open for the 2026–2027 academic year. Apply online or visit our admissions desks in Asilmetta, Gajuwaka, Madhurawada, NAD, or Tallavalasa.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openAdmissionModal()}
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-xs shadow transition-colors"
            >
              Apply for 2026–27 Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
