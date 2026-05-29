import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Connect Supabase later
    localStorage.setItem("craizeg_onboarded", "true");
    localStorage.setItem("craizeg_guest", "true");
    navigate("/app");
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background flex flex-col p-6 max-w-md mx-auto justify-center animate-in fade-in duration-300">
      <div className="mb-10">
        <h1 className="font-serif text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-muted-foreground">Sign in to your quiet space.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-card"
          />
        </div>
        
        <Button 
          className="w-full h-12 text-lg" 
          onClick={handleLogin}
          data-testid="login-submit"
        >
          Sign In
        </Button>
      </div>

      <p className="mt-8 text-center text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
