// Ícono de línea de cada herramienta. El dibujo vive en ToolIcon.tsx.
export type Glyph = 'chart' | 'scales' | 'document' | 'person-minus' | 'ticket'

export type ToolEntry = {
  name: string
  // Empieza con un verbo: lo que la persona viene a hacer, no lo que es la herramienta.
  description: string
  url: string
  icon: Glyph
  // Línea opcional bajo la descripción (un recordatorio operativo real, nunca un estado inventado).
  note?: string
}

// Agregar una herramienta es agregar una entrada en el grupo que le corresponde.
// Agregar un grupo nuevo es agregar un arreglo aquí y su sección en App.tsx.

export const automatizaciones: ToolEntry[] = [
  {
    name: 'Cruce de Cartera',
    description: 'Identificar pagos y revisar la cartera',
    url: 'https://financial-platform-gules.vercel.app/',
    icon: 'chart',
    note: 'Archivos antes de las 9:30',
  },
  {
    name: 'Conciliaciones Bancarias',
    description: 'Conciliar los bancos del mes',
    url: 'https://bank-reconciliation-gamma.vercel.app/',
    icon: 'scales',
  },
  {
    name: 'Solicitudes',
    description: 'Gestionar facturas, notas crédito y órdenes de matrícula',
    url: 'https://invoice-request-chi.vercel.app/',
    icon: 'document',
  },
]

export const registros: ToolEntry[] = [
  {
    name: 'Registro de Bajas',
    description: 'Registrar y consultar bajas',
    url: 'https://registrodebajas.lovable.app/',
    icon: 'person-minus',
  },
]

export const soporte: ToolEntry[] = [
  {
    name: 'Mesa de Tickets',
    description: 'Abrir un caso o atender uno',
    url: 'https://support-tickets-delta.vercel.app/',
    icon: 'ticket',
  },
]
