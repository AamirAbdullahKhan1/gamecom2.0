"use client"

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width
    this.height = canvas.height
    this.ctx = context
    this.x = x
    this.y = y
    this.color = color
    this.speed = this.getRandomValue(0.1, 0.9) * speed
    this.size = 0
    this.sizeStep = Math.random() * 0.4
    this.minSize = 0.5
    this.maxSizeInteger = 2
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger)
    this.delay = delay
    this.counter = 0
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01
    this.isIdle = false
    this.isReverse = false
    this.isShimmer = false
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size)
  }

  appear() {
    this.isIdle = false
    if (this.counter <= this.delay) {
      this.counter += this.counterStep
      return
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true
    }
    if (this.isShimmer) {
      this.shimmer()
    } else {
      this.size += this.sizeStep
    }
    this.draw()
  }

  disappear() {
    this.isShimmer = false
    this.counter = 0
    if (this.size <= 0) {
      this.isIdle = true
      return
    } else {
      this.size -= 0.1
    }
    this.draw()
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true
    } else if (this.size <= this.minSize) {
      this.isReverse = false
    }
    if (this.isReverse) {
      this.size -= this.speed
    } else {
      this.size += this.speed
    }
  }
}

function getEffectiveSpeed(value, reducedMotion) {
  const min = 0
  const max = 100
  const throttle = 0.001
  const parsed = parseInt(value, 10)
  if (parsed <= min || reducedMotion) {
    return min
  } else if (parsed >= max) {
    return max * throttle
  } else {
    return parsed * throttle
  }
}

const VARIANTS = {
  default: {
    gap: 6,
    speed: 35,
    colorsLight: "#f8fafc,#f1f5f9,#cbd5e1",
    colorsDark: "#a855f7,#7dd3fc,#ec4899",
  },
  blue: {
    gap: 10,
    speed: 25,
    colorsLight: "#e0f2fe,#7dd3fc,#0ea5e9",
    colorsDark: "#93c5fd,#60a5fa,#2563eb",
  },
  yellow: {
    gap: 4,
    speed: 24,
    colorsLight: "#fef08a,#fde047,#eab308",
    colorsDark: "#facc15,#eab308,#ca8a04",
  },
  pink: {
    gap: 6,
    speed: 40,
    colorsLight: "#fecdd3,#fda4af,#e11d48",
    colorsDark: "#f472b6,#ec4899,#be185d",
  },
}

const PixelOverlay = forwardRef(function PixelOverlay(
  { variant = "default", className = "" },
  ref
) {
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const pixelsRef = useRef([])
  const animationRef = useRef(null)
  const timePreviousRef = useRef(typeof performance !== "undefined" ? performance.now() : 0)
  const lastTheme = useRef("")

  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  ).current

  const initPixels = () => {
    if (!wrapperRef.current || !canvasRef.current) return

    const rect = wrapperRef.current.getBoundingClientRect()
    const width = Math.floor(rect.width)
    const height = Math.floor(rect.height)
    const ctx = canvasRef.current.getContext("2d")

    canvasRef.current.width = width
    canvasRef.current.height = height
    canvasRef.current.style.width = `${width}px`
    canvasRef.current.style.height = `${height}px`

    const themeIsDark = document.documentElement.classList.contains("dark")
    lastTheme.current = themeIsDark ? "dark" : "light"
    const cfg = VARIANTS[variant] || VARIANTS.default
    const finalGap = cfg.gap
    const finalSpeed = cfg.speed
    const finalColors = themeIsDark ? cfg.colorsDark : cfg.colorsLight

    const colorsArray = finalColors.split(",")
    const pxs = []
    for (let x = 0; x < width; x += parseInt(finalGap, 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap, 10)) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        const dx = x - width / 2
        const dy = y - height / 2
        const distance = Math.sqrt(dx * dx + dy * dy)
        const delay = reducedMotion ? 0 : distance
        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay))
      }
    }
    pixelsRef.current = pxs
  }

  const doAnimate = (fnName) => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName))
    const timeNow = typeof performance !== "undefined" ? performance.now() : 0
    const timePassed = timeNow - timePreviousRef.current
    const timeInterval = 1000 / 60
    if (timePassed < timeInterval) return
    timePreviousRef.current = timeNow - (timePassed % timeInterval)

    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx || !canvasRef.current) return
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    let allIdle = true
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i]
      pixel[fnName]()
      if (!pixel.isIdle) {
        allIdle = false
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  const handleAnimation = (name) => {
    cancelAnimationFrame(animationRef.current)
    // Re-init if theme changed since last init
    const themeIsDark = document.documentElement.classList.contains("dark")
    const currentTheme = themeIsDark ? "dark" : "light"
    if (currentTheme !== lastTheme.current) {
      initPixels()
    }
    animationRef.current = requestAnimationFrame(() => doAnimate(name))
  }

  useImperativeHandle(ref, () => ({
    appear: () => handleAnimation("appear"),
    disappear: () => handleAnimation("disappear"),
    reinit: () => initPixels(),
  }))

  useEffect(() => {
    initPixels()
    const observer = new ResizeObserver(() => {
      initPixels()
    })
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant])

  return (
    <div ref={wrapperRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
})

export default PixelOverlay


