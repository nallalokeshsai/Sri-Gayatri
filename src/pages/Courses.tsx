import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Microscope, 
  TrendingUp, 
  Scale, 
  BookOpen,
  Clock,
  Users,
  Target
} from "lucide-react";
import scienceLabImage from "@/assets/science-lab.jpg";
import computerLabImage from "@/assets/computer-lab.jpg";
import bipcImage from "@/assets/doctors.jpg";
import cecImage from "@/assets/cec.jpg";


const Courses = () => {
  const courses = [
    {
      id: "mpc",
      name: "MPC",
      fullName: "Mathematics, Physics, Chemistry",
      icon: Calculator,
      color: "bg-primary",
      subjects: ["Mathematics", "Physics", "Chemistry", "English"],
      duration: "2 Years",
      description: "Ideal for students aspiring for engineering and technology careers",
      careerPaths: ["Engineering", "Technology", "Research", "Data Science", "Architecture"],
      highlights: [
        "Advanced Mathematics concepts",
        "Comprehensive Physics practicals",
        "Modern Chemistry laboratory",
        "Engineering entrance preparation"
      ],
      image: scienceLabImage // Relevant for engineering (physics/chemistry lab)
    },
    {
      id: "bipc",
      name: "BiPC",
      fullName: "Biology, Physics, Chemistry",
      icon: Microscope,
      color: "bg-secondary",
      subjects: ["Biology", "Physics", "Chemistry", "English"],
      duration: "2 Years",
      description: "Perfect foundation for medical and life sciences careers",
      careerPaths: ["Medicine", "Dentistry", "Pharmacy", "Biotechnology", "Veterinary Science"],
      highlights: [
        "Comprehensive Biology curriculum",
        "Advanced laboratory facilities",
        "Medical entrance coaching",
        "Research-oriented approach"
      ],
      image: bipcImage // Relevant for medicine (biology/chemistry lab)
    },
    {
      id: "mec",
      name: "MEC",
      fullName: "Mathematics, Economics, Commerce",
      icon: TrendingUp,
      color: "bg-primary",
      subjects: ["Mathematics", "Economics", "Commerce", "English"],
      duration: "2 Years",
      description: "Gateway to business, economics, and analytical careers",
      careerPaths: ["Business Administration", "Economics", "Chartered Accountancy", "Banking", "Finance"],
      highlights: [
        "Business Mathematics",
        "Economic theory and practice",
        "Commercial applications",
        "Entrepreneurship development"
      ],
      image: computerLabImage // Relevant for economics/commerce (business analytics)
    },
    {
      id: "cec",
      name: "CEC",
      fullName: "Civics, Economics, Commerce",
      icon: Scale,
      color: "bg-secondary",
      subjects: ["Civics", "Economics", "Commerce", "English"],
      duration: "2 Years",
      description: "Foundation for civil services and social sciences",
      careerPaths: ["Civil Services", "Law", "Journalism", "Social Work", "Public Administration"],
      highlights: [
        "Constitutional studies",
        "Public administration",
        "Social economics",
        "Current affairs focus"
      ],
      image: cecImage // Less relevant for civics; replace with a library or classroom image for civics/law
    }
  ];

  const commonFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Updated syllabus aligned with state board requirements"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced teachers with subject specialization"
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description: "Regular tests and entrance exam coaching"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning and afternoon batches available"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of intermediate programs designed to prepare you 
            for higher education and professional success.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {courses.map((course, index) => (
            <Card key={course.id} className="shadow-card overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4">
                  <div className={`${course.color} text-white p-3 rounded-lg`}>
                    <course.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-white">{course.name}</h3>
                  <p className="text-white/90">{course.fullName}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{course.duration}</Badge>
                  <Badge variant="outline">{course.subjects.length} Subjects</Badge>
                </div>
                
                <p className="text-muted-foreground mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary">{subject}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Course Highlights:</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Career Paths:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.careerPaths.map((career, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{career}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Makes Our Courses Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-20">
          <Card className="shadow-card bg-accent">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Admission Process</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Application", desc: "Submit online or offline application form" },
                  { step: "2", title: "Documents", desc: "Provide SSC marks memo and other certificates" },
                  { step: "3", title: "Counseling", desc: "Attend counseling session for course selection" },
                  { step: "4", title: "Enrollment", desc: "Complete fee payment and enrollment process" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card bg-primary text-primary-foreground">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Choose the right course for your future and join thousands of successful students
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary-foreground text-black hover:bg-gray-200 hover:text-black" 
                    asChild
                  >
                    <Link to="/branches">Visit a Branch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;