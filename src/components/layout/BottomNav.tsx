import { Link, useLocation } from "react-router-dom";
import { Home, CheckSquare, Target, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Home", path: "/app", icon: Home },
  { name: "Tasks", path: "/app/tasks", icon: CheckSquare },
  { name: "Goals", path: "/app/goals", icon: Target },
  { name: "Calendar", path: "/app/calendar", icon: Calendar },
  { name: "Profile", path: "/app/profile", icon: User },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-background/80 backdrop-blur-md border-t border-border flex items-center justify-around px-2 z-50">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path || (tab.path !== "/app" && location.pathname.startsWith(tab.path));
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full min-h-[44px] min-w-[44px] transition-colors duration-200",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
            data-testid={`nav-${tab.name.toLowerCase()}`}
          >
            <tab.icon className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-medium">{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
