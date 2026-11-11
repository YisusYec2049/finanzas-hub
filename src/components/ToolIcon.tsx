import type { Glyph } from '../data/registry'

// Un solo trazo por ícono, para poder dibujarlo igual en pequeño (arriba
// de la tarjeta) y en gigante (la marca de agua).
const PATHS: Record<Glyph, string> = {
  chart: 'M4 20V11M10 20V5M16 20v-6M2 20h20',
  scales: 'M12 3v18M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0zM8 21h8',
  document: 'M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h4',
  'person-minus': 'M13 8a4 4 0 11-8 0 4 4 0 018 0zM2 21a7 7 0 0114 0M16 11h6',
  ticket: 'M3 7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4zM14 5v14',
}

export default function ToolIcon({
  icon,
  className,
  strokeWidth = 1.9,
}: {
  icon: Glyph
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[icon]} />
    </svg>
  )
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}
