export default function CircuitBackground({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5">
        <path className="circuit-line" d="M0 120 H260 V220 H520 V80 H840 V300 H1200" />
        <path className="circuit-line" d="M0 400 H180 V520 H460 V420 H760 V620 H1200" style={{ animationDelay: "-4s" }} />
        <path className="circuit-line" d="M0 680 H320 V600 H600 V720 H900 V560 H1200" style={{ animationDelay: "-8s" }} />
      </g>
      <g fill="#F97316">
        <circle className="node-pulse" cx="260" cy="120" r="3.5" />
        <circle className="node-pulse" cx="520" cy="220" r="3.5" style={{ animationDelay: "-1s" }} />
        <circle className="node-pulse" cx="840" cy="80" r="3.5" style={{ animationDelay: "-2s" }} />
        <circle className="node-pulse" cx="180" cy="400" r="3.5" style={{ animationDelay: "-0.5s" }} />
        <circle className="node-pulse" cx="460" cy="520" r="3.5" style={{ animationDelay: "-1.5s" }} />
        <circle className="node-pulse" cx="760" cy="420" r="3.5" style={{ animationDelay: "-2.5s" }} />
        <circle className="node-pulse" cx="320" cy="680" r="3.5" style={{ animationDelay: "-3s" }} />
        <circle className="node-pulse" cx="600" cy="600" r="3.5" style={{ animationDelay: "-0.8s" }} />
        <circle className="node-pulse" cx="900" cy="720" r="3.5" style={{ animationDelay: "-1.8s" }} />
      </g>
    </svg>
  );
}
