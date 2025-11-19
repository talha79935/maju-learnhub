import { useState } from 'react';
import { FacultySidebar } from '@/components/FacultySidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Clock, Calendar } from 'lucide-react';

interface AttendanceRecord {
  id: number;
  studentName: string;
  studentId: string;
  course: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}

const FacultyAttendance = () => {
  const [selectedCourse, setSelectedCourse] = useState('Database Systems');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const courses = ['Database Systems', 'Web Development', 'AI & Machine Learning', 'Software Engineering'];

  const [attendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: 1,
      studentName: 'Ahmed Ali',
      studentId: 'MAJU-2024-CS-001',
      course: 'Database Systems',
      date: new Date().toISOString().split('T')[0],
      status: 'present'
    },
    {
      id: 2,
      studentName: 'Fatima Khan',
      studentId: 'MAJU-2024-CS-002',
      course: 'Database Systems',
      date: new Date().toISOString().split('T')[0],
      status: 'present'
    },
    {
      id: 3,
      studentName: 'Hassan Raza',
      studentId: 'MAJU-2024-CS-003',
      course: 'Database Systems',
      date: new Date().toISOString().split('T')[0],
      status: 'absent'
    },
    {
      id: 4,
      studentName: 'Ayesha Malik',
      studentId: 'MAJU-2024-CS-004',
      course: 'Database Systems',
      date: new Date().toISOString().split('T')[0],
      status: 'late'
    }
  ]);

  const filteredRecords = attendanceRecords.filter(
    record => record.course === selectedCourse && record.date === selectedDate
  );

  const stats = {
    present: filteredRecords.filter(r => r.status === 'present').length,
    absent: filteredRecords.filter(r => r.status === 'absent').length,
    late: filteredRecords.filter(r => r.status === 'late').length,
    total: filteredRecords.length
  };

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

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Attendance Management</h1>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>

        {/* Filters */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Select Course</label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Select Date</label>
            <input
              type="date"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.total}</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Present</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.present}</div>
              <p className="text-xs text-muted-foreground">
                {stats.total > 0 ? ((stats.present / stats.total) * 100).toFixed(0) : 0}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Absent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.absent}</div>
              <p className="text-xs text-muted-foreground">
                {stats.total > 0 ? ((stats.absent / stats.total) * 100).toFixed(0) : 0}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Late</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.late}</div>
              <p className="text-xs text-muted-foreground">
                {stats.total > 0 ? ((stats.late / stats.total) * 100).toFixed(0) : 0}%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Attendance List */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Attendance Records
            </CardTitle>
            <CardDescription>
              {selectedCourse} - {new Date(selectedDate).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredRecords.length > 0 ? (
              <div className="space-y-3">
                {filteredRecords.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {getStatusIcon(record.status)}
                      <div>
                        <h4 className="font-semibold text-foreground">{record.studentName}</h4>
                        <p className="text-sm text-muted-foreground">{record.studentId}</p>
                      </div>
                    </div>
                    {getStatusBadge(record.status)}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No attendance records for this date.</p>
                <Button className="mt-4">Mark Attendance</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FacultyAttendance;
