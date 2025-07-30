import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Users,
  School,
  Info
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 891 234 5678",
        "Admissions: +91 891 234 5679",
        "Academic: +91 891 234 5680"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@srigayatrijc.edu.in",
        "Admissions: admissions@srigayatrijc.edu.in",
        "Principal: principal@srigayatrijc.edu.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 8:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Door No. 12-34-56, Main Road",
        "Asilmetta, Visakhapatnam - 530003",
        "Andhra Pradesh, India"
      ]
    }
  ];

  const inquiryTypes = [
    { icon: School, title: "Admissions", desc: "Course information and application process" },
    { icon: Users, title: "Academic", desc: "Faculty, curriculum and academic queries" },
    { icon: Info, title: "General", desc: "Facilities, infrastructure and general information" },
    { icon: MessageSquare, title: "Feedback", desc: "Suggestions and feedback about our services" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for admissions, academic information, or any queries. 
            We're here to help you start your educational journey.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Course of Interest</Label>
                  <select 
                    id="course" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a course</option>
                    <option value="mpc">MPC (Mathematics, Physics, Chemistry)</option>
                    <option value="bipc">BiPC (Biology, Physics, Chemistry)</option>
                    <option value="mec">MEC (Mathematics, Economics, Commerce)</option>
                    <option value="cec">CEC (Civics, Economics, Commerce)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branch">Preferred Branch</Label>
                  <select 
                    id="branch" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a branch</option>
                    <option value="asilmetta">Asilmetta</option>
                    <option value="gajuwaka">Gajuwaka</option>
                    <option value="madhurawada">Madhurawada</option>
                    <option value="nad">NAD Junction</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <select 
                    id="inquiryType" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="admissions">Admissions</option>
                    <option value="academic">Academic</option>
                    <option value="general">General Information</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your inquiry in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Inquiry Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inquiryTypes.map((type, index) => (
              <Card key={index} className="text-center shadow-card group hover:shadow-hero transition-shadow">
                <CardContent className="p-6">
                  <type.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Branch Quick Contact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Quick Contact - All Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Asilmetta", phone: "+91 891 234 5678", email: "asilmetta@srigayatrijc.edu.in" },
              { name: "Gajuwaka", phone: "+91 891 345 6789", email: "gajuwaka@srigayatrijc.edu.in" },
              { name: "Madhurawada", phone: "+91 891 456 7890", email: "madhurawada@srigayatrijc.edu.in" },
              { name: "NAD Junction", phone: "+91 891 567 8901", email: "nad@srigayatrijc.edu.in" }
            ].map((branch, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{branch.name} Branch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{branch.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What are the admission requirements?",
                a: "Students must have completed SSC (10th grade) with minimum required percentage as per state board guidelines."
              },
              {
                q: "When do admissions open?",
                a: "Admissions typically open in May after SSC results are announced and continue until seats are filled."
              },
              {
                q: "Do you provide transportation?",
                a: "Yes, we provide bus transportation covering major areas of Visakhapatnam for all our branches."
              },
              {
                q: "What are the fee structures?",
                a: "Fee structures vary by course and branch. Please contact our admissions office for detailed fee information."
              },
              {
                q: "Do you offer scholarships?",
                a: "Yes, we offer merit-based scholarships and financial assistance for eligible students."
              },
              {
                q: "What is the faculty-to-student ratio?",
                a: "We maintain an optimal faculty-to-student ratio to ensure personalized attention and quality education."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="shadow-card bg-destructive text-destructive-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Emergency Contact</h2>
              <p className="text-lg mb-6 opacity-90">
                For urgent matters or emergencies, please contact our 24/7 helpline
              </p>
              <div className="text-xl font-semibold">
                📞 +91 891 999 9999
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;