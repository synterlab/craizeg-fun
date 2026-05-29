import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null };
  static getDerivedStateFromError(e: Error) { return { error: e }; }
  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: 500, margin: "4rem auto" }}>
          <h2 style={{ color: "#f97316" }}>Something went wrong</h2>
          <pre style={{ background: "#f1f5f9", padding: "1rem", borderRadius: 8, overflowX: "auto", fontSize: 13 }}>
            {(error as Error).message}
          </pre>
          <button
            style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", background: "#f97316", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
