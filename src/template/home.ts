import {
  BarChart3,
  BellRing,
  CalendarClock,
  FileText,
  HeartPulse,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { homepageFeatures, homepageOperations } from '../data/pages'
import type { FeatureCard, MarketingPageContent } from '../data/types'
import { outcomeStats, sharedStats, site } from './content'

export const homePage: MarketingPageContent = {
  path: '/',
  pageType: 'home',
  category: 'Home',
  eyebrow: 'One stop digital healthcare solution',
  title: 'A clone-ready SaaS marketing system for serious service teams',
  description:
    'A reusable React blueprint with product coverage, proof-led sections, mega navigation, carousels, FAQ, motion, and conversion flows.',
  sourceUrl: 'https://example.com/',
  visual: 'hospital',
  primaryCta: site.ctas.demo,
  secondaryCta: site.ctas.contact,
  heroStats: sharedStats,
  features: homepageFeatures,
  operationsTitle: 'Top healthcare software for simplified operations',
  operationsIntro:
    'The homepage uses calm, dense sections suited to B2B software rather than a decorative landing page.',
  operations: homepageOperations,
  outcomesTitle: 'Achieve more with us',
  outcomes: outcomeStats,
  faqs: [
    {
      question: 'Is this template tied to one brand?',
      answer:
        'No. It is built to be copied and rebranded by changing TypeScript config files in src/template.',
    },
    {
      question: 'Are the public sitemap pages covered?',
      answer:
        'The core pages are explicit, while feature, location, and blog-detail routes use templates so the site can expand without one-off files.',
    },
    {
      question: 'Does the demo form send real data?',
      answer:
        'No. This v1 has client-side validation, a local success state, and duplicate-submit cooldown only.',
    },
  ],
}

export const homeSplitSection = {
  eyebrow: 'Best cloud-based healthcare technology',
  title: 'One platform pattern, many healthcare operating models',
  description: "The product cards echo the source site's breadth while keeping all copy and visuals original.",
  visual: 'clinic' as const,
  products: [
    {
      title: 'Service Operations',
      description: 'Appointments, intake, billing, and follow-up workflows.',
      to: '/clinic-polyclinic-management-software',
    },
    {
      title: 'Enterprise Operations',
      description: 'Multi-team coordination, reporting, finance, and fulfillment.',
      to: '/hospital-management-system',
    },
    {
      title: 'Workflow Automation',
      description: 'Lifecycle tracking, approvals, notifications, and dispatch.',
      to: '/lab-management-software',
    },
    {
      title: 'Inventory and Billing',
      description: 'Stock, counter billing, purchase control, and revenue visibility.',
      to: '/pharmacy-management-software',
    },
  ],
}

export const modernizationSection = {
  eyebrow: 'Why modernize now',
  title: 'Is outdated technology slowing you down?',
  description:
    'A cloud operating layer reduces duplicate work, manual reports, delayed communication, and hidden bottlenecks.',
  features: [
    {
      title: 'Zero maintenance mindset',
      description: 'Prototype cards represent managed uptime, backups, and security-oriented hosting.',
      icon: ShieldCheck,
    },
    {
      title: 'Paperless practice flow',
      description: 'Use built-in workflow states to move tasks forward without scattered files.',
      icon: FileText,
    },
    {
      title: 'Any-device access',
      description: 'Responsive layouts keep the product story readable on mobile, tablet, and desktop.',
      icon: CalendarClock,
    },
    {
      title: 'Communication ready',
      description: 'Patient reminders, staff notifications, and support actions are visible patterns.',
      icon: BellRing,
    },
  ] satisfies FeatureCard[],
}

export const benefitSection = {
  eyebrow: 'Achieve more with us',
  title: 'Patient experience, efficiency, and revenue in one operating view',
  description: "These blocks map the source site's main benefit rhythm into original content.",
  blocks: [
    {
      title: 'Elevate patient experience',
      icon: HeartPulse,
      items: [
        'Online presence for bookings and follow-ups.',
        'Queue visibility to reduce waiting-room confusion.',
        'Email, SMS, and messaging communication patterns.',
        'Feedback loops for continuous service improvement.',
      ],
    },
    {
      title: 'Enhance operational efficiency',
      icon: Network,
      items: [
        'Automate repeatable administrative processes.',
        'Give managers real-time operational dashboards.',
        'Connect front desk, care teams, diagnostics, and finance.',
        'Use workflows to reduce missed handoffs.',
      ],
    },
    {
      title: 'Boost revenue visibility',
      icon: BarChart3,
      items: [
        'Track collections, settlements, refunds, and receivables.',
        'Surface pricing and package inconsistencies.',
        'Reduce pilferage with tighter inventory views.',
        'Compare branch and department performance.',
      ],
    },
  ],
}

export const homeDemoSection = {
  eyebrow: 'Book a demo',
  title: 'See the platform mapped to your workflow',
  description: 'Share your details and our team will save the enquiry for follow-up.',
}
