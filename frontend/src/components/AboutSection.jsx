"use client"

import { Card } from "./ui/card"

export default function AboutSection({ scrollY }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About GameCom
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A student-driven community at SRM University, fostering innovation in game development and technical
            excellence
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div className="space-y-6" style={{ transform: `translateX(${scrollY * -0.1}px)` }}>
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create a vibrant ecosystem where students can explore, learn, and excel in game development,
                technical skills, creative design, and community engagement. We believe in learning by doing and growing
                together as a community.
              </p>
            </Card>

            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Weekly Game Nights every Friday</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Regular Instagram content (TechScope, Glitch & Aesthetics, Behind the Pixel)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Workshops and skill development sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Community events and competitions</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right content - Stats */}
          <div className="space-y-6" style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-gray-300">Active Domains</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Active Members</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">Weekly</div>
                <div className="text-gray-300">Game Nights</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">3x</div>
                <div className="text-gray-300">Weekly Posts</div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Revolution</h3>
              <p className="text-gray-300 mb-6">
                Ready to level up your skills and be part of something amazing? GameCom is more than just a club - it's
                a community of passionate individuals pushing the boundaries of what's possible.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🎮</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💻</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🎨</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
