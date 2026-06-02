import type { TemplateAction } from '../data/types'

export const templateActions = {
  demo: {
    label: 'Request Caregiver',
    to: '/#caregiver-request',
    kind: 'primary',
  },
  contact: {
    label: 'Book Consultation',
    to: '/#caregiver-request',
    kind: 'secondary',
  },
  brochure: {
    label: 'View Care Packages',
    to: '/#care-packages',
    kind: 'secondary',
  },
  login: {
    label: 'Family Portal',
    to: '/#caregiver-request',
    kind: 'utility',
    ariaLabel: 'Family portal',
  },
  patient: {
    label: 'For Families',
    to: '/#services',
    kind: 'utility',
  },
  signup: {
    label: 'For Providers',
    to: '/#verification',
    kind: 'utility',
  },
  forgotPassword: {
    label: 'Forgot Password',
    to: '/forgot-password',
    kind: 'utility',
  },
  whatsapp: {
    label: 'Live chat',
    to: 'https://wa.me/919360952112',
    external: true,
    kind: 'external',
    ariaLabel: 'Chat with care coordinator',
  },
} satisfies Record<string, TemplateAction>
