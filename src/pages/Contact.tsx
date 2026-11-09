import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  ShieldCheck,
  Send,
  ExternalLink,
  GraduationCap,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { COLLEGE_DETAILS, BRANCHES_DATA } from "@/data/collegeData";
import { toast } from "sonner";

export const Contact = () => {
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "asilmetta",
    subject: "Admission Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inquiryForm.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    const cleanPhone = inquiryForm.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitted(true);
    toast.success("Message Dispatched Successfully", {
      description: "Our campus administration will get in touch with you shortly.",
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setInquiryForm({
      name: "",
      phone: "",
      email: "",
      branch: "asilmetta",
      subject: "Admission Inquiry",
      message: "",
    });
  };

  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. PAGE HEADER */}
      <section className="bg-oxford-950 text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-gold-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Support</span>
            <span>/</span>
            <span className="text-white">Central Office & 5 Visakhapatnam Desks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Directory & Campus Desks
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Reach out to our Central Admissions Office or contact the direct desk of any of our 5 campuses in Visakhapatnam for admission guidance, fee inquiries, or hostel bookings.
          </p>
        </div>
      </section>

      {/* 2. CENTRAL CONTACT & INQUIRY FORM */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F9FAFB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Central Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
                  Central Administration
                </span>
                <h2 className="text-2xl font-serif font-bold text-oxford-950">
                  Head Office & Admissions
                </h2>
                <p className="text-xs text-slate-600">
                  Located in the heart of Visakhapatnam, directly accessible from RTC Complex and Railway Station.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-oxford-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-serif">Head Office Address</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {COLLEGE_DETAILS.centralContacts.headOfficeAddress}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Landmark: Near Siripuram Junction & Sampath Vinayaka Temple
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-oxford-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-serif">Admissions Helplines</strong>
                    <div className="space-y-1 mt-1 text-slate-700">
                      <div>
                        Admissions Hotline:{" "}
                        <a
                          href={`tel:${COLLEGE_DETAILS.centralContacts.admissionsPhone.replace(/\s+/g, "")}`}
                          className="font-bold text-oxford-900 hover:underline"
                        >
                          {COLLEGE_DETAILS.centralContacts.admissionsPhone}
                        </a>
                      </div>
                      <div>
                        Campus Landline:{" "}
                        <a
                          href={`tel:${COLLEGE_DETAILS.centralContacts.landline.replace(/\s+/g, "")}`}
                          className="font-medium text-slate-800 hover:underline"
                        >
                          {COLLEGE_DETAILS.centralContacts.landline}
                        </a>
                      </div>
                      <div>
                        Academic Dean Desk:{" "}
                        <a
                          href={`tel:${COLLEGE_DETAILS.centralContacts.academicPhone.replace(/\s+/g, "")}`}
                          className="font-medium text-slate-800 hover:underline"
                        >
                          {COLLEGE_DETAILS.centralContacts.academicPhone}
                        </a>
                      </div>
                      <div>
                        Residential Hostel Help:{" "}
                        <a
                          href={`tel:${COLLEGE_DETAILS.centralContacts.residentialHelp.replace(/\s+/g, "")}`}
                          className="font-medium text-slate-800 hover:underline"
                        >
                          {COLLEGE_DETAILS.centralContacts.residentialHelp}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-start gap-3">
                  <Mail className="w-4 h-4 text-oxford-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-serif">Official Email</strong>
                    <a
                      href={`mailto:${COLLEGE_DETAILS.centralContacts.admissionsEmail}`}
                      className="text-oxford-900 hover:underline block mt-0.5 font-medium"
                    >
                      {COLLEGE_DETAILS.centralContacts.admissionsEmail}
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-oxford-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-serif">Working Hours</strong>
                    <span className="text-slate-600 block mt-0.5">
                      {COLLEGE_DETAILS.centralContacts.officeHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Direct Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
                <div className="border-b border-slate-100 pb-4 mb-5">
                  <h3 className="font-serif font-bold text-lg text-oxford-950">
                    Send a Direct Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Have a question regarding courses, fees, or hostel facilities? We will respond promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-slate-900">
                      Message Dispatched
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting us, {inquiryForm.name}. The designated coordinator from the selected campus will get in touch with you shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 bg-oxford-900 text-white rounded text-xs font-semibold hover:bg-oxford-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-medium text-slate-700">
                          Your Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={inquiryForm.name}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-medium text-slate-700">
                          Contact Mobile Number <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={inquiryForm.phone}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-medium text-slate-700">Email Address (Optional)</label>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={inquiryForm.email}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-medium text-slate-700">Select Campus Desk</label>
                        <select
                          value={inquiryForm.branch}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, branch: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800 bg-white"
                        >
                          {BRANCHES_DATA.map((b) => (
                            <option key={b.id} value={b.id}>
                              {b.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-medium text-slate-700">Subject / Category</label>
                      <select
                        value={inquiryForm.subject}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800 bg-white"
                      >
                        <option value="Admission Inquiry">Intermediate 1st Year Admission</option>
                        <option value="Hostel & Accommodation">Residential Hostels (Boys / Girls)</option>
                        <option value="Fee & Scholarship">Merit Scholarships (SGTSE)</option>
                        <option value="Transport & Bus Routes">College Bus Pickup Routes</option>
                        <option value="General Question">General Academic Question</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-medium text-slate-700">Your Message / Query</label>
                      <textarea
                        rows={3}
                        placeholder="Write your question or request a callback time..."
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-oxford-900 hover:bg-oxford-800 text-white rounded text-xs font-semibold shadow transition-colors flex items-center gap-2"
                    >
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5 text-gold-400" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5 VISAKHAPATNAM CAMPUSES DIRECTORY */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif uppercase tracking-widest text-gold-700 font-bold block">
              Direct Campus Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-oxford-950">
              Directory of All 5 Campuses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Each branch has a full-time academic in-charge and administrative desk to assist parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES_DATA.map((branch) => (
              <div
                key={branch.id}
                className="bg-[#F9FAFB] border border-slate-200 rounded-lg p-5 space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-oxford-900 bg-white border border-slate-200 px-2.5 py-0.5 rounded">
                      {branch.type}
                    </span>
                    <span className="text-[11px] text-slate-400">Estd. {branch.established}</span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-base text-oxford-950">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-gold-700 font-medium">
                      {branch.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200/60 pt-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-oxford-900 shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-oxford-900 shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                        className="font-semibold text-oxford-900 hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-oxford-900 shrink-0" />
                      <span>{branch.email}</span>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      Campus Head: <strong>{branch.inCharge.name}</strong> ({branch.inCharge.designation})
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-xs">
                  <a
                    href={branch.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-oxford-900 hover:underline flex items-center gap-1 font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View on Map</span>
                  </a>

                  <a
                    href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                    className="px-3 py-1 bg-oxford-900 text-white rounded text-[11px] font-medium hover:bg-oxford-800 transition-colors"
                  >
                    Call Campus
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
