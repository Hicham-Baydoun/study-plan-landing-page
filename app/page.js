import Hero from './components/Hero'
import Features from './components/Features'
import WaitlistForm from './components/WaitlistForm'
import ContactForm from './components/ContactForm'
import SmoothScroll from './components/SmoothScroll'


export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="waitlist" className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Waitlist</h2>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>

      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}