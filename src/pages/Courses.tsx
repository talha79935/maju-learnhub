import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Database Systems",
      code: "CS-401",
      instructor: "Dr. Sarah Ahmed",
      progress: 75,
      students: 45,
      schedule: "Mon, Wed 9:00 AM",
      description: "Advanced database design, SQL, and NoSQL systems"
    },
    {
      id: 2,
      name: "Web Development",
      code: "CS-302",
      instructor: "Prof. Ali Khan",
      progress: 60,
      students: 52,
      schedule: "Tue, Thu 11:00 AM",
      description: "Modern web technologies including React and Node.js"
    },
    {
      id: 3,
      name: "AI & Machine Learning",
      code: "CS-501",
      instructor: "Dr. Fatima Hassan",
      progress: 45,
      students: 38,
      schedule: "Wed, Fri 2:00 PM",
      description: "Introduction to AI concepts and ML algorithms"
    },
    {
      id: 4,
      name: "Software Engineering",
      code: "CS-403",
      instructor: "Prof. Ahmed Raza",
      progress: 80,
      students: 48,
      schedule: "Mon, Thu 3:00 PM",
      description: "Software development lifecycle and project management"
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
          <p className="text-muted-foreground">Manage and track all your enrolled courses</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <Card key={course.id} className="bg-card border-border/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {course.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {course.code} • {course.instructor}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {course.progress}% Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{course.description}</p>
                
                <Progress value={course.progress} className="h-2" />
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" variant="default">View Course</Button>
                  <Button className="flex-1" variant="outline">Materials</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
