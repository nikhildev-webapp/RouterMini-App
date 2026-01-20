import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="hero-title">About RouterApp</h1>
          <p className="hero-subtitle">Discover our mission and values</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At RouterApp, we're committed to building modern, efficient web applications
              that empower developers to create amazing user experiences. Our mission is to
              simplify routing and navigation while maintaining code quality and performance.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Happy Developers</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-card">
              <h3>99.9%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🧠</div>
            <h3>Innovation</h3>
            <p>We constantly innovate to provide cutting-edge solutions and stay ahead of industry trends.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Community</h3>
            <p>We believe in the power of community and support developers every step of their journey.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>We're dedicated to delivering excellence in every aspect of our products and services.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🔐</div>
            <h3>Security</h3>
            <p>Security and privacy are paramount. We protect our users' data with industry-leading standards.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h3>John Developer</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🎨</div>
            <h3>Sarah Designer</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h3>Mike Engineer</h3>
            <p>Full Stack Engineer</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🔬</div>
            <h3>Emma Manager</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>Have questions? We'd love to hear from you!</p>
        <button className="btn btn-primary btn-large">Contact Us</button>
      </section>
    </div>
  )
}

export default About