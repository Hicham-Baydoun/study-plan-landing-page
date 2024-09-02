'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Your EmailJS service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Your EmailJS public key
    )
    .then((result) => {
      console.log('SUCCESS!', result.text)
      setStatus('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    }, (error) => {
      console.log('FAILED...', error.text)
      setStatus('Failed to send message. Please try again.')
    })
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          name="from_name" // Match this name with the template placeholder
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          name="from_email" // Match this name with the template placeholder
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea
          name="message" // Match this name with the template placeholder
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg"
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
        Send Message
      </button>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  )
}
