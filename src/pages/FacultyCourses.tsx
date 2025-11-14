import { FacultySidebar } from "@/components/FacultySidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, FileText, Calendar } from "lucide-react";

const FacultyCourses = () => {
  const courses = [
    {
      id: 1,
      name: "Database Systems",
      code: "CS-401",
      semester: "Fall 2024",
      students: 45,
      schedule: "Mon, Wed 9:00 AM",
      room: "Lab 3",
      description: "Advanced database design, SQL, and NoSQL systems",
      assignments: 8,
      attendance: 92,
    },
    {
      id: 2,
      name: "Data Structures",
      code: "CS-201",
      semester: "Fall 2024",
      students: 52,
      schedule: "Tue, Thu 11:00 AM",
      room: "Room 204",
      description: "Fundamental data structures and algorithms",
      assignments: 6,
      attendance: 88,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
              <p className="text-muted-foreground">Manage and track your teaching courses</p>
            </div>
            <Button variant="default">Create New Course</Button>
          </div>
        </div>

        <div className="grid gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-card border-border/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <CardTitle className="text-foreground text-2xl">{course.name}</CardTitle>
                        <CardDescription className="text-muted-foreground mt-1">
                          {course.code} • {course.semester}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{course.students}</p>
                      <p className="text-xs text-muted-foreground">Students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground">{course.assignments}</p>
                      <p className="text-xs text-muted-foreground">Assignments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-success" />
                    <div>
                      <p className="font-semibold text-foreground">{course.attendance}%</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">{course.schedule}</p>
                      <p className="text-xs text-muted-foreground">{course.room}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" variant="default">View Course</Button>
                  <Button className="flex-1" variant="outline">Manage Students</Button>
                  <Button className="flex-1" variant="outline">Post Announcement</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FacultyCourses;
