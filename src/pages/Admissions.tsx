import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Clock,
  Award,
  Wallet,
  FileText,
  Building2,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { COLLEGE_DETAILS, BRANCHES_DATA, FEE_ASSURANCES } from "@/data/collegeData";
import { toast } from "sonner";

export const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    altPhone: "",
    tenthBoard: "AP SSC (State Board)",
    tenthScore: "",
    stream: "mpc",
    branch: "asilmetta",
    accommodation: "Day Scholar",
    query: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const getEstimatedScholarship = () => {
    const s = parseFloat(formData.tenthScore);
    if (isNaN(s)) return null;

    if (s >= 9.8 || s >= 98) {
      return {
        concession: "Eligible for 75% to 100% Tuition Fee Concession",
        slab: "Category A+ Super-Merit Waiver",
        color: "text-emerald-800 bg-emerald-50 border-emerald-300",
      };
    } else if (s >= 9.2 || s >= 92) {
      return {
        concession: "Eligible for 30% to 50% Tuition Fee Concession",
        slab: "Category A Distinction Waiver",
        color: "text-blue-800 bg-blue-50 border-blue-300",
      };
    } else if (s >= 8.5 || s >= 85) {
      return {
        concession: "Eligible for 15% to 25% Tuition Fee Concession",
        slab: "Category B Merit Waiver",
        color: "text-amber-800 bg-amber-50 border-amber-300",
      };
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.studentName.trim()) {
      toast.error("Please enter the student's full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      toast.error("Please provide a valid 10-digit mobile number.");
      return;
    }

    const generatedRef = `SGJC-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
    toast.success("Admission Application Registered Successfully", {
      description: `Your Reference ID is ${generatedRef}. A counselor will contact you shortly.`,
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      altPhone: "",
      tenthBoard: "AP SSC (State Board)",
      tenthScore: "",
      stream: "mpc",
      branch: "asilmetta",
      accommodation: "Day Scholar",
      query: "",
    });
  };

  const scholarship = getEstimatedScholarship();

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. PAGE HEADER */}
      <section className="bg-oxford-950 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-gold-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Enrollment</span>
            <span>/</span>
            <span className="text-white">Admissions 2026–2027 Guidelines</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Admissions 2026–2027
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Intermediate 1st Year admissions are currently open across all 5 campuses in Visakhapatnam. Offering MPC, BiPC, MEC, and CEC with merit scholarships up to 100% for 10th board high achievers.
          </p>
        </div>
      </section>

      {/* 2. SIMPLE 4-STEP PROCEDURE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Clear & Straightforward
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              4-Step Admission Procedure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We make the transition from 10th school to intermediate college smooth, transparent, and supportive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#F9FAFB] p-5 rounded border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-gold-700 font-serif block">STEP 01</span>
              <h3 className="font-serif font-bold text-sm text-oxford-950">
                Submit Application
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill the online application below or visit our central admissions desk at any of the 5 Visakhapatnam campuses.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-5 rounded border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-gold-700 font-serif block">STEP 02</span>
              <h3 className="font-serif font-bold text-sm text-oxford-950">
                Aptitude Counseling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet one-on-one with senior faculty to assess strengths and finalize your stream (MPC, BiPC, MEC, or CEC).
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-5 rounded border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-gold-700 font-serif block">STEP 03</span>
              <h3 className="font-serif font-bold text-sm text-oxford-950">
                Document Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit 10th marks memo, TC, and conduct certificates. Merit scholarship concessions are evaluated immediately.
              </p>
            </div>

            <div className="bg-[#F9FAFB] p-5 rounded border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-gold-700 font-serif block">STEP 04</span>
              <h3 className="font-serif font-bold text-sm text-oxford-950">
                Seat & Kit Allocation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive official admission receipt, complete textbook kit, formula handbook, and campus orientation schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION FORM & SCHOLARSHIP CALCULATOR */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-oxford-900 text-white p-6 border-b border-oxford-800">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Direct Central Registration</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Online Admission Application Form
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                No application fees. Registered applications are confirmed directly by campus principals.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-bold text-oxford-950">
                      Admission Application Registered!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                      Thank you for choosing Sri Gayatri Junior Colleges. Your admission inquiry has been logged in our central admissions portal.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded p-5 text-left text-xs max-w-md mx-auto space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-500">Official Reference ID:</span>
                      <span className="font-mono font-bold text-sm text-oxford-900">{refId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Student Name:</span>
                      <span className="font-medium text-slate-800">{formData.studentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Parent Phone:</span>
                      <span className="font-medium text-slate-800">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Stream Selected:</span>
                      <span className="font-bold text-oxford-900 uppercase">{formData.stream}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Preferred Campus:</span>
                      <span className="font-medium text-slate-800 capitalize">{formData.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Accommodation:</span>
                      <span className="font-medium text-slate-800">{formData.accommodation}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 space-y-1">
                    <p>Our admissions desk will contact you at <strong>{formData.phone}</strong> to confirm your campus visit.</p>
                    <p>For urgent questions, contact our helpline: <strong>{COLLEGE_DETAILS.centralContacts.admissionsPhone}</strong></p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-oxford-900 text-white rounded text-xs font-semibold hover:bg-oxford-800 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Student and Parent Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        Student Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="As in 10th class hall ticket"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        Parent / Guardian Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Parent / Guardian name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Numbers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        Primary Mobile Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        Alternate Mobile / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Secondary contact number"
                        value={formData.altPhone}
                        onChange={(e) => setFormData({ ...formData, altPhone: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                      />
                    </div>
                  </div>

                  {/* Row 3: 10th Board & Score (Live scholarship indicator) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        10th Class Board
                      </label>
                      <select
                        value={formData.tenthBoard}
                        onChange={(e) => setFormData({ ...formData, tenthBoard: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800 bg-white"
                      >
                        <option value="AP SSC (State Board)">AP SSC (Andhra Pradesh Board)</option>
                        <option value="CBSE">CBSE (Central Board)</option>
                        <option value="ICSE">ICSE / ISC</option>
                        <option value="TS SSC">Telangana SSC</option>
                        <option value="Other Board">Other State Board</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        10th Marks / GPA (for scholarship estimation)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 9.8 GPA or 96%"
                        value={formData.tenthScore}
                        onChange={(e) => setFormData({ ...formData, tenthScore: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                      />
                    </div>
                  </div>

                  {/* Live Scholarship Banner */}
                  {scholarship && (
                    <div className={`p-3 rounded border text-xs flex items-center justify-between ${scholarship.color}`}>
                      <div>
                        <span className="font-bold block">{scholarship.slab}</span>
                        <span className="text-[11px]">{scholarship.concession}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/70">
                        Estimated Waiver
                      </span>
                    </div>
                  )}

                  {/* Row 4: Stream and Campus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        Intermediate Stream Desired <span className="text-rose-600">*</span>
                      </label>
                      <select
                        value={formData.stream}
                        onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800 bg-white"
                      >
                        <option value="mpc">MPC (IIT-JEE / AP EAPCET)</option>
                        <option value="bipc">BiPC (NEET Medical / Pharma)</option>
                        <option value="mec">MEC (CA Foundation / IPMAT)</option>
                        <option value="cec">CEC (CLAT Law / Civil Services)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        Preferred Visakhapatnam Campus <span className="text-rose-600">*</span>
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800 bg-white"
                      >
                        {BRANCHES_DATA.map((branch) => (
                          <option key={branch.id} value={branch.id}>
                            {branch.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Accommodation */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700">
                      Day Scholar or Residential Accommodation
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <label
                        className={`flex items-center gap-2 p-3 rounded border cursor-pointer ${
                          formData.accommodation === "Day Scholar"
                            ? "border-oxford-800 bg-oxford-50 font-semibold text-oxford-950"
                            : "border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="acc"
                          checked={formData.accommodation === "Day Scholar"}
                          onChange={() => setFormData({ ...formData, accommodation: "Day Scholar" })}
                          className="accent-oxford-900"
                        />
                        <span>Day Scholar (College Hours with Optional Bus)</span>
                      </label>

                      <label
                        className={`flex items-center gap-2 p-3 rounded border cursor-pointer ${
                          formData.accommodation === "Residential Hostel"
                            ? "border-oxford-800 bg-oxford-50 font-semibold text-oxford-950"
                            : "border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="acc"
                          checked={formData.accommodation === "Residential Hostel"}
                          onChange={() => setFormData({ ...formData, accommodation: "Residential Hostel" })}
                          className="accent-oxford-900"
                        />
                        <span>Residential (AC Hostel, Mess & Night Study)</span>
                      </label>
                    </div>
                  </div>

                  {/* Remarks */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">
                      Any Specific Queries or Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Bus stop pickup request, hostel query, or SGTSE scholarship test registration"
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500">
                      * All information is strictly confidential. No commercial marketing.
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-oxford-900 hover:bg-oxford-800 text-white rounded text-xs font-bold transition-colors shadow flex items-center gap-2"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4 text-gold-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTS CHECKLIST & FEE TRANSPARENCY */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Required Documents */}
          <div className="bg-[#F9FAFB] p-6 rounded-lg border border-slate-200 space-y-4">
            <h3 className="font-serif font-bold text-base text-oxford-950 flex items-center gap-2 border-b border-slate-200 pb-3">
              <FileText className="w-4 h-4 text-gold-600" />
              <span>Required Documents for Enrolment</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Original 10th Marks Memo (SSC / CBSE / ICSE)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Transfer Certificate (TC) issued by previous school</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Study & Conduct Certificate (from Class 6 to 10)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Caste & Income Certificate (if claiming scholarship/fee waiver)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>6 recent passport-size colour photographs of student</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Photocopy of Student and Parent Aadhaar Cards</span>
              </li>
            </ul>
          </div>

          {/* Fee Assurances */}
          <div className="bg-[#F9FAFB] p-6 rounded-lg border border-slate-200 space-y-4">
            <h3 className="font-serif font-bold text-base text-oxford-950 flex items-center gap-2 border-b border-slate-200 pb-3">
              <Wallet className="w-4 h-4 text-gold-600" />
              <span>Transparent Fee Commitments</span>
            </h3>
            <div className="space-y-3">
              {FEE_ASSURANCES.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="font-serif font-bold text-xs text-oxford-950 block">
                    {item.title}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HELPLINE FOOTER */}
      <section className="bg-oxford-900 text-white py-12 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Have Questions About Enrolment or Hostels?
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our Central Admissions Officer is available directly to guide parents through stream selection and fee concessions.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-oxford-950 font-bold rounded text-xs shadow transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Admissions: {COLLEGE_DETAILS.centralContacts.admissionsPhone}</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 border border-slate-400 hover:border-white text-white rounded text-xs font-medium transition-colors hover:bg-white/5"
            >
              View All Campus Desks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
