"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Instagram, MapPin, Clock, MessageCircle, Send, Users, Gamepad2, Palette, Code, Camera, Megaphone } from "lucide-react"

export default function ContactSection({ scrollY }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({ name: "", email: "", domain: "", message: "", phone: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gamecom@srmist.edu.in",
      description: "Send us an email anytime",
      color: "from-purple-500 to-pink-500",
      link: "mailto:gamecom@srmist.edu.in"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@gamecom_srm",
      description: "Follow us for updates",
      color: "from-pink-500 to-rose-500",
      link: "https://instagram.com/gamecom_srm"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "SRM University, Chennai",
      description: "Visit us on campus",
      color: "from-blue-500 to-cyan-500",
      link: "#"
    },
    {
      icon: Clock,
      title: "Game Nights",
      value: "Every Friday, 7:00 PM",
      description: "Join our weekly sessions",
      color: "from-green-500 to-emerald-500",
      link: "#"
    }
  ]

  const domains = [
    { name: "Technical", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Game Development", icon: Gamepad2, color: "from-purple-500 to-pink-500" },
    { name: "Design", icon: Palette, color: "from-pink-500 to-rose-500" },
    { name: "Media", icon: Camera, color: "from-green-500 to-emerald-500" },
    { name: "Public Relations", icon: Megaphone, color: "from-orange-500 to-red-500" }
  ]

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-float">💬</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>📧</div>
        <div className="absolute top-1/2 left-1/6 text-2xl opacity-20 animate-float" style={{ animationDelay: "4s" }}>🎮</div>
        <div className="absolute top-1/3 right-1/6 text-3xl opacity-20 animate-float" style={{ animationDelay: "6s" }}>🚀</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border-2 border-purple-500 rounded-full glass-light dark:glass-dark">
            <MessageCircle className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">Let's Connect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-primary-light dark:text-gradient-primary-dark animate-fade-in-up">
            Get In Touch
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to join GameCom? Have questions about our domains? We'd love to hear from you and help you find your perfect fit!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact info & social */}
          <div className="space-y-8" style={{ transform: `translateX(${scrollY * -0.03}px)` }}>
            {/* Contact cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card 
                    key={info.title}
                    className="group p-6 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-light-primary dark:text-dark-primary mb-1">{info.title}</h4>
                        <p className="text-light-secondary dark:text-dark-secondary text-sm mb-1">{info.description}</p>
                        <a 
                          href={info.link} 
                          className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Social media & community */}
            <Card className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-2">Join Our Community</h3>
                <p className="text-light-secondary dark:text-dark-secondary">
                  Follow us on social media to stay updated with the latest events, workshops, and gaming sessions!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="gradient" 
                  className="w-full group"
                  onClick={() => window.open('https://instagram.com/gamecom_srm', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Follow Instagram
                </Button>
                <Button variant="outline" className="w-full btn-outline-light dark:btn-outline-dark">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord
                </Button>
              </div>
            </Card>
          </div>

          {/* Enhanced contact form */}
          <div className="space-y-6" style={{ transform: `translateX(${scrollY * 0.03}px)` }}>
            <Card className="p-8 card-light dark:card-dark relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">Send us a Message</h3>
                  <p className="text-light-secondary dark:text-dark-secondary">
                    Tell us about yourself and why you want to join GameCom
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">✅</span>
                    </div>
                    <h4 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-2">Message Sent!</h4>
                    <p className="text-light-secondary dark:text-dark-secondary">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-light-primary dark:text-dark-primary mb-3">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/50 dark:bg-white/10 border-2 border-gray-200/50 dark:border-white/20 rounded-xl text-light-primary dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-light-primary dark:text-dark-primary mb-3">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/50 dark:bg-white/10 border-2 border-gray-200/50 dark:border-white/20 rounded-xl text-light-primary dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-light-primary dark:text-dark-primary mb-3">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/50 dark:bg-white/10 border-2 border-gray-200/50 dark:border-white/20 rounded-xl text-light-primary dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-light-primary dark:text-dark-primary mb-3">Domain Interest *</label>
                        <select 
                          name="domain"
                          value={formData.domain}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/50 dark:bg-white/10 border-2 border-gray-200/50 dark:border-white/20 rounded-xl text-light-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        >
                          <option value="">Select a domain</option>
                          {domains.map(domain => (
                            <option key={domain.name} value={domain.name.toLowerCase()}>
                              {domain.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-light-primary dark:text-dark-primary mb-3">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-4 bg-white/50 dark:bg-white/10 border-2 border-gray-200/50 dark:border-white/20 rounded-xl text-light-primary dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-300"
                        placeholder="Tell us about yourself, your interests, and why you want to join GameCom..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      variant="gradient"
                      disabled={isSubmitting}
                      className="w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Domain showcase */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-8">Explore Our Domains</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {domains.map((domain, index) => {
              const IconComponent = domain.icon
              return (
                <Card 
                  key={domain.name}
                  className="group p-6 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${domain.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-light-primary dark:text-dark-primary text-center">{domain.name}</h4>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="inline-block p-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Gamepad2 className="w-10 h-10 text-purple-500" />
              <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary">Ready to Start Your Journey?</h3>
              <Gamepad2 className="w-10 h-10 text-pink-500" />
            </div>
            <p className="text-light-secondary dark:text-dark-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Join GameCom and become part of a community that celebrates creativity, innovation, and the love of gaming. 
              Your next adventure starts here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" className="px-10 py-4 text-lg font-semibold rounded-xl">
                Join GameCom Now
              </Button>
              <Button variant="outline" className="btn-outline-light dark:btn-outline-dark px-10 py-4 text-lg font-semibold rounded-xl">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
