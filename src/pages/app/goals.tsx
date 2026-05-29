import { useState } from "react";
import { format, parseISO } from "date-fns";
import { useGoalStore } from "@/store/goalStore";
import { Progress } from "@/components/ui/progress";
import { FAB } from "@/components/ui/fab";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Target, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Goal } from "@/lib/types";

export default function GoalsPage() {
  const { goals, addGoal, updateProgress, deleteGoal } = useGoalStore();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTargetDate, setNewTargetDate] = useState("");
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [editProgress, setEditProgress] = useState(0);

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addGoal(newTitle.trim(), newTargetDate || null);
    setNewTitle("");
    setNewTargetDate("");
    setIsAdding(false);
    toast({ title: "Goal added" });
  };

  const handleUpdateProgress = () => {
    if (!editingGoal) return;
    updateProgress(editingGoal.id, editProgress);
    setEditingGoal(null);
    toast({ title: "Progress updated" });
  };

  const handleDelete = (id: string) => {
    deleteGoal(id);
    toast({ title: "Goal deleted" });
  };

  return (
    <div className="p-6 pb-28 flex flex-col gap-6 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-2xl font-bold text-foreground">Goals</h1>
        <p className="text-sm text-muted-foreground mt-1">{goals.length} active goal{goals.length !== 1 ? "s" : ""}</p>
      </header>

      {goals.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
          <Target className="w-12 h-12 text-muted-foreground/40" />
          <p className="text-muted-foreground font-medium">No goals yet.</p>
          <p className="text-sm text-muted-foreground/70">Tap + to set your first goal</p>
        </div>
      ) : (
        <div className="space-y-4">
          {goals.map(goal => (
            <div
              key={goal.id}
              data-testid={`goal-card-${goal.id}`}
              className="p-4 bg-card rounded-xl border border-card-border shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
              onClick={() => { setEditingGoal(goal); setEditProgress(goal.progress); }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{goal.title}</p>
                  {goal.target_date && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Target: {format(parseISO(goal.target_date), "MMM d, yyyy")}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <span className="text-sm font-bold text-primary">{goal.progress}%</span>
                  <button
                    onClick={e => { e.stopPropagation(); handleDelete(goal.id); }}
                    data-testid={`button-delete-goal-${goal.id}`}
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Delete goal"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <Progress value={goal.progress} className="h-2.5 bg-secondary" />
            </div>
          ))}
        </div>
      )}

      {/* Add Goal Sheet */}
      <Sheet open={isAdding} onOpenChange={setIsAdding}>
        <FAB onClick={() => setIsAdding(true)} />
        <SheetContent side="bottom" className="rounded-t-[2rem] p-6 min-h-[320px]">
          <SheetHeader className="mb-6">
            <SheetTitle>Add Goal</SheetTitle>
          </SheetHeader>
          <div className="space-y-4">
            <Input
              placeholder="What do you want to achieve?"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleAdd()}
              className="h-12 text-base"
              autoFocus
              data-testid="input-goal-title"
            />
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Target date (optional)</label>
              <Input
                type="date"
                value={newTargetDate}
                onChange={e => setNewTargetDate(e.target.value)}
                className="h-12"
                data-testid="input-goal-target-date"
              />
            </div>
            <Button className="w-full h-12" onClick={handleAdd} data-testid="button-save-goal">
              Save Goal
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Edit Progress Sheet */}
      <Sheet open={!!editingGoal} onOpenChange={open => !open && setEditingGoal(null)}>
        <SheetContent side="bottom" className="rounded-t-[2rem] p-6 min-h-[280px]">
          <SheetHeader className="mb-6">
            <SheetTitle>Update Progress</SheetTitle>
          </SheetHeader>
          {editingGoal && (
            <div className="space-y-6">
              <p className="text-muted-foreground font-medium">{editingGoal.title}</p>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-bold text-primary text-lg">{editProgress}%</span>
                </div>
                <Slider
                  value={[editProgress]}
                  onValueChange={([v]) => setEditProgress(v)}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                  data-testid="slider-goal-progress"
                />
                <Progress value={editProgress} className="h-3 bg-secondary" />
              </div>
              <Button className="w-full h-12" onClick={handleUpdateProgress} data-testid="button-save-progress">
                Save Progress
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
