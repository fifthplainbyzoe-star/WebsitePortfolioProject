import { createFileRoute } from '@tanstack/react-router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  Check,
  HeartHandshake,
  Layout,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Palette,
  Phone,
  RefreshCw,
  SearchCheck,
  Settings,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: ZoePhiriPortfolio,
})

const navItems = ['Home', 'About', 'Portfolio', 'Services', 'Pricing', 'Contact']

const services = [
  { title: 'Web Design', description: 'Bespoke websites for service businesses, portfolios, campaigns, and online shops.', Icon: Layout },
  { title: 'E-commerce', description: 'Clean storefronts, product pages, checkout journeys, and launch-ready merchandising.', Icon: ShoppingBag },
  { title: 'Landing Pages', description: 'Focused pages for launches, offers, bookings, waitlists, and lead generation.', Icon: MousePointerClick },
  { title: 'Redesigns', description: 'Sharper structure, refreshed visuals, and clearer conversion paths for existing sites.', Icon: RefreshCw },
  { title: 'Brand Identity', description: 'Logo direction, palettes, typography, and brand systems that keep your presence consistent.', Icon: Palette },
  { title: 'Maintenance', description: 'Ongoing edits, updates, performance checks, and practical website support.', Icon: Settings },
]

const projects = [
  ['Luma Studio', 'Editorial portfolio system for a Johannesburg interiors studio.', 'Brand system'],
  ['Sana Botanics', 'Warm ecommerce storefront for a natural skincare line.', 'E-commerce'],
  ['Moyo Legal', 'Calm, credible service website for an independent legal practice.', 'Service site'],
  ['Kwezi Events', 'Conversion-focused booking page for private event production.', 'Landing page'],
  ['Nala Cafe', 'Menu, location, and story site for a neighborhood cafe.', 'Hospitality'],
  ['Thrive Admin', 'Lean operations page for a growing virtual-assistant team.', 'Redesign'],
]

const why = [
  { title: 'Distinctive Design', description: 'A refined visual direction built around your actual business, not a generic template.', Icon: Sparkles },
  { title: 'Mobile First', description: 'Layouts are planned for phones first, then expanded for larger screens.', Icon: Smartphone },
  { title: 'Fast Launches', description: 'Clear scopes and direct communication keep small business projects moving.', Icon: Zap },
  { title: 'Personal Process', description: 'You work with one designer from concept through handoff.', Icon: HeartHandshake },
  { title: 'Clear Updates', description: 'Milestones, decisions, and next steps stay visible throughout the project.', Icon: MessageCircle },
  { title: 'Practical SEO', description: 'Pages are structured with searchable content and accessible foundations.', Icon: SearchCheck },
]

const pricing = [
  {
    name: 'Starter',
    price: 'From R3,500',
    features: ['One-page website', 'Mobile responsive layout', 'Contact section', 'Basic SEO setup', 'Launch support'],
  },
  {
    name: 'Business',
    price: 'From R6,000',
    featured: true,
    features: ['Up to five pages', 'Custom visual direction', 'Service or booking flow', 'Contact form setup', 'Basic brand polish', 'SEO foundations', 'Launch support'],
  },
  {
    name: 'Premium',
    price: 'From R12,000',
    features: ['Multi-page website', 'Brand identity direction', 'E-commerce or advanced sections', 'Content structure support', 'Performance polish', 'Training handoff', 'Priority launch support'],
  },
]

const formInitial = {
  name: '',
  email: '',
  phone: '',
  business: '',
  projectType: '',
  budget: '',
  details: '',
  botField: '',
}

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

function ZoePhiriPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fields, setFields] = useState(formInitial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const name = event.target.name as keyof typeof formInitial
    setFields({ ...fields, [name]: event.target.value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': fields.botField,
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          business: fields.business,
          projectType: fields.projectType,
          budget: fields.budget,
          details: fields.details,
        }),
      })

      if (!response.ok) throw new Error('Form submission failed')
      setFields(formInitial)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="site-shell">
      <header className="site-nav">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>Zoe Phiri</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
          <a className="pill-link" href="#contact">Start a Project</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          Menu
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Web & Brand Designer</p>
          <h1>Elegant websites for small brands ready to look established.</h1>
          <p>
            Zoe Phiri designs refined websites, online stores, and brand identities
            for founders who need a polished digital presence without a heavy agency process.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#portfolio">View Work</a>
            <a className="secondary-button" href="#contact">Request a Quote</a>
          </div>
        </div>
        <div className="portrait-panel" aria-label="Designer workspace visual">
          <div className="portrait-card">
            <span>ZA</span>
            <strong>Brand-led web design</strong>
            <p>Strategy, structure, visuals, and launch support from one focused studio.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section narrow-section">
        <p className="eyebrow">About Zoe</p>
        <h2>Design that feels warm, credible, and easy to use.</h2>
        <p>
          I help service businesses, creatives, and emerging shops translate their
          expertise into websites that make sense quickly. The work blends brand
          clarity, practical page structure, responsive layouts, and careful visual details.
        </p>
        <p>
          Every project starts with what your audience needs to understand, then
          moves into a tailored design system that can grow with your business.
        </p>
        <div className="skill-list">
          {['Web Strategy', 'Responsive Design', 'Brand Identity', 'E-commerce', 'Landing Pages', 'SEO Basics', 'Maintenance'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="services" className="section tinted-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Focused design support from first impression to launch.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ title, description, Icon }) => (
            <article className="service-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected Projects</p>
          <h2>Visual systems for brands with something specific to say.</h2>
        </div>
        <div className="project-grid">
          {projects.map(([title, description, type], index) => (
            <article className="project-card" key={title}>
              <div className={`project-art art-${index + 1}`}>
                <span>{type}</span>
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tinted-section">
        <div className="section-heading">
          <p className="eyebrow">Why Work Together</p>
          <h2>A thoughtful process built for lean teams and founders.</h2>
        </div>
        <div className="why-grid">
          {why.map(({ title, description, Icon }) => (
            <article className="why-item" key={title}>
              <Icon aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Simple starting points for different project sizes.</h2>
        </div>
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="badge">Most Requested</span>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="secondary-button">Enquire</a>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Final quotes depend on content volume, integrations, timeline, and whether brand assets already exist.
        </p>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Tell Zoe what you are building.</h2>
          <p>
            Share the basics and Zoe will respond with next steps, timeline questions,
            and a recommended package.
          </p>
          <a href="https://wa.me/27718214899"><MessageCircle /> WhatsApp: +27 71 821 4899</a>
          <a href="tel:+27620540240"><Phone /> Call: +27 62 054 0240</a>
          <span><MapPin /> South Africa, serving clients remotely</span>
        </div>
        <form name="contact" className="contact-form" onSubmit={handleSubmit} data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden-field">Do not fill this out <input name="bot-field" value={fields.botField} onChange={(event) => setFields({ ...fields, botField: event.target.value })} /></label>
          <label>Name<input name="name" required value={fields.name} onChange={handleChange} /></label>
          <label>Email<input type="email" name="email" required value={fields.email} onChange={handleChange} /></label>
          <label>Phone<input name="phone" value={fields.phone} onChange={handleChange} /></label>
          <label>Business name<input name="business" value={fields.business} onChange={handleChange} /></label>
          <label>Project type
            <select name="projectType" value={fields.projectType} onChange={handleChange}>
              <option value="">Select...</option>
              <option>Business Website</option>
              <option>Portfolio Website</option>
              <option>E-commerce Website</option>
              <option>Landing Page</option>
              <option>Website Redesign</option>
              <option>Brand Identity Design</option>
              <option>Website Maintenance</option>
            </select>
          </label>
          <label>Budget
            <select name="budget" value={fields.budget} onChange={handleChange}>
              <option value="">Select...</option>
              <option>R3,500 - R6,000</option>
              <option>R6,000 - R12,000</option>
              <option>R12,000+</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="full-field">Project details<textarea name="details" required rows={5} value={fields.details} onChange={handleChange} /></label>
          <button className="primary-button full-field" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
          </button>
          {status === 'sent' && <p className="form-message success">Thank you. Your enquiry has been sent.</p>}
          {status === 'error' && <p className="form-message error">Something went wrong. Please try WhatsApp instead.</p>}
        </form>
      </section>

      <footer className="site-footer">
        <strong>Zoe Phiri</strong>
        <span>Web & Brand Designer</span>
        <div>
          <a href="https://wa.me/27718214899">WhatsApp</a>
          <a href="tel:+27620540240">Call</a>
        </div>
      </footer>
    </main>
  )
}
