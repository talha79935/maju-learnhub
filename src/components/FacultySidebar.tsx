import { Home, BookOpen, FileText, Users, Calendar, Bell, User, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

export const FacultySidebar = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/faculty" },
    { icon: BookOpen, label: "My Courses", path: "/faculty/courses" },
    { icon: FileText, label: "Grade Assignments", path: "/faculty/grading" },
    { icon: Users, label: "Students", path: "/faculty/students" },
    { icon: Calendar, label: "Attendance", path: "/faculty/attendance" },
    { icon: Bell, label: "Announcements", path: "/faculty/announcements" },
    { icon: User, label: "Profile", path: "/faculty/profile" },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">MAJU Portal</h1>
        <p className="text-sm text-sidebar-foreground/70 mt-1">Faculty Dashboard</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all"
                  activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary"
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
};
