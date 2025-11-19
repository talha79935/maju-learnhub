import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Access all your courses, materials, and lectures in one place"
    },
    {
      icon: Clock,
      title: "Assignment Tracking",
      description: "Never miss a deadline with our smart assignment tracker"
    },
    {
      icon: Users,
      title: "Easy Communication",
      description: "Connect with faculty and classmates effortlessly"
    },
    {
      icon: Award,
      title: "Progress Monitoring",
      description: "Track your academic performance and achievements"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
              Welcome to MAJU Student Portal
            </h1>
            <p className="mb-8 text-lg text-white/90 lg:text-xl">
              Your all-in-one learning management system for a modern, organized, and user-friendly academic experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={() => navigate("/login")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate("/login")}
              >
                Faculty Login
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed for modern education
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Access your courses, track assignments, and stay connected with your academic community.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
          >
            Login to Portal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;