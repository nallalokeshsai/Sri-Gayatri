import { Link } from "react-router-dom";
import { ArrowLeft, Home, GraduationCap, Phone } from "lucide-react";
import { COLLEGE_DETAILS } from "@/data/collegeData";

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16 bg-[#F9FAFB] text-slate-800 font-sans">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-serif font-black text-oxford-900 block">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-oxford-900 text-white rounded font-medium hover:bg-oxford-800 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5 text-gold-400" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 text-slate-700 rounded font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-slate-500" />
            <span>Contact Helpdesk</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
          Sri Gayatri Junior Colleges • Central Desk: {COLLEGE_DETAILS.centralContacts.admissionsPhone}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
