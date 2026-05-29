import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { FileText, User, Ban, AlertTriangle, RefreshCw, Mail, Globe } from "lucide-react";

const LAST_UPDATED = "May 29, 2026";

interface Section {
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

const SECTIONS: Section[] = [
  {
    icon: Globe,
    title: "Acceptance of terms",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          By accessing or using Craizeg (the "Service") at craizeg.fun or via the
          Android APK, you agree to be bound by these Terms of Service. If you do not
          agree to these terms, please do not use the Service.
        </p>
        <p>
          These terms apply to all visitors, users, and registered account holders.
          Using the Service as a guest (without an account) also constitutes acceptance.
        </p>
      </div>
    ),
  },
  {
    icon: User,
    title: "Use of the service",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>You may use Craizeg to:</p>
        <ul className="space-y-2 pl-4">
          <Li>Create and manage personal tasks, goals, notes, and calendar entries</Li>
          <Li>Track habits and productivity for personal use</Li>
          <Li>Sync your data across devices if you create an account</Li>
          <Li>Download and install the Android APK for personal use</Li>
        </ul>
        <p className="mt-2">
          You must be at least 13 years old to create an account. By creating an account,
          you confirm you meet this requirement.
        </p>
      </div>
    ),
  },
  {
    icon: Ban,
    title: "Prohibited conduct",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>You agree not to:</p>
        <ul className="space-y-2 pl-4">
          <Li>Use the Service for any unlawful purpose or in violation of these Terms</Li>
          <Li>Attempt to gain unauthorised access to other users' accounts or data</Li>
          <Li>Reverse-engineer, decompile, or modify the Service beyond what open-source licences permit</Li>
          <Li>Use automated tools to scrape, crawl, or overload our servers</Li>
          <Li>Transmit malicious code, viruses, or other harmful materials</Li>
          <Li>Impersonate Craizeg, its team, or other users</Li>
        </ul>
        <p className="mt-2">
          Violation of these rules may result in immediate termination of your account
          and access to the Service.
        </p>
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Intellectual property",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          The Craizeg name, logo, and visual design are the property of Synterlab.
          The underlying source code is open-source and available on{" "}
          <a
            href="https://github.com/synterlab/craizeg-fun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          All content you create within Craizeg (tasks, notes, goals) remains entirely
          yours. We claim no ownership or licence over your personal content.
        </p>
        <p>
          If you contribute to the open-source repository, your contributions are
          governed by the project's open-source licence (MIT).
        </p>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Disclaimers and limitation of liability",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          The Service is provided <strong className="text-white/75">"as is"</strong> without
          warranty of any kind. We do not guarantee the Service will be uninterrupted,
          error-free, or that data will never be lost.
        </p>
        <p>
          Craizeg is a productivity tool. We are not responsible for missed deadlines,
          lost tasks, or any consequences arising from reliance on the Service.
        </p>
        <p>
          To the maximum extent permitted by law, Synterlab's total liability for any
          claim related to the Service shall not exceed the amount you paid for the
          Service in the preceding 12 months (which is $0 for free users).
        </p>
      </div>
    ),
  },
  {
    icon: RefreshCw,
    title: "Changes and termination",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          We may update these Terms at any time. Significant changes will be communicated
          via the app or via email to registered users. Continued use of the Service after
          changes constitutes acceptance of the updated terms.
        </p>
        <p>
          You may delete your account at any time from the profile settings. We may
          suspend or terminate accounts that violate these Terms, with or without notice.
        </p>
        <p>
          We reserve the right to discontinue the Service at any time. In such a case,
          we will provide at least 30 days' notice to registered users.
        </p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Contact",
    content: (
      <div className="space-y-3 text-white/55 text-sm leading-relaxed">
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:legal@craizeg.fun" className="text-primary hover:underline">
            legal@craizeg.fun
          </a>
          .
        </p>
        <p>
          These Terms are governed by the laws of the jurisdiction in which Synterlab
          operates, without regard to conflict of law principles.
        </p>
      </div>
    ),
  },
];

export default function TermsPage() {
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

        <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
              style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
          </div>
          <div className="container relative px-4 mx-auto max-w-3xl z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="font-serif font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Terms of Service
            </h1>
            <p className="text-white/45 text-sm">
              Last updated: <span className="text-white/65">{LAST_UPDATED}</span>
            </p>
            <p className="text-white/50 mt-4 max-w-xl leading-relaxed">
              Please read these terms carefully before using Craizeg.
              They explain your rights and responsibilities when using our Service.
            </p>
          </div>
        </section>

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

            <div className="mt-16 rounded-2xl bg-white/4 border border-white/8 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <FileText className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-white font-bold text-base mb-2">
                    The short version
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Be respectful, do not abuse the Service, and keep your account secure.
                    Your content is yours. Craizeg is free and provided in good faith.
                    If something goes wrong, our liability is limited. Questions?
                    Email{" "}
                    <a href="mailto:legal@craizeg.fun" className="text-primary hover:underline">
                      legal@craizeg.fun
                    </a>
                    .
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
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link>
            <Link to="/" className="hover:text-primary transition-colors">Back to Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
