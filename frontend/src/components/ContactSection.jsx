"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"


export default function ContactSection({ scrollY }) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary-light dark:text-gradient-primary-dark">
            Get In Touch
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto">
            Ready to join GameCom? Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8" style={{ transform: `translateX(${scrollY * -0.05}px)` }}>
            <Card className="p-6 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6">Connect With Us</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-light-primary dark:text-dark-primary font-semibold">Email</h4>
                    <p className="text-light-secondary dark:text-dark-secondary">gamecom@srmist.edu.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-light-primary dark:text-dark-primary font-semibold">Instagram</h4>
                    <p className="text-light-secondary dark:text-dark-secondary">@gamecom_srm</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🏫</span>
                  </div>
                  <div>
                    <h4 className="text-light-primary dark:text-dark-primary font-semibold">Location</h4>
                    <p className="text-light-secondary dark:text-dark-secondary">SRM University, Chennai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🎮</span>
                  </div>
                  <div>
                    <h4 className="text-light-primary dark:text-dark-primary font-semibold">Game Nights</h4>
                    <p className="text-light-secondary dark:text-dark-secondary">Every Friday, 7:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10">
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-4">Join Our Community</h3>
              <p className="text-light-secondary dark:text-dark-secondary mb-6">
                Follow us on social media to stay updated with the latest events, workshops, and gaming sessions!
              </p>
              <div className="flex space-x-4">
                <Button className="gradient-primary-light dark:gradient-primary-dark hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white">
                  Follow Instagram
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-light dark:btn-outline-dark"
                >
                  Join Discord
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <div className="space-y-6" style={{ transform: `translateX(${scrollY * 0.05}px)` }}>
            <Card className="p-8 card-light dark:card-dark">
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-light-secondary dark:bg-white/10 border border-light dark:border-white/20 rounded-lg text-light-primary dark:text-white placeholder-light-muted dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-light-secondary dark:bg-white/10 border border-light dark:border-white/20 rounded-lg text-light-primary dark:text-white placeholder-light-muted dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">Domain Interest</label>
                  <select className="w-full px-4 py-3 bg-light-secondary dark:bg-white/10 border border-light dark:border-white/20 rounded-lg text-light-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm">
                    <option value="">Select a domain</option>
                    <option value="technical">Technical</option>
                    <option value="gamedev">Game Development</option>
                    <option value="design">Design</option>
                    <option value="media">Media</option>
                    <option value="pr">Public Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-light-secondary dark:bg-white/10 border border-light dark:border-white/20 rounded-lg text-light-primary dark:text-white placeholder-light-muted dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Tell us about yourself and why you want to join GameCom..."
                  />
                </div>

                <Button className="w-full gradient-primary-light dark:gradient-primary-dark hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
