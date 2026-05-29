import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Mail, MessageSquare, Bug, Lightbulb, ExternalLink } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const CHANNELS = [
  {
    icon: MessageSquare,
    title: "General enquiries",
    desc: "Questions about the app, your account, or anything else.",
    cta: "hello@craizeg.fun",
    href: "mailto:hello@craizeg.fun",
    label: "Email us",
  },
  {
    icon: Bug,
    title: "Bug reports",
    desc: "Found something broken? Tell us exactly what happened and we will fix it fast.",
    cta: "bugs@craizeg.fun",
    href: "mailto:bugs@craizeg.fun",
    label: "Report a bug",
  },
  {
    icon: Lightbulb,
    title: "Feature requests",
    desc: "Have an idea that would make Craizeg better for you? We read every suggestion.",
    cta: "ideas@craizeg.fun",
    href: "mailto:ideas@craizeg.fun",
    label: "Share an idea",
  },
  {
    icon: Mail,
    title: "Legal and privacy",
    desc: "Data requests, account deletion, GDPR enquiries, or legal matters.",
    cta: "privacy@craizeg.fun",
    href: "mailto:privacy@craizeg.fun",
    label: "Contact legal",
  },
];

const FAQS = [
  {
    q: "Is Craizeg really free?",
    a: "Yes, completely. No paid tier, no hidden fees. Craizeg is free forever for personal use.",
  },
  {
    q: "How do I install the Android APK?",
    a: "Download craizeg.apk from our GitHub Releases page. On your Android device, go to Settings, Security, and enable Unknown sources. Then open the downloaded file and tap Install.",
  },
  {
    q: "Is my data safe if I use the web app without an account?",
    a: "Yes. Guest mode stores all data locally in your browser. Nothing is sent to our servers. If you clear your browser data, your tasks will be removed from that device.",
  },
  {
    q: "Can I export my tasks and goals?",
    a: "Export in JSON format is on the roadmap for June 2026. In the meantime you can view and copy your data from the app.",
  },
  {
    q: "What is the $ZEG token?",
    a: "ZEG is the Craizeg utility token launched on May 29, 2026 via EasyA Kickstart. It will power on-chain achievements, token-gated features, and community rewards. No crypto wallet is required to use the core app.",
  },
];

export default function ContactPage() {
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
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-10"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
          </div>
          <div className="container relative px-4 mx-auto max-w-3xl z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              Get in touch
            </div>
            <h1 className="font-serif font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              We're here to help.
            </h1>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              Whether you have a question, found a bug, or just want to say hi,
              we respond to every message.
            </p>
          </div>
        </section>

        {/* Contact channels */}
        <section className="py-16 border-b border-white/5">
          <div className="container px-4 mx-auto max-w-3xl">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-8">Contact channels</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHANNELS.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="group block bg-white/4 hover:bg-white/7 border border-white/8 hover:border-primary/20 rounded-2xl p-5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/12 group-hover:bg-primary/20 border border-primary/15 flex items-center justify-center flex-shrink-0 transition-colors">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-white font-bold text-sm mb-1">{c.title}</h3>
                      <p className="text-white/45 text-xs leading-relaxed mb-3">{c.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold group-hover:underline">
                        {c.cta}
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-white/3 border border-white/8 rounded-2xl p-5">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/12 flex items-center justify-center flex-shrink-0">
                  <XIcon />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Follow on X for updates</p>
                  <p className="text-white/40 text-xs">Announcements, tips, and community highlights</p>
                </div>
              </div>
              <a
                href="https://x.com/CraizeG"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-5 rounded-full bg-white/8 hover:bg-white/14 border border-white/12 text-white/70 hover:text-white text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <XIcon />
                @CraizeG
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container px-4 mx-auto max-w-3xl">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-2">FAQ</p>
            <h2 className="font-serif text-white font-black text-2xl mb-10">Common questions</h2>
            <div className="space-y-0 divide-y divide-white/6">
              {FAQS.map((faq, i) => (
                <details key={i} className="group py-5 cursor-pointer list-none">
                  <summary className="flex items-center justify-between gap-4 select-none list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-serif text-white font-semibold text-base group-open:text-primary transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 text-white/40 group-open:border-primary/40 group-open:text-primary transition-all text-xs font-bold">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-white/50 text-sm leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-primary/8 border border-primary/15 p-6 text-center">
              <p className="text-white/60 text-sm mb-3">Still have a question?</p>
              <a
                href="mailto:hello@craizeg.fun"
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Email hello@craizeg.fun
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#060606] py-8">
        <div className="container px-4 mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2026 Craizeg.fun. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/" className="hover:text-primary transition-colors">Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
