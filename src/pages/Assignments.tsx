import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, Clock } from "lucide-react";

const Assignments = () => {
  const pendingAssignments = [
    {
      id: 1,
      title: "Database Design Project",
      course: "Database Systems",
      dueDate: "2024-11-20",
      points: 100,
      status: "pending"
    },
    {
      id: 2,
      title: "React Component Lab",
      course: "Web Development",
      dueDate: "2024-11-22",
      points: 50,
      status: "pending"
    },
    {
      id: 3,
      title: "Machine Learning Quiz",
      course: "AI & ML",
      dueDate: "2024-11-23",
      points: 75,
      status: "pending"
    },
  ];

  const completedAssignments = [
    {
      id: 4,
      title: "SQL Query Assignment",
      course: "Database Systems",
      submittedDate: "2024-11-10",
      points: 50,
      grade: 48,
      status: "graded"
    },
    {
      id: 5,
      title: "HTML/CSS Portfolio",
      course: "Web Development",
      submittedDate: "2024-11-08",
      points: 100,
      grade: 95,
      status: "graded"
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
          <p className="text-muted-foreground">Track and submit your course assignments</p>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="pending" className="gap-2">
              <Clock className="h-4 w-4" />
              Pending
              <Badge variant="secondary" className="ml-1 bg-warning/10 text-warning border-warning/20">
                {pendingAssignments.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="gap-2">
              <FileText className="h-4 w-4" />
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="space-y-4">
              {pendingAssignments.map((assignment) => (
                <Card key={assignment.id} className="bg-card border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-foreground">{assignment.title}</h3>
                          <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                            Due Soon
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span>{assignment.points} points</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Submit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-4">
              {completedAssignments.map((assignment) => (
                <Card key={assignment.id} className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-foreground">{assignment.title}</h3>
                          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                            Graded
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            <span className="font-medium text-success">
                              {assignment.grade}/{assignment.points} points
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View Feedback</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Assignments;
