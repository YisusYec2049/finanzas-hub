import type { ReactNode } from 'react'

export default function Section({
  id,
  title,
  count,
  children,
}: {
  id: string
  title: string
  count: number
  children: ReactNode
}) {
  return (
    <section id={id} className="mt-8 scroll-mt-20 first:mt-0">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-[15px] font-semibold text-gray-900">{title}</h2>
        <span className="text-xs text-gray-400">{count} en total</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{children}</div>
    </section>
  )
}
