import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import {
  Rocket, Star, Link2, Smartphone, Users, Bot, Globe,
  CheckCircle2, Clock, Circle, Coins, Lock,
} from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

type Status = "done" | "active" | "upcoming";

interface BulletItem {
  text: string;
  link?: { href: string; label: string };
  twitter?: { href: string; handle: string };
}

interface Milestone {
  date: string;
  title: string;
  items: BulletItem[];
  status: Status;
  icon: React.ElementType;
  highlight?: boolean;
}

const SHORT_TERM: Milestone[] = [
  {
    date: "May 2026",
    title: "Beta Launch",
    status: "active",
    icon: Rocket,
    items: [
      { text: "Web platform goes live at craizeg.fun" },
      { text: "Core features: Tasks, Goals, Notes, Calendar" },
      { text: "PWA support, installable on any device" },
      { text: "Android APK available for direct download" },
      { text: "Guest mode, no sign-up required" },
    ],
  },
  {
    date: "May 29, 2026",
    title: "Token Launch: $ZEG",
    status: "active",
    icon: Coins,
    highlight: true,
    items: [
      {
        text: "Official launch of the Craizeg utility token $ZEG",
        link: { href: "https://kickstart.easya.io/", label: "kickstart.easya.io" },
        twitter: { href: "https://x.com/easya_kickstart", handle: "@easya_kickstart" },
      },
      { text: "$ZEG will power on-chain achievements, rewards, and token-gated features" },
      { text: "No crypto wallet required to use the core app" },
      { text: "Community members can participate in the launch via EasyA Kickstart" },
    ],
  },
  {
    date: "June 1, 2026",
    title: "Token Lock: 10% Supply",
    status: "upcoming",
    icon: Lock,
    items: [
      {
        text: "10% of total $ZEG supply locked via Streamflow Finance",
        link: { href: "https://app.streamflow.finance", label: "app.streamflow.finance" },
        twitter: { href: "https://x.com/streamflow_fi", handle: "@streamflow_fi" },
      },
      { text: "Locked tokens reserved for long-term ecosystem and team commitments" },
      { text: "Vesting schedule publicly visible on-chain for full transparency" },
    ],
  },
  {
    date: "June 2026",
    title: "Full Feature Release",
    status: "upcoming",
    icon: Star,
    items: [
      { text: "Analytics dashboard with streaks, habits, and heatmap" },
      { text: "Reminders and push notifications" },
      { text: "Dark and light theme toggle" },
      { text: "Offline-first sync with local storage" },
      { text: "Performance and accessibility improvements" },
    ],
  },
  {
    date: "July 2026",
    title: "Blockchain Integration",
    status: "upcoming",
    icon: Link2,
    items: [
      { text: "On-chain task completion verification" },
      { text: "Achievement NFTs, earn rewards for streaks" },
      { text: "Decentralised goal milestones via smart contracts" },
      { text: "Optional wallet connect (no crypto required to use app)" },
      { text: "Transparent, tamper-proof productivity log" },
    ],
  },
];

const LONG_TERM: Milestone[] = [
  {
    date: "Q3 2026",
    title: "Play Store and App Store",
    status: "upcoming",
    icon: Smartphone,
    items: [
      { text: "Native Android app submitted to Google Play Store" },
      { text: "Native iOS app submitted to Apple App Store" },
      { text: "In-app review and rating system" },
      { text: "Push notification improvements for native" },
    ],
  },
  {
    date: "Q4 2026",
    title: "Team Collaboration",
    status: "upcoming",
    icon: Users,
    items: [
      { text: "Shared workspaces for small teams" },
      { text: "Assign tasks to team members" },
      { text: "Collaborative goal tracking" },
      { text: "Comments and activity feed on shared goals" },
    ],
  },
  {
    date: "Q1 2027",
    title: "AI Assistant",
    status: "upcoming",
    icon: Bot,
    items: [
      { text: "Natural language task creation" },
      { text: "Smart scheduling suggestions" },
      { text: "AI-powered habit analysis and insights" },
      { text: "Goal decomposition: big goals broken into steps" },
    ],
  },
  {
    date: "Q2 2027",
    title: "Global Scale",
    status: "upcoming",
    icon: Globe,
    items: [
      { text: "Multi-language support (10+ languages)" },
      { text: "Enterprise tier with SSO and admin controls" },
      { text: "Public API for third-party integrations" },
      { text: "Zapier and Notion integration" },
    ],
  },
];

const STATUS_CONFIG: Record<Status, { label: string; color: string; Icon: React.ElementType }> = {
  done:     { label: "Completed",   color: "text-green-400 bg-green-400/10 border-green-400/20", Icon: CheckCircle2 },
  active:   { label: "In Progress", color: "text-primary bg-primary/10 border-primary/20",       Icon: Clock },
  upcoming: { label: "Upcoming",    color: "text-white/40 bg-white/5 border-white/10",            Icon: Circle },
};

function BulletRow({ item }: { item: BulletItem }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
      <span className="text-white/55 leading-relaxed">
        {item.text}
        {item.link && (
          <>
            {" "}
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {item.link.label}
            </a>
          </>
        )}
        {item.twitter && (
          <a
            href={item.twitter.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            <XIcon />
            {item.twitter.handle}
          </a>
        )}
      </span>
    </li>
  );
}

function MilestoneCard({ m }: { m: Milestone }) {
  const s = STATUS_CONFIG[m.status];
  return (
    <div className="relative flex gap-4 md:gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${s.color} ${m.highlight ? "ring-2 ring-primary/30 ring-offset-2 ring-offset-[#080808]" : ""} transition-all`}>
          <m.icon className="w-5 h-5" />
        </div>
        <div className="flex-1 w-px bg-white/8 mt-2 min-h-[2rem]" />
      </div>
      <div className={`flex-1 pb-10 ${m.highlight ? "rounded-2xl bg-primary/5 border border-primary/12 p-4 -mt-1 mb-6" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">{m.date}</span>
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.color}`}>
            <s.Icon className="w-3 h-3" />
            {s.label}
          </span>
          {m.highlight && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary">
              Live today
            </span>
          )}
        </div>
        <h3 className="font-serif text-white font-black text-xl md:text-2xl mb-4">{m.title}</h3>
        <ul className="space-y-2.5">
          {m.items.map((item, j) => <BulletRow key={j} item={item} />)}
        </ul>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#080808] font-sans overflow-x-hidden">

      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/40 backdrop-blur-xl">
        <div className="container flex h-16 max-w-5xl items-center justify-between px-4 mx-auto">
          <Link to="/"><Logo size={28} dark /></Link>
          <Link to="/onboarding">
            <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Try Free &rarr;
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1">

        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full opacity-10"
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

        <section className="pb-8 border-t border-white/5">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="py-12 mb-4">
              <Badge className="bg-primary/15 text-primary border-primary/20 text-xs font-bold uppercase tracking-wider mb-2">
                Short-term Roadmap
              </Badge>
              <h2 className="font-serif text-white font-black text-2xl md:text-3xl">May to July 2026</h2>
            </div>
            <div>
              {SHORT_TERM.map((m, i) => <MilestoneCard key={i} m={m} />)}
            </div>
          </div>
        </section>

        <div className="border-t border-white/8 bg-[#0a0a0a] py-6">
          <div className="container px-4 mx-auto max-w-3xl">
            <p className="text-white/25 text-xs uppercase tracking-widest text-center font-semibold">
              Beyond July 2026: Long-term Vision
            </p>
          </div>
        </div>

        <section className="bg-[#0a0a0a] pb-20">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="py-12 mb-4">
              <Badge className="bg-white/8 text-white/50 border-white/10 text-xs font-bold uppercase tracking-wider mb-2">
                Long-term Roadmap
              </Badge>
              <h2 className="font-serif text-white font-black text-2xl md:text-3xl">Q3 2026 and Beyond</h2>
            </div>
            <div>
              {LONG_TERM.map((m, i) => <MilestoneCard key={i} m={m} />)}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 py-20 text-center">
          <div className="container px-4 mx-auto max-w-xl">
            <h2 className="font-serif font-black text-white text-2xl md:text-3xl mb-4">
              Join the journey.
            </h2>
            <p className="text-white/45 mb-8 leading-relaxed">
              Craizeg is free, open, and built for real people.
              Start today, no account needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/onboarding">
                <button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                  Try Craizeg Free &rarr;
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

      <footer className="border-t border-white/5 bg-[#060606] py-8">
        <div className="container px-4 mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 Craizeg.fun. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/" className="hover:text-primary transition-colors">Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
