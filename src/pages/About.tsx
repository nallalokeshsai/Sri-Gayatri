import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import directorImage from "@/assets/Naidu photo.jpg"

const About = () => {
  const achievements = [
    "25+ Years of Educational Excellence",
    "6000+ Successful Alumni",
    "100+ Experienced Faculty Members",
    "95% Success Rate in Board Examinations",
    "State-of-the-art Infrastructure",
    "Modern Laboratory Facilities",
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Creating an environment where every student can thrive and succeed",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Embracing modern teaching methods and educational technologies",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Fostering continuous improvement and lifelong learning",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Sri Gayatri Junior College</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legacy of educational excellence spanning over two decades, nurturing young minds 
            and shaping the future leaders of tomorrow.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive, quality intermediate education that prepares students for 
                higher education and professional success while instilling strong moral values and 
                social responsibility. We are committed to fostering an environment that encourages 
                critical thinking, creativity, and personal growth.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-secondary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading intermediate college in Andhra Pradesh, recognized for academic 
                excellence, innovative teaching methodologies, and holistic student development. 
                We envision creating global citizens who are well-equipped to face the challenges 
                of the 21st century.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History & Legacy */}
        <section className="mb-20">
          <div className="bg-accent rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Legacy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1999, Sri Gayatri Junior College began as a small institution with a big dream - 
                to provide quality intermediate education to the students of Visakhapatnam. Over the years, 
                we have grown from a single campus to four strategically located branches, serving diverse 
                communities across the city.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey has been marked by consistent academic achievements, infrastructure development, 
                and the success of our alumni who have gone on to excel in various fields including engineering, 
                medicine, business, and public service. Today, we stand as a testament to the power of 
                dedicated education and unwavering commitment to student success.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card group hover:shadow-hero transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Infrastructure & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Classrooms",
                description: "Smart boards, air conditioning, and comfortable seating arrangements"
              },
              {
                title: "Science Laboratories",
                description: "Well-equipped Physics, Chemistry, and Biology labs with latest equipment"
              },
              {
                title: "Computer Labs",
                description: "High-speed internet and latest computer systems for digital learning"
              },
              {
                title: "Library",
                description: "Extensive collection of books, journals, and digital resources"
              },
              {
                title: "Sports Facilities",
                description: "Indoor and outdoor sports facilities for physical development"
              },
              {
                title: "Transportation",
                description: "Safe and reliable bus services covering major areas of the city"
              },
            ].map((facility, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Director's Message */}
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card bg-primary text-primary-foreground">
              <CardContent className="p-12">
                <div className="flex justify-center mb-8">
                  <img
                    src={directorImage}
                    alt="Mr. N.A. Naidu, Director"
                    className="w-64 h-64 rounded-full object-cover object-[0_20%] border-4 border-primary-foreground"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-6">Director's Message</h2>
                <p className="text-xl mb-6 opacity-90">
                  At Sri Gayatri Junior College, we are committed to delivering transformative education that equips students with the knowledge and skills to excel in competitive examinations and beyond. With a focus on academic excellence, we foster an environment that nurtures critical thinking, innovation, and ethical leadership.
                </p>
                <p className="text-xl mb-8 opacity-90">
                  Our vision is to empower every student to achieve their highest potential, becoming globally competitive and socially responsible citizens. Through advanced teaching methodologies and state-of-the-art facilities, we ensure our students are well-prepared to lead and succeed in the 21st century.
                </p>
                <div className="mt-8">
                  <p className="font-semibold text-lg">Mr. N.A. Naidu</p>
                  <p className="opacity-90">Director, Sri Gayatri Junior College</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;