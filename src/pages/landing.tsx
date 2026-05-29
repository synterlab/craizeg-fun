import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  CheckSquare, Target, Calendar, FileText,
  BarChart2, Bell, Download, ArrowRight,
  Sparkles, Shield, Zap,
} from "lucide-react";

const FEATURES = [
  { icon: CheckSquare, title: "Tasks",     desc: "Simple, satisfying lists that actually get done." },
  { icon: Target,      title: "Goals",     desc: "Track progress visually with milestones." },
  { icon: Calendar,    title: "Calendar",  desc: "Your time, mapped out clearly." },
  { icon: FileText,    title: "Notes",     desc: "Thoughts and ideas, safely stored." },
  { icon: BarChart2,   title: "Analytics", desc: "Understand your habits and streaks." },
  { icon: Bell,        title: "Reminders", desc: "Never miss a beat again." },
];

const TICKER_ITEMS = [
  "Free forever", "Works offline", "Android APK",
  "PWA ready", "No account needed", "Privacy first",
  "Open source", "6 core features",
];

const STEPS = [
  { icon: Download, num: "01", title: "Download or open",  desc: "Install the APK or open the web app. No sign-up required." },
  { icon: Sparkles, num: "02", title: "Set your goals",    desc: "Add tasks, milestones, and reminders in under a minute." },
  { icon: Zap,      num: "03", title: "Stay on track",     desc: "Check off tasks, visualise progress, build streaks." },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function PhoneMock() {
  return (
    <div className="float-phone relative mx-auto" style={{ width: 210, height: 420 }}>
      <div className="absolute inset-0 rounded-[38px] blur-2xl opacity-40"
        style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)", transform: "scale(1.2)" }} />
      <div className="relative w-full h-full rounded-[38px] border-2 border-white/20 bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-black/70">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black/80 z-10" />
        <div className="absolute inset-0 pt-9 px-3 pb-3 flex flex-col gap-2">
          <div className="flex items-center justify-between px-2 py-1.5">
            <div className="h-2.5 w-20 rounded-full bg-white/20" />
            <div className="h-6 w-6 rounded-full bg-primary/60" />
          </div>
          <div className="px-2 mb-1">
            <div className="h-2.5 w-24 rounded-full bg-white/30 mb-1.5" />
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
          </div>
          <div className="rounded-2xl bg-primary/80 p-3 flex items-center justify-between">
            <div>
              <div className="h-1.5 w-14 rounded-full bg-white/50 mb-1.5" />
              <div className="h-4 w-8 rounded-md bg-white/90" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <CheckSquare className="w-4 h-4 text-white/80" />
            </div>
          </div>
          {[80, 60, 45].map((w, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/8 rounded-xl px-3 py-2">
              <div className="w-3.5 h-3.5 rounded-full border border-primary/60 flex-shrink-0 flex items-center justify-center">
                {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </div>
              <div className="h-1.5 rounded-full bg-white/25 flex-1" style={{ maxWidth: `${w}%` }} />
            </div>
          ))}
          <div className="bg-white/8 rounded-xl px-3 py-2 mt-1">
            <div className="flex justify-between mb-1.5">
              <div className="h-1.5 w-16 rounded-full bg-white/20" />
              <div className="h-1.5 w-7 rounded-full bg-primary/60" />
            </div>
            <div className="h-1 w-full rounded-full bg-white/10">
              <div className="h-full rounded-full bg-primary/80" style={{ width: "68%" }} />
            </div>
          </div>
          <div className="absolute bottom-2 left-3 right-3 h-9 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-around px-2">
            {[0,1,2,3,4].map(i => (
              <div key={i} className={`w-4 h-4 rounded-md ${i === 0 ? "bg-primary/70" : "bg-white/15"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const featRef  = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [featVis,  setFeatVis]  = useState(false);
  const [stepsVis, setStepsVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.target === featRef.current  && e.isIntersecting) setFeatVis(true);
        if (e.target === stepsRef.current && e.isIntersecting) setStepsVis(true);
      }),
      { threshold: 0.1 }
    );
    if (featRef.current)  obs.observe(featRef.current);
    if (stepsRef.current) obs.observe(stepsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-[#080808] font-sans overflow-x-hidden">

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-black/40 backdrop-blur-xl">
        <div className="container flex h-16 max-w-5xl items-center justify-between px-4 mx-auto">
          <Logo size={30} dark />
          <nav className="flex items-center gap-2">
            {/* X / Twitter - visible and prominent */}
            <a
              href="https://x.com/CraizeG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @CraizeG on X"
              className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/8 hover:bg-white/14 border border-white/10 hover:border-white/20 text-white/55 hover:text-white text-xs font-semibold transition-all"
            >
              <XIcon />
              <span className="hidden sm:inline">@CraizeG</span>
            </a>
            <Link to="/login">
              <Button variant="ghost" size="sm"
                className="hidden sm:inline-flex text-white/70 hover:text-white hover:bg-white/10 text-sm h-8 px-3">
                Sign In
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button size="sm"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 h-8 px-4 text-sm font-semibold">
                Try Free
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">

        {/* Hero */}
        <section className="relative w-full min-h-[94dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay muted loop playsInline preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.35) saturate(0.8)" }}
            >
              <source src="https://videos.pexels.com/video-files/3576378/3576378-hd_1920_1080_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />
              <source src="https://videos.pexels.com/video-files/3576378/3576378-sd_640_360_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-950/60 via-black/20 to-black/50" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat", backgroundSize: "128px",
              }}
            />
          </div>

          <div className="container relative z-10 px-4 mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 py-16 md:py-24">
              <div className="flex-1 text-center md:text-left text-white">
                <div className="slide-up inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
                  <Shield className="w-3 h-3 text-primary" />
                  Personal · Private · Free
                </div>

                <h1
                  className="slide-up delay-100 font-serif font-black leading-[1.05] mb-6"
                  style={{ fontSize: "clamp(2.6rem, 7vw, 4.5rem)", textShadow: "0 2px 48px rgba(0,0,0,0.6)" }}
                >
                  Get it all organised,{" "}
                  <span className="gradient-text block sm:inline">your way.</span>
                </h1>

                <p
                  className="slide-up delay-200 text-white/70 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
                >
                  Tasks, goals, notes, and calendar in one quiet space
                  designed for people who want to stay sharp without the noise.
                </p>

                <div className="slide-up delay-300 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                  <a href="#download" className="w-full sm:w-auto">
                    <Button size="lg" data-testid="hero-download"
                      className="pulse-cta w-full sm:w-auto h-14 px-8 rounded-full text-base font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:-translate-y-0.5 transition-all active:translate-y-0">
                      <Download className="w-4 h-4 mr-2" />
                      Download APK
                    </Button>
                  </a>
                  <Link to="/onboarding" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" data-testid="hero-try"
                      className="w-full sm:w-auto h-14 px-8 rounded-full text-base bg-white/10 hover:bg-white/18 text-white border-white/25 backdrop-blur-sm hover:-translate-y-0.5 transition-all active:translate-y-0">
                      Try in Browser
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="slide-up delay-400 flex items-center justify-center md:justify-start gap-8 mt-10">
                  {[["100%", "Free"], ["PWA", "Offline"], ["Zero", "Tracking"]].map(([val, label]) => (
                    <div key={label} className="text-center">
                      <p className="text-white font-bold text-lg leading-none" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>{val}</p>
                      <p className="text-white/40 text-xs mt-0.5 uppercase tracking-wider">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="slide-up delay-500 flex-shrink-0 hidden sm:block">
                <PhoneMock />
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-medium">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" style={{ animation: "sweep 2s ease-in-out infinite" }} />
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="border-y border-white/8 bg-[#0d0d0d] py-3 overflow-hidden">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest font-semibold px-8 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-primary/70 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <section id="features" className="py-24 bg-[#080808] w-full" ref={featRef}>
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">What's inside</p>
              <h2 className="font-serif text-white font-black leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                One space for everything.
              </h2>
              <p className="text-white/50 max-w-md mx-auto">
                Six focused tools, zero bloat. Each feature earns its place.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {FEATURES.map((f, i) => (
                <div key={i} className="feature-card bg-white/4 border border-white/8 rounded-2xl p-5 group"
                  style={featVis ? { animation: `slide-up 0.6s cubic-bezier(.22,1,.36,1) ${i * 70}ms both` } : { opacity: 0 }}>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 group-hover:bg-primary/25 flex items-center justify-center mb-4 transition-colors">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-white font-bold text-base mb-1.5">{f.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-[#0a0a0a] border-y border-white/5 w-full" ref={stepsRef}>
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">How it works</p>
              <h2 className="font-serif text-white font-black leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                Up and running in minutes.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left"
                  style={stepsVis ? { animation: `slide-up 0.7s cubic-bezier(.22,1,.36,1) ${i * 120}ms both` } : { opacity: 0 }}>
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-black text-primary/70 bg-[#0a0a0a] px-1">{step.num}</span>
                  </div>
                  <h3 className="font-serif text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="relative py-28 w-full overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #c2410c 0%, #f97316 50%, #ea580c 100%)" }} />
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-black/20 blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="container relative px-4 mx-auto max-w-3xl text-center z-10">
            <p className="text-white/70 text-xs uppercase tracking-[0.25em] font-bold mb-4">Android · Free · 15 MB</p>
            <h2 className="font-serif font-black text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
              Take Craizeg everywhere.
            </h2>
            <p className="text-white/80 mb-10 text-lg max-w-lg mx-auto">
              Install once, works offline. No subscription, no tracking, no noise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://github.com/synterlab/craizeg-fun/releases/latest/download/craizeg.apk" download>
                <Button size="lg" data-testid="download-apk"
                  className="h-14 px-10 text-base rounded-full bg-white text-orange-600 hover:bg-white/92 shadow-2xl shadow-black/30 font-bold hover:-translate-y-1 active:translate-y-0 transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Download APK, Free
                </Button>
              </a>
              <Link to="/onboarding">
                <Button variant="outline" size="lg"
                  className="h-14 px-8 text-base rounded-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:-translate-y-1 active:translate-y-0 transition-all">
                  Try Browser Version
                </Button>
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/50">v1.0.0 · Android 7+ · No account needed</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#060606] text-white py-14 border-t border-white/5">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-2">
              <Logo size={28} dark className="mb-4" />
              <p className="text-white/40 max-w-xs text-sm leading-relaxed">
                A quiet, personal productivity space for people who want clarity without the clutter.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white text-xs uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
                <li><Link to="/login" className="hover:text-primary transition-colors">Web App</Link></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white text-xs uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="/roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
                <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/25">© 2026 Craizeg.fun. All rights reserved.</p>
            <p className="text-xs text-white/25 flex items-center gap-1">Made with <span className="text-primary">♥</span> for focused people</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
