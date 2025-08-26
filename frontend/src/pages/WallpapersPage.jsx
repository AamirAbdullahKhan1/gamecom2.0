"use client"

import { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { motion, AnimatePresence } from "framer-motion"

const wallpapers = [
  { id: 1, src: "/wallpaper-1.jpg", title: "Neon Grid" },
  { id: 2, src: "/wallpaper-2.jpg", title: "Glitch Pulse" },
  { id: 3, src: "/wallpaper-3.jpg", title: "Retro Wave" },
  { id: 4, src: "/wallpaper-4.jpg", title: "Pixel Aurora" },
]

export default function WallpapersPage() {
  const [active, setActive] = useState(null)

  const onDownload = (src) => {
    const link = document.createElement("a")
    link.href = src
    link.download = src.split("/").pop() || "wallpaper.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Creative background effects */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.18) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl bg-gradient-to-tr from-pink-500/25 via-purple-500/20 to-blue-500/20" style={{ animationDuration: "3s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20" style={{ animationDuration: "5s" }}></div>
      </div>

      {/* Floating emojis */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-24 left-16 text-4xl opacity-20 animate-float">✨</div>
        <div className="absolute top-1/3 right-20 text-4xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>🎨</div>
        <div className="absolute bottom-24 left-1/4 text-4xl opacity-20 animate-float" style={{ animationDelay: "3s" }}>📱</div>
        <div className="absolute bottom-40 right-1/3 text-4xl opacity-20 animate-float" style={{ animationDelay: "4.5s" }}>🌌</div>
      </div>

      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 text-gradient-primary-light dark:text-gradient-primary-dark">Wallpapers</h1>
          <p className="text-light-secondary dark:text-dark-secondary">Browse Glitch & Aesthetics wallpapers. Click to preview and download.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {wallpapers.map((w, i) => (
            <motion.button
              key={w.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 hover:shadow-2xl transition-shadow"
              onClick={() => setActive(w)}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* 9:16 aspect wrapper */}
              <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                <img src={w.src} alt={w.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-sm">
                  <span className="font-medium drop-shadow">{w.title}</span>
                  <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur">Preview</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className="relative max-w-5xl w-full" initial={{ scale: 0.96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 12 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} onClick={(e) => e.stopPropagation()}>
              <img src={active.src} alt={active.title} className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
              <div className="mt-4 flex items-center justify-between">
                <div className="text-white/90">
                  <div className="text-lg font-semibold">{active.title}</div>
                  <div className="text-sm">Click outside to close</div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition" onClick={() => setActive(null)}>Close</button>
                  <button className="px-4 py-2 rounded-xl gradient-primary-light dark:gradient-primary-dark text-white" onClick={() => onDownload(active.src)}>Download</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}


