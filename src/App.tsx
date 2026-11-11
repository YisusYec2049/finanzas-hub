import type { ReactNode } from 'react'
import Clock from './components/Clock'
import ToolBar from './components/ToolBar'
import ToolCard from './components/ToolCard'
import { automatizaciones, registros, soporte } from './data/registry'

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#3a5fae]">{children}</h2>
  )
}

// Mismo glifo de brújula que /compass.svg (favicon).
function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
          <path d="M15.5 8.5l-2 5-5 2 2-5z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-[15px] font-semibold">Finanzas · Centro de Operaciones</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white px-6 pb-16 pt-10 text-brand-900">
      {/* "stage" es el contenedor que el efecto foco usa para apagar a las demás tarjetas. */}
      <main className="stage mx-auto flex max-w-[1160px] flex-col gap-11">
        <header className="rise flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Logo />
            <Clock />
          </div>
          <h1 className="text-[38px] font-semibold leading-[1.1] tracking-[-0.03em]">
            ¿Qué vas a hacer hoy?
          </h1>
        </header>

        <div className="rise flex flex-wrap gap-x-9 gap-y-5 [animation-delay:100ms]">
          <section className="flex min-w-0 flex-[3_1_560px] flex-col gap-3.5">
            <GroupLabel>Automatizaciones</GroupLabel>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3.5">
              {automatizaciones.map((entry) => (
                <ToolCard key={entry.name} entry={entry} />
              ))}
            </div>
          </section>

          <section className="flex min-w-0 flex-[1_1_190px] flex-col gap-3.5">
            <GroupLabel>Registros</GroupLabel>
            {registros.map((entry) => (
              <ToolCard key={entry.name} entry={entry} />
            ))}
          </section>
        </div>

        <section className="rise flex flex-col gap-3.5 [animation-delay:200ms]">
          <GroupLabel>Soporte</GroupLabel>
          {soporte.map((entry) => (
            <ToolBar key={entry.name} entry={entry} />
          ))}
        </section>
      </main>
    </div>
  )
}
