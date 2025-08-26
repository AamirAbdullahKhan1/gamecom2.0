"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Code, Gamepad2, Palette, Camera, Megaphone, Users, Clock, Star, Zap, Target } from "lucide-react"
import {Link} from "react-router-dom"
import { Fragment, useRef } from "react"
import PixelOverlay from "./effects/PixelOverlay"

export default function DomainsSection({ scrollY }) {
  const domains = [
    {
      name: "Technical",
      icon: Code,
      description: "Dive deep into programming, software development, and cutting-edge technologies",
      fullDescription: "Master the art of programming and software development with hands-on projects and real-world applications.",
      skills: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps", "AI/ML", "Game Engines"],
      projects: ["Unity 3D Racing Game", "React Gaming Portal", "Discord Bot Development"],
      members: "15+ Developers",
      gradient: "from-blue-500 to-cyan-500",
      color: "blue",
    },
    {
      name: "Game Development",
      icon: Gamepad2,
      description: "Create immersive gaming experiences using modern game engines and frameworks",
      fullDescription: "From concept to reality, build engaging games across multiple platforms with industry-standard tools.",
      skills: ["Unity", "Unreal Engine", "Game Design", "3D Modeling", "Game Mechanics", "Multiplayer"],
      projects: ["2D Platformer Adventure", "VR Horror Experience", "Multiplayer Battle Arena"],
      members: "7+ Game Developers",
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
    },
    {
      name: "Design",
      icon: Palette,
      description: "Craft beautiful user experiences and stunning visual designs",
      fullDescription: "Create visually stunning and user-friendly experiences that bring games and applications to life.",
      skills: ["UI/UX Design", "Graphic Design", "Animation", "Branding", "3D Modeling", "Concept Art"],
      projects: ["Game UI Redesign", "3D Character Models", "Brand Identity System"],
      members: "5+ Designers",
      gradient: "from-pink-500 to-rose-500",
      color: "pink",
    },
    {
      name: "Media",
      icon: Camera,
      description: "Tell compelling stories through video, photography, and digital content",
      fullDescription: "Capture and create content that showcases GameCom's journey and engages our community.",
      skills: ["Video Editing", "Photography", "Content Creation", "Social Media", "Storytelling", "Live Streaming"],
      projects: ["Event Documentation", "Gaming Tutorials", "Social Media Campaigns"],
      members: "6+ Content Creators",
      gradient: "from-green-500 to-emerald-500",
      color: "green",
    },
    {
      name: "Public Relations",
      icon: Megaphone,
      description: "Build communities, manage events, and create meaningful connections",
      fullDescription: "Build relationships, manage communications, and grow GameCom's presence in the gaming community.",
      skills: ["Event Management", "Community Building", "Marketing", "Communications", "Networking", "Brand Management"],
      projects: ["University Gaming Tournament", "Industry Partnership Program", "Community Outreach"],
      members: "8+ PR Specialists",
      gradient: "from-orange-500 to-red-500",
      color: "orange",
    },
  ]

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Gaming and Tech themed floating elements */}
        <div className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-float text-light-primary dark:text-dark-primary">🎯</div>
        <div
          className="absolute bottom-1/3 left-1/4 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "2s" }}
        >
          💻
        </div>
        <div
          className="absolute top-1/2 left-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "4s" }}
        >
          🎨
        </div>
        <div
          className="absolute top-1/3 right-1/6 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "6s" }}
        >
          🎮
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "8s" }}
        >
          📸
        </div>
        <div
          className="absolute top-1/6 left-1/3 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "10s" }}
        >
          📢
        </div>
        <div
          className="absolute bottom-1/6 left-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "12s" }}
        >
          ⚡
        </div>
        <div
          className="absolute top-1/8 right-1/8 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "14s" }}
        >
          🚀
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border-2 border-purple-500 rounded-full glass-light dark:glass-dark">
            <Target className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-primary-light dark:text-gradient-primary-dark animate-fade-in-up">
            Our Domains
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Five specialized domains where passion meets expertise. Choose your path and master your craft with hands-on experience and real-world projects.
          </p>
        </div>

        {/* Magic Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7 auto-rows-[260px] md:auto-rows-[180px] lg:auto-rows-[220px] mb-16">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon
            const pixelRef = useRef(null)
            // Layout map inspired by Magic Bento
            const spanMap = [
              "md:col-span-2",
              "md:row-span-2",
              "",
              "md:col-span-2",
              "",
            ]
            const spans = spanMap[index] || ""
            return (
              <Fragment key={domain.name}>
              <div className={`group relative ${spans} transition-transform duration-300 ease-out active:scale-[0.99] md:hover:-translate-y-1`}>
                {/* Gradient border wrapper */}
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                {/* Card body */}
                <div
                  className="relative cursor-pointer h-full w-full rounded-3xl card-light dark:card-dark overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl"
                  onMouseEnter={() => pixelRef.current?.appear()}
                  onMouseLeave={() => pixelRef.current?.disappear()}
                  onTouchStart={() => pixelRef.current?.appear()}
                  onTouchEnd={() => pixelRef.current?.disappear()}
                >
                  {/* Subtle grid overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-size:16px_16px] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)]"></div>
                  {/* Hover glow blob */}
                  <div className={`pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-r ${domain.gradient}`}></div>
                  {/* Sheen */}
                  <div className="pointer-events-none absolute -inset-x-40 -inset-y-20 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  {/* Corner accents */}
                  <div className="pointer-events-none absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
                  <div className="pointer-events-none absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500/10 to-transparent"></div>
                  {/* Canvas-based Pixel overlay (theme-aware) */}
                  <PixelOverlay ref={pixelRef} className="opacity-90" />

                  {/* Content */}
                  <div className="relative z-10 h-full p-5 md:p-6 lg:p-7 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r ${domain.gradient} flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-transform`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-light-primary dark:text-dark-primary">{domain.name}</h3>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-light-secondary dark:text-dark-secondary">
                          <Users className="w-4 h-4" />
                          <span>{domain.members}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-light-secondary dark:text-dark-secondary overflow-hidden leading-relaxed">{domain.description}</p>

                    {/* Chips / skills (show a few) */}
                    <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                      {domain.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-full text-xs border border-purple-200/50 dark:border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-light-primary dark:text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-auto pt-3 md:pt-4">
                      <Button
                        variant="outline"
                        className={`w-full uppercase text-md border-2 rounded-2xl md:rounded-xl bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent border-current hover:bg-current hover:text-black dark:hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95`}
                        onClick={() => (window.location.href = "/domains")}
                      >
                        Explore {domain.name}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {index === 2 && (
                <div className="group relative hidden md:block">
                  <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-full w-full rounded-3xl card-light dark:card-dark overflow-hidden flex items-center">
                    <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-size:16px_16px] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)]"></div>
                    <div className="pointer-events-none absolute -left-10 -top-10 w-44 h-44 rounded-full blur-3xl bg-purple-500/20"></div>
                    <div className="pointer-events-none absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl bg-pink-500/20"></div>
                    <div className="relative z-10 w-full marquee-container">
                      <div className="marquee-track">
                        <div className="marquee-segment">
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                        </div>
                        <div className="marquee-segment">
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                          <span className="text-4xl font-extrabold tracking-wider text-gradient-primary-light dark:text-gradient-primary-dark">DOMAINS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </Fragment>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="inline-block p-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-8 h-8 text-purple-500" />
              <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary">Ready to Choose Your Domain?</h3>
              <Target className="w-8 h-8 text-pink-500" />
            </div>
            <p className="text-light-secondary dark:text-dark-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Each domain offers unique opportunities for growth and learning. Join us and discover where your passion
              lies! Start your journey with hands-on projects and expert mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary-light dark:gradient-primary-dark hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Join a Domain
              </Button>
              <Link to={"/domains"} onClick={() => window.scrollTo(0,0)}>
                <Button className="btn-outline-light dark:btn-outline-dark px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105" >
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
