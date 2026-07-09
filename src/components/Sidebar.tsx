import { useState } from 'react'

function GridIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
      <rect x="2" y="2" width="7" height="7" rx="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
      <path d="M11 1.5 3.5 11.5h5L8 18.5l8.5-10.5h-5L11 1.5Z" />
    </svg>
  )
}

// Mismo glifo de brújula que /compass.svg (favicon), en blanco sobre
// una insignia azul — para que la marca del hub se sienta consistente
// con su propio ícono en vez de introducir uno nuevo.
function CompassGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" fill="white" />
    </svg>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5 px-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-600 shadow-sm">
        <CompassGlyph />
      </div>
      <span className="text-[15px] font-semibold text-gray-900">Finanzas</span>
    </div>
  )
}

function NavItem({
  href,
  label,
  icon,
  active,
  onClick,
}: {
  href: string
  label: string
  icon: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
        active ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {icon}
      {label}
    </a>
  )
}

export default function Sidebar() {
  const [active, setActive] = useState<'plataformas' | 'automatizaciones'>('plataformas')

  return (
    <aside className="flex shrink-0 flex-col gap-1 border-black/5 bg-white px-3 py-4 md:w-64 md:border-r md:py-6">
      <Logo />
      <nav className="mt-6 flex flex-col gap-1">
        <NavItem
          href="#plataformas"
          label="Plataformas"
          icon={<GridIcon />}
          active={active === 'plataformas'}
          onClick={() => setActive('plataformas')}
        />
        <NavItem
          href="#automatizaciones"
          label="Automatizaciones"
          icon={<BoltIcon />}
          active={active === 'automatizaciones'}
          onClick={() => setActive('automatizaciones')}
        />
      </nav>
    </aside>
  )
}
