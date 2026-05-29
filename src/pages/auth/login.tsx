import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("craizeg_onboarded", "true");
    localStorage.setItem("craizeg_guest", "true");
    navigate("/app");
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#080808] flex flex-col relative overflow-hidden">

      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-blob-1 absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />
        <div className="aurora-blob-2 absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #c2410c 0%, transparent 70%)" }} />
      </div>

      {/* Logo top */}
      <div className="relative z-10 p-6">
        <Logo size={28} dark />
      </div>

      {/* Form */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 max-w-sm w-full mx-auto">
        <div className="mb-10 fade-in-scale">
          <h1 className="font-serif font-black text-white text-3xl mb-2">Welcome back</h1>
          <p className="text-white/45 text-sm">Sign in to your quiet space.</p>
        </div>

        <div className="space-y-5 slide-up">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-white/60 text-xs uppercase tracking-wider font-semibold">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email}
              onChange={e => setEmail(e.target.value)}
              className="h-13 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-primary focus-visible:border-primary/50 rounded-xl" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-white/60 text-xs uppercase tracking-wider font-semibold">Password</Label>
            <div className="relative">
              <Input id="password" type={showPw ? "text" : "password"} placeholder="••••••••" value={password}
                onChange={e => setPassword(e.target.value)}
                className="h-13 bg-white/5 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-primary focus-visible:border-primary/50 rounded-xl pr-12" />
              <button type="button" onClick={() => setShowPw(p => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors p-1">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <Button className="w-full h-13 text-base rounded-xl font-bold mt-2 shadow-lg shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            onClick={handleLogin} data-testid="login-submit">
            Sign In
          </Button>
        </div>

        <p className="mt-8 text-center text-white/40 text-sm slide-up delay-200">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-semibold hover:text-primary/80 transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
