type ToolProps = {
  x: number
  y: number
  rotate: number
  duration: string
  delay: string
  children: React.ReactNode
}

// Cada herramienta vive en su propio slot fijo (posición + rotación,
// como atributos SVG estáticos) y solo el grupo intermedio anima
// aparición/ocultamiento en CSS. Mezclar transform CSS animado con
// transform="" estático en el MISMO <g> hace que la animación
// sobreescriba la posición — por eso van en grupos separados.
function Tool({ x, y, rotate, duration, delay, children }: ToolProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g
        className="origin-[0px_0px] animate-tool-float motion-reduce:animate-none motion-reduce:opacity-100"
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        <g transform={`rotate(${rotate})`}>{children}</g>
      </g>
    </g>
  )
}

type PuffProps = {
  cx: number
  cy: number
  r: number
  opacity: number
  variant: 'a' | 'b'
  duration: string
  delay: string
}

const DRIFT_CLASS = {
  a: 'animate-dust-drift-a',
  b: 'animate-dust-drift-b',
} as const

function Puff({ cx, cy, r, opacity, variant, duration, delay }: PuffProps) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="#c7c2b3"
      opacity={opacity}
      className={`${DRIFT_CLASS[variant]} motion-reduce:animate-none`}
      style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: duration, animationDelay: delay }}
    />
  )
}

function Mote({ cx, cy, duration, delay }: { cx: number; cy: number; duration: string; delay: string }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r="1.1"
      fill="#9c9686"
      className="animate-dust-mote motion-reduce:animate-none"
      style={{ animationDuration: duration, animationDelay: delay }}
    />
  )
}

export default function ConstructionCloud() {
  return (
    <svg viewBox="0 0 120 70" className="h-16 w-28" role="img" aria-label="Construyendo">
      <defs>
        <filter id="dust-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      {/* Nube de polvo: varios bochos difuminados moviéndose por su cuenta */}
      <g filter="url(#dust-blur)">
        <Puff cx={42} cy={44} r={15} opacity={0.72} variant="a" duration="5s" delay="0s" />
        <Puff cx={62} cy={33} r={19} opacity={0.68} variant="b" duration="6.2s" delay="-1s" />
        <Puff cx={80} cy={44} r={14} opacity={0.7} variant="a" duration="5.6s" delay="-2.4s" />
        <Puff cx={58} cy={51} r={16} opacity={0.62} variant="b" duration="6.8s" delay="-0.6s" />
        <Puff cx={54} cy={23} r={10} opacity={0.55} variant="a" duration="4.6s" delay="-1.8s" />
      </g>

      {/* Motas de polvo sueltas, sin difuminar, para que se sientan en el aire */}
      <Mote cx={28} cy={30} duration="4s" delay="-0.5s" />
      <Mote cx={97} cy={26} duration="4.4s" delay="-2s" />
      <Mote cx={88} cy={56} duration="3.6s" delay="-1.2s" />
      <Mote cx={22} cy={52} duration="4.2s" delay="-2.8s" />

      {/* Herramientas flotando dentro/alrededor del polvo */}
      <Tool x={46} y={24} rotate={-8} duration="4.6s" delay="-0.4s">
        <path d="M -9 0 L 9 -1.5 L 9 1.5 Z" fill="#c7ccd1" stroke="#9aa1a8" strokeWidth="0.4" />
        <rect x="-12" y="-2.2" width="4.5" height="4.5" rx="1.4" fill="#8b5c37" />
      </Tool>

      <Tool x={76} y={20} rotate={16} duration="4s" delay="-2.2s">
        <rect x="-1.2" y="-2" width="11" height="2.6" rx="1.1" fill="#8b5c37" />
        <rect x="7" y="-4.4" width="6.5" height="6.5" rx="1.2" fill="#4b5563" stroke="#374151" strokeWidth="0.4" />
      </Tool>

      <Tool x={87} y={42} rotate={0} duration="5.2s" delay="-3.4s">
        <rect x="-0.9" y="-7" width="1.8" height="9" fill="#9ca3af" />
        <rect x="-2.4" y="-9" width="4.8" height="3.2" rx="0.9" fill="#9ca3af" stroke="#6b7280" strokeWidth="0.35" />
      </Tool>

      <Tool x={36} y={51} rotate={-9} duration="4.9s" delay="-1.6s">
        <rect x="-10" y="-2.7" width="20" height="5.4" rx="1.2" fill="#a8734a" stroke="#8b5c37" strokeWidth="0.35" />
        <rect x="-7.5" y="-0.4" width="15" height="0.8" fill="#8b5c37" opacity="0.5" />
      </Tool>
    </svg>
  )
}
