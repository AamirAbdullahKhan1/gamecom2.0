"use client"

import { Card } from "./ui/card"
import { Users, Trophy, Code, Palette, Camera, Megaphone, Gamepad2, Star, Zap, Target, Award } from "lucide-react"

export default function AboutSection({ scrollY }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Gaming and Tech themed floating elements */}
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-20 animate-float text-light-primary dark:text-dark-primary">💻</div>
        <div
          className="absolute bottom-1/3 right-1/4 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "2s" }}
        >
          🎮
        </div>
        <div
          className="absolute top-1/3 right-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "4s" }}
        >
          ⚡
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "6s" }}
        >
          🎯
        </div>
        <div
          className="absolute top-1/4 right-1/3 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "8s" }}
        >
          🚀
        </div>
        <div
          className="absolute top-1/6 left-1/6 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "10s" }}
        >
          🎨
        </div>
        <div
          className="absolute bottom-1/6 right-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "12s" }}
        >
          📸
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border-2 border-blue-500 rounded-full glass-light dark:glass-dark">
            <Star className="w-6 h-6 text-blue-500" />
            <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-primary-light dark:text-gradient-primary-dark animate-fade-in-up">
            About GameCom
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            A student-driven community at SRM University, fostering innovation in game development and technical
            excellence through collaborative learning and hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8" style={{ transform: `translateX(${scrollY * -0.1}px)` }}>
            <Card className="group p-8 card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl card-tilt">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary">Our Mission</h3>
              </div>
              <p className="text-light-secondary dark:text-dark-secondary leading-relaxed">
                To create a vibrant ecosystem where students can explore, learn, and excel in game development,
                technical skills, creative design, and community engagement. We believe in learning by doing and growing
                together as a community of passionate innovators.
              </p>
            </Card>

            <Card className="group p-8 card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl card-tilt">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary">What We Do</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-light-secondary dark:text-dark-secondary">Weekly Game Nights every Friday</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-lg">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-light-secondary dark:text-dark-secondary">Regular Instagram content (TechScope, Glitch & Aesthetics, Behind the Pixel)</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-light-secondary dark:text-dark-secondary">Workshops and skill development sessions</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-light-secondary dark:text-dark-secondary">Community events and competitions</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8" style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="group p-6 cursor-pointer bg-gradient-to-br from-purple-500/50 to-pink-300/30 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-xl border border-purple-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg card-tilt">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">5</div>
                <div className="text-light-secondary dark:text-dark-secondary">Active Domains</div>
              </Card>
              <Card className="group p-6 cursor-pointer bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl border border-blue-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg card-tilt">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">40+</div>
                <div className="text-light-secondary dark:text-dark-secondary">Active Members</div>
              </Card>
              <Card className="group p-6 cursor-pointer bg-gradient-to-br from-green-500/30 to-blue-500/30 dark:from-green-500/20 dark:to-blue-500/20 backdrop-blur-xl border border-green-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg card-tilt">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">Weekly</div>
                <div className="text-light-secondary dark:text-dark-secondary">Game Nights</div>
              </Card>
              <Card className="group p-6 cursor-pointer bg-gradient-to-br from-pink-500/30 to-purple-500/30 dark:from-pink-500/20 dark:to-purple-500/20 backdrop-blur-xl border border-pink-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 shadow-lg card-tilt">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-2">5+</div>
                <div className="text-light-secondary dark:text-dark-secondary">Events Hosted</div>
              </Card>
            </div>

            <Card className="group p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg card-tilt">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary">Join the Revolution</h3>
              </div>
              <p className="text-light-secondary dark:text-dark-secondary mb-6 leading-relaxed">
                Ready to level up your skills and be part of something amazing? GameCom is more than just a club - it's
                a community of passionate individuals pushing the boundaries of what's possible in gaming and technology.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:scale-105 transition-transform duration-300">
                  <Gamepad2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-light-primary dark:text-dark-primary">Gaming</span>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl hover:scale-105 transition-transform duration-300">
                  <Code className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-light-primary dark:text-dark-primary">Development</span>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl hover:scale-105 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-light-primary dark:text-dark-primary">Design</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
