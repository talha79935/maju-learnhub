import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, TrendingUp, Award, Target } from 'lucide-react';

interface Grade {
  id: number;
  course: string;
  courseCode: string;
  assignments: { name: string; score: number; total: number; weight: number }[];
  midterm: { score: number; total: number; weight: number };
  final: { score: number; total: number; weight: number };
  currentGrade: number;
  letterGrade: string;
}

const Grades = () => {
  const [grades] = useState<Grade[]>([
    {
      id: 1,
      course: 'Database Systems',
      courseCode: 'CS-401',
      assignments: [
        { name: 'Assignment 1', score: 18, total: 20, weight: 10 },
        { name: 'Assignment 2', score: 16, total: 20, weight: 10 },
        { name: 'Assignment 3', score: 19, total: 20, weight: 10 }
      ],
      midterm: { score: 38, total: 50, weight: 30 },
      final: { score: 42, total: 50, weight: 40 },
      currentGrade: 87.4,
      letterGrade: 'A'
    },
    {
      id: 2,
      course: 'Web Development',
      courseCode: 'CS-302',
      assignments: [
        { name: 'Assignment 1', score: 17, total: 20, weight: 15 },
        { name: 'Assignment 2', score: 19, total: 20, weight: 15 }
      ],
      midterm: { score: 42, total: 50, weight: 30 },
      final: { score: 45, total: 50, weight: 40 },
      currentGrade: 91.5,
      letterGrade: 'A+'
    },
    {
      id: 3,
      course: 'AI & Machine Learning',
      courseCode: 'CS-501',
      assignments: [
        { name: 'Assignment 1', score: 15, total: 20, weight: 10 },
        { name: 'Assignment 2', score: 17, total: 20, weight: 10 }
      ],
      midterm: { score: 35, total: 50, weight: 30 },
      final: { score: 40, total: 50, weight: 40 },
      currentGrade: 82.0,
      letterGrade: 'A-'
    },
    {
      id: 4,
      course: 'Software Engineering',
      courseCode: 'CS-403',
      assignments: [
        { name: 'Assignment 1', score: 19, total: 20, weight: 10 },
        { name: 'Assignment 2', score: 18, total: 20, weight: 10 },
        { name: 'Assignment 3', score: 20, total: 20, weight: 10 }
      ],
      midterm: { score: 45, total: 50, weight: 30 },
      final: { score: 48, total: 50, weight: 40 },
      currentGrade: 94.0,
      letterGrade: 'A+'
    }
  ]);

  const overallCGPA = (grades.reduce((sum, g) => sum + g.currentGrade, 0) / grades.length / 25).toFixed(2);

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-blue-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Grades & Performance</h1>
          <p className="text-muted-foreground">Track your academic performance and grades</p>
        </div>

        {/* Overall Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{overallCGPA}</div>
              <p className="text-xs text-muted-foreground mt-1">Out of 4.0</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {(grades.reduce((sum, g) => sum + g.currentGrade, 0) / grades.length).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">Across all courses</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">A Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {grades.filter(g => g.letterGrade.startsWith('A')).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Out of {grades.length} courses</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Highest Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {Math.max(...grades.map(g => g.currentGrade)).toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">Best performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Grades */}
        <div className="space-y-6">
          {grades.map((grade) => (
            <Card key={grade.id} className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {grade.course}
                    </CardTitle>
                    <CardDescription>{grade.courseCode}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getGradeColor(grade.letterGrade)}`}>
                      {grade.letterGrade}
                    </div>
                    <p className="text-sm text-muted-foreground">{grade.currentGrade.toFixed(1)}%</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="breakdown" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="breakdown">Grade Breakdown</TabsTrigger>
                    <TabsTrigger value="progress">Progress</TabsTrigger>
                  </TabsList>

                  <TabsContent value="breakdown" className="space-y-4 mt-4">
                    {/* Assignments */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Assignments</h4>
                      <div className="space-y-2">
                        {grade.assignments.map((assignment, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                            <span className="text-sm text-foreground">{assignment.name}</span>
                            <div className="flex items-center gap-3">
                              <Badge variant="outline">{assignment.weight}%</Badge>
                              <span className="text-sm font-semibold text-foreground">
                                {assignment.score}/{assignment.total}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                ({((assignment.score / assignment.total) * 100).toFixed(0)}%)
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Midterm */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Midterm Exam</h4>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                        <span className="text-sm text-foreground">Midterm</span>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{grade.midterm.weight}%</Badge>
                          <span className="text-sm font-semibold text-foreground">
                            {grade.midterm.score}/{grade.midterm.total}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ({((grade.midterm.score / grade.midterm.total) * 100).toFixed(0)}%)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Final */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Final Exam</h4>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                        <span className="text-sm text-foreground">Final</span>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{grade.final.weight}%</Badge>
                          <span className="text-sm font-semibold text-foreground">
                            {grade.final.score}/{grade.final.total}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ({((grade.final.score / grade.final.total) * 100).toFixed(0)}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="progress" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-foreground">Overall Progress</span>
                          <span className="text-sm font-semibold text-foreground">{grade.currentGrade.toFixed(1)}%</span>
                        </div>
                        <Progress value={grade.currentGrade} className="h-3" />
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center p-4 rounded-lg bg-accent/50">
                          <Target className="h-6 w-6 mx-auto mb-2 text-primary" />
                          <p className="text-xs text-muted-foreground mb-1">Target</p>
                          <p className="text-lg font-bold text-foreground">90%</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-accent/50">
                          <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-600" />
                          <p className="text-xs text-muted-foreground mb-1">Current</p>
                          <p className="text-lg font-bold text-foreground">{grade.currentGrade.toFixed(1)}%</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-accent/50">
                          <Award className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                          <p className="text-xs text-muted-foreground mb-1">Grade</p>
                          <p className="text-lg font-bold text-foreground">{grade.letterGrade}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Grades;
