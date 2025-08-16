"use client"

import { Card } from "./ui/card"

export default function AboutSection({ scrollY }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary-light dark:text-gradient-primary-dark">
            About GameCom
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto">
            A student-driven community at SRM University, fostering innovation in game development and technical
            excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6" style={{ transform: `translateX(${scrollY * -0.1}px)` }}>
            <Card className="p-8 card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4">Our Mission</h3>
              <p className="text-light-secondary dark:text-dark-secondary leading-relaxed">
                To create a vibrant ecosystem where students can explore, learn, and excel in game development,
                technical skills, creative design, and community engagement. We believe in learning by doing and growing
                together as a community.
              </p>
            </Card>

            <Card className="p-8 card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4">What We Do</h3>
              <ul className="text-light-secondary dark:text-dark-secondary space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Weekly Game Nights every Friday</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Regular Instagram content (TechScope, Glitch & Aesthetics, Behind the Pixel)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Workshops and skill development sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Community events and competitions</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="space-y-6" style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-xl border border-purple-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">5</div>
                <div className="text-light-secondary dark:text-dark-secondary">Active Domains</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl border border-blue-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">50+</div>
                <div className="text-light-secondary dark:text-dark-secondary">Active Members</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-green-500/30 to-blue-500/30 dark:from-green-500/20 dark:to-blue-500/20 backdrop-blur-xl border border-green-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">Weekly</div>
                <div className="text-light-secondary dark:text-dark-secondary">Game Nights</div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-pink-500/30 to-purple-500/30 dark:from-pink-500/20 dark:to-purple-500/20 backdrop-blur-xl border border-pink-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">3x</div>
                <div className="text-light-secondary dark:text-dark-secondary">Weekly Posts</div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4">Join the Revolution</h3>
              <p className="text-light-secondary dark:text-dark-secondary mb-6">
                Ready to level up your skills and be part of something amazing? GameCom is more than just a club - it's
                a community of passionate individuals pushing the boundaries of what's possible.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">🎮</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">💻</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
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
