export type Accent = 'blue' | 'purple' | 'green' | 'teal'
export type Glyph = 'bank' | 'ticket' | 'sync' | 'scales'

export type PlatformEntry = {
  type: 'platform'
  name: string
  description: string
  url: string
  status: 'operativo' | 'mantenimiento' | 'caido'
  accent: Accent
  icon: Glyph
}

export type AutomationEntry = {
  type: 'automation'
  name: string
  description: string
  status: 'corriendo' | 'detenida' | 'error'
  accent: Accent
  icon: Glyph
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
    accent: 'blue',
    icon: 'bank',
  },
  {
    type: 'platform',
    name: 'Conciliaciones Bancarias',
    description: 'Cuadre mensual de los bancos contra el Sistema Financiero.',
    url: 'https://bank-reconciliation-gamma.vercel.app/',
    status: 'operativo',
    accent: 'teal',
    icon: 'scales',
  },
  {
    type: 'platform',
    name: 'Mesa de Tickets',
    description: 'Casos de soporte y seguimiento para el área financiera.',
    url: 'https://support-tickets-delta.vercel.app/',
    status: 'operativo',
    accent: 'purple',
    icon: 'ticket',
  },
]

export const automations: AutomationEntry[] = [
  {
    type: 'automation',
    name: 'Cruce de Cartera',
    description: 'Lee extractos, concilia contra cartera y sincroniza cada 5 minutos.',
    status: 'corriendo',
    accent: 'green',
    icon: 'sync',
  },
]
