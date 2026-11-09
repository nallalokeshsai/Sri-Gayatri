import asilmettaCampus from "@/assets/asilmetta-campus.jpg";
import gajuwakaCampus from "@/assets/gajuwaka-campus.jpg";
import madhurawadaCampus from "@/assets/madhurawada-campus.jpg";
import nadCampus from "@/assets/nad-campus.jpg";
import venkateswaraCampus from "@/assets/venkateswara-campus.jpg";

import scienceLabImage from "@/assets/science-lab.jpg";
import computerLabImage from "@/assets/computer-lab.jpg";
import bipcImage from "@/assets/doctors.jpg";
import cecImage from "@/assets/cec.jpg";
import libraryImage from "@/assets/library-interior.jpg";
import messImage from "@/assets/cafeteria.jpg";
import sportsImage from "@/assets/sports-ground.jpg";
import classroomImage from "@/assets/classroom-modern.jpg";
import studentsImage from "@/assets/students-study.jpg";
import directorPhoto from "@/assets/Naidu photo.jpg";
import collegeLogo from "@/assets/Logo.png";

export { directorPhoto, collegeLogo };

export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  address: string;
  landmark?: string;
  phone: string;
  altPhone?: string;
  email: string;
  established: string;
  students: string;
  type: "Day Scholar" | "Day & Semi-Residential" | "Day & Residential";
  courses: string[];
  image: string;
  facilities: string[];
  timings: string;
  highlights: string[];
  mapsLink: string;
  isSisterCompany?: boolean;
  inCharge: {
    name: string;
    designation: string;
    directPhone: string;
  };
}

export interface CourseInfo {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  duration: string;
  description: string;
  integratedCoaching: string[];
  targetExams: string[];
  subjects: { name: string; focus: string }[];
  weeklyHours: { lectures: string; practicals: string; studyHours: string };
  careerPaths: string[];
  highlights: string[];
  image: string;
}

export interface TopperInfo {
  id: string;
  name: string;
  score: string;
  exam: string;
  stream: string;
  branch: string;
  year: string;
  rankBadge: string;
  quote: string;
}

export interface FacilityInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  experience: string;
  qualification: string;
  message: string;
}

export const COLLEGE_DETAILS = {
  name: "Sri Gayatri Junior Colleges",
  shortName: "Sri Gayatri",
  tagline: "Nurturing Academic Excellence Since 1999",
  subtext: "Recognized by Board of Intermediate Education, Andhra Pradesh (BIEAP)",
  collegeCode: "VSP-SGJC",
  establishedYear: "1999",
  totalCampuses: 5,
  totalStudents: "2,500+",
  facultyCount: "150+",
  passPercentage: "98.6%",
  alumniCount: "12,000+",
  director: {
    name: "Mr. N.A. Naidu",
    designation: "Founder & Academic Director",
    experience: "30+ Years Mentoring Intermediate Students",
    message:
      "Intermediate is the definitive crossroads of higher education. For over 25 years, our commitment has been absolute: to teach every concept from the ground up within college hours, leaving no child dependent on outside tuitions. When you entrust your child to Sri Gayatri, they enter an environment of discipline, moral mentorship, and academic focus.",
  },
  centralContacts: {
    admissionsPhone: "+91 93468 73728",
    landline: "0891-2554555",
    academicPhone: "+91 93815 40655",
    residentialHelp: "+91 93904 53898",
    whatsappNumber: "919346873728",
    generalEmail: "info@srigayatri.com",
    admissionsEmail: "admissions@srigayatri.com",
    headOfficeAddress:
      "Door No. 9-17-9, Amarnagar, CBM Compound, Asilmetta, Visakhapatnam, Andhra Pradesh - 530003",
    officeHours: "Monday to Saturday: 8:00 AM - 6:00 PM | Sunday: 9:00 AM - 1:00 PM",
  },
};

export const BRANCHES_DATA: BranchInfo[] = [
  {
    id: "asilmetta",
    name: "Asilmetta Central Campus (Flagship)",
    shortName: "Asilmetta",
    tagline: "Central Academic Hub & Proven Board Results",
    location: "Asilmetta, Visakhapatnam",
    address: "Door No. 9-17-9, Amarnagar, CBM Compound, Asilmetta, Visakhapatnam - 530003",
    landmark: "Near Siripuram Junction & Sampath Vinayaka Temple",
    phone: "+91 93468 73728",
    altPhone: "0891-2554555",
    email: "vspasl@srigayatri.com",
    established: "1999",
    students: "650+",
    type: "Day & Semi-Residential",
    courses: ["MPC (IIT-JEE / EAPCET)", "BiPC (NEET)", "MEC (CA Foundation)", "CEC (Civil Services)"],
    image: asilmettaCampus,
    facilities: [
      "AC Smart Lecture Halls",
      "Full Physics, Chemistry & Biology Labs",
      "Reference Library with 2,500+ Volumes",
      "Hygienic Cafeteria with RO Water",
      "Dedicated Doubt-Clearing Cell",
    ],
    timings: "8:00 AM - 6:00 PM",
    highlights: [
      "Flagship center with 25+ years of academic heritage",
      "Consistent IPE 990+ district toppers year after year",
      "Walking distance from RTC Complex and Railway Station",
      "Specialized CA Foundation coaching for MEC/CEC streams",
    ],
    mapsLink: "https://maps.google.com/?q=Sri+Gayatri+Junior+College+Asilmetta+Visakhapatnam",
    inCharge: {
      name: "Sri P. Srinivasa Rao",
      designation: "Principal & Academic Dean",
      directPhone: "+91 93468 73728",
    },
  },
  {
    id: "gajuwaka",
    name: "Gajuwaka Industrial Corridor Campus",
    shortName: "Gajuwaka",
    tagline: "Empowering Students Across South Vizag",
    location: "Old Gajuwaka, Visakhapatnam",
    address: "Chaitanya Nagar, Old Gajuwaka, Visakhapatnam - 530026",
    landmark: "Opposite High School Road, Near Gajuwaka Main Junction",
    phone: "+91 99632 65121",
    altPhone: "+91 93468 73728",
    email: "vspgwk@srigayatri.com",
    established: "2015",
    students: "520+",
    type: "Day Scholar",
    courses: ["MPC (IIT-JEE / EAPCET)", "BiPC (NEET)", "MEC", "CEC"],
    image: gajuwakaCampus,
    facilities: [
      "Science Laboratories",
      "Digital Computer Center",
      "Safe Student Parking Area",
      "Medical & First-Aid Center",
      "Parent Consultation Lounge",
    ],
    timings: "8:00 AM - 5:30 PM",
    highlights: [
      "Strategic location connecting Steel Plant, Scindia, and Kurmannapalem",
      "Dedicated bus pickup covering Duvvada, Vadlapudi, and Anakapalle",
      "Senior faculty team with 10+ years tenure",
      "High selection rate in AP EAPCET Engineering & Pharmacy",
    ],
    mapsLink: "https://maps.google.com/?q=Sri+Gayatri+Junior+College+Gajuwaka+Visakhapatnam",
    inCharge: {
      name: "Sri K. Appa Rao",
      designation: "Vice Principal & In-Charge",
      directPhone: "+91 99632 65121",
    },
  },
  {
    id: "madhurawada",
    name: "Madhurawada Residential Campus",
    shortName: "Madhurawada",
    tagline: "Premier Residential Coaching Center with Hostels",
    location: "Kommadi, Madhurawada, Visakhapatnam",
    address: "Plot No. 175, Vizianagar Teachers Colony, Kommadi, Madhurawada, Visakhapatnam - 530048",
    landmark: "Near Kommadi Junction & Gayatri Vidya Parishad Road",
    phone: "+91 93904 53898",
    altPhone: "+91 94917 18779",
    email: "vspmwd@srigayatri.com",
    established: "2020",
    students: "480+",
    type: "Day & Residential",
    courses: ["MPC (Super 60 IIT-JEE)", "BiPC (Intensive NEET)", "MEC"],
    image: madhurawadaCampus,
    facilities: [
      "Separate AC Hostels for Boys & Girls",
      "24/7 CCTV & Resident Warden Care",
      "Nutritious South Indian Mess",
      "Night Supervised Study Halls (8:00 PM - 10:30 PM)",
      "Outdoor Sports Court & Fitness Area",
    ],
    timings: "8:00 AM - 9:00 PM (Hostel: 24/7)",
    highlights: [
      "Distraction-free environment adjacent to the Vizag IT Corridor",
      "Super-60 Residential Batch with national-level entrance faculty",
      "Daily doctor visits and on-campus health monitoring",
      "Strict zero-smartphone policy during study sessions",
    ],
    mapsLink: "https://maps.google.com/?q=Sri+Gayatri+Junior+College+Madhurawada+Visakhapatnam",
    inCharge: {
      name: "Sri M. Rama Krishna",
      designation: "Residential Campus Director",
      directPhone: "+91 93904 53898",
    },
  },
  {
    id: "nad",
    name: "NAD Junction Central Gateway Campus",
    shortName: "NAD Junction",
    tagline: "Accessible Academic Hub with Commerce Specialization",
    location: "NAD Junction, Visakhapatnam",
    address: "Door No. 58-21/49/2, Seetharamaraju Nagar, Butchirajupalem, NAD, Visakhapatnam - 530016",
    landmark: "Near NAD Flyover & Simhachalam Road Junction",
    phone: "+91 93927 49394",
    altPhone: "+91 93468 73728",
    email: "vspnad@srigayatri.com",
    established: "2017",
    students: "450+",
    type: "Day Scholar",
    courses: ["MPC", "BiPC", "MEC (CA-Foundation Track)", "CEC (Civil Services Track)"],
    image: nadCampus,
    facilities: [
      "Audio-Visual Classrooms",
      "Specialized Commerce & Accounts Wing",
      "Quiet Self-Study Hall",
      "Seminar & Conference Hall",
    ],
    timings: "8:00 AM - 5:30 PM",
    highlights: [
      "Outstanding track record for MEC & CEC district toppers",
      "High pass rate in ICAI CA Foundation first attempts",
      "Direct transit from Pendurthi, Gopalapatnam, and Simhachalam",
      "Weekly OMR mock tests and individual error review",
    ],
    mapsLink: "https://maps.google.com/?q=Sri+Gayatri+Junior+College+NAD+Junction+Visakhapatnam",
    inCharge: {
      name: "Sri G. V. Subrahmanyam",
      designation: "Dean - Commerce & Humanities",
      directPhone: "+91 93927 49394",
    },
  },
  {
    id: "venkateswara",
    name: "Sri Venkateswara Campus (Tallavalasa)",
    shortName: "Sri Venkateswara Campus",
    tagline: "Eco-Friendly Sister Campus with Expansive Sports Grounds",
    location: "Tallavalasa, Bheemunipatnam Mandal, Visakhapatnam",
    address: "Door No. SYNO-155/1B G Tallavalasa, Bheemunipatnam Mandal, Visakhapatnam - 531162",
    landmark: "NH-16 Highway, Bheemili Bypass Road",
    phone: "+91 93815 40655",
    altPhone: "+91 93468 73728",
    email: "info@srivenkateswarajc.edu.in",
    established: "2024",
    students: "350+",
    type: "Day & Residential",
    courses: ["MPC (Integrated JEE/EAPCET)", "BiPC (Medical Wing)", "MEC", "CEC"],
    image: venkateswaraCampus,
    facilities: [
      "Green Campus Spread Over Multi-Acre Grounds",
      "Cricket Ground & Volleyball Courts",
      "Smart Interactive Digital Classroom Panels",
      "Modern Science & Computer Labs",
      "Spacious Dining Complex & Residential Quarters",
    ],
    timings: "8:00 AM - 8:30 PM",
    highlights: [
      "Calm, pollution-free natural setting ideal for high-focus academics",
      "Balanced daily routine combining rigorous study with physical fitness",
      "Air-conditioned college buses connecting Vizag city and Vizianagaram",
      "Dedicated residential mentors for holistic student guidance",
    ],
    isSisterCompany: true,
    mapsLink: "https://maps.google.com/?q=Tallavalasa+Bheemunipatnam+Visakhapatnam",
    inCharge: {
      name: "Sri D. Satyanarayana",
      designation: "Campus Director",
      directPhone: "+91 93815 40655",
    },
  },
];

export const COURSES_DATA: CourseInfo[] = [
  {
    id: "mpc",
    name: "MPC",
    fullName: "Mathematics, Physics, Chemistry",
    tagline: "Gateway to IITs, NITs, BITS, and Top Engineering Institutions",
    duration: "2 Academic Years (Intermediate 1st & 2nd Year)",
    description:
      "A rigorous, scientifically structured 2-year program combining the official BIEAP board curriculum with synchronized preparation for IIT-JEE Main & Advanced, AP EAPCET, and BITSAT. Emphasizes conceptual depth and speed-accuracy problem solving.",
    integratedCoaching: ["IIT-JEE Main & Advanced", "AP EAPCET (Engineering)", "BITSAT", "NDA & Technical Defense"],
    targetExams: ["BIEAP Board (IPE - 1000 Marks)", "JEE Main (NTA)", "JEE Advanced (IITs)", "AP EAPCET (State Rank)"],
    subjects: [
      { name: "Mathematics (Paper 1A, 1B, 2A, 2B)", focus: "Calculus, Coordinate Geometry, Vectors, Algebra, Probability" },
      { name: "Physics (Theory & Practical)", focus: "Mechanics, Thermodynamics, Optics, Electromagnetism, Modern Physics" },
      { name: "Chemistry (Theory & Practical)", focus: "Physical, Organic & Inorganic Chemistry with Reaction Mechanisms" },
      { name: "General English & Second Language", focus: "Language proficiency, Grammar, and Board Scoring Excellence" },
    ],
    weeklyHours: {
      lectures: "28 Hours Concept Teaching",
      practicals: "6 Hours Laboratory Work",
      studyHours: "16 Hours Supervised Daily Practice",
    },
    careerPaths: [
      "B.Tech in Computer Science / AI / Electronics (IITs, NITs)",
      "Aerospace, Mechanical & Chemical Engineering",
      "Data Science, Computing & Robotics",
      "Indian Armed Forces (Technical Entry / NDA)",
      "Pure Mathematics & Theoretical Physics Research",
    ],
    highlights: [
      "Daily Practice Papers (DPP) containing 30 graded entrance questions",
      "Weekly OMR Grand Tests aligned to official NTA JEE pattern",
      "Formula revision clinics and dedicated doubt-clearing sessions",
      "100% hands-on laboratory practicals ensuring full 30/30 marks",
    ],
    image: scienceLabImage,
  },
  {
    id: "bipc",
    name: "BiPC",
    fullName: "Biology, Physics, Chemistry",
    tagline: "Direct Pathway to MBBS, BDS, AIIMS, and Allied Health Sciences",
    duration: "2 Academic Years (Intermediate 1st & 2nd Year)",
    description:
      "Engineered for future doctors and life-science researchers. Integrates BIEAP board requirements with thorough NCERT-based NEET-UG training, specimen-based biological practicals, and speed-optimized problem practice.",
    integratedCoaching: ["NEET-UG (Medical & Dental)", "AP EAPCET (Agriculture & Pharma)", "ICAR All India", "AIIMS Nursing"],
    targetExams: ["BIEAP Board (IPE - 1000 Marks)", "NEET-UG (NTA - 720 Marks)", "AP EAPCET (Agri/Pharma)"],
    subjects: [
      { name: "Botany (Theory & Practical)", focus: "Plant Physiology, Morphology, Genetics, Cell Biology & Ecology" },
      { name: "Zoology (Theory & Practical)", focus: "Human Anatomy, Animal Kingdom, Evolution, Immunology, Biotechnology" },
      { name: "Physics for Medical Entrances", focus: "Formula application, Optics, Mechanics, Numerical Problem Solving" },
      { name: "Chemistry (Physical, Organic, Inorganic)", focus: "Biochemical pathways, Organic reactions, Periodic trends" },
    ],
    weeklyHours: {
      lectures: "30 Hours Concept Sessions",
      practicals: "8 Hours Specimen & Chemical Labs",
      studyHours: "16 Hours Daily Problem Sessions",
    },
    careerPaths: [
      "MBBS & BDS (Government & Premier Medical Colleges)",
      "B.V.Sc (Veterinary Sciences & Animal Husbandry)",
      "Pharm.D & B.Pharmacy",
      "Biotechnology, Genetics & Clinical Microbiology",
      "Allied Health Sciences & Hospital Administration",
    ],
    highlights: [
      "Line-by-line NCERT decoding and concept mapping for NEET Biology",
      "Physics problem-solving workshops specifically tailored for medical aspirants",
      "Weekly timed 200-question mock tests reflecting NTA negative marking",
      "Regular mentorship sessions with practicing doctors and alumni",
    ],
    image: bipcImage,
  },
  {
    id: "mec",
    name: "MEC",
    fullName: "Mathematics, Economics, Commerce",
    tagline: "Premier Foundation for Chartered Accountancy & Management",
    duration: "2 Academic Years (Intermediate 1st & 2nd Year)",
    description:
      "A strategic stream designed for students aspiring for Chartered Accountancy (ICAI CA), corporate finance, banking, or entry into IIMs via the 5-Year Integrated Program in Management (IPMAT).",
    integratedCoaching: ["CA Foundation (ICAI)", "CMA Foundation", "IPMAT (IIM Indore & Rohtak)", "CUET (Central Universities)"],
    targetExams: ["BIEAP Board (IPE - 1000 Marks)", "CA Foundation (ICAI)", "CMA Foundation", "CUET-UG"],
    subjects: [
      { name: "Commerce & Accountancy", focus: "Financial Accounting, Ledger, Final Accounts, Partnership & Company Law" },
      { name: "Economics", focus: "Macro & Micro Economics, Banking, AP State & Indian Economy" },
      { name: "Commerce Mathematics", focus: "Commercial Math, Calculus, Matrices, Financial Statistics" },
      { name: "English & Second Language", focus: "Business English, Written Communication, Board Examination Scoring" },
    ],
    weeklyHours: {
      lectures: "26 Hours Lecture Delivery",
      practicals: "4 Hours Computerized Accounts & Tally",
      studyHours: "14 Hours Guided Problem Practice",
    },
    careerPaths: [
      "Chartered Accountant (CA - ICAI) & Cost Management Accountant (CMA)",
      "Integrated BBA-MBA from IIM Indore, Rohtak, Ranchi (via IPMAT)",
      "Investment Banking, FinTech & Corporate Auditing",
      "B.Com (Hons) in Premier Colleges (SRCC, Loyola, St. Xavier's)",
      "Reserve Bank of India (RBI) & Civil Economic Services",
    ],
    highlights: [
      "CA Foundation modules taught concurrently by practicing CAs and senior faculty",
      "Practical balance sheet analysis and case studies",
      "Consistent track record of 990+/1000 in IPE Board examinations",
      "Quantitative mathematics coaching for IPMAT and CUET entrances",
    ],
    image: computerLabImage,
  },
  {
    id: "cec",
    name: "CEC",
    fullName: "Civics, Economics, Commerce",
    tagline: "Launchpad for Law (CLAT), Civil Services (UPSC), and Public Administration",
    duration: "2 Academic Years (Intermediate 1st & 2nd Year)",
    description:
      "Tailor-made for humanities, legal, and public service aspirants. Builds a solid foundation in the Indian Constitution, international relations, socio-economic analysis, and legal aptitude.",
    integratedCoaching: ["CLAT & AILET (National Law Universities)", "Civil Services (UPSC / APPSC Foundation)", "CUET-UG"],
    targetExams: ["BIEAP Board (IPE - 1000 Marks)", "CLAT (Common Law Admission Test)", "CUET-UG (Law & Arts)"],
    subjects: [
      { name: "Civics & Political Science", focus: "Indian Constitution, Governance, Judiciary, International Relations" },
      { name: "Economics", focus: "Developmental Economics, Public Finance, Monetary Policies" },
      { name: "Commerce", focus: "Business Organization, Trade, Banking, Entrepreneurship" },
      { name: "English & Second Language", focus: "Critical Reading, Analytical Writing, Vocabulary & Comprehension" },
    ],
    weeklyHours: {
      lectures: "24 Hours Theory & Debate",
      practicals: "4 Hours Current Affairs & Mock Parliament",
      studyHours: "14 Hours Guided Answer Writing",
    },
    careerPaths: [
      "BA LLB (Hons) at National Law Universities (NLSIU, NALSAR)",
      "Civil Services (IAS, IPS, IFS) via UPSC / APPSC Group-1",
      "Journalism, Media & Public Communication",
      "Public Policy, Governance & Think Tanks",
      "Corporate Law & Legal Consultancy",
    ],
    highlights: [
      "Weekly current affairs analytical circles and editorial decoding",
      "Logical reasoning and legal aptitude workshops for CLAT aspirants",
      "Answer-writing practice ensuring high marks in subjective board exams",
      "Guest interactions with practicing advocates and civil servants",
    ],
    image: cecImage,
  },
];

export const TOPPERS_DATA: TopperInfo[] = [
  {
    id: "top-1",
    name: "K. Sai Praneeth",
    score: "992 / 1000",
    exam: "BIEAP IPE Board (MPC)",
    stream: "MPC Integrated Track",
    branch: "Asilmetta Campus",
    year: "2025",
    rankBadge: "State Top 10 Ranker",
    quote:
      "Our lecturers at Asilmetta sat beside me during afternoon study hours and explained every difficult numerical until I was completely confident. Sri Gayatri gave me the foundation to score 992 and qualify for JEE Advanced without external tuitions.",
  },
  {
    id: "top-2",
    name: "M. Sneha Latha",
    score: "678 / 720",
    exam: "NEET-UG (AMC MBBS Allotted)",
    stream: "BiPC Super-60 Residential",
    branch: "Madhurawada Campus",
    year: "2025",
    rankBadge: "Andhra Medical College MBBS",
    quote:
      "The zero-smartphone policy and peaceful residential environment at Madhurawada kept me focused throughout two years. Securing a government MBBS seat at Andhra Medical College was a dream come true.",
  },
  {
    id: "top-3",
    name: "P. Rithvik Varma",
    score: "99.42 %ile",
    exam: "JEE Main (Engineering)",
    stream: "MPC Day Intensive",
    branch: "Asilmetta Campus",
    year: "2025",
    rankBadge: "NIT Warangal CSE Allotted",
    quote:
      "Everything from BIEAP board theory to JEE speed shortcuts was covered inside college hours before 5 PM. I saved countless hours of travel fatigue, which kept me mentally fresh for daily self-study.",
  },
  {
    id: "top-4",
    name: "B. Keerthana",
    score: "988 / 1000",
    exam: "BIEAP IPE Board (MEC)",
    stream: "MEC - CA Foundation Track",
    branch: "NAD Junction Campus",
    year: "2025",
    rankBadge: "District 1st Ranker",
    quote:
      "Our commerce faculty at NAD taught us with exceptional care. They didn't just teach for board marks; they built the analytical confidence that helped me clear CA Foundation on my very first attempt.",
  },
  {
    id: "top-5",
    name: "V. Harish Kumar",
    score: "AIR 412",
    exam: "CLAT (Law Entrance)",
    stream: "CEC Civil Services Track",
    branch: "Gajuwaka Campus",
    year: "2025",
    rankBadge: "NALSAR Hyderabad Allotted",
    quote:
      "The daily newspaper reading discussions and logical reasoning sessions arranged by our lecturers in Gajuwaka built the reading stamina and analytical clarity I needed to crack CLAT.",
  },
  {
    id: "top-6",
    name: "S. Tejaswini",
    score: "990 / 1000",
    exam: "BIEAP IPE Board (BiPC)",
    stream: "BiPC Residential Wing",
    branch: "Sri Venkateswara Campus",
    year: "2025",
    rankBadge: "100% in Biology & Chem",
    quote:
      "The green campus, morning fresh air, and calm atmosphere at Tallavalasa made studying enjoyable. Evening doubt clarification sessions cleared every difficult question before bed.",
  },
];

export const FACILITIES_DATA: FacilityInfo[] = [
  {
    id: "fac-1",
    title: "Well-Equipped Science Laboratories",
    category: "Academic Infrastructure",
    description:
      "Fully equipped, modern Physics, Chemistry, Botany, and Zoology laboratories meeting BIEAP and national standards. Every student conducts individual experiments under faculty supervision.",
    specs: ["Individual experiment workstations", "Precision spectrometers & digital balances", "Safe reagents & botanical specimen collections"],
    image: scienceLabImage,
  },
  {
    id: "fac-2",
    title: "Digital & Air-Cooled Classrooms",
    category: "Learning Environment",
    description:
      "Ergonomically designed lecture halls equipped with interactive smart displays, acoustic treatment, and comfortable seating for sustained concentration.",
    specs: ["Interactive digital display boards", "Optimized natural ventilation & cooling", "Balanced student-to-teacher ratio"],
    image: classroomImage,
  },
  {
    id: "fac-3",
    title: "Reference Library & Reading Halls",
    category: "Learning Resources",
    description:
      "Over 4,000 reference volumes covering standard textbooks, entrance archives, CA study modules, and national competitive exam journals.",
    specs: ["Silent self-study reading zone", "Computer terminals with internet access", "Past 15 years solved paper archives"],
    image: libraryImage,
  },
  {
    id: "fac-4",
    title: "Hygienic Mess & Pure Drinking Water",
    category: "Student Welfare",
    description:
      "Nutritious, steam-cooked South Indian vegetarian meals prepared under strict hygienic supervision. Multi-stage RO purified drinking water across all campuses.",
    specs: ["Balanced, nutritious daily menus", "Sanitized kitchen and dining facilities", "Continuous RO water testing"],
    image: messImage,
  },
  {
    id: "fac-5",
    title: "GPS-Tracked Transport Fleet",
    category: "Connectivity",
    description:
      "A dedicated fleet of college buses connecting all major neighborhoods in Visakhapatnam, from Anakapalle, Gajuwaka, Simhachalam, Pendurthi, to Bheemili.",
    specs: ["Clean safety records & trained drivers", "Live GPS tracking and speed governors", "Female attendants on girl-student commuter routes"],
    image: studentsImage,
  },
  {
    id: "fac-6",
    title: "Sports Grounds & Physical Wellness",
    category: "Physical Fitness",
    description:
      "Outdoor sports grounds at our Madhurawada and Tallavalasa campuses for cricket, volleyball, badminton, and yoga to keep students refreshed and stress-free.",
    specs: ["Volleyball and badminton courts", "Cricket practice nets", "Morning yoga sessions for hostel residents"],
    image: sportsImage,
  },
];

export const FAQS_DATA = [
  {
    q: "How does Sri Gayatri balance BIEAP Board Exams with IIT-JEE and NEET coaching?",
    a: "We follow an integrated, synchronized curriculum. Morning hours are dedicated to BIEAP board concepts and textbook derivation mastery. Afternoon and evening study hours focus on entrance application problems, numerical solving, and competitive mock exams. This completely eliminates the need for external tuitions and protects students from burnout.",
  },
  {
    q: "What hostel facilities are provided for residential students?",
    a: "We maintain separate, secure hostel blocks for boys and girls with 24/7 CCTV surveillance, resident wardens, and on-call medical doctors. Rooms are spacious and well-ventilated. Supervised study halls operate from 8:00 PM to 10:30 PM under resident faculty guidance.",
  },
  {
    q: "What is the college mobile phone and gadget policy?",
    a: "Sri Gayatri maintains a strict zero-smartphone policy during college hours and inside classrooms. For residential scholars, personal smartphones are collected by wardens and students are given designated call hours on parent helpline numbers to ensure distraction-free focus.",
  },
  {
    q: "Are merit scholarships available for high-scoring 10th class students?",
    a: "Yes. Students scoring 9.8+ GPA / 95%+ marks in 10th SSC, CBSE, or ICSE examinations, or high performers in the Sri Gayatri Talent Scholarship Exam (SGTSE), are eligible for tuition fee waivers ranging up to 100%.",
  },
  {
    q: "How are parents informed about attendance and academic progress?",
    a: "Attendance is recorded digitally every morning, and parents receive immediate SMS notifications in case of absence. Weekly mock test marks, ranks, and subject error analyses are sent to parents via SMS and WhatsApp every Monday.",
  },
  {
    q: "What documents are required for Intermediate admission?",
    a: "Students need: (1) Original 10th Marks Memo (SSC/CBSE/ICSE), (2) Transfer Certificate (TC) from the high school, (3) Conduct/Study Certificates, (4) Caste & Income Certificate (if applying for scholarships), and (5) 6 recent passport-size photographs.",
  },
];

export const FACULTY_TEAM: FacultyMember[] = [
  {
    id: "fac-naidu",
    name: "Mr. N.A. Naidu",
    designation: "Founder & Academic Director",
    department: "Senior Mathematics Dean",
    experience: "30+ Years",
    qualification: "M.Sc. (Mathematics), B.Ed.",
    message: "Mathematics is not about memorizing steps; it is about recognizing patterns. Once a student grasps the underlying logic, fear vanishes.",
  },
  {
    id: "fac-srinivas",
    name: "Dr. P. Srinivasa Rao",
    designation: "Principal & Head of Department",
    department: "Physics (JEE Advanced / IPE)",
    experience: "22 Years",
    qualification: "Ph.D. in Physics, Andhra University",
    message: "We break every complex numerical into fundamental principles. When derivations are crystal clear, physics becomes the highest scoring subject.",
  },
  {
    id: "fac-ramakrishna",
    name: "Sri M. Rama Krishna",
    designation: "Residential Campus Director",
    department: "Chemistry (NEET / IPE)",
    experience: "18 Years",
    qualification: "M.Sc. (Organic Chemistry)",
    message: "Chemical reaction mechanisms cannot be crammed overnight. Daily structured practice makes equations second nature.",
  },
  {
    id: "fac-sarada",
    name: "Smt. G. Sarada",
    designation: "Senior Faculty & NEET Mentor",
    department: "Botany & Zoology",
    experience: "16 Years",
    qualification: "M.Sc. (Life Sciences), B.Ed.",
    message: "NEET is 50% Biology. We read every line of NCERT together in class, highlighting traps and diagrammatic subtleties.",
  },
  {
    id: "fac-subrahmanyam",
    name: "Sri G. V. Subrahmanyam",
    designation: "Dean of Commerce & Humanities",
    department: "Accountancy & CA Foundation",
    experience: "20 Years",
    qualification: "M.Com., FCA (Inter)",
    message: "Commerce is the lifeblood of business. We train our MEC and CEC students using actual financial statements and case studies.",
  },
  {
    id: "fac-suresh",
    name: "Sri K. Suresh Kumar",
    designation: "Senior English Lecturer",
    department: "English & Communication",
    experience: "15 Years",
    qualification: "M.A. (English Literature)",
    message: "Clear English communication gives vernacular and rural-medium students the confidence to excel in national competitive exams.",
  },
];

export const FEE_ASSURANCES = [
  {
    title: "Transparent Fee Structure",
    desc: "No hidden charges, mid-year exam cess, or unannounced fees. All tuition and examination schedules are documented on day one.",
  },
  {
    title: "Complete Study Material Included",
    desc: "Comprehensive BIEAP textbook guides, laboratory manuals, formula handbooks, and 15-year entrance question banks are provided directly.",
  },
  {
    title: "Convenient 3-Installment Plan",
    desc: "To support middle-class families, tuition fees can be paid in three scheduled installments across the academic year.",
  },
  {
    title: "Merit Scholarships up to 100%",
    desc: "Students achieving 9.8+ GPA in 10th boards or top scores in our SGTSE talent test receive substantial tuition fee concessions.",
  },
];
