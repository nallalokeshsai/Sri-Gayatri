import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Users, MapPin, BookOpen, Award, Star } from "lucide-react";
import heroImage from "@/assets/venkateswara-campus.jpg";
import studentsImage from "@/assets/students-study.jpg";
import libraryImage from "@/assets/library-interior.jpg"
import scienceLabImage from "@/assets/science-lab.jpg"
import messImage from "@/assets/cafeteria.jpg"

const Home = () => {
  const stats = [
    { icon: Users, label: "Students", value: "2000+" },
    { icon: GraduationCap, label: "Faculty", value: "150+" },
    { icon: MapPin, label: "Branches", value: "4" },
    { icon: Award, label: "Years", value: "25+" },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "MPC, BiPC, MEC, and CEC streams with expert faculty",
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "4 convenient branches across Visakhapatnam",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Excellent track record in competitive examinations",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced and dedicated teaching professionals",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-gradient">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Sri Gayatri
            <br />
            <span className="text-secondary">Junior Colleges</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Nurturing Excellence in Intermediate Education across Visakhapatnam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-hero" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="secondary" className="shadow-hero" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Sri Gayatri Junior College
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Established with a vision to provide quality intermediate education, Sri Gayatri Junior College
                has been a beacon of academic excellence in Visakhapatnam for over two decades.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With four strategically located branches and comprehensive course offerings, we ensure
                that students receive the best preparation for their future academic and professional endeavors.
              </p>
              <Button asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={studentsImage}
                alt="Students studying"
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Sri Gayatri Junior College?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive intermediate education with modern facilities and experienced faculty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Courses</h2>
            <p className="text-lg text-muted-foreground">
              Choose from our diverse range of intermediate programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "MPC", full: "Maths, Physics, Chemistry", color: "bg-primary" },
              { name: "BiPC", full: "Biology, Physics, Chemistry", color: "bg-secondary" },
              { name: "MEC", full: "Maths, Economics, Commerce", color: "bg-primary" },
              { name: "CEC", full: "Civics, Economics, Commerce", color: "bg-secondary" },
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className={`${course.color} text-white p-4 rounded-lg mb-4`}>
                    <h3 className="text-2xl font-bold text-center">{course.name}</h3>
                  </div>
                  <p className="text-center text-muted-foreground">{course.full}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Facilities</h2>
            <p className="text-lg text-muted-foreground">
              Modern infrastructure and state-of-the-art facilities across all branches
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                image: libraryImage, 
                title: "Library", 
                desc: "Extensive collection with digital resources" 
              },
              { 
                image: scienceLabImage, 
                title: "Science Labs", 
                desc: "Well-equipped laboratories for hands-on learning" 
              },
              { 
                image: messImage, 
                title: "Mess", 
                desc: "Hygienic dining facilities with nutritious meals" 
              }
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden shadow-card group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
  );
};

export default Home;