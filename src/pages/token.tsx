import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import {
  Coins, ExternalLink, Copy, CheckCircle2, Lock,
  Zap, Shield, Trophy, Target, Link2, Clock, Globe,
  ArrowRight, Sparkles, ChevronRight,
} from "lucide-react";
import { useState } from "react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SolanaIcon = () => (
  <svg viewBox="0 0 397.7 311.7" width="18" height="18" fill="currentColor">
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"/>
  </svg>
);

const CA_ADDRESS = "";

const UTILITY_ITEMS = [
  {
    icon: Trophy,
    title: "On-Chain Achievements",
    desc: "Complete tasks and hit streaks to earn $ZEG rewards. Every milestone you reach is verified on Solana — immutable, transparent, yours.",
    badge: "July 2026",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Target,
    title: "Achievement NFTs",
    desc: "Earn collectible NFTs for completing major goals and productivity streaks. Rare milestones unlock rare tokens.",
    badge: "July 2026",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Link2,
    title: "Decentralised Milestones",
    desc: "Set goal milestones that are recorded via smart contracts. Accountability you can't cheat — your progress is public and tamper-proof.",
    badge: "July 2026",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Token-Gated Features",
    desc: "Hold $ZEG to unlock premium features: advanced analytics, AI assistant early access, team collaboration, and priority support.",
    badge: "Q1 2027",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Globe,
    title: "No Wallet Required",
    desc: "The core app is always free. Blockchain features are opt-in — connect a wallet only when you want to participate in on-chain rewards.",
    badge: "Always",
    color: "from-primary/20 to-orange-500/10",
    border: "border-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Transparent Productivity Log",
    desc: "Opt in to have your daily productivity streaks recorded on-chain — a public, verifiable proof of your discipline and consistency.",
    badge: "July 2026",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
];

const TIMELINE = [
  {
    date: "May 29, 2026",
    title: "$ZEG Token Launch",
    desc: "Official token launch via EasyA Kickstart on the Solana blockchain. Community participation begins.",
    status: "active",
    icon: Coins,
  },
  {
    date: "June 1, 2026",
    title: "10% Supply Lock",
    desc: "10% of total $ZEG supply locked via Streamflow Finance with a publicly visible on-chain vesting schedule.",
    status: "upcoming",
    icon: Lock,
  },
  {
    date: "July 2026",
    title: "Blockchain Integration",
    desc: "On-chain task verification, Achievement NFTs, decentralised milestones, and optional wallet connect go live.",
    status: "upcoming",
    icon: Link2,
  },
  {
    date: "Q1 2027",
    title: "AI + Token Rewards",
    desc: "$ZEG powers AI assistant access and governance — holders vote on features and shape the product roadmap.",
    status: "upcoming",
    icon: Sparkles,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-medium bg-white/8 hover:bg-white/14 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all"
    >
      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function TokenPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-[#080808] font-sans overflow-x-hidden">

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-black/40 backdrop-blur-xl">
        <div className="container flex h-16 max-w-5xl items-center justify-between px-4 mx-auto">
          <Link to="/">
            <Logo size={30} dark />
          </Link>
          <nav className="flex items-center gap-2">
            <a
              href="https://x.com/CraizeG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/8 hover:bg-white/14 border border-white/10 hover:border-white/20 text-white/55 hover:text-white text-xs font-semibold transition-all"
            >
              <XIcon />
              <span className="hidden sm:inline">@CraizeG</span>
            </a>
            <Link to="/roadmap">
              <button className="h-8 px-4 rounded-full text-sm font-semibold bg-white/8 hover:bg-white/14 border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all">
                Roadmap
              </button>
            </Link>
            <a
              href="https://kickstart.easya.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-4 rounded-full text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all flex items-center gap-1.5"
            >
              Get $ZEG
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        <section className="relative w-full min-h-[85dvh] flex items-center justify-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px] opacity-25"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, #a855f7 60%, transparent 80%)" }} />
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-24 text-center">
            {/* Solana badge */}
            <div className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-[#9945FF]/15 border border-[#9945FF]/30 text-[#c084fc] text-xs font-semibold mb-6">
              <SolanaIcon />
              Built on Solana
            </div>

            {/* Token symbol */}
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-orange-400 to-amber-500 flex items-center justify-center mx-auto shadow-2xl shadow-primary/40 ring-4 ring-primary/20">
                <span className="text-3xl font-bold text-white tracking-tight">ZEG</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
              The{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #f97316, #fb923c, #fbbf24)" }}>
                $ZEG
              </span>{" "}
              Token
            </h1>

            <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              The utility token powering Craizeg's on-chain achievement system.
              Earn rewards for real productivity. Verified on Solana.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://kickstart.easya.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all hover:scale-105"
              >
                Get $ZEG on EasyA Kickstart
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-semibold bg-white/8 hover:bg-white/14 border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all"
              >
                View Full Roadmap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Live badge */}
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/50">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Token launched May 29, 2026 · Live on Solana
            </div>
          </div>
        </section>

        {/* ── Token Details ── */}
        <section className="w-full py-20 border-t border-white/6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Token Details</h2>
              <p className="text-white/50 text-base">Everything you need to know about $ZEG</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Token Name", value: "Craizeg Token", sub: null },
                { label: "Ticker", value: "$ZEG", sub: null },
                { label: "Blockchain", value: "Solana", sub: "High-speed, low-fee" },
                { label: "Launch Platform", value: "EasyA Kickstart", sub: "kickstart.easya.io", link: "https://kickstart.easya.io/" },
                { label: "Launch Date", value: "May 29, 2026", sub: "Live now" },
                { label: "Token Type", value: "Utility Token", sub: "SPL Token (Solana)" },
              ].map((item) => (
                <div key={item.label}
                  className="rounded-2xl bg-white/5 border border-white/8 p-5 flex flex-col gap-1 hover:bg-white/8 hover:border-white/14 transition-all">
                  <span className="text-xs text-white/40 font-medium uppercase tracking-wider">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-lg font-bold text-primary hover:underline flex items-center gap-1">
                      {item.value} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-lg font-bold text-white">{item.value}</span>
                  )}
                  {item.sub && <span className="text-xs text-white/35">{item.sub}</span>}
                </div>
              ))}
            </div>

            {/* Contract Address */}
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/8 p-5 hover:bg-white/8 hover:border-white/14 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-white/40 font-medium uppercase tracking-wider block mb-1">
                    Contract Address (CA)
                  </span>
                  {CA_ADDRESS ? (
                    <span className="text-sm font-mono text-white/80 break-all">{CA_ADDRESS}</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-medium text-amber-300">To be announced — follow{" "}
                        <a href="https://x.com/CraizeG" target="_blank" rel="noopener noreferrer"
                          className="underline hover:text-amber-200">@CraizeG</a>{" "}
                        for the update
                      </span>
                    </div>
                  )}
                </div>
                {CA_ADDRESS && <CopyButton text={CA_ADDRESS} />}
              </div>
            </div>

            {/* Token lock notice */}
            <div className="mt-4 rounded-2xl bg-[#9945FF]/8 border border-[#9945FF]/20 p-5 flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#c084fc] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#e9d5ff] mb-0.5">10% Supply Lock via Streamflow Finance</p>
                <p className="text-xs text-white/45 leading-relaxed">
                  On June 1, 2026, 10% of total $ZEG supply will be locked via{" "}
                  <a href="https://app.streamflow.finance" target="_blank" rel="noopener noreferrer"
                    className="text-[#c084fc] hover:underline">Streamflow Finance</a>{" "}
                  with a publicly visible on-chain vesting schedule — committed to long-term ecosystem health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How Blockchain Integrates ── */}
        <section className="w-full py-20 border-t border-white/6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-4">
              <Badge className="mb-4 bg-primary/15 text-primary border-primary/20 text-xs font-semibold px-3 py-1">
                Blockchain Integration
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                How $ZEG Powers Craizeg
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto">
                Craizeg is a productivity app first. Blockchain is layered on top — opt-in, never required.
                When you're ready, $ZEG turns your personal achievements into verifiable on-chain credentials.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {UTILITY_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className={`rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} p-5 flex flex-col gap-3 hover:scale-[1.01] transition-all duration-200`}>
                    <div className="flex items-start justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center ${item.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium text-white/40 bg-black/20 rounded-full px-2.5 py-1">
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* How it works flow */}
            <div className="mt-16 rounded-2xl bg-white/4 border border-white/8 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">How it works</h3>
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                {[
                  { num: "01", title: "Use the app", desc: "Complete tasks, hit goals, build streaks — no wallet needed." },
                  { num: "02", title: "Earn rewards", desc: "Optionally connect a Solana wallet to claim $ZEG for achievements." },
                  { num: "03", title: "Unlock more", desc: "Hold $ZEG to access premium features and on-chain milestones." },
                ].map((step, i) => (
                  <div key={step.num} className="flex-1 flex flex-col items-center text-center gap-2 relative">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.num}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-white/45 leading-relaxed max-w-[180px]">{step.desc}</p>
                    {i < 2 && (
                      <div className="hidden sm:flex absolute -right-3 top-5 items-center">
                        <ChevronRight className="w-4 h-4 text-white/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Launch Timeline ── */}
        <section className="w-full py-20 border-t border-white/6">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">$ZEG Roadmap</h2>
              <p className="text-white/50 text-base">The token's integration timeline alongside the main product</p>
            </div>

            <div className="flex flex-col gap-0">
              {TIMELINE.map((item, i) => {
                const Icon = item.icon;
                const isActive = item.status === "active";
                const isLast = i === TIMELINE.length - 1;
                return (
                  <div key={item.title} className="flex gap-5 relative">
                    {/* Line */}
                    {!isLast && (
                      <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/8" />
                    )}
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center z-10 mt-1
                      ${isActive
                        ? "bg-primary/20 border-primary/50 text-primary shadow-lg shadow-primary/20"
                        : "bg-white/5 border-white/10 text-white/30"}`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 rounded-2xl p-5 mb-4 border transition-all
                      ${isActive
                        ? "bg-primary/8 border-primary/20 hover:bg-primary/12"
                        : "bg-white/4 border-white/8 hover:bg-white/6"}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="text-base font-bold text-white">{item.title}</h3>
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Live
                            </span>
                          )}
                          <span className="text-xs text-white/35 font-medium">{item.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Link to="/roadmap"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold transition-colors">
                View the full product roadmap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full py-24 border-t border-white/6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-orange-400 to-amber-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/40">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Be part of the launch
            </h2>
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              $ZEG is live on Solana via EasyA Kickstart. Join the community, participate in the launch,
              and earn rewards for being an early supporter of Craizeg.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://kickstart.easya.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/40 transition-all hover:scale-105"
              >
                Get $ZEG on EasyA Kickstart
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/easya_kickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-sm font-semibold bg-white/8 hover:bg-white/14 border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all"
              >
                <XIcon />
                @easya_kickstart
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/6 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size={22} dark />
            <span className="text-sm text-white/30">Craizeg · $ZEG Token</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/35">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <Link to="/roadmap" className="hover:text-white/60 transition-colors">Roadmap</Link>
            <a href="https://x.com/CraizeG" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Twitter</a>
            <a href="https://kickstart.easya.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">EasyA Kickstart</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
