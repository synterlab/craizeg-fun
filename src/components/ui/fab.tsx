import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function FAB({ className, ...props }: FABProps) {
  return (
    <button
      className={cn(
        "fixed bottom-[80px] right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 z-40 animate-in zoom-in spin-in-12 duration-300",
        className
      )}
      data-testid="button-fab"
      {...props}
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}
