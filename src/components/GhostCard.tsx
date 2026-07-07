import ConstructionCloud from './ConstructionCloud'

export default function GhostCard({ label }: { label: string }) {
  return (
    <div className="flex min-h-[110px] flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-gray-300 p-5 text-center">
      <ConstructionCloud />
      <span className="text-sm font-medium text-gray-400">Construyendo</span>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  )
}
