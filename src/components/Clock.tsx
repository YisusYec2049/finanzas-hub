import { useEffect, useState } from 'react'

// Fecha y hora reales del navegador. Se refresca cada 30 s: la hora va en
// minutos, no hace falta más.
export default function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  const date = now.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })
  const time = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })

  return (
    <span className="text-[13px] tabular-nums text-[#3a5fae]">
      {date.charAt(0).toUpperCase() + date.slice(1)} · {time}
    </span>
  )
}
