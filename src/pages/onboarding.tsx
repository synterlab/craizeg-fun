import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    emoji: "🎯",
    title: "Welcome to Craizeg",
    desc: "Your all-in-one personal organiser",
  },
  {
    emoji: "✅",
    title: "Tasks, Goals & Notes",
    desc: "Everything you need, beautifully organised",
  },
  {
    emoji: "🚀",
    title: "Free Forever, Upgrade Anytime",
    desc: "Start free, unlock premium when you're ready",
  },
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("craizeg_onboarded", "true");
    navigate("/app");
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      handleComplete();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full max-w-md mx-auto bg-background flex flex-col relative overflow-hidden">
      <div className="absolute top-6 right-6 z-10">
        <Button variant="ghost" onClick={handleComplete} data-testid="skip-onboarding" className="text-muted-foreground">
          Skip
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
        <div 
          key={currentSlide}
          className="flex flex-col items-center animate-in slide-in-from-right-8 fade-in duration-300 fill-mode-both"
        >
          <div className="text-8xl mb-8 select-none">
            {slides[currentSlide].emoji}
          </div>
          <h1 className="font-serif text-3xl font-bold mb-4 text-foreground">
            {slides[currentSlide].title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {slides[currentSlide].desc}
          </p>
        </div>
      </div>

      <div className="p-8 flex flex-col gap-8">
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"
              )}
            />
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="w-full h-14 text-lg rounded-full"
          onClick={nextSlide}
          data-testid="next-onboarding"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
