import type { AutomationEntry } from '../data/registry'
import StatusBadge from './StatusBadge'

export default function AutomationCard({ entry }: { entry: AutomationEntry }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-gray-900">{entry.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
      <StatusBadge label={entry.status} />
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span>Última corrida</span>
        <span className="font-medium text-gray-700">{entry.lastRun}</span>
      </div>
    </div>
  )
}
