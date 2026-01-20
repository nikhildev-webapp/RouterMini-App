import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-wrapper">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Address</h3>
                <p>123 Tech Street<br />San Francisco, CA 94105<br />United States</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br />Mon - Fri, 9AM - 6PM PT</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h3>Email</h3>
                <p>hello@routerapp.com<br />support@routerapp.com</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🌐</div>
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0174620149857!2d-122.41941592346923!3d37.77492957120434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b5b6e6f1%3A0x3e7e7c7c7c7c7c7c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 'var(--border-radius)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What is the response time?</h3>
            <p>We typically respond to inquiries within 24 hours during business days.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer support?</h3>
            <p>Yes! We provide 24/7 customer support for all our premium users.</p>
          </div>
          <div className="faq-item">
            <h3>How can I report a bug?</h3>
            <p>You can report bugs directly through our support email or GitHub issues page.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer partnerships?</h3>
            <p>We're always interested in partnerships. Contact our business team for more info.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
