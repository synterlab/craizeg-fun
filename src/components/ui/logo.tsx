interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  dark?: boolean;
}

export function Logo({ className = "", size = 32, showText = true, dark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Mark — hexagon with C+z lightning bolt */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="cz-g1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>
        <path d="M20 2 L35.3 10.5 L35.3 29.5 L20 38 L4.7 29.5 L4.7 10.5 Z" fill="url(#cz-g1)" />
        {/* C arc */}
        <path
          d="M27 14 C27 14 21.5 11 15.5 14 C10.5 16.5 10.5 23.5 13.5 27 C16 30 22 31 27 28"
          stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"
        />
        {/* Z bolt */}
        <path
          d="M21.5 15.5 L28 15.5 L20.5 24.5 L28 24.5"
          stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </svg>

      {showText && (
        /* Custom wordmark — NOT generic serif */
        <span
          aria-label="Craizeg.fun"
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: "1px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            fontSize: `${Math.round(size * 0.58)}px`,
            color: dark ? "#ffffff" : "inherit",
          }}
        >
          {/* "CRAIΖEG" — Z in orange, rest in current color */}
          <span style={{ letterSpacing: "-0.04em" }}>CRAI</span>
          <span style={{ color: "#f97316", letterSpacing: "-0.04em" }}>Z</span>
          <span style={{ letterSpacing: "-0.04em" }}>EG</span>
          {/* .fun — smaller, muted */}
          <span
            style={{
              fontSize: `${Math.round(size * 0.38)}px`,
              fontWeight: 500,
              color: "#f97316",
              opacity: 0.85,
              letterSpacing: "0em",
              marginLeft: "1px",
            }}
          >
            .fun
          </span>
        </span>
      )}
    </div>
  );
}
