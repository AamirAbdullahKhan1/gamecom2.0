"use client"

import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Play, Users, Trophy, Gamepad2, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, label: "Active Members", value: "200+" },
    { icon: Trophy, label: "Events Hosted", value: "50+" },
    { icon: Gamepad2, label: "Games Developed", value: "25+" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          className={`mb-12 flex justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative group">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse-glow group-hover:scale-110 transition-all duration-500">
              <span className="text-white font-bold text-5xl">GC</span>
            </div>
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Game<span className="text-blue-600 dark:text-blue-400">Com</span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            SRM University's Premier Gaming Hub
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Where <span className="text-blue-600 dark:text-blue-400 font-semibold">innovation meets gaming</span>. Join
            our community of developers, designers, and gaming enthusiasts as we create, compete, and conquer the
            digital realm together.
          </p>
        </div>

        <div
          className={`mb-12 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label} className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-foreground/60 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
            <Users className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Join Our Community
          </Button>

          <Button
            variant="outline"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-10 py-5 text-xl font-semibold rounded-2xl glass transition-all duration-300 hover:scale-105 group bg-transparent"
          >
            <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Explore Domains
          </Button>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-foreground/60 text-sm font-medium">Scroll to explore</span>
            <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center p-2">
              <ChevronDown className="w-4 h-4 text-foreground/50 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
