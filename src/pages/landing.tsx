import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Target, Calendar, FileText, BarChart2, Bell } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background font-sans overflow-x-hidden">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 max-w-6xl items-center justify-between px-4 mx-auto">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-primary">Craizeg.fun</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden sm:inline-flex" data-testid="nav-login">Sign In</Button>
            </Link>
            <Link to="/onboarding">
              <Button data-testid="nav-try-free">Try for Free</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" 
              alt="Sunset background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          </div>
          <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center text-white">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Get it all organised, your way!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 fill-mode-both">
              Skyrocket your progress with clarity on what matters most. All your tasks, knowledge, and time — managed beautifully.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
              <a href="#download" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8" data-testid="hero-download">
                  Download for Android →
                </Button>
              </a>
              <Link to="/onboarding" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm" data-testid="hero-try">
                  Try for Free →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background w-full">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">One quiet space for your entire life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: CheckSquare, title: "Tasks", desc: "Simple, satisfying lists." },
                { icon: Target, title: "Goals", desc: "Track progress visually." },
                { icon: Calendar, title: "Calendar", desc: "Your time, mapped out." },
                { icon: FileText, title: "Notes", desc: "Thoughts, safely stored." },
                { icon: BarChart2, title: "Analytics", desc: "Understand your habits." },
                { icon: Bell, title: "Reminders", desc: "Never miss a beat." }
              ].map((f, i) => (
                <Card key={i} className="bg-card border-card-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
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

        {/* Download Section */}
        <section id="download" className="py-24 bg-secondary w-full">
          <div className="container px-4 mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Download Craizeg for Android</h2>
            <p className="text-muted-foreground mb-8 text-lg">Take your productivity everywhere you go.</p>
            <a href="/craizeg.apk" download>
              <Button size="lg" className="h-14 px-8 text-lg rounded-full" data-testid="download-apk">
                Download APK
              </Button>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">v1.0.0 • Free • 15MB</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] text-[#f0f0f0] py-12 w-full">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <span className="font-serif text-2xl font-bold text-primary mb-4 block">Craizeg.fun</span>
              <p className="text-muted-foreground/80 max-w-xs">A quiet, personal productivity space for people who want to stay organised without the noise.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li><Link to="/#download" className="hover:text-primary transition-colors">Download</Link></li>
                <li><Link to="/login" className="hover:text-primary transition-colors">Web App</Link></li>
                <li><Link to="/#features" className="hover:text-primary transition-colors">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground/80">© 2025 Craizeg.fun. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
