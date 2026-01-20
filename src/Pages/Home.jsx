import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to RouterApp</h1>
          <p className="hero-subtitle">Build amazing web applications with modern routing</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-box"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast routing and page transitions for optimal user experience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>Beautiful, responsive UI that looks great on all devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Built with security best practices and modern web standards</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Efficient</h3>
            <p>Optimized code and minimal bundle size for faster loads</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3 className="stat-number">100%</h3>
          <p className="stat-label">Responsive</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">25ms</h3>
          <p className="stat-label">Load Time</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">99.9%</h3>
          <p className="stat-label">Uptime</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of developers using RouterApp</p>
        <button className="btn btn-primary btn-large">Start Now</button>
      </section>
    </div>
  )
}

export default Home