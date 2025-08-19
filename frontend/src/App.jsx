"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import DomainsSection from "./components/DomainsSection"
import TeamSection from "./components/TeamSection"
import EventsSection from "./components/EventsSection"
import GallerySection from "./components/GallerySection"
import ContactSection from "./components/ContactSection"
import DomainsPage from "./pages/DomainsPage"
import { ThemeProvider } from "./components/ThemeProvider"
import Footer from "./components/Footer"
import "./index.css"

function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-background">
      {/* Meaningful floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gaming-themed floating icons */}
        <div className="absolute top-20 left-10 opacity-10 dark:opacity-20">
          <div className="w-16 h-16 text-blue-500 animate-float" style={{ animationDelay: "0s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.859 0-7 3.141-7 7v1h17z" />
            </svg>
          </div>
        </div>

        <div className="absolute top-40 right-20 opacity-10 dark:opacity-20">
          <div className="w-20 h-20 text-purple-500 animate-float" style={{ animationDelay: "1s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-32 left-20 opacity-10 dark:opacity-20">
          <div className="w-12 h-12 text-green-500 animate-float" style={{ animationDelay: "2s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        <div className="absolute top-60 left-1/2 opacity-10 dark:opacity-20">
          <div className="w-14 h-14 text-pink-500 animate-float" style={{ animationDelay: "3s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 opacity-10 dark:opacity-20">
          <div className="w-18 h-18 text-orange-500 animate-float" style={{ animationDelay: "4s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <TeamSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domains" element={<DomainsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
