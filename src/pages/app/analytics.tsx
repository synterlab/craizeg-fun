import { useMemo } from "react";
import { format, subDays, isSameDay, parseISO } from "date-fns";
import { useTaskStore } from "@/store/taskStore";
import { useGoalStore } from "@/store/goalStore";
import { useNoteStore } from "@/store/noteStore";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { CheckCircle2, Target, FileText, Flame } from "lucide-react";

export default function AnalyticsPage() {
  const { tasks } = useTaskStore();
  const { goals } = useGoalStore();
  const { notes } = useNoteStore();

  const last7Days = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), 6 - i);
      const completed = tasks.filter(
        t => t.is_done && t.created_at && isSameDay(parseISO(t.created_at), date)
      ).length;
      return { day: format(date, "EEE"), date, completed };
    });
  }, [tasks]);

  const streak = useMemo(() => {
    let count = 0;
    for (let i = 0; i < 30; i++) {
      const date = subDays(new Date(), i);
      const hasCompleted = tasks.some(
        t => t.is_done && isSameDay(parseISO(t.created_at), date)
      );
      if (hasCompleted) count++;
      else break;
    }
    return count;
  }, [tasks]);

  const stats = [
    { label: "Tasks Done", value: tasks.filter(t => t.is_done).length, icon: CheckCircle2, color: "text-green-500" },
    { label: "Active Goals", value: goals.length, icon: Target, color: "text-primary" },
    { label: "Notes Written", value: notes.length, icon: FileText, color: "text-blue-500" },
    { label: "Day Streak", value: streak, icon: Flame, color: "text-orange-500" },
  ];

  return (
    <div className="p-6 pb-28 flex flex-col gap-8 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Your productivity overview</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3" data-testid="analytics-stats">
        {stats.map(stat => (
          <Card key={stat.label} className="border-card-border shadow-sm">
            <CardContent className="p-4">
              <stat.icon className={`w-5 h-5 mb-2 ${stat.color}`} />
              <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Bar Chart */}
      <section>
        <h2 className="font-semibold text-base mb-4 text-foreground">Tasks Completed — Last 7 Days</h2>
        <div className="bg-card rounded-xl border border-card-border p-4 shadow-sm" data-testid="analytics-bar-chart">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={last7Days} margin={{ top: 4, right: 4, bottom: 0, left: -24 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.75rem",
                  fontSize: "0.8rem",
                  color: "hsl(var(--foreground))",
                }}
                cursor={{ fill: "hsl(var(--secondary))", radius: 4 }}
              />
              <Bar dataKey="completed" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Goals Progress */}
      {goals.length > 0 && (
        <section>
          <h2 className="font-semibold text-base mb-4 text-foreground">Goals Progress</h2>
          <div className="space-y-4" data-testid="analytics-goals">
            {goals.map(goal => (
              <div key={goal.id} className="bg-card rounded-xl border border-card-border p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-sm text-foreground truncate flex-1 pr-2">{goal.title}</p>
                  <span className="text-sm font-bold text-primary flex-shrink-0">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2 bg-secondary" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
