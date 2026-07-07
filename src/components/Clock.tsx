import { useEffect, useState } from 'react'

export default function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const time = now.toLocaleTimeString('es-CO', { hour12: false })
  const date = now.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="text-right text-sm text-blue-200">
      <span className="block font-medium tabular-nums text-white">{time}</span>
      <span className="text-xs">{date}</span>
    </div>
  )
}
