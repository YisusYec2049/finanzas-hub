import type { PlatformEntry } from '../data/registry'
import StatusBadge from './StatusBadge'

export default function PlatformCard({ entry }: { entry: PlatformEntry }) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-lg bg-white p-5 shadow-sm transition-all duration-150 hover:shadow-md active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-gray-900">{entry.name}</h3>
          <span className="mt-0.5 block h-0.5 w-0 bg-brand-700 transition-all duration-300 ease-out group-hover:w-full" />
        </div>
        <svg
          className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-brand-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M9 7h8v8" />
        </svg>
      </div>
      <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
      <StatusBadge label={entry.status} />
    </a>
  )
}
