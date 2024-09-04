'use client'

import { useState } from 'react'

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // Reset error state before submitting

    console.log('Submitting form...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setIsOpen(false)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const data = await response.json()
        setError(data.message || 'Error sending message')
        console.log('Error response:', data)
      }
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <button onClick={() => {
        console.log('Opening popup...')
        setIsOpen(true)
      }}>Contact Us</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Contact Us</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
            <button onClick={() => {
              console.log('Closing popup...')
              setIsOpen(false)
            }}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
