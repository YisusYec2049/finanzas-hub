import Clock from './components/Clock'
import Section from './components/Section'
import PlatformCard from './components/PlatformCard'
import AutomationCard from './components/AutomationCard'
import GhostCard from './components/GhostCard'
import { automations, platforms } from './data/registry'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-brand-800 shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6">
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight text-white">Finanzas</span>
            <span className="text-sm font-medium tracking-wide text-blue-200">
              Centro de Operaciones
            </span>
          </div>
          <Clock />
        </div>
      </header>

      <main className="w-full flex-1 bg-gray-50">
        <div className="mx-auto max-w-6xl animate-page-in px-4 py-8 sm:px-6">
          <p className="mb-6 max-w-[60ch] text-sm text-gray-500">
            Un solo punto de entrada a las plataformas y automatizaciones del área. Cada sistema
            conserva su propio acceso y datos.
          </p>

          <Section title="Plataformas" count={platforms.length}>
            {platforms.map((entry) => (
              <PlatformCard key={entry.name} entry={entry} />
            ))}
            <GhostCard label="+ próxima plataforma" />
          </Section>

          <Section title="Automatizaciones" count={automations.length}>
            {automations.map((entry) => (
              <AutomationCard key={entry.name} entry={entry} />
            ))}
            <GhostCard label="+ próxima automatización" />
          </Section>
        </div>
      </main>

      <footer className="mt-auto bg-brand-900 py-4 text-center text-xs text-blue-200">
        Cada plataforma gestiona su propio acceso, roles y base de datos — este panel solo enruta.
      </footer>
    </div>
  )
}
