import Clock from './components/Clock'
import Section from './components/Section'
import PlatformCard from './components/PlatformCard'
import AutomationCard from './components/AutomationCard'
import GhostCard from './components/GhostCard'
import Sidebar from './components/Sidebar'
import { automations, platforms } from './data/registry'

export default function App() {
  const allOperational = [...platforms, ...automations].every(
    (entry) => entry.status === 'operativo' || entry.status === 'corriendo',
  )

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row">
      <Sidebar />

      <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto max-w-[1600px] animate-page-in">
          <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-gray-900">Centro de Operaciones</h1>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  allOperational ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    allOperational ? 'bg-green-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                {allOperational ? 'En vivo' : 'Con incidencias'}
              </span>
            </div>
            <Clock />
          </div>

          <p className="mb-6 mt-5 max-w-[60ch] text-sm text-gray-500">
            Un solo punto de entrada a las plataformas y automatizaciones del área. Cada sistema
            conserva su propio acceso y datos.
          </p>

          <Section id="plataformas" title="Plataformas" count={platforms.length}>
            {platforms.map((entry) => (
              <PlatformCard key={entry.name} entry={entry} />
            ))}
            <GhostCard label="+ próxima plataforma" />
          </Section>

          <Section id="automatizaciones" title="Automatizaciones" count={automations.length}>
            {automations.map((entry) => (
              <AutomationCard key={entry.name} entry={entry} />
            ))}
            <GhostCard label="+ próxima automatización" />
          </Section>
        </div>
      </main>
    </div>
  )
}
