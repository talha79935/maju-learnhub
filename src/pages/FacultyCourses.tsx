import { useState, useEffect } from 'react';
import { FacultySidebar } from '@/components/FacultySidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CourseDialog } from '@/components/CourseDialog';
import { BookOpen, Users, Clock, Plus, Edit, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface Course {
  id: number;
  name: string;
  code: string;
  semester: string;
  schedule: string;
  room: string;
  description: string;
  faculty_id?: string;
}

const FacultyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('faculty_id', user?.id);

      if (error) throw error;
      setCourses(data || []);
    } catch (error: any) {
      toast({
        title: 'Error fetching courses',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCourse = async (courseData: Course) => {
    try {
      if (editingCourse) {
        // Update existing course
        const { error } = await supabase
          .from('courses')
          .update({
            name: courseData.name,
            code: courseData.code,
            semester: courseData.semester,
            schedule: courseData.schedule,
            room: courseData.room,
            description: courseData.description
          })
          .eq('id', editingCourse.id);

        if (error) throw error;
        toast({ title: 'Course updated successfully' });
      } else {
        // Create new course
        const { error } = await supabase
          .from('courses')
          .insert([{
            ...courseData,
            faculty_id: user?.id
          }]);

        if (error) throw error;
        toast({ title: 'Course created successfully' });
      }

      fetchCourses();
      setDialogOpen(false);
      setEditingCourse(null);
    } catch (error: any) {
      toast({
        title: 'Error saving course',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const handleDeleteCourse = async (courseId: number) => {
    if (!confirm('Are you sure you want to delete this course?')) return;

    try {
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', courseId);

      if (error) throw error;
      toast({ title: 'Course deleted successfully' });
      fetchCourses();
    } catch (error: any) {
      toast({
        title: 'Error deleting course',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setDialogOpen(true);
  };

  const handleCreateNew = () => {
    setEditingCourse(null);
    setDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
            <p className="text-muted-foreground">Manage your courses and course materials</p>
          </div>
          <Button onClick={handleCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        ) : courses.length === 0 ? (
          <Card className="bg-card border-border/50">
            <CardContent className="py-12 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No courses yet</h3>
              <p className="text-muted-foreground mb-4">Create your first course to get started</p>
              <Button onClick={handleCreateNew}>
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <Card key={course.id} className="bg-card border-border/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-foreground flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        {course.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {course.code} • {course.semester}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{course.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>Room: {course.room}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      className="flex-1"
                      variant="outline"
                      onClick={() => handleEditCourse(course)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <CourseDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          course={editingCourse}
          onSave={handleSaveCourse}
        />
      </main>
    </div>
  );
};

export default FacultyCourses;