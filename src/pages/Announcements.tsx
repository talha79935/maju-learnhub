import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Pin, Calendar, BookOpen } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  course: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  pinned: boolean;
}

const Announcements = () => {
  const [announcements] = useState<Announcement[]>([
    {
      id: 1,
      title: 'Midterm Examination Schedule Released',
      content: 'The midterm examination schedule for all courses has been released. Please check your course pages for specific dates and times. Make sure to prepare accordingly.',
      course: 'All Courses',
      date: '2024-01-15',
      priority: 'high',
      pinned: true
    },
    {
      id: 2,
      title: 'Lab Session Postponed',
      content: 'Tomorrow\'s Web Development lab session has been postponed to next week due to technical maintenance. The makeup session will be scheduled soon.',
      course: 'Web Development',
      date: '2024-01-15',
      priority: 'medium',
      pinned: false
    },
    {
      id: 3,
      title: 'Guest Lecture on AI Ethics',
      content: 'Join us for an exciting guest lecture on AI Ethics by Dr. John Smith from MIT. The session will be held in the main auditorium tomorrow at 2 PM.',
      course: 'AI & Machine Learning',
      date: '2024-01-14',
      priority: 'medium',
      pinned: true
    },
    {
      id: 4,
      title: 'Assignment Deadline Extended',
      content: 'The Database Design Project deadline has been extended by 3 days. New deadline is January 20th. Please submit your work on time.',
      course: 'Database Systems',
      date: '2024-01-14',
      priority: 'high',
      pinned: false
    },
    {
      id: 5,
      title: 'Library Hours Extended',
      content: 'The university library will now be open until 10 PM on weekdays to support students during the examination period.',
      course: 'General',
      date: '2024-01-13',
      priority: 'low',
      pinned: false
    },
    {
      id: 6,
      title: 'Career Fair Next Week',
      content: 'Don\'t miss the annual career fair featuring top tech companies. Bring your resumes and dress professionally. Registration is open now.',
      course: 'General',
      date: '2024-01-13',
      priority: 'medium',
      pinned: false
    }
  ]);

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

  const pinnedAnnouncements = announcements.filter(a => a.pinned);
  const regularAnnouncements = announcements.filter(a => !a.pinned);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Announcements</h1>
          <p className="text-muted-foreground">Stay updated with the latest news and updates</p>
        </div>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Pin className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Pinned Announcements</h2>
            </div>
            <div className="space-y-4">
              {pinnedAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="bg-card border-border/50 border-l-4 border-l-primary">
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
                      <Pin className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Recent Announcements</h2>
          </div>
          <div className="space-y-4">
            {regularAnnouncements.map((announcement) => (
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
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Announcements;
