import { useState } from "react";
import { format, isSameDay, parseISO } from "date-fns";
import { useTaskStore } from "@/store/taskStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

type CalendarValue = Date | [Date, Date] | null;

export default function CalendarPage() {
  const { tasks, toggleTask } = useTaskStore();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const getTasksForDate = (date: Date) =>
    tasks.filter(t => t.due_date && isSameDay(parseISO(t.due_date), date));

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSheetOpen(true);
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;
    const count = getTasksForDate(date).length;
    if (!count) return null;
    return (
      <div className="flex justify-center mt-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
      </div>
    );
  };

  const selectedTasks = selectedDate ? getTasksForDate(selectedDate) : [];

  return (
    <div className="p-6 pb-28 flex flex-col gap-6 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-2xl font-bold text-foreground">Calendar</h1>
        <p className="text-sm text-muted-foreground mt-1">Tap a date to see tasks</p>
      </header>

      <div className="craizeg-calendar rounded-2xl overflow-hidden border border-border shadow-sm">
        <Calendar
          onChange={(val: CalendarValue) => {
            if (val instanceof Date) handleDateClick(val);
          }}
          tileContent={tileContent}
          className="w-full border-none"
          data-testid="calendar-widget"
        />
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="bottom" className="rounded-t-[2rem] p-6 min-h-[300px]">
          <SheetHeader className="mb-4">
            <SheetTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              {selectedDate ? format(selectedDate, "EEEE, MMMM d") : ""}
            </SheetTitle>
          </SheetHeader>
          {selectedTasks.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No tasks scheduled for this day.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {selectedTasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
                  data-testid={`calendar-task-${task.id}`}
                >
                  <Checkbox
                    checked={task.is_done}
                    onCheckedChange={() => {
                      toggleTask(task.id);
                      toast({ title: task.is_done ? "Task reopened" : "Task completed" });
                    }}
                    className="rounded-full w-5 h-5 border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    id={`cal-task-${task.id}`}
                  />
                  <label
                    htmlFor={`cal-task-${task.id}`}
                    className={cn(
                      "flex-1 font-medium cursor-pointer",
                      task.is_done ? "line-through text-muted-foreground" : "text-foreground"
                    )}
                  >
                    {task.title}
                  </label>
                </div>
              ))}
            </div>
          )}
        </SheetContent>
      </Sheet>

      <style>{`
        .craizeg-calendar .react-calendar {
          background: transparent;
          font-family: inherit;
          border: none;
          width: 100%;
        }
        .craizeg-calendar .react-calendar__navigation button {
          color: hsl(var(--foreground));
          font-weight: 600;
          font-size: 0.95rem;
          min-height: 44px;
          background: transparent;
          border-radius: 0.5rem;
        }
        .craizeg-calendar .react-calendar__navigation button:hover {
          background: hsl(var(--secondary));
        }
        .craizeg-calendar .react-calendar__month-view__weekdays {
          color: hsl(var(--muted-foreground));
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        .craizeg-calendar .react-calendar__month-view__weekdays abbr {
          text-decoration: none;
        }
        .craizeg-calendar .react-calendar__tile {
          background: transparent;
          color: hsl(var(--foreground));
          border-radius: 0.5rem;
          min-height: 44px;
          font-size: 0.875rem;
          padding: 0.4rem 0.2rem;
        }
        .craizeg-calendar .react-calendar__tile:hover {
          background: hsl(var(--secondary));
        }
        .craizeg-calendar .react-calendar__tile--active,
        .craizeg-calendar .react-calendar__tile--active:hover {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .craizeg-calendar .react-calendar__tile--now {
          background: hsl(var(--secondary));
          font-weight: 700;
        }
        .craizeg-calendar .react-calendar__tile--now.react-calendar__tile--active {
          background: hsl(var(--primary));
        }
        .craizeg-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: hsl(var(--muted-foreground) / 0.5);
        }
      `}</style>
    </div>
  );
}
