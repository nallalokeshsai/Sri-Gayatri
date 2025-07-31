import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Car,
  Bus,
  Building,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

import asilmettaCampus from "@/assets/asilmetta-campus.jpg";
import gajuwakaCampus from "@/assets/gajuwaka-campus.jpg";
import madhurawadaCampus from "@/assets/madhurawada-campus.jpg";
import nadCampus from "@/assets/nad-campus.jpg";
import venkateswaraCampus from "@/assets/venkateswara-campus.jpg";

const Branches = () => {
  const branches = [
    {
      id: "asilmetta",
      name: "Asilmetta Branch",
      location: "Asilmetta, Visakhapatnam",
      address: "Door No. 9-17-9, Amarnagar, CBM Compound, Asilmetta, Visakhapatnam - 530003",
      phone: "+91 93468 73728",
      email: "vspasl@srigayatri.com",
      established: "2012",
      students: "600+",
      courses: ["MPC", "BiPC", "MEC", "CEC"],
      image: asilmettaCampus,
      facilities: [
        "Well lit classrooms",
        "Physics & Chemistry labs",
        "Library with 1000+ books",
        "Cafeteria",
      ],
      timings: "8:00 AM - 5:00 PM",
      highlights: [
        "Our flagship campus",
        "Excellent board exam results",
        "Strong alumni network",
        "Modern infrastructure",
      ],
      mapsLink: "https://www.google.com/maps/place/Sri+Gayatri+Junior+College/@19.6922828,61.0418276,4z/data=!4m7!3m6!1s0x3a3943392ed94569:0x13017843807946a5!8m2!3d21.0680074!4d82.7525294!15sCihTcmkgR2F5YXRyaSBKdW5pb3IgQ29sbGVnZSBWaXNha2hhcGF0bmFtIgOIAQGSAQ5qdW5pb3JfY29sbGVnZaoBgAEKDS9nLzExYzN3djJtYnMQASoeIhpzcmkgZ2F5YXRyaSBqdW5pb3IgY29sbGVnZSgAMh8QASIb2Ogo_Doe6NVD0BPtwurTnOuMeD8uJBF8FMPgMiwQAiIoc3JpIGdheWF0cmkganVuaW9yIGNvbGxlZ2UgdmlzYWtoYXBhdG5hbeABAA!16s%2Fg%2F11h28jntxv?entry=tts&g_ep=EgoyMDI1MDcyOC4wIPu8ASoASAFQAw%3D%3D&skid=d608011e-4e7a-4a87-b69d-68785c1047fd",
    },
    {
      id: "gajuwaka",
      name: "Gajuwaka Branch",
      location: "Gajuwaka, Visakhapatnam",
      address: "Chaitanya Nagar, Old Gajuwaka, Visakhapatnam - 530026",
      phone: "+91 99632 65121",
      email: "vspgwk@srigayatri.com",
      established: "2015",
      students: "500+",
      courses: ["MPC", "BiPC", "MEC", "CEC"],
      image: gajuwakaCampus,
      facilities: [
        "Well-equipped laboratories",
        "Digital library",
        "Student parking",
        "Medical room",
      ],
      timings: "8:00 AM - 5:00 PM",
      highlights: [
        "Industrial area location",
        "Focus on technical courses",
        "Industry connections",
        "Practical learning approach",
      ],
      mapsLink: "https://www.google.com/maps/place/Sri+Gayatri+Junior+College/@19.6922828,61.0418276,4z/data=!4m7!3m6!1s0x3a39690f9aaaaa9f:0x7bb0f98f1f4fcd83!8m2!3d17.6820332!4d83.2016888!15sCihTcmkgR2F5YXRyaSBKdW5pb3IgQ29sbGVnZSBWaXNha2hhcGF0bmFtIgOIAQGSAQdjb2xsZWdlqgGAAQoNL2cvMTFjM3d2Mm1icxABKh4iGnNyaSBnYXlhdHJpIGp1bmlvciBjb2xsZWdlKAAyHxABIhvY6Cj8Oh7o1UPQE-3C6tOc64x4Py4kEXwUw-AyLBACIihzcmkgZ2F5YXRyaSBqdW5pb3IgY29sbGVnZSB2aXNha2hhcGF0bmFt4AEA!16s%2Fg%2F11bw6pkwgs?entry=tts&g_ep=EgoyMDI1MDcyOC4wIPu8ASoASAFQAw%3D%3D&skid=4b6973f8-eaad-44aa-bb4f-9538ff63d195",
    },
    {
      id: "madhurawada",
      name: "Madhurawada Branch",
      location: "Madhurawada, Visakhapatnam",
      address:
        "Plot No. 175, Vizianagar Teachers Colony, AP Housing Board Colony, Kommadi, Madhurawada, Visakhapatnam - 530048",
      phone: "+91 93904 53898",
      email: "vspmwd@srigayatri.com",
      established: "2020",
      students: "450+",
      courses: ["MPC", "BiPC"],
      image: madhurawadaCampus,
      facilities: [
        "Modern architecture",
        "Advanced science labs",
        "Sports ground",
        "Hostel facility",
      ],
      timings: "8:00 AM - 9:00 PM",
      highlights: [
        "Newest campus",
        "IT corridor location",
        "Modern facilities",
        "Tech-enabled learning",
      ],
      mapsLink: "https://www.google.com/maps/place/Sri+Gayatri+junior+college/@19.6922828,61.0418276,4z/data=!4m7!3m6!1s0x3a395bc68c5e7887:0x1b7d8da67f2e0dde!8m2!3d17.8281051!4d83.3482869!15sCihTcmkgR2F5YXRyaSBKdW5pb3IgQ29sbGVnZSBWaXNha2hhcGF0bmFtIgOIAQGSAQdjb2xsZWdlqgGAAQoNL2cvMTFjM3d2Mm1icxABKh4iGnNyaSBnYXlhdHJpIGp1bmlvciBjb2xsZWdlKAAyHxABIhvY6Cj8Oh7o1UPQE-3C6tOc64x4Py4kEXwUw-AyLBACIihzcmkgZ2F5YXRyaSBqdW5pb3IgY29sbGVnZSB2aXNha2hhcGF0bmFt4AEA!16s%2Fg%2F11rck2nkdf?entry=tts&g_ep=EgoyMDI1MDcyOC4wIPu8ASoASAFQAw%3D%3D&skid=8cbc5b42-6489-4a57-b9c8-425a9424f148",
    },
    {
      id: "nad",
      name: "NAD Branch",
      location: "NAD Junction, Visakhapatnam",
      address:
        "Door No. 58-21/49/2, Beside Amar Concept School, Seetharamaraju Nagar, Butchirajupalem, NAD, Visakhapatnam - 530016",
      phone: "+91 93927 49394",
      email: "nad@srigayatrijc.edu.in",
      established: "2017",
      students: "400+",
      courses: ["MPC", "BiPC", "MEC", "CEC"],
      image: nadCampus,
      facilities: [
        "Centrally located campus",
        "Reading hall",
        "Seminar hall",
        "Hostel facility nearby",
      ],
      timings: "8:00 AM - 5:00 PM",
      highlights: [
        "Central location",
        "Commerce specialization",
        "Easy accessibility",
        "Experienced faculty",
      ],
      mapsLink: "https://www.google.com/maps/place/Sri+Gayatri+Junior+College/@19.6922828,61.0418276,4z/data=!4m6!3m5!1s0x3a3967e05914f529:0x325e721efe73a1f4!8m2!3d17.7444256!4d83.2309419!16s%2Fg%2F11j00851cd?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: "venkateswara",
      name: "Sri Venkateswara Junior College",
      location: "Dwaraka Nagar, Visakhapatnam",
      address: "Door No. SYNO-155/1B G Tallavalasa, Bheemunipatnam Mandal, Visakhapatnam - 531162",
      phone: "+91 93815 40655",
      email: "info@srivenkateswarajc.edu.in",
      established: "2025",
      students: "300+",
      courses: ["MPC", "BiPC", "MEC", "CEC"],
      image: venkateswaraCampus,
      facilities: [
        "State-of-the-art classrooms",
        "Advanced science laboratories",
        "Digital learning center",
        "Library with 1000+ books",
        "Sports complex",
        "Cafeteria",
      ],
      timings: "8:00 AM - 9:00 PM",
      highlights: [
        "Sister institution to Sri Gayatri",
        "Focus on holistic education",
        "Strong academic performance",
        "Modern campus facilities",
      ],
      isSisterCompany: true,
      mapsLink: "https://www.google.com/maps/place/Sri+Gayatri+Junior+College/@19.6922828,61.0418276,4z/data=!4m7!3m6!1s0x3a3943392ed94569:0x13017843807946a5!8m2!3d21.0680074!4d82.7525294!15sCihTcmkgR2F5YXRyaSBKdW5pb3IgQ29sbGVnZSBWaXNha2hhcGF0bmFtIgOIAQGSAQ5qdW5pb3JfY29sbGVnZaoBgAEKDS9nLzExYzN3djJtYnMQASoeIhpzcmkgZ2F5YXRyaSBqdW5pb3IgY29sbGVnZSgAMh8QASIb2Ogo_Doe6NVD0BPtwurTnOuMeD8uJBF8FMPgMiwQAiIoc3JpIGdheWF0cmkganVuaW9yIGNvbGxlZ2UgdmlzYWtoYXBhdG5hbeABAA!16s%2Fg%2F11h28jntxv?entry=tts&g_ep=EgoyMDI1MDcyOC4wIPu8ASoASAFQAw%3D%3D&skid=d608011e-4e7a-4a87-b69d-68785c1047fd",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Branches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four strategically located Sri Gayatri Junior College campuses across Visakhapatnam, 
            alongside our sister institution, Sri Venkateswara Junior College, 
            bringing quality education closer to your home.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">5</div>
              <div className="text-muted-foreground">Branches</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">2500+</div>
              <div className="text-muted-foreground">Students</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Course Streams</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
        </div>

        {/* Branch Cards */}
        <div className="space-y-12">
          {branches.map((branch) => (
            <Card key={branch.id} className="shadow-card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={branch.image} alt={`${branch.name} campus`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-3xl font-bold text-white mb-2">{branch.name}</h2>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="h-4 w-4" />
                    <span>{branch.location}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="secondary">Est. {branch.established}</Badge>
                  {branch.isSisterCompany && (
                    <Badge variant="outline" className="bg-white/90 text-primary">
                      Sister Institution
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{branch.name}</h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{branch.location}</span>
                      </div>
                      {branch.isSisterCompany && (
                        <p className="text-sm text-primary font-semibold mb-4">
                          Sister Institution to Sri Gayatri Junior College
                        </p>
                      )}
                    </div>
                    <Badge variant="outline">Est. {branch.established}</Badge>
                  </div>

                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h3 className="font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${branch.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {branch.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${branch.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {branch.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.timings}</span>
                        </div>
                      </div>
                    </div>

                    {/* Courses Offered */}
                    <div>
                      <h3 className="font-semibold mb-3">Courses Offered</h3>
                      <div className="flex flex-wrap gap-2">
                        {branch.courses.map((course, idx) => (
                          <Badge key={idx} variant="secondary">{course}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="font-semibold mb-3">Key Highlights</h3>
                      <ul className="space-y-1">
                        {branch.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Facilities & Stats */}
                <div className="bg-accent p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{branch.students}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">{branch.courses.length}</div>
                        <div className="text-xs text-muted-foreground">Courses</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Facilities</h3>
                      <ul className="space-y-2">
                        {branch.facilities.map((facility, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            <span className="text-muted-foreground">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full" asChild>
                        <Link to="/contact">Contact This Branch</Link>
                      </Button>
                      <Button variant="outline" className="w-full border-primary-foreground text-black hover:bg-gray-200 hover:text-black" asChild>
                        <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="shadow-card bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Visit Our Nearest Branch</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience our facilities and meet our faculty members in person
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-gray-200 hover:text-black" asChild>
                  <a href="https://www.google.com/maps/place/Sri+Gayatri+Junior+College/@19.6922828,61.0418276,4z/data=!4m7!3m6!1s0x3a3943392ed94569:0x13017843807946a5!8m2!3d21.0680074!4d82.7525294!15sCihTcmkgR2F5YXRyaSBKdW5pb3IgQ29sbGVnZSBWaXNha2hhcGF0bmFtIgOIAQGSAQ5qdW5pb3JfY29sbGVnZaoBgAEKDS9nLzExYzN3djJtYnMQASoeIhpzcmkgZ2F5YXRyaSBqdW5pb3IgY29sbGVnZSgAMh8QASIb2Ogo_Doe6NVD0BPtwurTnOuMeD8uJBF8FMPgMiwQAiIoc3JpIGdheWF0cmkganVuaW9yIGNvbGxlZ2UgdmlzYWtoYXBhdG5hbeABAA!16s%2Fg%2F11h28jntxv?entry=tts&g_ep=EgoyMDI1MDcyOC4wIPu8ASoASAFQAw%3D%3D&skid=d608011e-4e7a-4a87-b69d-68785c1047fd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Branches;