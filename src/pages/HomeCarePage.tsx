import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileText,
  HeartHandshake,
  PhoneCall,
  ShieldCheck,
  Star,
  UserCheck,
} from 'lucide-react'
import {
  availabilityModels,
  caregivers,
  careFaqs,
  careServices,
  coverageAreas,
  packages,
  processSteps,
  supportPolicies,
  verificationChecks,
} from '../template/careServices'
import { leadForm, sharedStats, site, testimonials } from '../data/site'
import { CtaLink, FaqAccordion, LeadForm, SectionIntro, StatsStrip } from '../components/Marketing'
import { MotionCard, Reveal } from '../components/Motion'

const primaryCta = site.ctas.demo
const secondaryCta = site.ctas.contact

function TrustBadges() {
  return (
    <div className="care-trust-row" aria-label="CareBridge trust indicators">
      <span><BadgeCheck size={16} /> Verified professionals</span>
      <span><ShieldCheck size={16} /> Background checked</span>
      <span><Clock3 size={16} /> 18 min response</span>
      <span><HeartHandshake size={16} /> Family-first care plans</span>
    </div>
  )
}

function CareHeroVisual() {
  return (
    <div className="care-hero-visual" aria-label="Caregiver marketplace availability view">
      <div className="care-hero-visual__top">
        <div>
          <span className="status-dot" />
          <strong>Care coordinator online</strong>
        </div>
        <small>Live availability</small>
      </div>
      <div className="care-availability-widget">
        <div>
          <span>Matched caregiver</span>
          <strong>Anita R</strong>
          <small>Elder care assistant · 8 yrs</small>
        </div>
        <div className="availability-pill">Today 6 PM</div>
      </div>
      <div className="care-progress">
        {['Inquiry', 'Assessment', 'Verified match', 'Care starts'].map((step, index) => (
          <div className={index < 3 ? 'is-complete' : ''} key={step}>
            <span>{index < 3 ? <CheckCircle2 size={15} /> : index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <div className="care-profile-stack">
        {caregivers.map((caregiver) => (
          <article key={caregiver.name}>
            <div className="profile-avatar">{caregiver.name.slice(0, 1)}</div>
            <div>
              <strong>{caregiver.name}</strong>
              <span>{caregiver.role}</span>
            </div>
            <small>{caregiver.badge}</small>
          </article>
        ))}
      </div>
    </div>
  )
}

function ServiceGrid() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionIntro
          eyebrow="Care categories"
          title="Book the right professional for every home-care requirement"
          description="Each service has a dedicated detail view with problem, journey, workflow, team, care plan, monitoring, safety, and expected outcomes."
        />
        <div className="care-service-grid">
          {careServices.map((service) => {
            const Icon = service.icon
            return (
              <MotionCard className="care-service-card" key={service.slug}>
                <span className="icon-tile"><Icon size={22} /></span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="care-meta-list">
                  <span><CalendarClock size={15} /> {service.availability}</span>
                  <span><UserCheck size={15} /> {service.bestFor[0]}</span>
                </div>
                <Link className="text-cta" to={`/services/${service.slug}`}>
                  View care detail <ArrowRight size={16} />
                </Link>
              </MotionCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="workflow-section" id="process">
      <div className="container">
        <SectionIntro
          eyebrow="How booking works"
          title="From inquiry to caregiver assignment, every step is coordinated"
          description="The booking flow is designed to make families feel informed, protected, and supported before care begins."
        />
        <div className="care-process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <MotionCard className="care-process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon size={24} />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </MotionCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function VerificationSection() {
  return (
    <section className="section" id="verification">
      <div className="container care-split">
        <div>
          <SectionIntro
            eyebrow="Verification and safety"
            title="Caregiver checks built for family trust"
            description="Every assignment is supported by verification, background screening, skill validation, ongoing feedback, and privacy-aware care coordination."
            align="left"
          />
          <div className="care-check-grid">
            {verificationChecks.map((check) => {
              const Icon = check.icon
              return (
                <MotionCard as="div" className="care-check-card" key={check.title}>
                  <Icon size={22} />
                  <div>
                    <h3>{check.title}</h3>
                    <p>{check.description}</p>
                  </div>
                </MotionCard>
              )
            })}
          </div>
        </div>
        <div className="care-standards-panel" id="training">
          <span className="eyebrow">Training standards</span>
          <h2>Professional care starts before the first visit</h2>
          <ul>
            <li>Patient handling, hygiene, infection control, and privacy basics.</li>
            <li>Elder care, fall prevention, mobility support, and bed-care routines.</li>
            <li>Role-specific training for nurses, attendants, baby care, therapy, and live-in assignments.</li>
            <li>Communication standards for family updates, incident escalation, and respectful care.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function AvailabilityAndPackages() {
  return (
    <section className="section section--soft" id="availability">
      <div className="container">
        <SectionIntro
          eyebrow="Availability models"
          title="Care options for hourly, daily, weekly, monthly, and live-in needs"
          description="Families can start with one visit, book a daily shift, or set up longer continuity plans as needs evolve."
        />
        <div className="care-model-grid">
          {availabilityModels.map((model) => (
            <MotionCard className="care-model-card" key={model.title}>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
            </MotionCard>
          ))}
        </div>
        <div className="care-package-grid" id="care-packages">
          {packages.map((carePackage) => (
            <MotionCard className="care-package-card" key={carePackage.title}>
              <span>{carePackage.cadence}</span>
              <h3>{carePackage.title}</h3>
              <p>{carePackage.bestFor}</p>
              <ul>
                {carePackage.includes.map((item) => (
                  <li key={item}><CheckCircle2 size={16} /> {item}</li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfilesAndPolicies() {
  return (
    <section className="section" id="support-policies">
      <div className="container care-split">
        <div>
          <SectionIntro
            eyebrow="Professional profiles"
            title="Verified caregiver availability widgets"
            description="Profile cards make experience, checks, availability, and core skills visible before families confirm care."
            align="left"
          />
          <div className="caregiver-grid">
            {caregivers.map((caregiver) => (
              <MotionCard className="caregiver-card" key={caregiver.name}>
                <div className="caregiver-card__head">
                  <div className="profile-avatar">{caregiver.name.slice(0, 1)}</div>
                  <div>
                    <h3>{caregiver.name}</h3>
                    <p>{caregiver.role}</p>
                  </div>
                </div>
                <div className="rating"><Star size={15} fill="currentColor" /> {caregiver.experience}</div>
                <strong>{caregiver.badge}</strong>
                <span>{caregiver.availability}</span>
                <div className="skill-tags">
                  {caregiver.skills.map((skill) => <small key={skill}>{skill}</small>)}
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
        <div>
          <SectionIntro
            eyebrow="Support policies"
            title="Emergency help, replacement support, and privacy assurance"
            align="left"
          />
          <div className="care-policy-list">
            {supportPolicies.map((policy) => {
              const Icon = policy.icon
              return (
                <MotionCard as="div" className="care-policy-card" key={policy.title}>
                  <Icon size={22} />
                  <div>
                    <h3>{policy.title}</h3>
                    <p>{policy.description}</p>
                  </div>
                </MotionCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CoverageSection() {
  return (
    <section className="section-band" id="coverage">
      <div className="container care-coverage">
        <SectionIntro
          eyebrow="Coverage areas"
          title="Coordinator-led service availability across priority cities"
          description="Availability depends on neighborhood, urgency, schedule, and qualification requirements."
        />
        <div className="coverage-tags">
          {coverageAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </div>
    </section>
  )
}

function StoriesSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <SectionIntro
          eyebrow="Testimonials and success stories"
          title="Families choose CareBridge when care needs to feel safe and organized"
          description="The experience is designed around trust signals, clear communication, and care-plan continuity."
        />
        <div className="care-story-grid" id="stories">
          {testimonials.slice(0, 3).map((story) => (
            <MotionCard className="testimonial-card" key={story.name}>
              <div className="rating"><Star size={16} fill="currentColor" /> {story.rating}</div>
              <p>“{story.quote}”</p>
              <div>
                <strong>{story.name}</strong>
                <span>{story.role}</span>
                <small>{story.location}</small>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function RequestSection() {
  return (
    <section className="section" id="caregiver-request">
      <div className="container form-layout">
        <div>
          <SectionIntro
            eyebrow="Request caregiver"
            title="Book a consultation for the right care match"
            description="Share the family requirement and a coordinator will help identify the right care model, skill level, schedule, and safety process."
            align="left"
          />
          <div className="care-contact-panel">
            <span><PhoneCall size={18} /> {site.contact.phone}</span>
            <span><FileText size={18} /> {leadForm.fields.message.placeholder}</span>
          </div>
        </div>
        <LeadForm compact />
      </div>
    </section>
  )
}

export function HomeCarePage() {
  return (
    <>
      <section className="care-hero">
        <div className="container care-hero-grid">
          <Reveal className="care-hero-copy">
            <span className="eyebrow">Healthcare & Home Care Services</span>
            <h1>Book verified caregivers, nurses, attendants, and home healthcare staff</h1>
            <p>
              Professional home care for elder support, nursing, patient attendants, post-hospital recovery,
              physiotherapy, newborn care, companion care, and live-in family requirements.
            </p>
            <TrustBadges />
            <div className="hero-actions">
              <CtaLink cta={primaryCta} />
              <CtaLink cta={secondaryCta} variant="ghost" />
            </div>
          </Reveal>
          <CareHeroVisual />
        </div>
        <div className="container">
          <StatsStrip stats={sharedStats} />
        </div>
      </section>
      <ServiceGrid />
      <ProcessSection />
      <VerificationSection />
      <AvailabilityAndPackages />
      <ProfilesAndPolicies />
      <CoverageSection />
      <StoriesSection />
      <section id="faq">
        <FaqAccordion faqs={careFaqs} />
      </section>
      <RequestSection />
    </>
  )
}

const detailLabels = [
  ['problem', 'Problem being solved'],
  ['journey', 'Typical user journey'],
  ['workflow', 'Service workflow'],
  ['team', 'Team involved'],
  ['carePlan', 'Care plan process'],
  ['monitoring', 'Monitoring and reporting'],
  ['safety', 'Safety measures'],
  ['outcomes', 'Expected outcomes'],
] as const

export function CareServiceDetailPage() {
  const { slug } = useParams()
  const service = careServices.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/" replace />
  const Icon = service.icon

  return (
    <>
      <section className="care-detail-hero">
        <div className="container care-detail-hero__inner">
          <span className="icon-tile"><Icon size={24} /></span>
          <span className="eyebrow">Service detail</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <div className="care-trust-row">
            <span><CalendarClock size={16} /> {service.availability}</span>
            {service.bestFor.map((item) => <span key={item}><BadgeCheck size={16} /> {item}</span>)}
          </div>
          <div className="hero-actions">
            <CtaLink cta={primaryCta} />
            <Link className="btn btn--ghost" to="/">Back to services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container care-detail-grid">
          {detailLabels.map(([key, label]) => {
            const value = service[key]
            return (
              <MotionCard className="care-detail-card" key={key}>
                <span>{label}</span>
                {typeof value === 'string' ? (
                  <p>{value}</p>
                ) : (
                  <ul>
                    {value.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
                  </ul>
                )}
              </MotionCard>
            )
          })}
        </div>
      </section>
      <RequestSection />
    </>
  )
}
