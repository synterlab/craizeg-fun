import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    gradient: "from-orange-500/20 to-amber-600/10",
    icon: "🎯",
    title: "Welcome to Craizeg",
    desc: "Your all-in-one personal organiser — built for clarity, not complexity.",
  },
  {
    gradient: "from-rose-500/20 to-orange-500/10",
    icon: "✅",
    title: "Tasks, Goals & Notes",
    desc: "Everything you need, beautifully organised in one quiet space.",
  },
  {
    gradient: "from-amber-500/20 to-orange-400/10",
    icon: "🚀",
    title: "Free. Forever.",
    desc: "No subscriptions, no tracking. Yours to keep, on device.",
  },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const done = () => {
    localStorage.setItem("craizeg_onboarded", "true");
    navigate("/app");
  };

  const next = () => (current === slides.length - 1 ? done() : setCurrent(p => p + 1));

  const slide = slides[current];

  return (
    <div className="min-h-[100dvh] w-full bg-[#080808] flex flex-col relative overflow-hidden">

      {/* Aurora bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn("aurora-blob-1 absolute inset-0 opacity-20 transition-all duration-700 bg-gradient-to-br", slide.gradient)} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl bg-primary/10" />
      </div>

      {/* Skip */}
      <div className="absolute top-5 right-5 z-10">
        <Button variant="ghost" onClick={done} data-testid="skip-onboarding"
          className="text-white/40 hover:text-white/70 text-sm">
          Skip
        </Button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center z-10">
        <div key={current} className="flex flex-col items-center animate-in slide-in-from-right-8 fade-in duration-300 fill-mode-both">
          {/* Emoji in glowing circle */}
          <div className="relative mb-10">
            <div className="absolute inset-0 rounded-full blur-2xl bg-primary/20 scale-150" />
            <div className="relative w-28 h-28 rounded-[2.5rem] bg-white/6 border border-white/10 flex items-center justify-center text-6xl shadow-2xl">
              {slide.icon}
            </div>
          </div>

          <h1 className="font-serif font-black text-white text-3xl mb-4 leading-tight">
            {slide.title}
          </h1>
          <p className="text-white/55 text-base leading-relaxed max-w-xs">
            {slide.desc}
          </p>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="px-8 pb-10 z-10 flex flex-col gap-7">
        {/* Dots */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={cn("rounded-full transition-all duration-300 focus:outline-none",
                i === current ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/20")} />
          ))}
        </div>

        <Button size="lg" onClick={next} data-testid="next-onboarding"
          className="w-full h-14 text-base rounded-2xl font-bold shadow-xl shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all">
          {current === slides.length - 1 ? "Get Started" : "Continue"}
          <ChevronRight className="w-5 h-5 ml-1.5" />
        </Button>
      </div>
    </div>
  );
}
