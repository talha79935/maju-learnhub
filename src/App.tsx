import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import Announcements from "./pages/Announcements";
import Profile from "./pages/Profile";
import FacultyDashboard from "./pages/FacultyDashboard";
import FacultyCourses from "./pages/FacultyCourses";
import FacultyGrading from "./pages/FacultyGrading";
import FacultyStudents from "./pages/FacultyStudents";
import FacultyAttendance from "./pages/FacultyAttendance";
import FacultyAnnouncements from "./pages/FacultyAnnouncements";
import FacultyProfile from "./pages/FacultyProfile";
import NotFound from "./pages/NotFound";
import Grades from "./pages/Grades";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Student Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="/assignments" element={<ProtectedRoute><Assignments /></ProtectedRoute>} />
            <Route path="/grades" element={<ProtectedRoute><Grades /></ProtectedRoute>} />
            <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
            <Route path="/announcements" element={<ProtectedRoute><Announcements /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            
            {/* Faculty Routes */}
            <Route path="/faculty" element={<ProtectedRoute><FacultyDashboard /></ProtectedRoute>} />
            <Route path="/faculty/courses" element={<ProtectedRoute><FacultyCourses /></ProtectedRoute>} />
            <Route path="/faculty/grading" element={<ProtectedRoute><FacultyGrading /></ProtectedRoute>} />
            <Route path="/faculty/students" element={<ProtectedRoute><FacultyStudents /></ProtectedRoute>} />
            <Route path="/faculty/attendance" element={<ProtectedRoute><FacultyAttendance /></ProtectedRoute>} />
            <Route path="/faculty/announcements" element={<ProtectedRoute><FacultyAnnouncements /></ProtectedRoute>} />
            <Route path="/faculty/profile" element={<ProtectedRoute><FacultyProfile /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;