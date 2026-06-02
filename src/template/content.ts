import {
  Activity,
  BadgeCheck,
  Building2,
  CalendarClock,
  FlaskConical,
  HeartPulse,
  MapPin,
  Pill,
  ShieldCheck,
  SmilePlus,
  Stethoscope,
  TestTube2,
  UsersRound,
} from 'lucide-react'
import type { MarketingTemplateConfig, NavGroup, Stat, Testimonial } from '../data/types'
import { templateActions } from './actions'

export const site = {
  brand: {
    name: 'CareBridge HomeCare',
    shortName: 'CareBridge',
    suffix: 'HomeCare',
    tagline: 'Verified caregivers, nurses, attendants, and home healthcare teams for families who need dependable care at home.',
  },
  contact: {
    phone: '+91 93609 52112',
    sales: 'care@carebridge.example',
    support: 'support@carebridge.example',
    address: 'CareBridge Coordination Desk, Chennai, Bengaluru, Hyderabad, Mumbai, Pune, Delhi NCR',
  },
  topStrip: [
    'Verified caregivers and nurses',
    '18 min average response time',
    'Hourly, daily, weekly, monthly, and live-in care',
  ],
  footerCopyright: 'Copyright 2026 © CareBridge HomeCare. All rights reserved.',
  ctas: templateActions,
  externalLinks: {
    login: templateActions.login.to,
    patient: templateActions.patient.to,
    whatsapp: templateActions.whatsapp.to,
  },
}

export const productNav: NavGroup = {
  title: 'Services',
  items: [
    {
      title: 'All Home Care Services',
      description: 'Explore caregivers, nurses, attendants, therapy, elder care, baby care, and live-in staff.',
      to: '/#services',
    },
    {
      title: 'Elder Care Services',
      description: 'Daily assistance, companionship, fall-risk support, hygiene, meals, and family updates.',
      to: '/services/elder-care-assistance',
    },
    {
      title: 'Nursing Services at Home',
      description: 'Qualified nurses for vitals, injections, wound care, catheter care, and post-discharge tasks.',
      to: '/services/nursing-services-at-home',
    },
    {
      title: 'Patient Care Attendants',
      description: 'Non-clinical attendants for bathing, feeding, bed care, mobility, and day-to-day supervision.',
      to: '/services/patient-care-attendants',
    },
    {
      title: 'Post-Hospital Recovery',
      description: 'Care plans after surgery or discharge with nurses, attendants, therapy support, and monitoring.',
      to: '/services/post-hospitalization-recovery',
    },
    {
      title: 'Physiotherapy at Home',
      description: 'Therapy visits for rehab, mobility, pain management, stroke recovery, and strengthening.',
      to: '/services/physiotherapy-at-home',
    },
    {
      title: 'Mother and Newborn Care',
      description: 'Baby care specialists for newborn routines, postnatal support, hygiene, feeding, and night care.',
      to: '/services/mother-newborn-care',
    },
    {
      title: 'Companion and Caretaker Services',
      description: 'Emotional support, reminders, light assistance, supervision, and daily routine companionship.',
      to: '/services/companion-caretaker-services',
    },
    {
      title: 'Live-in Home Healthcare Staff',
      description: 'Long-duration caregivers and support staff with continuity reviews and replacement coverage.',
      to: '/services/live-in-home-healthcare-staff',
    },
  ],
}

export const integrationNav: NavGroup = {
  title: 'Trust & Safety',
  items: [
    { title: 'Verification Process', to: '/#verification' },
    { title: 'Background Checks', to: '/#verification' },
    { title: 'Training Standards', to: '/#training' },
    { title: 'Privacy Assurance', to: '/#support-policies' },
    { title: 'Emergency Support', to: '/#support-policies' },
    { title: 'Replacement Policy', to: '/#support-policies' },
  ],
}

export const resourceNav: NavGroup = {
  title: 'Care Plans',
  items: [
    { title: 'Hourly Care', to: '/#availability' },
    { title: 'Daily Shifts', to: '/#availability' },
    { title: 'Weekly Plans', to: '/#availability' },
    { title: 'Monthly Care', to: '/#availability' },
    { title: 'Live-in Care', to: '/#availability' },
  ],
}

export const companyNav: NavGroup = {
  title: 'Coverage',
  items: [
    { title: 'Chennai', to: '/#coverage' },
    { title: 'Bengaluru', to: '/#coverage' },
    { title: 'Hyderabad', to: '/#coverage' },
    { title: 'Mumbai', to: '/#coverage' },
    { title: 'Pune', to: '/#coverage' },
    { title: 'Delhi NCR', to: '/#coverage' },
  ],
}

export const customerNav: NavGroup = {
  title: 'Families',
  items: [
    { title: 'Testimonials', to: '/#testimonials' },
    { title: 'Success Stories', to: '/#stories' },
    { title: 'FAQ', to: '/#faq' },
    { title: 'Request Caregiver', to: '/#caregiver-request' },
  ],
}

export const mainNavGroups = [
  productNav,
  resourceNav,
  integrationNav,
  companyNav,
  customerNav,
]

export const sharedStats: Stat[] = [
  { value: '12.5k+', label: 'Families served' },
  { value: '18 min', label: 'Average response time' },
  { value: '4.9/5', label: 'Customer satisfaction' },
  { value: '6+', label: 'Service coverage cities' },
]

export const outcomeStats: Stat[] = [
  { value: '100%', label: 'Identity-checked professionals' },
  { value: '24/7', label: 'Care coordination support' },
  { value: '48 hr', label: 'Replacement planning window' },
]

export const customerLogos = [
  'Elder Care',
  'Home Nursing',
  'Patient Attendants',
  'Post-Surgery Care',
  'Physiotherapy',
  'Baby Care',
  'Companion Care',
  'Live-in Care',
  'Recovery Plans',
  'Family Support',
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'The coordinator understood my father’s mobility and medication routine before assigning the caregiver. The daily updates gave our family confidence.',
    name: 'Radhika Menon',
    role: 'Daughter of elder-care patient',
    location: 'India',
    rating: '4.9',
  },
  {
    quote:
      'We needed nursing support immediately after discharge. The nurse arrived with a clear checklist and escalated vitals professionally when needed.',
    name: 'Arun Prakash',
    role: 'Post-surgery family caregiver',
    location: 'India',
    rating: '4.8',
  },
  {
    quote:
      'The baby care specialist was gentle, punctual, and trained. Having night support helped the whole family settle into a safe routine.',
    name: 'Nisha Varma',
    role: 'New parent',
    location: 'India',
    rating: '4.9',
  },
  {
    quote:
      'The replacement policy mattered to us. When our first attendant was unavailable, CareBridge found a verified backup without disrupting care.',
    name: 'Suhas Rao',
    role: 'Family caregiver',
    location: 'India',
    rating: '4.7',
  },
]

export const leadForm = {
  id: 'caregiver-request',
  title: 'Request a verified caregiver',
  successTitle: 'Care request received',
  intro: 'Share the care requirement, location, timing, and urgency. A care coordinator will help match the right professional.',
  successMessage: 'Details saved. We will reach you shortly.',
  cooldownMinutes: 30,
  cooldownMessage:
    'To prevent duplicate requests, this form can be submitted again in about {minutes} minutes.',
  submitLabel: 'Request Caregiver',
  submittedLabel: 'Request Saved',
  interestPlaceholder: 'Select one',
  interestOptions: [
    'Elder care',
    'Home nursing',
    'Patient attendant',
    'Post-surgery recovery',
    'Physiotherapy at home',
    'Mother and newborn care',
    'Companion care',
    'Live-in care',
  ],
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Priya Raman',
      requiredMessage: 'Name is required.',
    },
    email: {
      label: 'Email',
      placeholder: 'you@example.com',
    },
    phone: {
      label: 'Phone',
      placeholder: '+91 98765 43210',
    },
    organization: {
      label: 'Organization',
      placeholder: 'Patient age, condition, or family contact',
      requiredMessage: 'Care context is required.',
    },
    interest: {
      label: 'Interest',
    },
    message: {
      label: 'Message',
      placeholder: 'Share city, timing, duration, mobility level, diagnosis, surgery details, or special safety needs.',
    },
  },
  validation: {
    email: 'Enter a valid email.',
    phone: 'Enter a valid phone number.',
    interest: 'Select an area of interest.',
  },
}

export const visual = {
  productName: 'CareBridge Desk',
  sidebar: ['Requests', 'Families', 'Caregivers', 'Visits', 'Reports'],
  activeSidebarIndex: 1,
  kpis: [
    { value: '128', label: 'Active care plans' },
    { value: '96%', label: 'On-time visits' },
    { value: '18m', label: 'Response' },
  ],
  flowRows: {
    hospital: ['Inquiry', 'Assessment', 'Verified match', 'Assignment'],
    lab: ['Need review', 'Profile check', 'Visit notes', 'Family update'],
    pharmacy: ['Request', 'Care plan', 'Shift', 'Review'],
    clinic: ['Booking', 'Verification', 'Caregiver', 'Monitoring'],
    integration: ['Request', 'Shortlist', 'Confirm', 'Start care'],
    security: ['Identity', 'Background', 'Training', 'Audit'],
    growth: ['Inquiry', 'Plan', 'Assign', 'Support'],
    people: ['Family', 'Coordinator', 'Caregiver', 'Supervisor'],
  },
  topCard: { value: 'Today', label: 'Caregiver match' },
  bottomCard: { value: 'Verified', label: 'Background check' },
}

export const templateCopy = {
  megaMenuSubtitle: 'Explore care options',
  logoCloud: 'Trusted support models for elder care, nursing, attendants, therapy, baby care, and live-in family care',
  workflowEyebrow: 'Booking process',
  testimonialsEyebrow: 'Family stories',
  testimonialsTitle: 'Families trust the care experience',
  testimonialsDescription:
    'CareBridge focuses on verified professionals, clear care plans, responsive replacement support, and compassionate communication.',
  faqEyebrow: 'Common concerns',
  faqTitle: 'Questions families ask before booking care',
  faqDescription: 'Answers about verification, replacements, safety, schedules, and home-care scope.',
  ctaEyebrow: 'Care support',
  ctaTitle: 'Request a caregiver your family can trust',
  ctaDescription:
    'Tell us what your family needs and a care coordinator will help shortlist verified professionals for the right schedule.',
  contactPanelEyebrow: 'Care consultation',
  contactPanelTitle: 'Speak with a care coordinator',
  contactPanelDescription:
    'Share patient needs, preferred timing, service duration, city, and safety considerations.',
  sourceDisclosure: 'Care service details',
  patientLoginLabel: 'For Families',
  userLoginLabel: 'Family Portal',
  signupLabel: 'For Providers',
  forgotPasswordLabel: 'Forgot Password',
  quickActionsLabel: 'Quick actions',
  whatsappLabel: 'Chat with coordinator',
  callSalesLabel: 'Call care desk',
  scrollTopLabel: 'Scroll to top',
}

export const templateConfig: MarketingTemplateConfig = {
  site,
  actions: templateActions,
  navigation: {
    product: productNav,
    resource: resourceNav,
    integration: integrationNav,
    company: companyNav,
    customer: customerNav,
    main: mainNavGroups,
  },
  sharedStats,
  outcomeStats,
  customerLogos,
  testimonials,
  leadForm,
  visual,
  copy: templateCopy,
}

export const iconMap = {
  hospital: Building2,
  lab: FlaskConical,
  pharmacy: Pill,
  clinic: Stethoscope,
  integration: Activity,
  security: ShieldCheck,
  patient: SmilePlus,
  users: UsersRound,
  calendar: CalendarClock,
  badge: BadgeCheck,
  test: TestTube2,
  location: MapPin,
  pulse: HeartPulse,
}
