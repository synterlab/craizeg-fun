interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className = "", size = 36, showText = true, textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Custom geometric "Cz" mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Craizeg logo"
      >
        <defs>
          <linearGradient id="cz-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="cz-stroke" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        {/* Outer rounded hexagon background */}
        <path
          d="M20 2 L35.3 10.5 L35.3 29.5 L20 38 L4.7 29.5 L4.7 10.5 Z"
          fill="url(#cz-grad)"
        />

        {/* Inner accent arc — the "C" shape */}
        <path
          d="M28 14.5 C28 14.5 22 11.5 16 14.5 C11 17 10.5 23 13 26.5 C15.5 30 21 31 26 28.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* The "z" lightning slash */}
        <path
          d="M22 16 L28.5 16 L21 24 L28.5 24"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {showText && (
        <span className={`font-serif font-bold tracking-tight leading-none ${textClassName}`}>
          Craizeg
          <span className="text-primary">.fun</span>
        </span>
      )}
    </div>
  );
}
