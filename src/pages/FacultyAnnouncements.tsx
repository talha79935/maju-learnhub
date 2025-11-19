import { useState } from 'react';
import { FacultySidebar } from '@/components/FacultySidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Bell, Plus, Edit, Trash2, Calendar, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Announcement {
  id: number;
  title: string;
  content: string;
  course: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

const FacultyAnnouncements = () => {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      title: 'Midterm Schedule Released',
      content: 'The midterm examination will be held next week. Please prepare accordingly.',
      course: 'Database Systems',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Lab Session Postponed',
      content: 'Tomorrow\'s lab session has been postponed to next week.',
      course: 'Web Development',
      date: '2024-01-15',
      priority: 'medium'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    course: 'Database Systems',
    priority: 'medium' as 'high' | 'medium' | 'low'
  });

  const courses = ['Database Systems', 'Web Development', 'AI & Machine Learning', 'Software Engineering', 'All Courses'];

  const handleCreate = () => {
    const newAnnouncement: Announcement = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setDialogOpen(false);
    setFormData({ title: '', content: '', course: 'Database Systems', priority: 'medium' });
    toast({ title: 'Announcement created successfully' });
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this announcement?')) {
      setAnnouncements(announcements.filter(a => a.id !== id));
      toast({ title: 'Announcement deleted' });
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Announcements</h1>
            <p className="text-muted-foreground">Create and manage course announcements</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Announcement
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Announcement</DialogTitle>
                <DialogDescription>Share important updates with your students</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Announcement title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Announcement details..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <select
                    id="course"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  >
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select
                    id="priority"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <Button onClick={handleCreate} className="w-full">
                  Create Announcement
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{announcements.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {announcements.filter(a => a.priority === 'high').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {announcements.filter(a => {
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return new Date(a.date) >= weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <Card key={announcement.id} className="bg-card border-border/50 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={getPriorityColor(announcement.priority)} className="capitalize">
                          {announcement.priority}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {announcement.course}
                        </Badge>
                      </div>
                      <CardTitle className="text-foreground">{announcement.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => handleDelete(announcement.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-card border-border/50">
              <CardContent className="py-12 text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No announcements yet</h3>
                <p className="text-muted-foreground mb-4">Create your first announcement to notify students</p>
                <Button onClick={() => setDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Announcement
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default FacultyAnnouncements;
