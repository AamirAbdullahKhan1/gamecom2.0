"use client"

import { Link } from "react-router-dom"
import { Github, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-20 relative overflow-hidden border-t border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] rounded-full blur-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/gamecom.png" alt="GameCom" className="h-8 w-auto dark:hidden" />
              <img src="/gcwhite.png" alt="GameCom" className="h-8 w-auto hidden dark:block" />
              <span className="text-lg font-semibold text-light-primary dark:text-dark-primary">GameCom</span>
            </div>
            <p className="text-sm text-light-secondary dark:text-dark-secondary leading-relaxed">
              SRM’s game development and creative tech community. Building, playing, and pushing pixels together.
            </p>
            <div className="flex items-center gap-2 text-xs text-light-secondary dark:text-dark-secondary">
              <span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5">Gaming</span>
              <span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5">Design</span>
              <span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5">Tech</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-light-primary dark:text-dark-primary mb-3 uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline text-light-secondary dark:text-dark-secondary">Home</Link></li>
              <li><Link to="/domains" className="hover:underline text-light-secondary dark:text-dark-secondary">Domains</Link></li>
              <li><Link to="/wallpapers" className="hover:underline text-light-secondary dark:text-dark-secondary">Wallpapers</Link></li>
              <li><a href="#events" className="hover:underline text-light-secondary dark:text-dark-secondary">Events</a></li>
              <li><a href="#contact" className="hover:underline text-light-secondary dark:text-dark-secondary">Contact</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-light-primary dark:text-dark-primary mb-3 uppercase">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="text-light-secondary dark:text-dark-secondary hover:underline" href="#">Projects</a></li>
              <li><a className="text-light-secondary dark:text-dark-secondary hover:underline" href="#">Workshops</a></li>
              <li><a className="text-light-secondary dark:text-dark-secondary hover:underline" href="#">Game Nights</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-light-primary dark:text-dark-primary mb-3 uppercase">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg border border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors hover:scale-105">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg border border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors hover:scale-105">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg border border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors hover:scale-105">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@gamecom.club" aria-label="Email" className="p-2 rounded-lg border border-gray-200/60 dark:border-gray-700/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors hover:scale-105">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-xs text-light-secondary dark:text-dark-secondary">
              <div>hello@gamecom.club</div>
              <div>SRM University, Chennai</div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200/60 dark:border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-light-secondary dark:text-dark-secondary">© {new Date().getFullYear()} GameCom. All rights reserved.</p>
          <div className="text-xs text-light-secondary dark:text-dark-secondary flex items-center gap-1">
            Made with <span className="text-pink-500">❤</span> by GameCom
          </div>
        </div>
      </div>
    </footer>
  )
}


