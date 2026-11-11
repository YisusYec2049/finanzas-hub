import type { ToolEntry } from '../data/registry'
import ToolIcon, { ArrowIcon } from './ToolIcon'

// Versión delgada para los grupos de menor escala (Soporte): visible, pero
// sin competir con las tarjetas grandes.
export default function ToolBar({ entry }: { entry: ToolEntry }) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      className="tool-bar flex flex-wrap items-center gap-x-3.5 gap-y-2 rounded-2xl border border-brand-100 bg-[#f5f9ff] px-[22px] py-[18px] text-brand-900"
    >
      <ToolIcon icon={entry.icon} className="h-[22px] w-[22px] text-brand-600" />
      <span className="text-[17px] font-semibold">{entry.name}</span>
      <span className="min-w-0 flex-1 text-[15px] text-[#3a5fae]">{entry.description}</span>
      <ArrowIcon className="tool-arrow h-[18px] w-[18px] text-brand-600" />
    </a>
  )
}
