import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Building2,
  BookOpen,
  Award,
  ArrowRight,
  User,
  X,
  FileCheck,
} from "lucide-react";
import { COLLEGE_DETAILS, BRANCHES_DATA } from "@/data/collegeData";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStream?: string;
  defaultBranch?: string;
}

export const AdmissionModal = ({
  isOpen,
  onClose,
  defaultStream = "mpc",
  defaultBranch = "asilmetta",
}: AdmissionModalProps) => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    stream: defaultStream,
    branch: defaultBranch,
    accommodation: "Day Scholar",
    tenthScore: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const getScholarshipPreview = () => {
    const score = parseFloat(formData.tenthScore);
    if (isNaN(score)) return null;

    if (score >= 9.8 || score >= 98) {
      return {
        slab: "Category A+ Super-Merit",
        concession: "Eligible for 75% to 100% Tuition Fee Concession",
        badge: "Highest Merit Tier",
      };
    } else if (score >= 9.2 || score >= 92) {
      return {
        slab: "Category A Merit",
        concession: "Eligible for 30% to 50% Tuition Fee Concession",
        badge: "Distinction Tier",
      };
    } else if (score >= 8.5 || score >= 85) {
      return {
        slab: "Category B Merit",
        concession: "Eligible for 15% to 25% Tuition Fee Concession",
        badge: "Merit Tier",
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

    const ref = `SGJC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(ref);
    setSubmitted(true);
    toast.success("Application Submitted Successfully", {
      description: `Application Reference: ${ref}. Our central admissions counselor will call you within 24 hours.`,
    });
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      stream: defaultStream,
      branch: defaultBranch,
      accommodation: "Day Scholar",
      tenthScore: "",
    });
    onClose();
  };

  const scholarship = getScholarshipPreview();

  return (
    <Dialog open={isOpen} onOpenChange={handleResetAndClose}>
      <DialogContent className="max-w-xl p-0 overflow-hidden bg-white border border-slate-200 rounded-lg shadow-xl font-sans">
        {/* Header */}
        <div className="bg-oxford-900 text-white px-6 py-5 border-b border-oxford-800">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Year 2026–2027</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-serif text-white">
            Intermediate Admission & Scholarship Form
          </DialogTitle>
          <DialogDescription className="text-xs text-slate-300 mt-1">
            Recognized by BIEAP (Code: {COLLEGE_DETAILS.collegeCode}). Connect with our academic counselors across 5 Visakhapatnam campuses.
          </DialogDescription>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Application Registered Successfully
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for applying to Sri Gayatri Junior Colleges. Your reference details have been registered at our Central Admissions Cell.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-md text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Application Reference ID:</span>
                  <span className="font-mono font-bold text-oxford-900">{applicationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-medium text-slate-800">{formData.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Stream:</span>
                  <span className="font-semibold text-oxford-900 uppercase">{formData.stream}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Campus Choice:</span>
                  <span className="font-medium text-slate-800 capitalize">{formData.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Accommodation:</span>
                  <span className="font-medium text-slate-800">{formData.accommodation}</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
                <p>A counselor from the selected campus will reach out to <strong>{formData.phone}</strong>.</p>
                <p>For immediate assistance, call: <strong>{COLLEGE_DETAILS.centralContacts.admissionsPhone}</strong></p>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-oxford-900 text-white rounded text-xs font-semibold hover:bg-oxford-800 transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Student Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Student Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student's name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter parent's name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                  />
                </div>
              </div>

              {/* Row 2: Contact Number & 10th Score */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Parent Contact Number <span className="text-rose-600">*</span>
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
                    10th Board Score (GPA / Marks %)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 9.8 GPA or 95%"
                    value={formData.tenthScore}
                    onChange={(e) => setFormData({ ...formData, tenthScore: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-oxford-800"
                  />
                </div>
              </div>

              {/* Scholarship Indicator (if entered) */}
              {scholarship && (
                <div className="bg-amber-50 border border-amber-200 p-2.5 rounded text-xs text-amber-900 flex items-center justify-between">
                  <div>
                    <span className="font-semibold block">{scholarship.slab}</span>
                    <span className="text-[11px] text-amber-800">{scholarship.concession}</span>
                  </div>
                  <span className="bg-amber-200 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                    {scholarship.badge}
                  </span>
                </div>
              )}

              {/* Row 3: Stream & Campus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    Intermediate Stream <span className="text-rose-600">*</span>
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
                    Preferred Campus <span className="text-rose-600">*</span>
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

              {/* Accommodation Preference */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">
                  Day Scholar / Residential Preference
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded border cursor-pointer transition-colors ${
                      formData.accommodation === "Day Scholar"
                        ? "border-oxford-800 bg-oxford-50 font-medium text-oxford-900"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accommodation"
                      checked={formData.accommodation === "Day Scholar"}
                      onChange={() => setFormData({ ...formData, accommodation: "Day Scholar" })}
                      className="accent-oxford-900"
                    />
                    <span>Day Scholar (College Hours)</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded border cursor-pointer transition-colors ${
                      formData.accommodation === "Residential Hostel"
                        ? "border-oxford-800 bg-oxford-50 font-medium text-oxford-900"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="accommodation"
                      checked={formData.accommodation === "Residential Hostel"}
                      onChange={() => setFormData({ ...formData, accommodation: "Residential Hostel" })}
                      className="accent-oxford-900"
                    />
                    <span>Residential (Hostel & Mess)</span>
                  </label>
                </div>
              </div>

              {/* Assurance note */}
              <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline mr-1 -mt-0.5" />
                Admission applications are processed directly by our central office. No capitation or unauthorized agency fees.
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 border border-slate-300 rounded text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-oxford-900 text-white rounded text-xs font-semibold hover:bg-oxford-800 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
