import { BookOpen, Users, FileText, Bell, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FacultySidebar } from "@/components/FacultySidebar";
import { Progress } from "@/components/ui/progress";

const FacultyDashboard = () => {
  const pendingGrading = [
    { id: 1, title: "Database Design Project", course: "Database Systems", submissions: 42, total: 45, dueDate: "Yesterday" },
    { id: 2, title: "React Component Lab", course: "Web Development", submissions: 48, total: 52, dueDate: "Today" },
    { id: 3, title: "ML Algorithm Implementation", course: "AI & ML", submissions: 35, total: 38, dueDate: "Tomorrow" },
  ];

  const myCourses = [
    { id: 1, name: "Database Systems", code: "CS-401", students: 45, completion: 75, pendingAssignments: 3 },
    { id: 2, name: "Data Structures", code: "CS-201", students: 52, completion: 60, pendingAssignments: 2 },
  ];

  const recentActivity = [
    { id: 1, student: "Ahmed Ali", action: "Submitted assignment", course: "Database Systems", time: "10 mins ago" },
    { id: 2, student: "Fatima Khan", action: "Asked a question", course: "Data Structures", time: "25 mins ago" },
    { id: 3, student: "Hassan Raza", action: "Completed quiz", course: "Database Systems", time: "1 hour ago" },
  ];

  const upcomingClasses = [
    { id: 1, course: "Database Systems", time: "Today, 2:00 PM", room: "Lab 3", topic: "SQL Joins" },
    { id: 2, course: "Data Structures", time: "Tomorrow, 9:00 AM", room: "Room 204", topic: "Binary Trees" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Dr. Sarah!</h1>
          <p className="text-muted-foreground">Here's an overview of your courses and student activity.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">My Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2</div>
              <p className="text-xs text-muted-foreground">Active this semester</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Total Students</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">97</div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Pending Grading</CardTitle>
              <FileText className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5</div>
              <p className="text-xs text-muted-foreground">Assignments to review</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Avg. Performance</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">82%</div>
              <p className="text-xs text-muted-foreground">Overall average</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <Card className="lg:col-span-2 bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">My Courses</CardTitle>
              <CardDescription>Overview of courses you're teaching</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {myCourses.map((course) => (
                  <div key={course.id} className="p-4 rounded-lg bg-muted/50 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.code}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {course.students} students
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Course Progress</span>
                        <span className="font-medium text-foreground">{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <AlertCircle className="h-4 w-4 text-warning" />
                        <span>{course.pendingAssignments} pending assignments</span>
                      </div>
                      <Button size="sm" variant="default">Manage</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Upcoming Classes</CardTitle>
              <CardDescription>Your schedule for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="space-y-2 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <p className="font-medium text-foreground">{class_.course}</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{class_.time}</p>
                      <p>{class_.room} • {class_.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Assignments Pending Grading</CardTitle>
              <CardDescription>Review and grade student submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingGrading.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="space-y-1 flex-1">
                      <p className="font-medium text-foreground">{assignment.title}</p>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">
                          {assignment.submissions}/{assignment.total} submitted
                        </span>
                        <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20 text-xs">
                          Due {assignment.dueDate}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="default">Grade</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Activity</CardTitle>
              <CardDescription>Latest student interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="space-y-1 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-foreground">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{activity.course}</span>
                      <span className="text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;
