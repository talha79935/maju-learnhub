import { FacultySidebar } from "@/components/FacultySidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye } from "lucide-react";

const FacultyGrading = () => {
  const pendingAssignments = [
    {
      id: 1,
      title: "Database Design Project",
      course: "Database Systems",
      student: "Ahmed Ali",
      submittedDate: "2024-11-15",
      points: 100,
      status: "pending"
    },
    {
      id: 2,
      title: "Database Design Project",
      course: "Database Systems",
      student: "Fatima Khan",
      submittedDate: "2024-11-15",
      points: 100,
      status: "pending"
    },
    {
      id: 3,
      title: "React Component Lab",
      course: "Data Structures",
      student: "Hassan Raza",
      submittedDate: "2024-11-16",
      points: 50,
      status: "pending"
    },
  ];

  const gradedAssignments = [
    {
      id: 4,
      title: "SQL Query Assignment",
      course: "Database Systems",
      student: "Sarah Ahmed",
      submittedDate: "2024-11-10",
      gradedDate: "2024-11-12",
      points: 50,
      grade: 48,
      status: "graded"
    },
    {
      id: 5,
      title: "Data Structure Implementation",
      course: "Data Structures",
      student: "Ali Hassan",
      submittedDate: "2024-11-08",
      gradedDate: "2024-11-10",
      points: 100,
      grade: 95,
      status: "graded"
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Grade Assignments</h1>
          <p className="text-muted-foreground">Review and grade student submissions</p>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="pending" className="gap-2">
              <FileText className="h-4 w-4" />
              Pending Review
              <Badge variant="secondary" className="ml-1 bg-warning/10 text-warning border-warning/20">
                {pendingAssignments.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="graded" className="gap-2">
              <FileText className="h-4 w-4" />
              Graded
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
                            Pending
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Student:</span> {assignment.student}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Course:</span> {assignment.course}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Submitted:</span> {new Date(assignment.submittedDate).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Points:</span> {assignment.points}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm">Grade Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graded">
            <div className="space-y-4">
              {gradedAssignments.map((assignment) => (
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
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Student:</span> {assignment.student}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Course:</span> {assignment.course}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Submitted:</span> {new Date(assignment.submittedDate).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Graded:</span> {new Date(assignment.gradedDate).toLocaleDateString()}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium text-foreground">Score:</span>{" "}
                            <span className="font-semibold text-success">
                              {assignment.grade}/{assignment.points}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">Edit Grade</Button>
                      </div>
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

export default FacultyGrading;
