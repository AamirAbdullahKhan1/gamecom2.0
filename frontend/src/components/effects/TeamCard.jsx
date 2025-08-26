"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"
import PixelOverlay from "./PixelOverlay"

export default function TeamCard({
  photo,
  name,
  role,
  subtitle,
  onClick,
  instagramUrl,
  linkedinUrl,
  accent = "indigo", // indigo | pink | emerald | amber | purple | blue | rose
  size = "md", // sm | md | lg
  variant = "default", // default | core
  imageOffsetY = 0, // number (percentage offset relative to center). e.g., -10 moves up, 10 moves down
}) {
  const sizeMap = {
    sm: { h: "h-64", img: "w-24 h-24", name: "text-lg", role: "text-sm", subtitle: "text-xs" },
    md: { h: "h-72", img: "w-28 h-28", name: "text-xl", role: "text-sm", subtitle: "text-xs" },
    lg: { h: "h-80", img: "w-32 h-32", name: "text-2xl", role: "text-base", subtitle: "text-sm" },
  }[size]

  const accentGrad = {
    indigo: "from-indigo-500 via-blue-500 to-purple-500",
    pink: "from-pink-500 via-rose-500 to-fuchsia-500",
    emerald: "from-emerald-500 via-teal-500 to-cyan-500",
    amber: "from-amber-500 via-orange-500 to-rose-500",
    purple: "from-purple-500 via-fuchsia-500 to-pink-500",
    blue: "from-blue-500 via-cyan-500 to-indigo-500",
    rose: "from-rose-500 via-pink-500 to-purple-500",
  }[accent]

  const pixelRef = useRef(null)

  const pixelVariant = (
    accent === "blue" || accent === "indigo" ? "blue" :
    accent === "amber" ? "yellow" :
    accent === "pink" || accent === "rose" ? "pink" :
    "default"
  )

  const resolvedObjectPositionY = (() => {
    if (typeof imageOffsetY === "number" && Number.isFinite(imageOffsetY)) {
      const y = Math.max(0, Math.min(100, 50 + imageOffsetY))
      return `${y}%`
    }
    if (typeof imageOffsetY === "string" && imageOffsetY.trim().length > 0) {
      return imageOffsetY
    }
    return "50%"
  })()

  return (
    <motion.div
      onClick={onClick}
      className={`group relative ${sizeMap.h} rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl`}
      onMouseEnter={() => pixelRef.current?.appear()}
      onMouseLeave={() => pixelRef.current?.disappear()}
      onTouchStart={() => pixelRef.current?.appear()}
      onTouchEnd={() => pixelRef.current?.disappear()}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {/* Gradient border wrapper */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/20 dark:from-white/10 dark:to-white/10">
        <div className="absolute inset-0 rounded-[22px]" />
      </div>

      {/* Card body */}
      <div className="relative h-full w-full rounded-[22px] bg-white dark:bg-gray-900 overflow-hidden">
        {/* Core aura */}
        {variant === "core" && (
          <div className={`absolute -inset-10 blur-3xl opacity-20 group-hover:opacity-35 transition-opacity bg-gradient-to-r ${accentGrad}`} />
        )}
        {/* Pixel overlay */}
        <PixelOverlay ref={pixelRef} variant={pixelVariant} />
        {/* Grid texture */}
        <div className="pointer-events-none absolute inset-0 [background-size:16px_16px] opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <div className="relative">
              <div className={`absolute -inset-1 blur-md opacity-70 rounded-full bg-gradient-to-r ${accentGrad} group-hover:opacity-100 transition-opacity`} />
              <span className={`relative px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${accentGrad} text-white shadow`} style={{ fontFamily: '"Orbitron", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial' }}>{role}</span>
            </div>
          </div>

          {/* Avatar */}
          <div className={`rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/10 group-hover:ring-white/30 transition-all ${sizeMap.img}`}>
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: `center ${resolvedObjectPositionY}` }}
            />
          </div>

          {/* Text */}
          <div className="text-center mt-3">
            <div className={`${sizeMap.name} font-bold tracking-wider uppercase text-gray-900 dark:text-white`} style={{ fontFamily: '"Orbitron", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial' }}>{name}</div>
            {subtitle && <div className={`${sizeMap.subtitle} mt-1 text-gray-600 dark:text-white`}>{subtitle}</div>}
          </div>

          {/* Socials */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <a
              href={instagramUrl || undefined}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => { if (!instagramUrl) e.preventDefault(); e.stopPropagation() }}
              className={`p-2 rounded-lg bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/80 transition-colors shadow ${instagramUrl ? "" : "opacity-40 cursor-not-allowed"}`}
            >
              <Instagram className="w-4 h-4 text-pink-500" />
            </a>
            <a
              href={linkedinUrl || undefined}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => { if (!linkedinUrl) e.preventDefault(); e.stopPropagation() }}
              className={`p-2 rounded-lg bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/80 transition-colors shadow ${linkedinUrl ? "" : "opacity-40 cursor-not-allowed"}`}
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


