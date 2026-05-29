import { Outlet, Navigate } from "react-router-dom";
import { BottomNav } from "./BottomNav";
import { useEffect } from "react";

export function AppLayout() {
  const isOnboarded = localStorage.getItem("craizeg_onboarded") === "true";

  useEffect(() => {
    // Basic theme sync on load
    const theme = localStorage.getItem("craizeg_theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <div className="min-h-[100dvh] w-full bg-background flex flex-col pb-[60px] relative overflow-x-hidden">
      <main className="flex-1 w-full max-w-md mx-auto relative animate-in fade-in duration-200">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
