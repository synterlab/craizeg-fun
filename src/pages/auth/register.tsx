import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // TODO: Connect Supabase later
    localStorage.setItem("craizeg_onboarded", "true");
    localStorage.setItem("craizeg_guest", "true");
    navigate("/app");
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background flex flex-col p-6 max-w-md mx-auto justify-center animate-in fade-in duration-300">
      <div className="mb-10">
        <h1 className="font-serif text-3xl font-bold mb-2">Create account</h1>
        <p className="text-muted-foreground">Start organising your life beautifully.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Jane Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 bg-card"
          />
        </div>
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
          onClick={handleRegister}
          data-testid="register-submit"
        >
          Sign Up
        </Button>
      </div>

      <p className="mt-8 text-center text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
