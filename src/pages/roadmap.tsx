import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import {
  Rocket, Star, Link2, Smartphone, Users, Bot, Globe,
  CheckCircle2, Clock, Circle,
} from "lucide-react";

type Status = "done" | "active" | "upcoming";

interface Milestone {
  date: string;
  title: string;
  items: string[];
  status: Status;
  icon: React.ElementType;
}

const SHORT_TERM: Milestone[] = [
  {
    date: "May 2026",
    title: "Beta Launch",
    status: "active",
    icon: Rocket,
    items: [
      "Web platform goes live at craizeg.fun",
      "Core features: Tasks, Goals, Notes, Calendar",
      "PWA support — installable on any device",
      "Android APK available for direct download",
      "Guest mode — no sign-up required",
    ],
  },
  {
    date: "June 2026",
    title: "Full Feature Release",
    status: "upcoming",
    icon: Star,
    items: [
      "Analytics dashboard — streaks, habits, heatmap",
      "Reminders & push notifications",
      "Dark / light theme toggle",
      "Offline-first sync with local storage",
      "Performance & accessibility improvements",
    ],
  },
  {
    date: "July 2026",
    title: "Blockchain Integration",
    status: "upcoming",
    icon: Link2,
    items: [
      "On-chain task completion verification",
      "Achievement NFTs — earn rewards for streaks",
      "Decentralised goal milestones via smart contracts",
      "Optional wallet connect (no crypto required to use app)",
      "Transparent, tamper-proof productivity log",
    ],
  },
];

const LONG_TERM: Milestone[] = [
  {
    date: "Q3 2026",
    title: "Play Store & App Store",
    status: "upcoming",
    icon: Smartphone,
    items: [
      "Native Android app submitted to Google Play Store",
      "Native iOS app submitted to Apple App Store",
      "In-app review & rating system",
      "Push notification improvements for native",
    ],
  },
  {
    date: "Q4 2026",
    title: "Team Collaboration",
    status: "upcoming",
    icon: Users,
    items: [
      "Shared workspaces for small teams",
      "Assign tasks to team members",
      "Collaborative goal tracking",
      "Comments & activity feed on shared goals",
    ],
  },
  {
    date: "Q1 2027",
    title: "AI Assistant",
    status: "upcoming",
    icon: Bot,
    items: [
      "Natural language task creation",
      "Smart scheduling suggestions",
      "AI-powered habit analysis & insights",
      "Goal decomposition — big goals broken into steps",
    ],
  },
  {
    date: "Q2 2027",
    title: "Global Scale",
    status: "upcoming",
    icon: Globe,
    items: [
      "Multi-language support (10+ languages)",
      "Enterprise tier with SSO & admin controls",
      "Public API for third-party integrations",
      "Zapier & Notion integration",
    ],
  },
];

const STATUS_CONFIG: Record<Status, { label: string; color: string; Icon: React.ElementType }> = {
  done:     { label: "Completed",  color: "text-green-400 bg-green-400/10 border-green-400/20", Icon: CheckCircle2 },
  active:   { label: "In Progress", color: "text-primary bg-primary/10 border-primary/20",      Icon: Clock },
  upcoming: { label: "Upcoming",   color: "text-white/40 bg-white/5 border-white/10",           Icon: Circle },
};

function MilestoneCard({ m, i }: { m: Milestone; i: number }) {
  const s = STATUS_CONFIG[m.status];
  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${s.color} transition-all`}>
          <m.icon className="w-5 h-5" />
        </div>
        {i < SHORT_TERM.length - 1 || true ? (
          <div className="flex-1 w-px bg-white/8 mt-2 min-h-[2rem]" />
        ) : null}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">{m.date}</span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.color}`}>
            <s.Icon className="w-3 h-3" />
            {s.label}
          </span>
        </div>
        <h3 className="font-serif text-white font-black text-xl md:text-2xl mb-4">{m.title}</h3>
        <ul className="space-y-2.5">
          {m.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-white/55 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#080808] font-sans overflow-x-hidden">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/40 backdrop-blur-xl">
        <div className="container flex h-16 max-w-5xl items-center justify-between px-4 mx-auto">
          <Link to="/"><Logo size={28} dark /></Link>
          <Link to="/onboarding">
            <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Try Free →
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Aurora background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="aurora-blob-1 absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
            <div className="aurora-blob-2 absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{ background: "radial-gradient(ellipse, #c2410c 0%, transparent 70%)" }} />
          </div>
          <div className="container relative px-4 mx-auto max-w-3xl text-center z-10">
            <div className="slide-up inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              <Rocket className="w-3.5 h-3.5 text-primary" />
              Product Roadmap
            </div>
            <h1 className="slide-up delay-100 font-serif font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
              Where we're <span className="gradient-text">headed.</span>
            </h1>
            <p className="slide-up delay-200 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Craizeg is actively being built. Here's what's shipping,
              what's coming, and where we're going in the long run.
            </p>
          </div>
        </section>

        {/* Short-term roadmap */}
        <section className="pb-8 border-t border-white/5">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="py-12 mb-4 flex items-center gap-4">
              <div>
                <Badge className="bg-primary/15 text-primary border-primary/20 text-xs font-bold uppercase tracking-wider mb-2">
                  Short-term Roadmap
                </Badge>
                <h2 className="font-serif text-white font-black text-2xl md:text-3xl">May — July 2026</h2>
              </div>
            </div>
            <div>
              {SHORT_TERM.map((m, i) => <MilestoneCard key={i} m={m} i={i} />)}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/8 bg-[#0a0a0a] py-6">
          <div className="container px-4 mx-auto max-w-3xl">
            <p className="text-white/25 text-xs uppercase tracking-widest text-center font-semibold">
              Beyond July 2026 — Long-term Vision
            </p>
          </div>
        </div>

        {/* Long-term roadmap */}
        <section className="bg-[#0a0a0a] pb-20">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="py-12 mb-4 flex items-center gap-4">
              <div>
                <Badge className="bg-white/8 text-white/50 border-white/10 text-xs font-bold uppercase tracking-wider mb-2">
                  Long-term Roadmap
                </Badge>
                <h2 className="font-serif text-white font-black text-2xl md:text-3xl">Q3 2026 & Beyond</h2>
              </div>
            </div>
            <div>
              {LONG_TERM.map((m, i) => <MilestoneCard key={i} m={m} i={i} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/8 py-20 text-center">
          <div className="container px-4 mx-auto max-w-xl">
            <h2 className="font-serif font-black text-white text-2xl md:text-3xl mb-4">
              Join the journey.
            </h2>
            <p className="text-white/45 mb-8 leading-relaxed">
              Craizeg is free, open, and built for real people.
              Start today — no account needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/onboarding">
                <button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                  Try Craizeg Free →
                </button>
              </Link>
              <a href="https://x.com/CraizeG" target="_blank" rel="noopener noreferrer"
                className="h-12 px-8 rounded-full bg-white/6 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 font-semibold text-sm transition-all inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Follow @CraizeG
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#060606] py-8">
        <div className="container px-4 mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 Craizeg.fun. All rights reserved.</p>
          <Link to="/" className="text-xs text-white/30 hover:text-primary transition-colors">← Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}
