import { BookOpen, Calendar, FileText, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/Sidebar";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const upcomingAssignments = [
    { id: 1, title: "Database Design Project", course: "Database Systems", dueDate: "Tomorrow", status: "pending" },
    { id: 2, title: "React Component Lab", course: "Web Development", dueDate: "2 days", status: "pending" },
    { id: 3, title: "Machine Learning Quiz", course: "AI & ML", dueDate: "3 days", status: "pending" },
  ];

  const courses = [
    { id: 1, name: "Database Systems", instructor: "Dr. Sarah Ahmed", progress: 75, color: "primary" },
    { id: 2, name: "Web Development", instructor: "Prof. Ali Khan", progress: 60, color: "secondary" },
    { id: 3, name: "AI & Machine Learning", instructor: "Dr. Fatima Hassan", progress: 45, color: "accent" },
    { id: 4, name: "Software Engineering", instructor: "Prof. Ahmed Raza", progress: 80, color: "success" },
  ];

  const recentAnnouncements = [
    { id: 1, title: "Midterm Schedule Released", course: "All Courses", time: "2 hours ago" },
    { id: 2, title: "Lab Session Postponed", course: "Web Development", time: "5 hours ago" },
    { id: 3, title: "Guest Lecture Tomorrow", course: "AI & ML", time: "1 day ago" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Student!</h1>
          <p className="text-muted-foreground">Here's what's happening with your courses today.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4</div>
              <p className="text-xs text-muted-foreground">Active this semester</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Assignments</CardTitle>
              <FileText className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">Due this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Attendance</CardTitle>
              <Calendar className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">85%</div>
              <p className="text-xs text-muted-foreground">Overall average</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Notifications</CardTitle>
              <Bell className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5</div>
              <p className="text-xs text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <Card className="lg:col-span-2 bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">My Courses</CardTitle>
              <CardDescription>Track your progress across all courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                      <span className="text-sm font-medium text-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Announcements</CardTitle>
              <CardDescription>Latest updates from your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="space-y-1 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-sm text-foreground leading-tight">{announcement.title}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{announcement.course}</p>
                      <span className="text-xs text-muted-foreground">{announcement.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Upcoming Assignments</CardTitle>
            <CardDescription>Don't miss these deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{assignment.title}</p>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                      Due {assignment.dueDate}
                    </Badge>
                    <Button size="sm" variant="default">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
