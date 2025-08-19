"use client"

import React from "react"

const Svg = ({ children, className, viewBox = "0 0 48 48" }) => (
  <svg viewBox={viewBox} className={className} fill="currentColor" aria-hidden>
    {children}
  </svg>
)

export const LogoUnity = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 4l9 5v10l-9 5-9-5V9l9-5zm0 4l-6 3v6l6 3 6-3V11l-6-3z" />
  </Svg>
)

export const LogoUnreal = ({ className = "" }) => (
  <Svg className={className}>
    <circle cx="24" cy="24" r="20" opacity=".18" />
    <path d="M24 12c4.5 0 8 5.5 8 11.5C32 33 24 37 24 37s-8-4-8-13.5C16 17.5 19.5 12 24 12z" />
  </Svg>
)

export const LogoGodot = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 6l14 8v12l-14 8-14-8V14l14-8zm0 8l-8 5v6l8 5 8-5v-6l-8-5z" />
    <circle cx="20" cy="24" r="2" fill="#fff" />
    <circle cx="28" cy="24" r="2" fill="#fff" />
  </Svg>
)

export const LogoBlender = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M18 18l8 0c6 0 10 4 10 8s-4 8-10 8-10-4-10-8c0-2 1-4 3-5l5-3-7-5 3-2 9 6z" />
    <circle cx="26" cy="26" r="4" fill="#fff" />
  </Svg>
)

export const LogoReact = ({ className = "" }) => (
  <Svg className={className} viewBox="0 0 256 256">
    <g fill="none" stroke="currentColor" strokeWidth="12">
      <ellipse cx="128" cy="128" rx="84" ry="32" />
      <ellipse cx="128" cy="128" rx="84" ry="32" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="84" ry="32" transform="rotate(120 128 128)" />
    </g>
    <circle cx="128" cy="128" r="12" fill="currentColor" />
  </Svg>
)

export const LogoVite = ({ className = "" }) => (
  <Svg className={className} viewBox="0 0 256 257">
    <path d="M0 0l128 48 128-48-128 224z" opacity=".2" />
    <path d="M128 32l48 16-48 96-48-96 48-16z" />
  </Svg>
)

export const LogoTailwind = ({ className = "" }) => (
  <Svg className={className} viewBox="0 0 256 154">
    <path d="M128 38c-32-44-88-44-120 0 24-10 44-6 60 12 8 9 19 26 44 26 26 0 40-17 48-26 16-18 36-22 60-12-32-44-88-44-120 0zM8 116c24-10 44-6 60 12 8 9 19 26 44 26 26 0 40-17 48-26 16-18 36-22 60-12-32-44-88-44-120 0-32-44-88-44-120 0z" />
  </Svg>
)

export const LogoThree = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 8l16 28H8L24 8zm0 8l-8 14h16L24 16z" />
  </Svg>
)

export const LogoTypeScript = ({ className = "" }) => (
  <Svg className={className}>
    <rect x="6" y="10" width="36" height="28" rx="3" opacity=".15" />
    <path d="M14 24h8v-4h-8v-4h20v4h-8v12h-4V24h-8z" />
  </Svg>
)

export const LogoNode = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 6l16 9v18l-16 9-16-9V15l16-9z" opacity=".15" />
    <path d="M18 30c2 2 6 2 8 0v-8h-4v6c-1 1-3 1-4 0-1-1-1-3 0-4l2-2-3-2c-3 3-3 7 1 10zM30 22h4v8h-4z" />
  </Svg>
)

export const LogoGit = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M10 26l14-14 14 14-14 14-14-14z" />
    <circle cx="24" cy="24" r="3" fill="#fff" />
    <circle cx="18" cy="18" r="3" fill="#fff" />
    <circle cx="30" cy="30" r="3" fill="#fff" />
  </Svg>
)

export const LogoGitHub = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 6a18 18 0 00-5.7 35.1c.9.2 1.2-.4 1.2-.9v-3.2c-5 1.1-6-2.1-6-2.1-.8-2-2-2.5-2-2.5-1.7-1.2.1-1.2.1-1.2 1.9.1 3 2 3 2 1.7 3 4.6 2.1 5.7 1.6.2-1.3.7-2.1 1.2-2.6-4-.5-8.2-2-8.2-9 0-2 .7-3.6 2-4.8-.2-.5-.9-2.4.2-5 0 0 1.5-.5 5 1.9 1.4-.4 3-.6 4.6-.6s3.2.2 4.6.6c3.5-2.4 5-1.9 5-1.9 1.1 2.6.4 4.5.2 5 1.3 1.2 2 2.8 2 4.8 0 7-4.2 8.5-8.2 9 .7.6 1.3 1.8 1.3 3.6v5.3c0 .5.3 1.1 1.2.9A18 18 0 0024 6z" />
  </Svg>
)

export const LogoVSCode = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M34 8l-8 4-14 12 14 12 8 4V8zM10 24l10-8-6 8 6 8-10-8z" />
  </Svg>
)

export const LogoFigma = ({ className = "" }) => (
  <Svg className={className}>
    <circle cx="18" cy="14" r="6" opacity=".15" />
    <circle cx="30" cy="14" r="6" opacity=".3" />
    <circle cx="18" cy="24" r="6" opacity=".3" />
    <circle cx="30" cy="24" r="6" opacity=".5" />
    <circle cx="18" cy="34" r="6" opacity=".5" />
  </Svg>
)

export const LogoMongo = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 8s6 7 6 16-6 16-6 16-6-7-6-16 6-16 6-16z" />
    <rect x="23" y="10" width="2" height="8" fill="#fff" />
  </Svg>
)

export const LogoPrisma = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M18 8l16 28H10L18 8z" />
  </Svg>
)

export const LogoSocket = ({ className = "" }) => (
  <Svg className={className}>
    <circle cx="24" cy="24" r="14" opacity=".15" />
    <path d="M16 24h6l2-6 2 12 2-6h6" stroke="currentColor" strokeWidth="3" fill="none" />
  </Svg>
)

export const LogoPython = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M12 20c0-6 4-8 8-8h8v6h-8c-2 0-2 2-2 4v2h-4c-2 0-2-2-2-4z" />
    <path d="M36 28c0 6-4 8-8 8h-8v-6h8c2 0 2-2 2-4v-2h4c2 0 2 2 2 4z" />
  </Svg>
)

export const LogoCSharp = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 6l18 10v16L24 42 6 32V16L24 6z" opacity=".15" />
    <path d="M20 18c-6 0-10 4-10 10s4 10 10 10c3 0 6-1 8-3l-3-3c-1 1-3 2-5 2-4 0-6-3-6-6s2-6 6-6c2 0 4 1 5 2l3-3c-2-2-5-3-8-3zM34 20v4h-2v-4h-2v4h-2v2h2v4h2v-4h2v4h2v-10h-2z" />
  </Svg>
)

export const LogoCPP = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M24 6l18 10v16L24 42 6 32V16L24 6z" opacity=".15" />
    <path d="M20 18c-6 0-10 4-10 10s4 10 10 10c3 0 6-1 8-3l-3-3c-1 1-3 2-5 2-4 0-6-3-6-6s2-6 6-6c2 0 4 1 5 2l3-3c-2-2-5-3-8-3zM32 22h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4zM40 22h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4z" />
  </Svg>
)

export const LogoExpress = ({ className = "" }) => (
  <Svg className={className}>
    <rect x="8" y="12" width="32" height="24" rx="4" opacity=".15" />
    <path d="M14 28h8v-2h-6v-3h5v-2h-5v-3h6v-2h-8v12zm16-10l-4 6 4 6h-3l-2.5-3.8L22 30h-3l4-6-4-6h3l2.5 3.8L27 18h3z" />
  </Svg>
)

export const LogoPhotoshop = ({ className = "" }) => (
  <Svg className={className}>
    <rect x="8" y="8" width="32" height="32" rx="6" opacity=".15" />
    <path d="M16 32V16h7c3 0 5 2 5 4s-2 4-5 4h-4v8h-3zm3-11h4c1 0 2-1 2-2s-1-2-2-2h-4v4zM30 24c3 0 5 2 5 4 0 3-2 4-5 4-2 0-3-.6-4-1.4l1.4-2c.6.6 1.4 1 2.6 1 1.1 0 1.8-.5 1.8-1.3 0-.8-.7-1.3-1.9-1.3-1 0-1.7.3-2.3.7L27 26.3V20h8v2.5h-5z" />
  </Svg>
)

export const LogoIllustrator = ({ className = "" }) => (
  <Svg className={className}>
    <rect x="8" y="8" width="32" height="32" rx="6" opacity=".15" />
    <path d="M18 32l6-16h3l6 16h-3l-1.6-4.5h-5.8L21 32h-3zm5.7-7l2.1-6 2.1 6h-4.2zM34 16h3v12h-3V16z" />
  </Svg>
)

export const LogoAfterEffects = ({ className = "" }) => (
  <Svg className={className}>
    <rect x="8" y="8" width="32" height="32" rx="6" opacity=".15" />
    <path d="M17 32l6-16h3l6 16h-3l-1.6-4.5h-5.8L20 32h-3zm16-13h8v2.5h-5V24h5v2.5h-5V32h-3V19z" />
  </Svg>
)


