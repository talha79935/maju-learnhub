import { useState } from 'react';
import { FacultySidebar } from '@/components/FacultySidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, BookOpen, Edit, Save, X, Award } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const FacultyProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Dr. Sarah Ahmed',
    email: user?.email || 'sarah.ahmed@maju.edu.pk',
    phone: '+92 300 9876543',
    address: 'Karachi, Pakistan',
    facultyId: 'FAC-CS-001',
    department: 'Computer Science',
    designation: 'Associate Professor',
    specialization: 'Database Systems & Data Science',
    experience: '12 years',
    education: 'PhD in Computer Science',
    bio: 'Passionate educator with expertise in database systems, data science, and machine learning. Committed to fostering innovation and critical thinking in students.'
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast({
      title: 'Profile updated',
      description: 'Your profile has been updated successfully.'
    });
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const teachingCourses = [
    { id: 1, name: 'Database Systems', code: 'CS-401', students: 45 },
    { id: 2, name: 'Web Development', code: 'CS-302', students: 52 },
    { id: 3, name: 'Data Science', code: 'CS-502', students: 38 }
  ];

  const achievements = [
    'Best Teacher Award 2023',
    'Published 15+ research papers',
    'PhD Supervisor for 8 students',
    'Conference Speaker at IEEE 2023'
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <FacultySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your professional information</p>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} />
                    <AvatarFallback className="text-2xl">
                      {profileData.fullName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold text-foreground mb-1">{profileData.fullName}</h2>
                  <p className="text-muted-foreground mb-2">{profileData.facultyId}</p>
                  <Badge className="mb-2">{profileData.designation}</Badge>
                  <Badge variant="outline" className="mb-4">{profileData.department}</Badge>
                  <p className="text-sm text-muted-foreground">{profileData.bio}</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{profileData.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-card border-border/50 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details & Courses */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Information */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>Your academic and professional details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={isEditing ? editData.fullName : profileData.fullName}
                      onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={isEditing ? editData.email : profileData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={isEditing ? editData.phone : profileData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={isEditing ? editData.address : profileData.address}
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      value={isEditing ? editData.designation : profileData.designation}
                      onChange={(e) => setEditData({ ...editData, designation: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input
                      id="specialization"
                      value={isEditing ? editData.specialization : profileData.specialization}
                      onChange={(e) => setEditData({ ...editData, specialization: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      value={isEditing ? editData.experience : profileData.experience}
                      onChange={(e) => setEditData({ ...editData, experience: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education</Label>
                    <Input
                      id="education"
                      value={isEditing ? editData.education : profileData.education}
                      onChange={(e) => setEditData({ ...editData, education: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={isEditing ? editData.bio : profileData.bio}
                    onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                    disabled={!isEditing}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Teaching Courses */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Teaching Courses
                </CardTitle>
                <CardDescription>Current semester courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {teachingCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors"
                    >
                      <div>
                        <h4 className="font-semibold text-foreground">{course.name}</h4>
                        <p className="text-sm text-muted-foreground">{course.code}</p>
                      </div>
                      <Badge variant="outline">{course.students} Students</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyProfile;
