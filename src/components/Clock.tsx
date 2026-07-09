import { useEffect, useState } from 'react'

export default function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const time = now.toLocaleTimeString('es-CO', { hour12: false })
  const date = now
    .toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' })
    .replace(',', '')
    .replace('.', '')

  return (
    <span className="tabular-nums text-gray-500">
      <span>{date}</span>
      <span className="mx-1.5 text-gray-300">·</span>
      <span className="font-semibold text-gray-800">{time}</span>
    </span>
  )
}
