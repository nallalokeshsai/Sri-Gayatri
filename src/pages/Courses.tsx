import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Calculator,
  TrendingUp,
  Scale,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { COURSES_DATA, COLLEGE_DETAILS } from "@/data/collegeData";
import { useLayout } from "@/context/LayoutContext";

export const Courses = () => {
  const { openAdmissionModal } = useLayout();
  const [selectedCourseId, setSelectedCourseId] = useState("mpc");

  const currentCourse = COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[0];

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
            <span className="text-white">Intermediate Streams (MPC, BiPC, MEC, CEC)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Academic Streams & Integrated Syllabi
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Recognized by the Board of Intermediate Education, Andhra Pradesh (BIEAP). Every stream synchronizes official board scoring mastery with national competitive entrance preparation.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE STREAM SELECTOR TABS */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {COURSES_DATA.map((course) => {
              const isSelected = selectedCourseId === course.id;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourseId(course.id)}
                  className={`p-4 rounded border text-left transition-all ${
                    isSelected
                      ? "bg-oxford-900 text-white border-gold-500 shadow-md"
                      : "bg-[#F9FAFB] text-slate-800 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-serif font-bold ${isSelected ? "text-gold-300" : "text-oxford-950"}`}>
                      {course.name}
                    </span>
                    <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded ${
                      isSelected ? "bg-white/10 text-gold-300" : "bg-slate-200 text-slate-700"
                    }`}>
                      2 Years
                    </span>
                  </div>
                  <span className={`text-xs block mt-1 line-clamp-1 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    {course.fullName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACTIVE STREAM DEEP DIVE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Main stream intro */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-oxford-50 border border-oxford-200 text-oxford-900 text-xs px-2.5 py-1 rounded font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                  <span>BIEAP Syllabus + Synchronized Entrance Track</span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
                    {currentCourse.name}: {currentCourse.fullName}
                  </h2>
                  <p className="text-xs sm:text-sm text-gold-700 font-semibold">
                    {currentCourse.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentCourse.description}
                </p>

                {/* Integrated Entrance Badges */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                    Parallel Competitive Entrances Covered:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentCourse.integratedCoaching.map((exam, i) => (
                      <span
                        key={i}
                        className="bg-oxford-50 border border-oxford-200 text-oxford-900 text-xs px-3 py-1 rounded font-medium"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => openAdmissionModal(currentCourse.id)}
                    className="px-5 py-2.5 bg-oxford-900 hover:bg-oxford-800 text-white rounded text-xs font-semibold shadow transition-colors flex items-center gap-1.5"
                  >
                    <span>Apply for {currentCourse.name} Stream</span>
                    <ArrowRight className="w-4 h-4 text-gold-400" />
                  </button>
                </div>
              </div>

              {/* Stream Image */}
              <div className="lg:col-span-4">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.fullName}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-3 bg-slate-50 text-center text-xs text-slate-500 font-medium">
                    Hands-on Academic Training at Sri Gayatri
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subjects & Curriculum Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Subjects */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-serif font-bold text-oxford-950 flex items-center gap-2 border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-gold-600" />
                <span>Core Subjects & Conceptual Focus</span>
              </h3>

              <div className="space-y-3">
                {currentCourse.subjects.map((sub, i) => (
                  <div key={i} className="bg-slate-50 p-3.5 rounded border border-slate-100 space-y-1">
                    <span className="font-serif font-bold text-xs text-oxford-950 block">
                      {sub.name}
                    </span>
                    <p className="text-xs text-slate-600">
                      {sub.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Highlights & Weekly Hours */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-serif font-bold text-oxford-950 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <span>Weekly Academic Distribution</span>
                </h3>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <span className="text-xs font-bold text-oxford-900 block font-serif">Lectures</span>
                    <span className="text-xs text-slate-600 mt-1 block">
                      {currentCourse.weeklyHours.lectures}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <span className="text-xs font-bold text-oxford-900 block font-serif">Labs / Work</span>
                    <span className="text-xs text-slate-600 mt-1 block">
                      {currentCourse.weeklyHours.practicals}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded border border-slate-100">
                    <span className="text-xs font-bold text-oxford-900 block font-serif">Study Hours</span>
                    <span className="text-xs text-slate-600 mt-1 block">
                      {currentCourse.weeklyHours.studyHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-base font-serif font-bold text-oxford-950 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span>Pedagogical Highlights</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {currentCourse.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Prospective Career Paths */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-serif font-bold text-oxford-950 border-b border-slate-100 pb-3">
              Higher Education & Career Avenues Unlocked by {currentCourse.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {currentCourse.careerPaths.map((career, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-3 rounded border border-slate-100 text-xs text-slate-700 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-oxford-800 rounded-full shrink-0"></span>
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DAILY TIMETABLE BREAKDOWN */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Daily Academic Routine
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              A Balanced Day at Sri Gayatri
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How our schedule prevents exhaustion while achieving top board and entrance ranks.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono font-bold text-oxford-900 sm:w-36">8:00 AM – 8:30 AM</span>
              <span className="font-semibold text-slate-800 sm:w-48">Morning Assembly & Revision</span>
              <span className="text-slate-600 sm:flex-1">Formula review, previous day error correction log, and daily attendance recording.</span>
            </div>

            <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono font-bold text-oxford-900 sm:w-36">8:30 AM – 1:00 PM</span>
              <span className="font-semibold text-slate-800 sm:w-48">Core Academic Lectures</span>
              <span className="text-slate-600 sm:flex-1">Deep conceptual teaching covering BIEAP textbook chapters, derivations, and board theory.</span>
            </div>

            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono font-bold text-oxford-900 sm:w-36">1:00 PM – 1:45 PM</span>
              <span className="font-semibold text-slate-800 sm:w-48">Nutritious Lunch Break</span>
              <span className="text-slate-600 sm:flex-1">Wholesome vegetarian meal in campus dining hall or day-scholar lunch break.</span>
            </div>

            <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono font-bold text-oxford-900 sm:w-36">1:45 PM – 3:30 PM</span>
              <span className="font-semibold text-slate-800 sm:w-48">Laboratory & Applied Problems</span>
              <span className="text-slate-600 sm:flex-1">Hands-on science experiments, specimen practicals, or entrance level MCQ application workshops.</span>
            </div>

            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono font-bold text-oxford-900 sm:w-36">3:30 PM – 5:30 PM</span>
              <span className="font-semibold text-slate-800 sm:w-48">Supervised Study & Doubts</span>
              <span className="text-slate-600 sm:flex-1">Daily Practice Papers (DPP) worked out with senior subject faculty present in the room to clear doubts immediately.</span>
            </div>

            <div className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono font-bold text-oxford-900 sm:w-36">8:00 PM – 10:30 PM</span>
              <span className="font-semibold text-slate-800 sm:w-48">Residential Evening Study</span>
              <span className="text-slate-600 sm:flex-1">(For hostel residents) Supervised silent reading and preparation for next morning's evaluation test.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ADMISSION BANNER */}
      <section className="bg-oxford-900 text-white py-12 sm:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Ready to Select Your Academic Stream?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our experienced counselors will help evaluate your 10th class aptitudes to choose between MPC, BiPC, MEC, and CEC.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openAdmissionModal(selectedCourseId)}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-xs sm:text-sm shadow transition-colors"
            >
              Apply Online for 2026–27
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
