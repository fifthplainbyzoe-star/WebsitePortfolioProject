import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactRedirect,
})

function ContactRedirect() {
  return (
    <main className="section narrow-section">
      <p className="eyebrow">Contact</p>
      <h1>Start your project enquiry on the homepage.</h1>
      <p>
        Zoe's enquiry form is part of the main portfolio page so visitors can
        review services, pricing, and selected work before getting in touch.
      </p>
      <a className="primary-button" href="/#contact">
        Go to Contact Form
      </a>
    </main>
  )
}
