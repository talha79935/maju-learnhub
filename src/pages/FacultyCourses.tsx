import { useState } from "react";
import { FacultySidebar } from "@/components/FacultySidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, FileText, Calendar, Edit, Trash2 } from "lucide-react";
import { CourseDialog } from "@/components/CourseDialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: number;
  name: string;
  code: string;
  semester: string;
  students: number;
  schedule: string;
  room: string;
  description: string;
  assignments: number;
  attendance: number;
}

const FacultyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([
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
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCreateCourse = () => {
    setEditingCourse(null);
    setDialogOpen(true);
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setDialogOpen(true);
  };

  const handleSaveCourse = (courseData: Omit<Course, 'id' | 'students' | 'assignments' | 'attendance'>) => {
    if (editingCourse) {
      setCourses(courses.map(c => 
        c.id === editingCourse.id 
          ? { ...c, ...courseData }
          : c
      ));
    } else {
      const newCourse: Course = {
        ...courseData,
        id: Math.max(...courses.map(c => c.id), 0) + 1,
        students: 0,
        assignments: 0,
        attendance: 0,
      };
      setCourses([...courses, newCourse]);
    }
  };

  const handleDeleteClick = (courseId: number) => {
    setCourseToDelete(courseId);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (courseToDelete) {
      setCourses(courses.filter(c => c.id !== courseToDelete));
      toast({
        title: "Course Deleted",
        description: "The course has been removed successfully.",
      });
    }
    setDeleteDialogOpen(false);
    setCourseToDelete(null);
  };

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
            <Button variant="default" onClick={handleCreateCourse}>Create New Course</Button>
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
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Active
                    </Badge>
                    <Button variant="ghost" size="icon" onClick={() => handleEditCourse(course)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(course.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
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

      <CourseDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        course={editingCourse}
        onSave={handleSaveCourse}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the course and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FacultyCourses;