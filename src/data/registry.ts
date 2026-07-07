export type PlatformEntry = {
  type: 'platform'
  name: string
  description: string
  url: string
  status: 'operativo' | 'mantenimiento' | 'caido'
}

export type AutomationEntry = {
  type: 'automation'
  name: string
  description: string
  status: 'corriendo' | 'detenida' | 'error'
  lastRun: string
}

export type RegistryEntry = PlatformEntry | AutomationEntry

// Agregar un nuevo sistema es agregar una entrada aquí — el layout
// (tarjeta de plataforma vs. tarjeta de estado) se resuelve solo por "type".
export const platforms: PlatformEntry[] = [
  {
    type: 'platform',
    name: 'Plataforma Financiera',
    description: 'Transacciones, cruces bancarios y conciliación de cartera.',
    url: 'https://financial-platform-gules.vercel.app/',
    status: 'operativo',
  },
  {
    type: 'platform',
    name: 'Mesa de Tickets',
    description: 'Casos de soporte y seguimiento para el área financiera.',
    url: 'https://support-tickets-delta.vercel.app/',
    status: 'operativo',
  },
]

export const automations: AutomationEntry[] = [
  {
    type: 'automation',
    name: 'Cruce de Cartera — Bancolombia',
    description: 'Lee extractos, concilia contra cartera y sincroniza cada 5 minutos.',
    status: 'corriendo',
    lastRun: 'hace 3 min',
  },
]
