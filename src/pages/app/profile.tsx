import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskStore } from "@/store/taskStore";
import { useGoalStore } from "@/store/goalStore";
import { useNoteStore } from "@/store/noteStore";
import { Button } from "@/components/ui/button";
import { Moon, Sun, CheckSquare, Target, FileText, CloudUpload } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { tasks } = useTaskStore();
  const { goals } = useGoalStore();
  const { notes } = useNoteStore();
  const { toast } = useToast();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("craizeg_theme");
    const dark = theme === "dark" || document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("craizeg_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("craizeg_theme", "light");
    }
    toast({ title: `Switched to ${newDark ? "dark" : "light"} mode` });
  };

  const stats = [
    { label: "Tasks Done", value: tasks.filter(t => t.is_done).length, icon: CheckSquare, color: "text-green-500" },
    { label: "Goals", value: goals.length, icon: Target, color: "text-primary" },
    { label: "Notes", value: notes.length, icon: FileText, color: "text-blue-500" },
  ];

  return (
    <div className="p-6 pb-28 flex flex-col gap-6 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-2xl font-bold text-foreground">Profile</h1>
      </header>

      {/* Avatar */}
      <div className="flex flex-col items-center gap-3 py-4" data-testid="profile-avatar-section">
        <div
          className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg"
          data-testid="img-avatar"
        >
          <span className="text-3xl font-bold font-serif text-primary-foreground">G</span>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold font-serif text-foreground" data-testid="text-username">Guest User</p>
          <p className="text-sm text-muted-foreground mt-0.5">Local account</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3" data-testid="profile-stats">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="bg-card border border-card-border rounded-xl p-4 text-center shadow-sm"
            data-testid={`stat-${stat.label.toLowerCase().replace(" ", "-")}`}
          >
            <stat.icon className={`w-5 h-5 mx-auto mb-1.5 ${stat.color}`} />
            <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <div className="bg-card border border-card-border rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isDark ? (
              <Moon className="w-5 h-5 text-primary" />
            ) : (
              <Sun className="w-5 h-5 text-primary" />
            )}
            <div>
              <p className="font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">{isDark ? "Currently dark" : "Currently light"}</p>
            </div>
          </div>
          <Switch
            checked={isDark}
            onCheckedChange={toggleTheme}
            data-testid="switch-dark-mode"
            aria-label="Toggle dark mode"
          />
        </div>
      </div>

      {/* Sync CTA */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5 text-center shadow-sm">
        <CloudUpload className="w-8 h-8 text-primary mx-auto mb-2" />
        <p className="font-semibold text-foreground mb-1">Sync your data to the cloud</p>
        <p className="text-sm text-muted-foreground mb-4">Create an account to access your data across all devices.</p>
        <Button
          className="w-full h-11"
          onClick={() => navigate("/register")}
          data-testid="button-signup-cta"
        >
          Sign up to sync
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground/60" data-testid="text-app-version">
        Craizeg.fun v1.0.0
      </p>
    </div>
  );
}
