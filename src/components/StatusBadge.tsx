type Tone = 'good' | 'warn' | 'bad'

// Mismo patrón de píldora que el badge "En vivo" de
// financial-platform/components/TransactionsView.tsx, con colores de
// sistema estilo macOS (verde/ámbar/rojo de System Settings).
const PILL_CLASSES: Record<Tone, string> = {
  good: 'bg-green-500/10 text-green-700',
  warn: 'bg-amber-500/10 text-amber-700',
  bad: 'bg-red-500/10 text-red-700',
}

const DOT_CLASSES: Record<Tone, string> = {
  good: 'bg-green-500 animate-pulse',
  warn: 'bg-amber-500',
  bad: 'bg-red-500',
}

const TONE_BY_LABEL: Record<string, Tone> = {
  operativo: 'good',
  corriendo: 'good',
  mantenimiento: 'warn',
  detenida: 'warn',
  caido: 'bad',
  error: 'bad',
}

export default function StatusBadge({ label }: { label: string }) {
  const tone = TONE_BY_LABEL[label] ?? 'good'

  return (
    <span
      className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${PILL_CLASSES[tone]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASSES[tone]}`} />
      {label}
    </span>
  )
}
