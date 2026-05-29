import { useState, useMemo } from "react";
import { format, isToday } from "date-fns";
import { useTaskStore } from "@/store/taskStore";
import { useGoalStore } from "@/store/goalStore";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { FAB } from "@/components/ui/fab";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Target, CheckCircle2, CheckSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const { tasks, toggleTask, addTask } = useTaskStore();
  const { goals } = useGoalStore();
  const { toast } = useToast();

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const timeGreeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  const todayTasks = useMemo(() => {
    return tasks.filter(t => t.due_date && isToday(new Date(t.due_date)));
  }, [tasks]);

  const topGoals = useMemo(() => {
    return [...goals].sort((a, b) => b.progress - a.progress).slice(0, 3);
  }, [goals]);

  const weeklyCompletion = useMemo(() => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    return tasks.filter(t => t.is_done && new Date(t.created_at) >= startOfWeek).length;
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    addTask(newTaskTitle.trim(), new Date().toISOString());
    setNewTaskTitle("");
    setIsAddingTask(false);
    toast({ title: "Task added", description: "Your task has been created." });
  };

  return (
    <div className="p-6 pb-24 flex flex-col gap-8 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-3xl font-bold text-foreground">
          {timeGreeting}, Guest
        </h1>
        <p className="text-muted-foreground mt-1">
          {format(new Date(), "EEEE, MMMM d")}
        </p>
      </header>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" /> Due Today
          </h2>
          <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {todayTasks.filter(t => t.is_done).length}/{todayTasks.length}
          </span>
        </div>
        
        {todayTasks.length === 0 ? (
          <Card className="bg-secondary/50 border-dashed">
            <CardContent className="p-6 text-center text-muted-foreground">
              <p>No tasks due today. Enjoy your day!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {todayTasks.map(task => (
              <div 
                key={task.id} 
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-card-border shadow-sm transition-opacity"
              >
                <Checkbox 
                  checked={task.is_done}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="rounded-full w-5 h-5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  id={`task-${task.id}`}
                />
                <label 
                  htmlFor={`task-${task.id}`}
                  className={`flex-1 font-medium transition-all ${task.is_done ? 'line-through text-muted-foreground' : 'text-foreground'}`}
                >
                  {task.title}
                </label>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" /> Active Goals
          </h2>
        </div>
        
        {topGoals.length === 0 ? (
          <Card className="bg-secondary/50 border-dashed">
            <CardContent className="p-6 text-center text-muted-foreground">
              <p>No active goals. Time to set some targets.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {topGoals.map(goal => (
              <div key={goal.id} className="p-4 bg-card rounded-xl border border-card-border shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{goal.title}</span>
                  <span className="text-sm font-medium text-primary">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2 bg-secondary" />
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <Card className="bg-primary text-primary-foreground border-none">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-primary-foreground/80 text-sm font-medium mb-1">Tasks Completed This Week</p>
              <p className="text-3xl font-bold font-serif">{weeklyCompletion}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
          </CardContent>
        </Card>
      </section>

      <Sheet open={isAddingTask} onOpenChange={setIsAddingTask}>
        <SheetTrigger asChild>
          <FAB />
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-[2rem] p-6 h-[auto] min-h-[300px]">
          <SheetHeader className="mb-6">
            <SheetTitle>Add Task</SheetTitle>
          </SheetHeader>
          <div className="space-y-4">
            <Input 
              placeholder="What needs to be done?" 
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="h-12 text-lg bg-secondary/50 border-transparent focus-visible:ring-primary focus-visible:bg-background"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddTask();
              }}
            />
            <Button className="w-full h-12" onClick={handleAddTask}>
              Save Task
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
