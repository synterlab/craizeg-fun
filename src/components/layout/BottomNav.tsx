import { Link, useLocation } from "react-router-dom";
import { Home, CheckSquare, Target, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Home",     path: "/app",          icon: Home },
  { name: "Tasks",    path: "/app/tasks",    icon: CheckSquare },
  { name: "Goals",    path: "/app/goals",    icon: Target },
  { name: "Calendar", path: "/app/calendar", icon: Calendar },
  { name: "Profile",  path: "/app/profile",  icon: User },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-background/75 backdrop-blur-xl border-t border-border/60" />
      <nav className="relative flex items-center justify-around h-[64px] px-1 max-w-md mx-auto">
        {tabs.map((tab) => {
          const active = pathname === tab.path || (tab.path !== "/app" && pathname.startsWith(tab.path));
          return (
            <Link key={tab.path} to={tab.path} data-testid={`nav-${tab.name.toLowerCase()}`}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full min-h-[44px] rounded-xl transition-all duration-200",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}>
              <div className={cn(
                "w-9 h-7 rounded-xl flex items-center justify-center transition-all duration-200",
                active ? "bg-primary/12" : "bg-transparent"
              )}>
                <tab.icon className={cn("transition-all duration-200", active ? "w-5 h-5" : "w-4.5 h-4.5")} />
              </div>
              <span className={cn("text-[9.5px] font-semibold leading-none tracking-wide",
                active ? "opacity-100" : "opacity-60")}>
                {tab.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
