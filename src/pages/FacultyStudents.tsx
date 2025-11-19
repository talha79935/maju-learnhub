import { useState } from 'react';
import { FacultySidebar } from '@/components/FacultySidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Mail, Phone, BookOpen, GraduationCap } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  email: string;
  studentId: string;
  phone: string;
  courses: string[];
  cgpa: number;
  semester: string;
}

const FacultyStudents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [students] = useState<Student[]>([
    {
      id: 1,
      name: 'Ahmed Ali',
      email: 'ahmed.ali@student.maju.edu.pk',
      studentId: 'MAJU-2024-CS-001',
      phone: '+92 300 1234567',
      courses: ['Database Systems', 'Web Development'],
      cgpa: 3.75,
      semester: '6th'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      email: 'fatima.khan@student.maju.edu.pk',
      studentId: 'MAJU-2024-CS-002',
      phone: '+92 301 2345678',
      courses: ['Database Systems', 'AI & Machine Learning'],
      cgpa: 3.92,
      semester: '6th'
    },
    {
      id: 3,
      name: 'Hassan Raza',
      email: 'hassan.raza@student.maju.edu.pk',
      studentId: 'MAJU-2024-CS-003',
      phone: '+92 302 3456789',
      courses: ['Web Development'],
      cgpa: 3.45,
      semester: '5th'
    },
    {
      id: 4,
      name: 'Ayesha Malik',
      email: 'ayesha.malik@student.maju.edu.pk',
      studentId: 'MAJU-2024-CS-004',
      phone: '+92 303 4567890',
      courses: ['Database Systems', 'Software Engineering'],
      cgpa: 3.88,
      semester: '6th'
    }
  ]);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Students</h1>
          <p className="text-muted-foreground">Manage and view your students</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, student ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
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
              <div className="text-2xl font-bold text-foreground">{students.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {(students.reduce((sum, s) => sum + s.cgpa, 0) / students.length).toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">6th Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {students.filter(s => s.semester === '6th').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">5th Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {students.filter(s => s.semester === '5th').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Students List */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="bg-card border-border/50 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.email}`} />
                    <AvatarFallback>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">{student.studentId}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <GraduationCap className="h-3 w-3" />
                        {student.semester} Sem
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{student.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{student.phone}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">CGPA</span>
                        <span className="text-lg font-bold text-primary">{student.cgpa}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Enrolled Courses:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {student.courses.map((course, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <Card className="bg-card border-border/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No students found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default FacultyStudents;
