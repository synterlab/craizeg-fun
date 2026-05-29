import { useState, useMemo, useRef } from "react";
import { format, isToday, parseISO } from "date-fns";
import { useTaskStore } from "@/store/taskStore";
import { Checkbox } from "@/components/ui/checkbox";
import { FAB } from "@/components/ui/fab";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, ClipboardList } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Filter = "all" | "today" | "done";

export default function TasksPage() {
  const { tasks, addTask, toggleTask, deleteTask } = useTaskStore();
  const { toast } = useToast();
  const [filter, setFilter] = useState<Filter>("all");
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    if (filter === "today") return tasks.filter(t => t.due_date && isToday(parseISO(t.due_date)));
    if (filter === "done") return tasks.filter(t => t.is_done);
    return tasks;
  }, [tasks, filter]);

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addTask(newTitle.trim(), newDueDate || null);
    setNewTitle("");
    setNewDueDate("");
    setIsAdding(false);
    toast({ title: "Task added" });
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
    toast({ title: "Task deleted" });
  };

  const handleLongPressStart = (id: string) => {
    longPressTimer.current = setTimeout(() => handleDelete(id), 700);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Today", value: "today" },
    { label: "Done", value: "done" },
  ];

  return (
    <div className="p-6 pb-28 flex flex-col gap-6 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-2xl font-bold text-foreground">Tasks</h1>
        <p className="text-sm text-muted-foreground mt-1">{tasks.filter(t => t.is_done).length} of {tasks.length} completed</p>
      </header>

      <div className="flex gap-2" data-testid="task-filter-tabs">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            data-testid={`filter-${f.value}`}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              filter === f.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
          <ClipboardList className="w-12 h-12 text-muted-foreground/40" />
          <p className="text-muted-foreground font-medium">No tasks here yet.</p>
          <p className="text-sm text-muted-foreground/70">Tap + to add your first task</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(task => (
            <div
              key={task.id}
              data-testid={`task-card-${task.id}`}
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-card-border shadow-sm transition-all hover:-translate-y-0.5 select-none"
              onMouseDown={() => handleLongPressStart(task.id)}
              onMouseUp={handleLongPressEnd}
              onMouseLeave={handleLongPressEnd}
              onTouchStart={() => handleLongPressStart(task.id)}
              onTouchEnd={handleLongPressEnd}
            >
              <Checkbox
                checked={task.is_done}
                onCheckedChange={() => {
                  toggleTask(task.id);
                  toast({ title: task.is_done ? "Task reopened" : "Task completed" });
                }}
                className="rounded-full w-5 h-5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary flex-shrink-0"
                id={`task-${task.id}`}
                data-testid={`checkbox-task-${task.id}`}
              />
              <div className="flex-1 min-w-0">
                <label
                  htmlFor={`task-${task.id}`}
                  className={cn(
                    "font-medium block truncate cursor-pointer transition-all",
                    task.is_done ? "line-through text-muted-foreground" : "text-foreground"
                  )}
                >
                  {task.title}
                </label>
                {task.due_date && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-xs mt-1",
                      isToday(parseISO(task.due_date)) && !task.is_done && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                    )}
                  >
                    {format(parseISO(task.due_date), "MMM d")}
                  </Badge>
                )}
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                data-testid={`button-delete-task-${task.id}`}
                className="p-1.5 text-muted-foreground hover:text-destructive transition-colors rounded-lg"
                aria-label="Delete task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <FAB onClick={() => setIsAdding(true)} />
        <SheetContent side="bottom" className="rounded-t-[2rem] p-6 min-h-[320px]">
          <SheetHeader className="mb-6">
            <SheetTitle>Add Task</SheetTitle>
          </SheetHeader>
          <div className="space-y-4">
            <Input
              placeholder="What needs to be done?"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleAdd()}
              className="h-12 text-lg"
              autoFocus
              data-testid="input-task-title"
            />
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Due date (optional)</label>
              <Input
                type="date"
                value={newDueDate}
                onChange={e => setNewDueDate(e.target.value)}
                className="h-12"
                data-testid="input-task-due-date"
              />
            </div>
            <Button className="w-full h-12" onClick={handleAdd} data-testid="button-save-task">
              Save Task
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
