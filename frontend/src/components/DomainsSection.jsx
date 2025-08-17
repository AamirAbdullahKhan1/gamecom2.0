"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Code, Gamepad2, Palette, Camera, Megaphone, Users, Clock, Star, Zap, Target } from "lucide-react"
import {Link} from "react-router-dom"

export default function DomainsSection({ scrollY }) {
  const domains = [
    {
      name: "Technical",
      icon: Code,
      description: "Dive deep into programming, software development, and cutting-edge technologies",
      fullDescription: "Master the art of programming and software development with hands-on projects and real-world applications.",
      skills: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps", "AI/ML", "Game Engines"],
      projects: ["Unity 3D Racing Game", "React Gaming Portal", "Discord Bot Development"],
      members: "25+ Developers",
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
      members: "30+ Game Developers",
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
      members: "20+ Designers",
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
      members: "15+ Content Creators",
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
      members: "18+ PR Specialists",
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
        <div className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-float text-light-primary dark:text-dark-primary">🎮</div>
        <div
          className="absolute bottom-1/3 left-1/4 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "2s" }}
        >
          ⚡
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

        {/* Domains grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon
            return (
              <div key={domain.name} className="card-tilt-container">
                <Card
                  className="group cursor-pointer p-8 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl card-tilt"
                  style={{
                    transform: `translateY(${scrollY * 0.05 * (index % 2 === 0 ? 1 : -1)}px)`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Domain header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${domain.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {domain.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-light-secondary dark:text-dark-secondary">
                        <Users className="w-4 h-4" />
                        <span>{domain.members}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-light-secondary dark:text-dark-secondary mb-6 leading-relaxed">{domain.fullDescription}</p>

                  {/* Skills */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Key Skills</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-light-primary dark:text-gray-300 text-sm rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-white/10 hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Active Projects</h4>
                    </div>
                    <div className="space-y-2">
                      {domain.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-light-secondary dark:text-dark-secondary">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn more button */}
                  <Button
                    variant="outline"
                    className={`w-full border-2 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent border-current hover:bg-current hover:text-black dark:hover:text-white transition-all duration-300 group-hover:scale-105`}
                    onClick={() => (window.location.href = "/domains")}
                  >
                    Explore {domain.name}
                  </Button>
                </Card>
              </div>
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
