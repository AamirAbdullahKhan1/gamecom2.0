"use client"

import React from "react"

export default function LogoLoop({ children, speed = 24, direction = "normal" }) {
  return (
    <div
      className="logo-loop relative overflow-hidden py-8 group"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="logo-track inline-flex items-center gap-16 will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction,
        }}
      >
        <div className="inline-flex items-center gap-16">{children}</div>
        <div className="inline-flex items-center gap-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}


