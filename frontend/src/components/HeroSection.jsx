"use client"

import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Play, Users, Trophy, Gamepad2, ChevronDown } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrambledText, setScrambledText] = useState("GameCom")
  const [isScrambling, setIsScrambling] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Text scrambling animation
  useEffect(() => {
    const scrambleText = () => {
      setIsScrambling(true)
      const originalText = "GameCom"
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
      
      let iterations = 0
      const maxIterations = 20
      const interval = setInterval(() => {
        setScrambledText(
          originalText
            .split("")
            .map((char, index) => {
              if (iterations > index * 2) {
                return originalText[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join("")
        )
        
        iterations++
        if (iterations >= maxIterations) {
          clearInterval(interval)
          setScrambledText(originalText)
          setIsScrambling(false)
        }
      }, 100)
    }

    // Initial scramble on load
    scrambleText()

    // Repeat every 15 seconds
    const interval = setInterval(scrambleText, 15000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, label: "Active Members", value: "40+" },
    { icon: Trophy, label: "Events Hosted", value: "5+" },
    { icon: Gamepad2, label: "Games Developed", value: "5+" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gaming and Tech themed floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🎮</span>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-25" style={{ animationDelay: "1s" }}>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">💻</span>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-30" style={{ animationDelay: "2s" }}>
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">⚡</span>
          </div>
        </div>
        <div className="absolute top-60 left-1/3 animate-float opacity-25" style={{ animationDelay: "3s" }}>
          <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🎯</span>
          </div>
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float opacity-30" style={{ animationDelay: "4s" }}>
          <div className="w-11 h-11 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🏆</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float opacity-20" style={{ animationDelay: "5s" }}>
          <div className="w-9 h-9 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">🎨</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-25" style={{ animationDelay: "6s" }}>
          <div className="w-13 h-13 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🚀</span>
          </div>
        </div>
        <div className="absolute top-1/4 left-1/4 animate-float opacity-20" style={{ animationDelay: "7s" }}>
          <div className="w-7 h-7 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-sm">⭐</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float opacity-30" style={{ animationDelay: "8s" }}>
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">🎪</span>
          </div>
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
              src={theme === "light" ? "/gamecom.png" : "/gcwhite.png"}
              alt="GameCom Logo"
              className="w-[210px] h-[210px] mt-5 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-2xl cursor-pointer filter brightness-100 dark:brightness-110"
            />
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gradient-primary-light dark:text-gradient-primary-dark leading-[1.05] pb-2">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent font-mono">
              {scrambledText}
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gradient-primary-light dark:text-gradient-primary-dark leading-[1.15] pb-2">
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
                <div key={stat.label} className="card-tilt-container">
                  <div
                    className="card-light dark:card-dark p-6 cursor-pointer rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl card-tilt"
                  >
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-1">{stat.value}</div>
                    <div className="text-light-secondary dark:text-dark-secondary text-sm">{stat.label}</div>
                  </div>
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
