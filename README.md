# 🎓 MAJU Portal - Learning Management System

A comprehensive, modern Learning Management System built with React, TypeScript, Vite, and Supabase. Features separate portals for students and faculty with full authentication, course management, grading, attendance tracking, and more.

![MAJU Portal](https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80)

## ✨ Features

### 🎯 Student Portal
- **Dashboard** - Overview of courses, assignments, and announcements
- **Courses** - View enrolled courses with detailed information
- **Assignments** - Track and submit assignments with deadlines
- **Grades** - Comprehensive grade tracking with breakdowns and CGPA calculation
- **Attendance** - Monitor class attendance across all courses
- **Announcements** - Stay updated with course and university announcements
- **Profile** - Manage personal information and view academic stats

### 👨‍🏫 Faculty Portal
- **Dashboard** - Overview of teaching activities and statistics
- **Course Management** - Create, edit, and delete courses with full CRUD operations
- **Grading** - Grade student assignments and manage evaluations
- **Student Management** - View and manage enrolled students
- **Attendance Tracking** - Mark and track student attendance
- **Announcements** - Create and manage course announcements
- **Profile** - Manage professional information and credentials

### 🔐 Authentication & Security
- Secure email/password authentication via Supabase
- Role-based access control (Student/Faculty)
- Protected routes with authentication guards
- Session persistence and management
- Secure logout functionality

### 🎨 UI/UX Features
- Modern, responsive design with Tailwind CSS
- Dark mode support with custom theming
- ShadCN UI component library
- Smooth animations and transitions
- Mobile-friendly interface
- Intuitive navigation

## 🚀 Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: React Query + Context API
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Supabase account

### Setup Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd maju-portal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the migration file in `supabase/migrations/`
   - Get your project URL and anon key

4. **Configure environment variables**
   - In Tempo: Add variables in project settings
   - For local development: Create `.env` file
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. **Run development server**
```bash
npm run dev
```

6. **Build for production**
```bash
npm run build
```

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel (Recommended)
- Netlify
- Other platforms

## 📁 Project Structure

```
maju-portal/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/             # ShadCN UI components
│   │   ├── Sidebar.tsx     # Student sidebar navigation
│   │   ├── FacultySidebar.tsx
│   │   ├── CourseDialog.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Landing page
│   │   ├── Login.tsx       # Authentication
│   │   ├── Dashboard.tsx   # Student dashboard
│   │   ├── Courses.tsx
│   │   ├── Assignments.tsx
│   │   ├── Grades.tsx
│   │   ├── Attendance.tsx
│   │   ├── Announcements.tsx
│   │   ├── Profile.tsx
│   │   ├── FacultyDashboard.tsx
│   │   ├── FacultyCourses.tsx
│   │   ├── FacultyGrading.tsx
│   │   ├── FacultyStudents.tsx
│   │   ├── FacultyAttendance.tsx
│   │   ├── FacultyAnnouncements.tsx
│   │   └── FacultyProfile.tsx
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx
│   ├── integrations/       # External integrations
│   │   └── supabase/
│   ├── lib/               # Utility functions
│   └── hooks/             # Custom React hooks
├── supabase/
│   └── migrations/        # Database migrations
├── public/                # Static assets
├── vercel.json           # Vercel configuration
├── netlify.toml          # Netlify configuration
└── DEPLOYMENT.md         # Deployment guide
```

## 🗄️ Database Schema

### Tables
- **profiles** - User profiles (students and faculty)
- **courses** - Course information
- **enrollments** - Student-course relationships
- **assignments** - Assignment details
- **submissions** - Student assignment submissions
- **grades** - Grade records
- **attendance** - Attendance tracking

## 🎯 Key Features Explained

### Grade Tracking System
- Detailed breakdown of assignments, midterms, and finals
- Weighted grade calculations
- CGPA tracking
- Visual progress indicators
- Letter grade assignments

### Course Management
- Full CRUD operations for faculty
- Course details (code, schedule, room, description)
- Student enrollment tracking
- Course materials management

### Attendance System
- Mark attendance (Present/Absent/Late)
- Course-wise attendance tracking
- Attendance percentage calculations
- Historical attendance records

### Announcement System
- Priority levels (High/Medium/Low)
- Course-specific or general announcements
- Pinned announcements
- Date-based filtering

## 🔧 Configuration

### Tailwind Theme
Custom theme variables in `tailwind.config.ts`:
- Primary colors
- Sidebar colors
- Gradient backgrounds
- Border styles

### Path Aliases
```json
{
  "@/*": ["./src/*"]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful component library
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the styling system

## 📧 Support

For support, email support@maju.edu.pk or open an issue in the repository.

## 🚀 Future Enhancements

- [ ] Real-time notifications
- [ ] Video conferencing integration
- [ ] Assignment file uploads
- [ ] Discussion forums
- [ ] Calendar integration
- [ ] Mobile app (React Native)
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Bulk operations for faculty
- [ ] Export reports (PDF/Excel)

---

Made with ❤️ for MAJU University