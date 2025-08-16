"use client"

import { Card } from "./ui/card"
import { Crown, Star, Shield, Zap, Code, Palette, Megaphone, Gamepad2, Camera } from "lucide-react"

export default function TeamSection({ scrollY }) {
  const coreTeam = [
    {
      role: "President",
      name: "Arjun Sharma", // Added random names
      image: "/professional-male-student-leader.png",
      linkedin: "https://linkedin.com/in/arjun-sharma-gamecom",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
      icon: Crown,
      description: "Leading GameCom's vision and strategic direction",
      special: true,
    },
    {
      role: "Vice-President",
      name: "Priya Patel",
      image: "/female-student-leader.png",
      linkedin: "https://linkedin.com/in/priya-patel-gamecom",
      gradient: "from-blue-500 via-purple-500 to-indigo-600",
      icon: Star,
      description: "Supporting leadership and driving innovation",
      special: true,
    },
    {
      role: "Director",
      name: "Rahul Kumar",
      image: "/professional-male-director.png",
      linkedin: "https://linkedin.com/in/rahul-kumar-gamecom",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      icon: Shield,
      description: "Overseeing operations and team coordination",
      special: true,
    },
    {
      role: "Administrator",
      name: "Sneha Reddy",
      image: "/placeholder-0s4p1.png",
      linkedin: "https://linkedin.com/in/sneha-reddy-gamecom",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      icon: Zap,
      description: "Managing resources and organizational excellence",
      special: true,
    },
  ]

  const domainLeads = [
    {
      role: "Technical Lead",
      name: "Vikram Singh",
      image: "/tech-lead-student.png",
      linkedin: "https://linkedin.com/in/vikram-singh-tech",
      gradient: "from-blue-600 to-cyan-500",
      icon: Code,
      domain: "Technical",
    },
    {
      role: "Technical Co-Lead",
      name: "Ananya Gupta",
      image: "/female-tech-developer.png",
      linkedin: "https://linkedin.com/in/ananya-gupta-tech",
      gradient: "from-blue-500 to-cyan-400",
      icon: Code,
      domain: "Technical",
    },
    {
      role: "Design Lead",
      name: "Karthik Menon",
      image: "/creative-designer-student.png",
      linkedin: "https://linkedin.com/in/karthik-menon-design",
      gradient: "from-pink-600 to-rose-500",
      icon: Palette,
      domain: "Design",
    },
    {
      role: "Design Co-Lead",
      name: "Ishita Jain",
      image: "/female-ui-designer.png",
      linkedin: "https://linkedin.com/in/ishita-jain-design",
      gradient: "from-pink-500 to-rose-400",
      icon: Palette,
      domain: "Design",
    },
    {
      role: "PR Lead",
      name: "Aditya Verma",
      image: "/pr-marketing-student.png",
      linkedin: "https://linkedin.com/in/aditya-verma-pr",
      gradient: "from-orange-600 to-red-500",
      icon: Megaphone,
      domain: "Public Relations",
    },
    {
      role: "Game Dev Lead",
      name: "Rohan Das",
      image: "/placeholder-kn8ld.png",
      linkedin: "https://linkedin.com/in/rohan-das-gamedev",
      gradient: "from-purple-600 to-pink-500",
      icon: Gamepad2,
      domain: "Game Development",
    },
    {
      role: "Game Dev Co-Lead",
      name: "Meera Nair",
      image: "/female-game-developer.png",
      linkedin: "https://linkedin.com/in/meera-nair-gamedev",
      gradient: "from-purple-500 to-pink-400",
      icon: Gamepad2,
      domain: "Game Development",
    },
    {
      role: "Head of Media",
      name: "Aryan Khanna",
      image: "/media-photographer-student.png",
      linkedin: "https://linkedin.com/in/aryan-khanna-media",
      gradient: "from-green-600 to-emerald-500",
      icon: Camera,
      domain: "Media",
    },
    {
      role: "Creative Video Grapher",
      name: "Kavya Iyer",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/kavya-iyer-media",
      gradient: "from-green-500 to-emerald-400",
      icon: Camera,
      domain: "Media",
    },
  ]

  return (
    <section id="team" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Theme-aware floating gaming elements */}
        <div className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-float text-light-primary dark:text-dark-primary">🎮</div>
        <div
          className="absolute bottom-1/3 left-1/4 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "2s" }}
        >
          🏆
        </div>
        <div
          className="absolute top-1/2 left-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "4s" }}
        >
          ⚡
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full glass-light dark:glass-dark">
            <Crown className="w-6 h-6 text-amber-500" />
            <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">Leadership</span>
          </div>
          {/* Enhanced title with better theme support */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-primary-light dark:text-gradient-primary-dark animate-fade-in-up">
            Our Majestic Team
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders and passionate innovators who drive GameCom's excellence and shape the future of
            gaming at SRM University
          </p>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-4">Core Leadership</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => {
              const IconComponent = member.icon
              return (
                <Card
                  key={member.role}
                  className="group relative p-8 card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-700 hover:scale-105 text-center overflow-hidden animate-fade-in-up cursor-pointer hover:shadow-2xl hover:shadow-amber-500/20 dark:hover:shadow-amber-400/30 king-aura"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                  onClick={() => window.open(member.linkedin, "_blank")}
                >
                  {/* Enhanced gradient overlay with better theme support */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Added royal glow effect around the card */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"></div>

                  <div className="relative mb-6">
                    {/* Enhanced image with royal border and glow */}
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-amber-400/50 group-hover:border-amber-400/80"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                      <Crown className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Enhanced text with better theme contrast */}
                  <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">{member.role}</h4>
                  <p className="text-light-secondary dark:text-dark-secondary mb-4 text-sm leading-relaxed">{member.description}</p>
                  <p className="text-light-primary dark:text-dark-primary font-medium">{member.name}</p>

                  <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">CORE</span>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-4">Domain Leadership</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainLeads.map((member, index) => {
              const IconComponent = member.icon
              return (
                <Card
                  key={member.role}
                  className="group p-6 card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 text-center animate-fade-in-up cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20"
                  style={{
                    animationDelay: `${(index + 4) * 100}ms`,
                  }}
                  onClick={() => window.open(member.linkedin, "_blank")}
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-20 h-20 rounded-xl mx-auto object-cover shadow-lg group-hover:scale-110 transition-all duration-300 border-2 border-white/20 group-hover:border-blue-400/50"
                    />
                  </div>

                  {/* Better text contrast for light theme */}
                  <h4 className="text-lg font-bold text-light-primary dark:text-dark-primary mb-2">{member.role}</h4>
                  <p className="text-sm text-light-secondary dark:text-dark-secondary mb-3">{member.domain}</p>
                  <p className="text-light-primary dark:text-dark-primary">{member.name}</p>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="text-center">
          <Card className="inline-block p-10 card-light dark:card-dark max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-8 h-8 text-blue-500" />
              <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary">Join Our Legendary Team</h3>
              <Star className="w-8 h-8 text-purple-500" />
            </div>
            <p className="text-light-secondary dark:text-dark-secondary mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to make your mark in the gaming world? We're seeking passionate leaders and innovators to join our
              ranks and help shape the future of GameCom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary-light dark:gradient-primary-dark hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Apply for Leadership
              </button>
              <button className="btn-outline-light dark:btn-outline-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Become a Member
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
