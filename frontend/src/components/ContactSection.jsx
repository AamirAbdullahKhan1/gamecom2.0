"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"


export default function ContactSection({ scrollY }) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join GameCom? Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8" style={{ transform: `translateX(${scrollY * -0.05}px)` }}>
            <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">gamecom@srmist.edu.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Instagram</h4>
                    <p className="text-gray-300">@gamecom_srm</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🏫</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">SRM University, Chennai</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🎮</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Game Nights</h4>
                    <p className="text-gray-300">Every Friday, 7:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Join Our Community</h3>
              <p className="text-gray-300 mb-6">
                Follow us on social media to stay updated with the latest events, workshops, and gaming sessions!
              </p>
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Follow Instagram
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  Join Discord
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <div className="space-y-6" style={{ transform: `translateX(${scrollY * 0.05}px)` }}>
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Domain Interest</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm">
                    <option value="">Select a domain</option>
                    <option value="technical">Technical</option>
                    <option value="gamedev">Game Development</option>
                    <option value="design">Design</option>
                    <option value="media">Media</option>
                    <option value="pr">Public Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Tell us about yourself and why you want to join GameCom..."
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GameCom
            </span>
          </div>
          <p className="text-gray-400 mb-4">SRM University's Premier Gaming & Development Club</p>
          <p className="text-gray-500 text-sm">© 2024 GameCom. Made with ❤️ by the GameCom team.</p>
        </div>
      </footer>
    </section>
  )
}
