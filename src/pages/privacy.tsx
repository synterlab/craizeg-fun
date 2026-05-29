import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Shield, Eye, Database, Lock, Mail, RefreshCw } from "lucide-react";

const LAST_UPDATED = "May 29, 2026";

interface Section {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    icon: Eye,
    title: "What we collect",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          Craizeg is designed to be a <strong className="text-white/80">privacy-first</strong> app.
          By default, all your data (tasks, goals, notes, calendar entries) is stored
          locally on your device using your browser's local storage or the installed APK.
        </p>
        <p>
          When you create an account, we collect only the minimum necessary:
        </p>
        <ul className="space-y-2 pl-4">
          {[
            "Email address (for sign-in only)",
            "A display name you choose",
            "Encrypted task and goal data if you enable cloud sync",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          <strong className="text-white/80">No account is required</strong> to use Craizeg.
          Guest users have zero data sent to our servers.
        </p>
      </div>
    ),
  },
  {
    icon: Database,
    title: "How we use your data",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>We use your data solely to:</p>
        <ul className="space-y-2 pl-4">
          {[
            "Sync your tasks and goals across devices (if you opt in)",
            "Send password reset emails when you request them",
            "Provide in-app analytics on your own productivity (visible only to you)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We do <strong className="text-white/80">not</strong> sell, rent, share, or monetise
          your personal data in any way. We do not use your data to train AI models.
        </p>
      </div>
    ),
  },
  {
    icon: Lock,
    title: "Data security",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          All data in transit is encrypted using TLS 1.3. Passwords are hashed with
          bcrypt before storage. We never store plaintext credentials.
        </p>
        <p>
          Local data on your device (tasks, notes, goals) is stored in your browser's
          IndexedDB or the APK's sandboxed storage. Other apps and websites cannot
          access this data.
        </p>
        <p>
          If you delete your account, all server-side data associated with your account
          is permanently deleted within 30 days.
        </p>
      </div>
    ),
  },
  {
    icon: RefreshCw,
    title: "Third-party services",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>Craizeg uses a minimal set of third-party services:</p>
        <ul className="space-y-2 pl-4">
          {[
            "Vercel: hosting and delivery of the web app",
            "GitHub: open-source code repository and APK distribution",
            "Cloudflare (optional): DDoS protection and caching",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          We do not use Google Analytics, Facebook Pixel, or any advertising trackers.
          No third party has access to your task or goal content.
        </p>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Cookies",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          Craizeg uses only essential cookies required for authentication sessions.
          We do not use tracking cookies, advertising cookies, or any analytics cookies.
        </p>
        <p>
          Guest users who never sign in will have no cookies set by Craizeg.
        </p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Your rights",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>You have the right to:</p>
        <ul className="space-y-2 pl-4">
          {[
            "Access a copy of all personal data we hold about you",
            "Correct inaccurate personal data",
            "Delete your account and all associated data",
            "Export your tasks and goals in JSON format at any time",
            "Opt out of any optional data processing",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@craizeg.fun" className="text-primary hover:underline">
            privacy@craizeg.fun
          </a>
          . We will respond within 30 days.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
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

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
          </div>
          <div className="container relative px-4 mx-auto max-w-3xl z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="font-serif font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Privacy Policy
            </h1>
            <p className="text-white/45 text-sm">
              Last updated: <span className="text-white/65">{LAST_UPDATED}</span>
            </p>
            <p className="text-white/50 mt-4 max-w-xl leading-relaxed">
              Your privacy matters to us. This policy explains what data we collect,
              why we collect it, and how we protect it. We keep things simple and honest.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="space-y-10">
              {SECTIONS.map((s, i) => (
                <div key={i} className="flex gap-5 md:gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-9 h-9 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-primary/80" />
                    </div>
                  </div>
                  <div className="flex-1 pb-10 border-b border-white/5 last:border-0 last:pb-0">
                    <h2 className="font-serif text-white font-bold text-lg mb-4">{s.title}</h2>
                    {s.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary callout */}
            <div className="mt-16 rounded-2xl bg-primary/8 border border-primary/15 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-white font-bold text-base mb-2">
                    The short version
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Craizeg stores your data locally on your device by default.
                    No account needed, no tracking, no ads. If you sign up,
                    we store only the minimum required to sync your data.
                    We never sell your information. You can delete everything, anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#060606] py-8">
        <div className="container px-4 mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 Craizeg.fun. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link>
            <Link to="/" className="hover:text-primary transition-colors">Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
