import type { ReactNode } from 'react'

export default function Section({
  title,
  count,
  children,
}: {
  title: string
  count: number
  children: ReactNode
}) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-brand-800">{title}</h2>
        <span className="text-sm text-gray-400">{count} en total</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{children}</div>
    </section>
  )
}
