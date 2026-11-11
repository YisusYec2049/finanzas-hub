import type { ToolEntry } from '../data/registry'
import ToolIcon, { ArrowIcon } from './ToolIcon'

// Tarjeta grande ("coloso"). Todas miden lo mismo: la jerarquía está entre
// grupos, nunca entre herramientas. El efecto foco vive en index.css (.tool-card).
export default function ToolCard({ entry }: { entry: ToolEntry }) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      className="tool-card flex min-h-[300px] flex-col gap-5 rounded-[22px] border border-brand-100 bg-[#f5f9ff] p-[26px] text-brand-900"
    >
      <ToolIcon icon={entry.icon} strokeWidth={1.1} className="tool-watermark h-[170px] w-[170px]" />

      <div className="relative flex items-center justify-between">
        <ToolIcon icon={entry.icon} className="h-7 w-7 text-brand-600" />
        <ArrowIcon className="tool-arrow h-5 w-5 text-brand-600" />
      </div>

      <div className="relative flex flex-col gap-2.5">
        <h3 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.025em]">{entry.name}</h3>
        <p className="text-[15px] leading-normal text-[#3a5fae]">{entry.description}</p>
        {entry.note && <p className="text-xs text-[#4468b8]">{entry.note}</p>}
      </div>
    </a>
  )
}
