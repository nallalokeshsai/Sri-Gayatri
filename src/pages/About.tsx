import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  BookOpen,
  CheckCircle2,
  Phone,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import directorImg from "@/assets/Naidu photo.jpg";
import asilmettaImg from "@/assets/asilmetta-campus.jpg";
import { COLLEGE_DETAILS, FACULTY_TEAM, FACILITIES_DATA } from "@/data/collegeData";
import { useLayout } from "@/context/LayoutContext";

export const About = () => {
  const { openAdmissionModal } = useLayout();

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. PAGE HEADER BANNER */}
      <section className="bg-oxford-950 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-gold-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About</span>
            <span>/</span>
            <span className="text-white">Institutional Heritage & Leadership</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            About Sri Gayatri Junior Colleges
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Founded in 1999 on the bedrock of ethical intermediate education. Over 25 years of empowering students across Visakhapatnam through foundational concept learning and dedicated teacher mentorship.
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDING SAGA */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                  Our Origin & Purpose
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
                  Founded on a Teacher's Moral Conviction in 1999
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  In the late 1990s, intermediate education across Andhra Pradesh was becoming heavily commercialized. Large corporate coaching factories imposed 16-hour coercive timetables, high-pressure environments, and superficial classroom lectures that forced middle-class parents to hunt for expensive private evening tuitions.
                </p>
                <p>
                  <strong>Mr. N.A. Naidu</strong>, a revered mathematics lecturer in Visakhapatnam with over three decades of classroom experience, recognized the severe psychological stress this placed on young minds. In 1999, he established the first <strong>Sri Gayatri Junior College</strong> campus in Asilmetta with an intimate batch of 40 students.
                </p>
                <p className="font-serif italic text-oxford-900 border-l-2 border-gold-500 pl-3.5 py-1">
                  "When an institution accepts a student, it assumes the sacred responsibility to teach that student completely within college walls. If a student must run to outside tuitions, the college has not done its job."
                </p>
                <p>
                  Today, Sri Gayatri has grown to 5 thriving campuses across Visakhapatnam, guiding over 2,500 students each academic year. Yet that founding pledge remains unchanged: rigorous concept-first instruction, supervised daily practice, and zero tolerance for external tuition dependency.
                </p>
              </div>

              {/* Milestones */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                  <span className="text-lg font-bold font-serif text-oxford-900 block">1999</span>
                  <span className="text-slate-600 text-[11px]">Asilmetta Flagship Founded</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                  <span className="text-lg font-bold font-serif text-oxford-900 block">2015</span>
                  <span className="text-slate-600 text-[11px]">Gajuwaka Industrial Hub</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                  <span className="text-lg font-bold font-serif text-oxford-900 block">2017</span>
                  <span className="text-slate-600 text-[11px]">NAD Junction Gateway</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded">
                  <span className="text-lg font-bold font-serif text-oxford-900 block">2020–24</span>
                  <span className="text-slate-600 text-[11px]">Madhurawada & Tallavalasa</span>
                </div>
              </div>
            </div>

            {/* Asilmetta Campus Photo */}
            <div className="lg:col-span-5">
              <div className="bg-[#F9FAFB] p-2 rounded-lg border border-slate-200 shadow-sm">
                <img
                  src={asilmettaImg}
                  alt="Sri Gayatri Flagship Campus"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="p-3 text-center text-xs text-slate-500">
                  Asilmetta Central Campus • 25+ Years of Academic Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & ACADEMIC DIRECTOR PROFILE */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="lg:col-span-4 text-center">
                <img
                  src={directorImg}
                  alt={COLLEGE_DETAILS.director.name}
                  className="w-52 h-64 sm:w-60 sm:h-72 object-cover rounded shadow mx-auto border-4 border-slate-100"
                />
                <div className="mt-3">
                  <h3 className="font-serif font-bold text-lg text-oxford-950">
                    {COLLEGE_DETAILS.director.name}
                  </h3>
                  <span className="text-xs text-gold-700 font-semibold block">
                    {COLLEGE_DETAILS.director.designation}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {COLLEGE_DETAILS.director.experience}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                  Director's Address
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-oxford-950">
                  "Teaching with the Care of Family"
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif italic border-l-2 border-gold-500 pl-4 py-1">
                  "{COLLEGE_DETAILS.director.message}"
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  <p>
                    Throughout his 30-year career as a senior mathematics lecturer in coastal Andhra Pradesh, Mr. Naidu has taught thousands of students who went on to become senior doctors, IIT engineers, IAS officers, and corporate chartered accountants.
                  </p>
                  <p>
                    His hands-on academic oversight ensures that every branch follows the same disciplined, encouraging pedagogy—where no student's doubt is dismissed, and every syllabus milestone is completed with sufficient time for comprehensive revision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SENIOR ACADEMIC FACULTY TEAM */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Teaching Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              Senior Academic Deans & Faculty
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our core faculty team brings decades of classroom experience and a genuine passion for intermediate student mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY_TEAM.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-[#F9FAFB] border border-slate-200 rounded p-5 space-y-3 hover:border-slate-300 transition-colors"
              >
                <div>
                  <h3 className="font-serif font-bold text-base text-oxford-950">
                    {faculty.name}
                  </h3>
                  <span className="text-xs text-gold-700 font-semibold block">
                    {faculty.designation}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {faculty.department} • {faculty.experience} Experience
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-mono">
                  {faculty.qualification}
                </div>

                <p className="text-xs text-slate-600 italic border-t border-slate-200 pt-2 leading-relaxed">
                  "{faculty.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CAMPUS INFRASTRUCTURE OVERVIEW */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Modern Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              Learning Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Modern academic infrastructure designed to cultivate deep concentration and healthy student wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_DATA.map((facility) => (
              <div
                key={facility.id}
                className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm hover:shadow transition-shadow"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-700 block">
                    {facility.category}
                  </span>
                  <h3 className="font-serif font-bold text-base text-oxford-950">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                  <ul className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                    {facility.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-oxford-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Experience Sri Gayatri's Dignified Learning Environment
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Parents and prospective scholars are welcome to visit our campuses in Asilmetta, Gajuwaka, Madhurawada, NAD, or Tallavalasa for one-on-one academic counseling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAdmissionModal()}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-xs sm:text-sm shadow transition-colors"
            >
              Apply for 2026–27 Admission
            </button>
            <Link
              to="/branches"
              className="px-6 py-3 border border-slate-400 hover:border-white text-white rounded text-xs sm:text-sm font-medium transition-colors hover:bg-white/5"
            >
              Locate Nearest Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
