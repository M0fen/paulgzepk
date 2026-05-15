type TopoVariant =
  | "biografia"
  | "galeria"
  | "reciente"
  | "spotify"
  | "discografia"
  | "booking";

type VariantConfig = {
  cx: string;
  cy: string;
  radii: number[];
  ratio: number;
  rails: [number, number] | [number];
  verticalX: string;
};

const VARIANTS: Record<TopoVariant, VariantConfig> = {
  biografia:    { cx: "62%", cy: "50%", radii: [30,60,90,130,175,225,285,355,435,525], ratio: 0.6,  rails: [35, 65], verticalX: "62%" },
  galeria:      { cx: "40%", cy: "55%", radii: [35,70,110,155,210,275,350,440],         ratio: 0.55, rails: [40, 60], verticalX: "40%" },
  reciente:     { cx: "55%", cy: "48%", radii: [30,65,105,150,200,260,330,410],         ratio: 0.58, rails: [38, 62], verticalX: "55%" },
  spotify:      { cx: "45%", cy: "50%", radii: [35,75,120,165,215,270,340,420],         ratio: 0.55, rails: [45, 65], verticalX: "45%" },
  discografia:  { cx: "50%", cy: "50%", radii: [35,70,110,160,220,290,370],             ratio: 0.5,  rails: [42, 58], verticalX: "50%" },
  booking:      { cx: "50%", cy: "50%", radii: [40,80,125,180,245,320,405],             ratio: 0.5,  rails: [50],     verticalX: "50%" },
};

export default function TopoOverlay({ variant }: { variant: TopoVariant }) {
  const cfg = VARIANTS[variant];
  const maskId = `topo-mask-${variant}`;
  const fadeId = `topo-fade-${variant}`;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.08] transition-opacity duration-500 group-hover/section:opacity-[0.12]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id={fadeId} cx={cfg.cx} cy={cfg.cy} r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill={`url(#${fadeId})`} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} stroke="white" strokeWidth="0.5">
        {cfg.radii.map((r, i) => (
          <ellipse key={i} cx={cfg.cx} cy={cfg.cy} rx={r} ry={r * cfg.ratio} />
        ))}
        {cfg.rails.map((y) => (
          <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} strokeWidth="0.3" strokeDasharray="4 16" />
        ))}
        <line x1={cfg.verticalX} y1="0" x2={cfg.verticalX} y2="100%" strokeWidth="0.3" strokeDasharray="3 14" />
      </g>
    </svg>
  );
}
