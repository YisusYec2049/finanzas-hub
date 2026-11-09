import type { Accent, Glyph } from '../data/registry'

// Gradientes tipo ícono de app de macOS (System Settings / Launchpad):
// cuadrado redondeado con degradado vivo y glifo blanco centrado.
const GRADIENT_CLASSES: Record<Accent, string> = {
  blue: 'from-sky-400 to-blue-600',
  purple: 'from-fuchsia-400 to-purple-600',
  green: 'from-emerald-400 to-green-600',
  teal: 'from-teal-400 to-cyan-600',
}

// Segundo tono (más oscuro) del mismo acento, usado para detalles finos
// dentro del glifo (p. ej. la perforación del ticket) que necesitan
// contrastar sobre el blanco del ícono en vez de sobre el degradado.
const DETAIL_CLASSES: Record<Accent, string> = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  green: 'text-green-600',
  teal: 'text-cyan-600',
}

function GlyphIcon({ icon, detailClass }: { icon: Glyph; detailClass: string }) {
  switch (icon) {
    case 'bank':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <rect x="4" y="12" width="3.4" height="8" rx="1" fill="white" />
          <rect x="10.3" y="7" width="3.4" height="13" rx="1" fill="white" />
          <rect x="16.6" y="3" width="3.4" height="17" rx="1" fill="white" />
        </svg>
      )
    case 'ticket':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <rect x="3" y="6.5" width="18" height="11" rx="2.5" fill="white" />
          <line
            x1="9.2"
            y1="6.5"
            x2="9.2"
            y2="17.5"
            className={detailClass}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="2 2.2"
          />
        </svg>
      )
    // Una balanza: el cuadre es exactamente eso — los dos lados en cero.
    case 'scales':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 4.2v15M6.6 19.8h10.8M4.4 8.4h15.2"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4.4 8.4 1.9 14h5l-2.5-5.6ZM19.6 8.4 17.1 14h5l-2.5-5.6Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'sync':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5M19.5 12a7.5 7.5 0 0 1-12.6 5.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17.1 3.2v3.7h-3.6M6.9 20.8v-3.7h3.6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export default function AppIcon({ accent, icon }: { accent: Accent; icon: Glyph }) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br shadow-inner shadow-white/20 ring-1 ring-black/5 ${GRADIENT_CLASSES[accent]}`}
    >
      <GlyphIcon icon={icon} detailClass={DETAIL_CLASSES[accent]} />
    </div>
  )
}
