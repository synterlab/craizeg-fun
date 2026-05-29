import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { CheckSquare, Target, Calendar, FileText, BarChart2, Bell, Twitter } from "lucide-react";

const FEATURES = [
  { icon: CheckSquare, title: "Tasks", desc: "Simple, satisfying lists that actually get done." },
  { icon: Target,      title: "Goals",  desc: "Track progress visually with milestones." },
  { icon: Calendar,    title: "Calendar", desc: "Your time, mapped out clearly." },
  { icon: FileText,    title: "Notes",  desc: "Thoughts and ideas, safely stored." },
  { icon: BarChart2,   title: "Analytics", desc: "Understand your habits and streaks." },
  { icon: Bell,        title: "Reminders", desc: "Never miss a beat again." },
];

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.3) % 84}%`,
  top:  `${15 + (i * 11.7) % 70}%`,
  size: 3 + (i % 4),
  dur:  `${5 + (i % 5)}s`,
  delay: `${(i * 0.7) % 4}s`,
  opacity: 0.15 + (i % 4) * 0.06,
}));

export default function LandingPage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [featVisible, setFeatVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFeatVisible(true); },
      { threshold: 0.1 }
    );
    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background font-sans overflow-x-hidden">

      {/* ── Sticky Navbar ── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="container flex h-16 max-w-6xl items-center justify-between px-4 mx-auto">
          <Logo size={34} textClassName="text-xl text-white" />
          <nav className="flex items-center gap-2">
            <a
              href="https://x.com/CraizeG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              aria-label="Follow @CraizeG on X"
            >
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">@CraizeG</span>
            </a>
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex text-white hover:text-white hover:bg-white/10" data-testid="nav-login">
                Sign In
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30" data-testid="nav-try-free">
                Try for Free
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">

        {/* ── Hero with Ken Burns animated background ── */}
        <section className="relative w-full min-h-[92dvh] flex items-center justify-center overflow-hidden">

          {/* Animated background image — Ken Burns */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover scale-110 hero-kenburns"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
            {/* Warm orange tone overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-transparent" />
          </div>

          {/* Floating light particles */}
          {PARTICLES.map(p => (
            <span
              key={p.id}
              aria-hidden="true"
              className="hero-particle absolute rounded-full bg-white pointer-events-none"
              style={{
                left: p.left,
                top:  p.top,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                ["--dur" as string]: p.dur,
                ["--delay" as string]: p.delay,
              }}
            />
          ))}

          {/* Hero content */}
          <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center text-white">
            {/* X badge */}
            <a
              href="https://x.com/CraizeG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8 transition-all hover:scale-105 active:scale-95"
              style={{ animationDelay: "0ms" }}
            >
              <Twitter className="w-3.5 h-3.5" />
              <span>Follow us @CraizeG on X</span>
              <span className="ml-1 text-xs bg-primary/80 text-white px-2 py-0.5 rounded-full">New</span>
            </a>

            <h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              style={{
                animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.1s both",
                textShadow: "0 2px 32px rgba(0,0,0,0.4)",
              }}
            >
              Get it all organised,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your way.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.25s both" }}
            >
              Skyrocket your progress with clarity on what matters most. All your tasks, knowledge, and time — managed beautifully.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.4s both" }}
            >
              <a href="#download" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg h-14 px-8 shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  data-testid="hero-download"
                >
                  Download for Android →
                </Button>
              </a>
              <Link to="/onboarding" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                  data-testid="hero-try"
                >
                  Try for Free →
                </Button>
              </Link>
            </div>

            {/* Scroll hint */}
            <div
              className="mt-16 flex flex-col items-center gap-2 opacity-60"
              style={{ animation: "slide-up 0.8s cubic-bezier(.22,1,.36,1) 0.6s both" }}
            >
              <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Scroll to explore</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" style={{ animation: "sweep 2s ease-in-out infinite" }} />
            </div>
          </div>
        </section>

        {/* ── X Social Proof Banner ── */}
        <div className="bg-[#0d0d0d] border-y border-white/5 py-4">
          <div className="container max-w-6xl mx-auto px-4 flex items-center justify-center gap-3 flex-wrap">
            <Twitter className="w-5 h-5 text-[#1da1f2]" />
            <span className="text-white/70 text-sm">
              Keep up with updates and tips — follow us on X
            </span>
            <a
              href="https://x.com/CraizeG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-all hover:scale-105"
            >
              <Twitter className="w-3.5 h-3.5" />
              @CraizeG
            </a>
          </div>
        </div>

        {/* ── Features ── */}
        <section id="features" className="py-20 bg-background w-full" ref={featuresRef}>
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">One quiet space for your entire life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <Card
                  key={i}
                  className="bg-card border-card-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  style={featVisible ? {
                    animation: `slide-up 0.6s cubic-bezier(.22,1,.36,1) ${i * 80}ms both`,
                  } : { opacity: 0 }}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 text-primary transition-colors duration-300">
                      <f.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download Section ── */}
        <section id="download" className="relative py-28 w-full overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-95" />
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
          />
          <div className="container relative px-4 mx-auto max-w-4xl text-center z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
              Download Craizeg for Android
            </h2>
            <p className="text-orange-100 mb-10 text-xl max-w-xl mx-auto">
              Take your productivity everywhere. Free, lightweight, and yours.
            </p>
            <a href="/craizeg.apk" download>
              <Button
                size="lg"
                className="h-16 px-10 text-lg rounded-full bg-white text-orange-600 hover:bg-white/90 shadow-2xl shadow-black/30 font-bold transition-all hover:-translate-y-1 active:translate-y-0"
                data-testid="download-apk"
              >
                Download APK — Free
              </Button>
            </a>
            <p className="mt-5 text-sm text-orange-200/80">v1.0.0 • 15MB • Android 7+</p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#0a0a0a] text-[#f0f0f0] py-14 w-full border-t border-white/5">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-2">
              <Logo size={32} textClassName="text-xl text-white mb-1" className="mb-4" />
              <p className="text-white/50 max-w-xs text-sm leading-relaxed">
                A quiet, personal productivity space for people who want to stay organised without the noise.
              </p>
              {/* X / Twitter CTA */}
              <a
                href="https://x.com/CraizeG"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-white/8 hover:bg-white/12 border border-white/10 text-white/80 hover:text-white text-sm px-4 py-2.5 rounded-xl transition-all group"
              >
                <Twitter className="w-4 h-4 text-[#1da1f2] group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold leading-none">@CraizeG</p>
                  <p className="text-xs text-white/40 leading-none mt-0.5">Follow on X</p>
                </div>
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
                <li><Link to="/login" className="hover:text-primary transition-colors">Web App</Link></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>
                  <a
                    href="https://x.com/CraizeG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <Twitter className="w-3.5 h-3.5" /> X / Twitter
                  </a>
                </li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">© 2025 Craizeg.fun. All rights reserved.</p>
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <span>Made with</span>
              <span className="text-primary">♥</span>
              <span>for focused people</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
