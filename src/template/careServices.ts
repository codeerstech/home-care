import {
  Activity,
  Baby,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  HeartHandshake,
  HeartPulse,
  Home,
  LockKeyhole,
  MapPinned,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { FaqItem, RouteMeta } from '../data/types'

export type CareService = {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  availability: string
  bestFor: string[]
  problem: string
  journey: string[]
  workflow: string[]
  team: string[]
  carePlan: string[]
  monitoring: string[]
  safety: string[]
  outcomes: string[]
}

const sharedSafety = [
  'Identity, address, and reference verification before assignment',
  'Family-approved scope of work and restricted home-access notes',
  'Coordinator escalation path for concerns, absence, or emergencies',
]

export const careServices: CareService[] = [
  {
    slug: 'elder-care-assistance',
    title: 'Elder Care Services',
    shortTitle: 'Elder Care',
    description:
      'Daily support for seniors who need mobility help, hygiene routines, meal support, medication reminders, companionship, and gentle supervision.',
    icon: HeartHandshake,
    availability: 'Hourly, daily, weekly, monthly, live-in',
    bestFor: ['Seniors living alone', 'Fall-risk patients', 'Families needing supervised routines'],
    problem: 'Families need dependable support for elderly parents without compromising dignity, independence, or safety at home.',
    journey: ['Share age, condition, location, and timing', 'Coordinator confirms mobility and safety needs', 'Verified assistant is matched', 'Daily updates keep family informed'],
    workflow: ['Needs assessment', 'Care plan setup', 'Caregiver assignment', 'Daily reporting and review'],
    team: ['Care coordinator', 'Elder care assistant', 'Nurse supervisor when needed'],
    carePlan: ['Mobility, hygiene, nutrition, reminders, and companionship schedule', 'Fall-prevention checklist', 'Escalation triggers for confusion, fever, or missed medicines'],
    monitoring: ['Daily visit notes', 'Weekly long-term plan review', 'Incident and family feedback log'],
    safety: sharedSafety,
    outcomes: ['Safer senior routines', 'Reduced family stress', 'Clear continuity for long-term care'],
  },
  {
    slug: 'nursing-services-at-home',
    title: 'Nursing Services at Home',
    shortTitle: 'Nursing',
    description:
      'Qualified nurses for vitals, injections, wound dressing, catheter care, chronic-care support, medication administration, and post-discharge supervision.',
    icon: Stethoscope,
    availability: 'Hourly, shift-based, daily, weekly',
    bestFor: ['Post-discharge patients', 'Procedure-led nursing', 'Chronic-care support'],
    problem: 'Patients discharged from hospital often need trained clinical support without repeated facility visits.',
    journey: ['Share prescription and doctor instructions', 'Supervisor reviews clinical scope', 'Qualified nurse is assigned', 'Vitals and task notes are reported'],
    workflow: ['Clinical scope review', 'Nurse skill matching', 'Visit schedule', 'Documentation and escalation'],
    team: ['Registered nurse', 'Nurse supervisor', 'Care coordinator'],
    carePlan: ['Task checklist for vitals, dressing, injections, or catheter care', 'Doctor-instruction review', 'Warning-sign education for family'],
    monitoring: ['Visit notes', 'Supervisor review for complex care', 'Escalation for abnormal vitals'],
    safety: ['Credential and license verification', 'Sterile practice standards', 'Clinical task boundaries approved before dispatch'],
    outcomes: ['Safer recovery supervision', 'Reduced revisit friction', 'Clearer clinical updates'],
  },
  {
    slug: 'patient-care-attendants',
    title: 'Patient Care Services',
    shortTitle: 'Patient Care',
    description:
      'Patient attendants for bathing assistance, feeding support, bed care, toileting, mobility help, repositioning, and day-to-day supervision.',
    icon: UsersRound,
    availability: '12-hour, 24-hour, weekly, monthly',
    bestFor: ['Bedridden patients', 'Stroke recovery', 'High-dependency family care'],
    problem: 'Families need trained non-clinical attendants who can support daily needs safely and respectfully.',
    journey: ['Share dependency level', 'Coordinator confirms attendant scope', 'Trained attendant is assigned', 'Shift updates and replacement support remain active'],
    workflow: ['Dependency assessment', 'Attendant match', 'Routine setup', 'Shift reporting'],
    team: ['Patient care attendant', 'Care coordinator', 'Nurse supervisor for high-dependency cases'],
    carePlan: ['Hygiene, feeding, movement, toileting, and rest routine', 'Bed sore prevention reminders', 'Family-approved task boundaries'],
    monitoring: ['Shift handover notes', 'Coordinator follow-up', 'Family comfort review'],
    safety: sharedSafety,
    outcomes: ['More comfortable home care', 'Less family caregiver strain', 'Clearer daily supervision'],
  },
  {
    slug: 'post-hospitalization-recovery',
    title: 'Post-Hospitalization Recovery Support',
    shortTitle: 'Recovery Care',
    description:
      'Structured support after surgery, illness, or hospitalization with attendants, nurses, therapy coordination, recovery routines, and family reporting.',
    icon: Activity,
    availability: 'Daily, weekly, monthly recovery plans',
    bestFor: ['Surgery recovery', 'Discharge planning', 'Short-term intensive support'],
    problem: 'The first days after discharge are stressful when families are unsure how to manage routines, warning signs, and follow-up care.',
    journey: ['Share discharge summary', 'Coordinator reviews recovery risks', 'Care mix is assigned', 'Progress is monitored until step-down'],
    workflow: ['Discharge review', 'Recovery plan setup', 'Nurse or attendant assignment', 'Progress monitoring'],
    team: ['Recovery coordinator', 'Nurse', 'Patient attendant', 'Physiotherapist when needed'],
    carePlan: ['Medication reminders and wound-care schedule', 'Red-flag checklist', 'Step-down plan from intensive to lighter support'],
    monitoring: ['Daily recovery logs', 'Vitals and symptom escalation', 'Family progress summaries'],
    safety: ['Aligned to doctor discharge instructions', 'Role-specific task boundaries', 'Emergency escalation path'],
    outcomes: ['Smoother hospital-to-home transition', 'Better discharge adherence', 'Reduced recovery confusion'],
  },
  {
    slug: 'physiotherapy-at-home',
    title: 'Physiotherapy at Home',
    shortTitle: 'Physiotherapy',
    description:
      'Home physiotherapy for mobility, pain management, balance training, post-operative rehabilitation, stroke recovery, and elderly strengthening.',
    icon: HeartPulse,
    availability: 'Single visits, weekly plans, monthly rehab programs',
    bestFor: ['Mobility recovery', 'Pain management', 'Rehab after surgery or stroke'],
    problem: 'Patients miss therapy when travel is painful, difficult, or unsafe during recovery.',
    journey: ['Share condition and therapy goals', 'Therapist assesses baseline', 'Home-safe rehab plan begins', 'Progress milestones are reviewed'],
    workflow: ['Initial assessment', 'Exercise plan', 'Home sessions', 'Progress adjustment'],
    team: ['Physiotherapist', 'Care coordinator', 'Family exercise supporter'],
    carePlan: ['Baseline mobility and pain assessment', 'Goal-led exercise frequency', 'Progression based on tolerance'],
    monitoring: ['Session notes', 'Home exercise adherence', 'Pain and mobility reports'],
    safety: ['Qualified therapist assignment', 'Fall-risk screening', 'Doctor referral alignment where required'],
    outcomes: ['Improved mobility', 'Better therapy adherence', 'Reduced travel burden'],
  },
  {
    slug: 'mother-newborn-care',
    title: 'Mother and Newborn Care',
    shortTitle: 'Mother & Baby',
    description:
      'Trained baby care specialists and postnatal support staff for newborn routines, mother recovery assistance, feeding support, hygiene, and night care.',
    icon: Baby,
    availability: 'Hourly, night support, weekly, monthly',
    bestFor: ['New parents', 'Postnatal recovery', 'Night-care support'],
    problem: 'New parents need gentle, trained support during a physically and emotionally demanding postnatal period.',
    journey: ['Share newborn age and delivery context', 'Coordinator confirms baby-care needs', 'Specialist is assigned', 'Routine notes support family confidence'],
    workflow: ['Mother and baby needs assessment', 'Specialist matching', 'Routine setup', 'Family updates'],
    team: ['Baby care specialist', 'Care coordinator', 'Nurse supervisor for postnatal questions'],
    carePlan: ['Feeding, burping, sleep, hygiene, and night-care routine', 'Mother recovery assistance', 'Safe handling preferences'],
    monitoring: ['Feeding and sleep logs', 'Family feedback', 'Coordinator support for schedule changes'],
    safety: ['Background-checked specialist', 'Hygiene and safe-handling training', 'Escalation for medical concerns'],
    outcomes: ['Supported postnatal recovery', 'Safer newborn routines', 'Reduced parent fatigue'],
  },
  {
    slug: 'companion-caretaker-services',
    title: 'Companion and Caretaker Services',
    shortTitle: 'Companion Care',
    description:
      'Companion caregivers for emotional support, supervision, daily reminders, light assistance, appointments, conversation, and routine companionship.',
    icon: Sparkles,
    availability: 'Hourly, daily, weekly, monthly',
    bestFor: ['Seniors needing companionship', 'Mild supervision', 'Family respite'],
    problem: 'Families often need dependable companionship even when intensive clinical care is not required.',
    journey: ['Share routine and preferences', 'Coordinator matches caregiver fit', 'Companion supports daily routines', 'Care can expand if needs change'],
    workflow: ['Preference intake', 'Caregiver matching', 'Companionship support', 'Feedback-led continuity'],
    team: ['Companion caregiver', 'Care coordinator', 'Family contact person'],
    carePlan: ['Conversation, reminders, walks, and appointment support', 'Comfort preferences', 'Escalation triggers for changed health'],
    monitoring: ['Daily updates', 'Mood and routine observations', 'Care fit review'],
    safety: sharedSafety,
    outcomes: ['Reduced loneliness', 'More consistent routines', 'Early visibility into changing needs'],
  },
  {
    slug: 'live-in-home-healthcare-staff',
    title: 'Live-in Home Healthcare Staff',
    shortTitle: 'Live-in Care',
    description:
      'Dedicated home healthcare staff for continuous family support, long-duration assignments, supervised routines, shift handovers, and replacement continuity.',
    icon: Home,
    availability: 'Weekly, monthly, live-in care',
    bestFor: ['Long-term care', 'High-dependency patients', 'Continuity-focused families'],
    problem: 'Long-duration care is hard to manage when families cannot coordinate shifts, replacements, and daily supervision reliably.',
    journey: ['Share dependency and home setup', 'Coordinator creates live-in plan', 'Verified staff is introduced', 'Continuity reviews keep care stable'],
    workflow: ['Long-term assessment', 'Staff shortlist', 'Family onboarding', 'Weekly reviews and replacement planning'],
    team: ['Live-in caregiver', 'Care coordinator', 'Backup staffing desk', 'Nurse supervisor when needed'],
    carePlan: ['Continuous routine map', 'Staff rest and handover rules', 'Escalation path for health or staffing concerns'],
    monitoring: ['Daily summaries', 'Weekly coordinator reviews', 'Replacement tracking'],
    safety: ['Verified identity and background screening', 'Family-approved privacy rules', 'Backup support for absence or mismatch'],
    outcomes: ['Stable long-term coverage', 'Reduced staffing anxiety', 'Better continuity for high-dependency families'],
  },
]

export const processSteps = [
  { title: 'Share care requirement', description: 'Tell us condition, service type, city, timing, duration, and urgency.', icon: PhoneCall },
  { title: 'Care assessment', description: 'A coordinator reviews risk level, expectations, home setup, and staff skills.', icon: ClipboardList },
  { title: 'Verified match', description: 'Professionals are matched by qualification, background, experience, language, and availability.', icon: UserCheck },
  { title: 'Assignment and monitoring', description: 'The caregiver starts with a care plan, reporting rhythm, and replacement coverage.', icon: CheckCircle2 },
]

export const verificationChecks = [
  { title: 'Identity verification', description: 'Government ID, address details, and profile records are checked.', icon: BadgeCheck },
  { title: 'Background screening', description: 'Prior employment, references, police-verification status, and conduct notes are reviewed.', icon: ShieldCheck },
  { title: 'Skill validation', description: 'Role-specific nursing, attendant, therapy, and baby-care capabilities are assessed.', icon: FileCheck2 },
  { title: 'Ongoing audits', description: 'Family feedback, attendance, incidents, and coordinator reviews shape continued eligibility.', icon: ClipboardCheck },
]

export const availabilityModels = [
  { title: 'Hourly care', description: 'Short visits for nursing tasks, therapy, injections, dressing, or companion support.' },
  { title: 'Daily shifts', description: 'Day or night assignments for attendants, elder care, baby care, and patient support.' },
  { title: 'Weekly plans', description: 'Recurring support for recovery, therapy, elder care, and family respite.' },
  { title: 'Monthly care', description: 'Longer assignments with continuity reviews, reporting rhythm, and replacement support.' },
  { title: 'Live-in care', description: 'Dedicated staff for families needing continuous supervised care at home.' },
]

export const packages = [
  { title: 'Essential Visit', cadence: '2-4 hours', bestFor: 'Clinical tasks and short support windows', includes: ['Nursing task or companion support', 'Care note after visit', 'Coordinator assistance'] },
  { title: 'Daily Care Shift', cadence: '8-12 hours', bestFor: 'Attendant, elder care, baby care, or night support', includes: ['Verified caregiver assignment', 'Shift checklist', 'Replacement support'] },
  { title: 'Recovery Plan', cadence: '7-30 days', bestFor: 'Post-surgery and post-hospital care', includes: ['Care plan setup', 'Nurse or attendant mix', 'Progress reporting'] },
  { title: 'Live-in Continuity', cadence: 'Monthly', bestFor: 'Long-term family care requirements', includes: ['Dedicated staff', 'Weekly review', 'Backup staffing desk'] },
]

export const caregivers = [
  { name: 'Anita R', role: 'Senior Elder Care Assistant', experience: '8 yrs', badge: 'Background checked', availability: 'Today, 6 PM', skills: ['Mobility support', 'Medication reminders', 'Companionship'] },
  { name: 'Naveen K', role: 'Home Care Nurse', experience: '6 yrs', badge: 'Credential verified', availability: 'Tomorrow, 9 AM', skills: ['Wound dressing', 'Vitals', 'Post-discharge care'] },
  { name: 'Meera S', role: 'Baby Care Specialist', experience: '5 yrs', badge: 'Reference verified', availability: 'Night shift', skills: ['Newborn routine', 'Mother support', 'Hygiene care'] },
]

export const supportPolicies = [
  { title: 'Emergency support', description: 'A coordination desk stays available for urgent schedule changes, escalation, or family concerns.', icon: PhoneCall },
  { title: 'Replacement policy', description: 'If a caregiver is unavailable or not the right fit, a verified replacement can be initiated.', icon: RefreshCw },
  { title: 'Privacy assurance', description: 'Medical context, family details, and home access notes are handled with restricted visibility.', icon: LockKeyhole },
  { title: 'Coverage planning', description: 'Availability is matched by city, neighborhood, urgency, shift duration, and qualification.', icon: MapPinned },
]

export const coverageAreas = ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi NCR']

export const careFaqs: FaqItem[] = [
  { question: 'How quickly can a caregiver be assigned?', answer: 'Assignment depends on city, timing, qualification, and urgency. A coordinator first confirms the requirement and shortlists available verified professionals.' },
  { question: 'Are caregivers and nurses verified?', answer: 'Yes. Profiles include identity checks, background screening, reference review, skill validation, and ongoing family feedback tracking.' },
  { question: 'Can we replace the assigned caregiver?', answer: 'Yes. If fit, availability, or performance is not right, the coordinator can initiate a replacement from the verified pool.' },
  { question: 'Do you provide medical treatment at home?', answer: 'Clinical tasks require qualified nursing professionals and doctor instructions where needed. Non-clinical caregivers work within an approved family care scope.' },
  { question: 'Can I book hourly, daily, weekly, monthly, or live-in care?', answer: 'Yes. The service supports hourly visits, day or night shifts, weekly plans, monthly care, and live-in support.' },
]

export const routeMeta: RouteMeta[] = [
  {
    path: '/',
    title: 'Healthcare & Home Care Services',
    description: 'Book verified caregivers, nurses, attendants, physiotherapists, elder care assistants, baby care specialists, and home healthcare staff.',
    pageType: 'home',
    category: 'Home Care Services',
  },
  ...careServices.map((service) => ({
    path: `/services/${service.slug}`,
    title: service.title,
    description: service.description,
    pageType: 'feature' as const,
    category: 'Home Care Services',
  })),
]
