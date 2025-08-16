"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "./ThemeProvider"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "domains", "team", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Domains", href: "#domains", id: "domains" },
    { name: "Team", href: "#team", id: "team" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? `${theme === "light" ? "glass-light" : "glass-dark"} shadow-2xl`
          : `${theme === "light" ? "bg-white/10" : "bg-black/10"} backdrop-blur-sm border ${theme === "light" ? "border-black/10" : "border-white/10"}`
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <span className={`font-bold text-xl ${theme === "light" ? "text-light-primary" : "text-dark-primary"}`}>
              Game<span className={`mr-4 ${theme === "light" ? "text-blue-600" : "text-blue-400"}`}>Com</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-[16px] font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? `${theme === "light" ? "glass-light text-blue-600" : "glass-dark text-blue-400"} shadow-lg scale-105`
                    : `${theme === "light" ? "text-light-secondary hover:text-light-primary hover:bg-black/5" : "text-dark-secondary hover:text-dark-primary hover:bg-white/10"} hover:scale-105`
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10" />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 ${theme === "light" ? "glass-light hover:glass-light" : "glass-dark hover:glass-dark"} ${theme === "light" ? "text-light-primary" : "text-dark-primary"}`}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3 hover:scale-105">
              Join GameCom
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl ${theme === "light" ? "glass-light text-light-primary" : "glass-dark text-dark-primary"}`}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${theme === "light" ? "glass-light text-light-primary" : "glass-dark text-dark-primary"}`}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl ${theme === "light" ? "glass-light" : "glass-dark"}`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? `${theme === "light" ? "glass-light text-blue-600" : "glass-dark text-blue-400"}`
                    : `${theme === "light" ? "text-light-secondary hover:text-light-primary hover:bg-black/5" : "text-dark-secondary hover:text-dark-primary hover:bg-white/10"}`
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-xl">
              Join GameCom
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
