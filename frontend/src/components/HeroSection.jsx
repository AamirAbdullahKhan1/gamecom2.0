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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-600 dark:text-blue-400">
            <path
              d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-25" style={{ animationDelay: "1s" }}>
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-purple-600 dark:text-purple-400">
            <rect x="6" y="4" width="12" height="8" rx="2" fill="currentColor" />
            <path d="M8 12v4h8v-4" fill="currentColor" />
            <circle cx="9" cy="9" r="1" fill="white" />
            <circle cx="15" cy="9" r="1" fill="white" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-30" style={{ animationDelay: "2s" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-pink-600 dark:text-pink-400">
            <path
              d="M12 2L13.09 8.26L20 9L14 14L16.18 21L12 17.77L7.82 21L10 14L4 9L10.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute top-60 left-1/3 animate-float opacity-25" style={{ animationDelay: "3s" }}>
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none" className="text-green-600 dark:text-green-400">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float opacity-30" style={{ animationDelay: "4s" }}>
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="text-orange-600 dark:text-orange-400">
            <path
              d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 dark:from-pink-400/15 dark:to-rose-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          className={`mb-8 flex justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative group">
            <img
              src="/gamecom.png"
              alt="GameCom Logo"
              className="w-32 h-32 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-2xl filter brightness-100 dark:brightness-110"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gradient-primary-light dark:text-gradient-primary-dark">
            Game
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              Com
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gradient-primary-light dark:text-gradient-primary-dark">
            SRM University's Premier Gaming Hub
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-8"></div>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl text-light-secondary dark:text-dark-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
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
                <div
                  key={stat.label}
                  className="card-light dark:card-dark p-6 cursor-pointer rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-1">{stat.value}</div>
                  <div className="text-light-secondary dark:text-dark-secondary text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button className="gradient-primary-light dark:gradient-primary-dark hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
            <Users className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Join Our Community
          </Button>

          <Button
            variant="outline"
            className="btn-outline-light dark:btn-outline-dark px-10 py-6 text-xl font-semibold rounded-2xl glass-light dark:glass-dark transition-all duration-300 hover:scale-105 group"
          >
            <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Explore Domains
          </Button>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
        </div>
      </div>
    </section>
  )
}
