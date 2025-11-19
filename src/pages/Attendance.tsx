import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, CheckCircle, XCircle, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface AttendanceRecord {
  id: number;
  course_name: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  total_classes: number;
  attended: number;
}

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([
    {
      id: 1,
      course_name: 'Database Systems',
      date: '2024-01-15',
      status: 'present',
      total_classes: 24,
      attended: 22
    },
    {
      id: 2,
      course_name: 'Web Development',
      date: '2024-01-15',
      status: 'present',
      total_classes: 20,
      attended: 18
    },
    {
      id: 3,
      course_name: 'AI & Machine Learning',
      date: '2024-01-14',
      status: 'absent',
      total_classes: 18,
      attended: 15
    },
    {
      id: 4,
      course_name: 'Software Engineering',
      date: '2024-01-14',
      status: 'late',
      total_classes: 22,
      attended: 21
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'late':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: any = {
      present: 'default',
      absent: 'destructive',
      late: 'secondary'
    };
    return (
      <Badge variant={variants[status]} className="capitalize">
        {status}
      </Badge>
    );
  };

  const calculatePercentage = (attended: number, total: number) => {
    return ((attended / total) * 100).toFixed(1);
  };

  const overallStats = {
    totalClasses: attendanceData.reduce((sum, record) => sum + record.total_classes, 0),
    attended: attendanceData.reduce((sum, record) => sum + record.attended, 0),
    present: attendanceData.filter(r => r.status === 'present').length,
    absent: attendanceData.filter(r => r.status === 'absent').length,
    late: attendanceData.filter(r => r.status === 'late').length
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Attendance</h1>
          <p className="text-muted-foreground">Track your class attendance and participation</p>
        </div>

        {/* Overall Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {calculatePercentage(overallStats.attended, overallStats.totalClasses)}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {overallStats.attended} of {overallStats.totalClasses} classes
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Present</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{overallStats.present}</div>
              <p className="text-xs text-muted-foreground mt-1">Recent classes</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Absent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{overallStats.absent}</div>
              <p className="text-xs text-muted-foreground mt-1">Recent classes</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Late</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{overallStats.late}</div>
              <p className="text-xs text-muted-foreground mt-1">Recent classes</p>
            </CardContent>
          </Card>
        </div>

        {/* Course-wise Attendance */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Course-wise Attendance</h2>
          {attendanceData.map((record) => (
            <Card key={record.id} className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(record.status)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{record.course_name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Last class: {new Date(record.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">
                        {calculatePercentage(record.attended, record.total_classes)}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {record.attended}/{record.total_classes} classes
                      </p>
                    </div>
                    {getStatusBadge(record.status)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Attendance;
