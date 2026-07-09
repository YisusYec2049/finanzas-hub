import type { PlatformEntry } from '../data/registry'
import AppIcon from './AppIcon'
import StatusBadge from './StatusBadge'

export default function PlatformCard({ entry }: { entry: PlatformEntry }) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <AppIcon accent={entry.accent} icon={entry.icon} />
        <svg
          className="mt-1 h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M9 7h8v8" />
        </svg>
      </div>
      <h3 className="mt-3 font-semibold text-gray-900">{entry.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
      <StatusBadge label={entry.status} />
    </a>
  )
}
