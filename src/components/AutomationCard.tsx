import type { AutomationEntry } from '../data/registry'
import AppIcon from './AppIcon'
import StatusBadge from './StatusBadge'

export default function AutomationCard({ entry }: { entry: AutomationEntry }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <AppIcon accent={entry.accent} icon={entry.icon} />
      <h3 className="mt-3 font-semibold text-gray-900">{entry.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
      <StatusBadge label={entry.status} />
    </div>
  )
}
