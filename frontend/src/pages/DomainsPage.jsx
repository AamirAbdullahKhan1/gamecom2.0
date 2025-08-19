"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Users, Trophy, Code, Palette, Camera, Megaphone, Gamepad2, Star, Zap, Target, Award, Clock, BookOpen } from "lucide-react"
import Navigation from "../components/Navigation"
import LogoLoop from "../components/effects/LogoLoop"
import Footer from "../components/Footer"

const domains = [
  {
    id: "technical",
    name: "Technical",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: "Master the art of programming and software development",
    fullDescription:
      "Our Technical domain is the backbone of GameCom, where innovation meets implementation. We focus on cutting-edge technologies, game development frameworks, and software engineering principles that power the gaming industry.",
    skills: ["Game Development", "Web Development", "Mobile Apps", "AI/ML", "Backend Systems", "Database Design"],
    projects: ["Unity 3D Racing Game", "React Gaming Portal", "Discord Bot Development", "Game Analytics Dashboard"],
    learningPath: [
      "Fundamentals of Programming (C#, JavaScript, Python)",
      "Game Engine Mastery (Unity, Unreal Engine)",
      "Web Technologies (React, Node.js, MongoDB)",
      "Advanced Topics (AI, Networking, Performance Optimization)",
    ],
    members: [
      {
        name: "Arjun Sharma",
        role: "Technical Lead",
        image: "/male-tech-student.png",
        linkedin: "https://linkedin.com/in/arjun-sharma",
      },
      {
        name: "Priya Patel",
        role: "Full Stack Developer",
        image: "/female-developer.png",
        linkedin: "https://linkedin.com/in/priya-patel",
      },
      {
        name: "Rohit Kumar",
        role: "Backend Specialist",
        image: "/backend-developer.png",
        linkedin: "https://linkedin.com/in/rohit-kumar",
      },
    ],
  },
  {
    id: "gamedev",
    name: "Game Development",
    icon: Gamepad2,
    color: "from-purple-500 to-pink-500",
    description: "Create immersive gaming experiences from concept to reality",
    fullDescription:
      "The Game Development domain is where creativity meets technology. We specialize in creating engaging, innovative games across multiple platforms, from mobile to PC to console gaming.",
    skills: [
      "Unity Development",
      "Unreal Engine",
      "Game Design",
      "Level Design",
      "Game Mechanics",
      "Multiplayer Systems",
    ],
    projects: ["2D Platformer Adventure", "VR Horror Experience", "Multiplayer Battle Arena", "Mobile Puzzle Game"],
    learningPath: [
      "Game Design Principles and Theory",
      "Unity/Unreal Engine Fundamentals",
      "Programming for Games (C#, C++, Blueprint)",
      "Advanced Game Systems (Physics, AI, Networking)",
    ],
    members: [
      {
        name: "Vikram Singh",
        role: "Game Dev Lead",
        image: "/unity-developer-workspace.png",
        linkedin: "https://linkedin.com/in/vikram-singh",
      },
      {
        name: "Ananya Gupta",
        role: "Game Designer",
        image: "/female-game-designer.png",
        linkedin: "https://linkedin.com/in/ananya-gupta",
      },
      {
        name: "Karthik Reddy",
        role: "Unity Developer",
        image: "/3d-artist.png",
        linkedin: "https://linkedin.com/in/karthik-reddy",
      },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    color: "from-green-500 to-teal-500",
    description: "Craft stunning visuals and user experiences",
    fullDescription:
      "Our Design domain focuses on creating visually stunning and user-friendly experiences. From UI/UX design to 3D modeling and animation, we bring games and applications to life through exceptional design.",
    skills: ["UI/UX Design", "3D Modeling", "Animation", "Graphic Design", "Concept Art", "Branding"],
    projects: ["Game UI Redesign", "3D Character Models", "Brand Identity System", "Motion Graphics Package"],
    learningPath: [
      "Design Fundamentals (Color, Typography, Layout)",
      "Digital Design Tools (Figma, Adobe Suite, Blender)",
      "UI/UX Principles and User Research",
      "Advanced 3D Modeling and Animation",
    ],
    members: [
      {
        name: "Sneha Joshi",
        role: "Design Lead",
        image: "/graphic-designer-workspace.png",
        linkedin: "https://linkedin.com/in/sneha-joshi",
      },
      {
        name: "Rahul Mehta",
        role: "3D Artist",
        image: "/3d-artist.png",
        linkedin: "https://linkedin.com/in/rahul-mehta",
      },
      {
        name: "Kavya Nair",
        role: "UI/UX Designer",
        image: "/female-developer.png",
        linkedin: "https://linkedin.com/in/kavya-nair",
      },
    ],
  },
  {
    id: "media",
    name: "Media",
    icon: Camera,
    color: "from-orange-500 to-red-500",
    description: "Tell compelling stories through visual media",
    fullDescription:
      "The Media domain captures and creates content that showcases GameCom's journey. We specialize in photography, videography, content creation, and digital storytelling that engages our community.",
    skills: ["Photography", "Video Editing", "Content Creation", "Social Media", "Storytelling", "Live Streaming"],
    projects: ["Event Documentation", "Gaming Tutorials", "Social Media Campaigns", "Live Stream Setup"],
    learningPath: [
      "Photography and Videography Basics",
      "Content Creation and Editing (Premiere, After Effects)",
      "Social Media Strategy and Management",
      "Advanced Production and Live Streaming",
    ],
    members: [
      {
        name: "Aditya Sharma",
        role: "Media Lead",
        image: "/male-tech-student.png",
        linkedin: "https://linkedin.com/in/aditya-sharma",
      },
      {
        name: "Riya Singh",
        role: "Content Creator",
        image: "/female-developer.png",
        linkedin: "https://linkedin.com/in/riya-singh",
      },
      {
        name: "Aryan Patel",
        role: "Video Editor",
        image: "/backend-developer.png",
        linkedin: "https://linkedin.com/in/aryan-patel",
      },
    ],
  },
  {
    id: "pr",
    name: "Public Relations",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    description: "Build connections and grow our gaming community",
    fullDescription:
      "Our PR domain focuses on building relationships, managing communications, and growing GameCom's presence both within SRM University and in the broader gaming community.",
    skills: [
      "Communication",
      "Event Management",
      "Community Building",
      "Networking",
      "Brand Management",
      "Partnership Development",
    ],
    projects: [
      "University Gaming Tournament",
      "Industry Partnership Program",
      "Community Outreach Initiative",
      "Alumni Network Development",
    ],
    learningPath: [
      "Communication and Public Speaking",
      "Event Planning and Management",
      "Digital Marketing and Social Media",
      "Partnership Development and Networking",
    ],
    members: [
      {
        name: "Ishita Agarwal",
        role: "PR Lead",
        image: "/female-developer.png",
        linkedin: "https://linkedin.com/in/ishita-agarwal",
      },
      {
        name: "Siddharth Jain",
        role: "Event Coordinator",
        image: "/male-tech-student.png",
        linkedin: "https://linkedin.com/in/siddharth-jain",
      },
      {
        name: "Meera Krishnan",
        role: "Community Manager",
        image: "/graphic-designer-workspace.png",
        linkedin: "https://linkedin.com/in/meera-krishnan",
      },
    ],
  },
]

export default function DomainsPage() {
  const [activeDomain, setActiveDomain] = useState("technical")

  const currentDomain = domains.find((d) => d.id === activeDomain)
  const IconComponent = currentDomain?.icon

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Enhanced background with animated borders */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated border elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 animate-pulse" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8 pt-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:underline">Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border-2 border-purple-500 rounded-full glass-light dark:glass-dark">
              <Target className="w-6 h-6 text-purple-500" />
              <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">Explore Domains</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Domains
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the five specialized domains that make GameCom the premier gaming club at SRM University. Each domain offers unique opportunities for growth and learning.
            </p>
          </div>

          {/* Logo Loop: Tech Stacks & Tools */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary">Tech Stacks & Tools</h3>
              <p className="text-sm text-light-secondary dark:text-dark-secondary">Game engines, frameworks, and design tools we use</p>
            </div>

            {/* Row 1 */}
            <LogoLoop speed={24}>
              <div className="logo-pill">
                <img src="/gamecom.png" alt="GameCom" className="logo-img dark:hidden" />
                <img src="/gcwhite.png" alt="GameCom" className="logo-img hidden dark:block" />
                <span className="logo-label">GameCom</span>
              </div>
              <div className="logo-pill"><span className="logo-label">Unity</span></div>
              <div className="logo-pill"><span className="logo-label">Unreal Engine</span></div>
              <div className="logo-pill"><span className="logo-label">Godot</span></div>
              <div className="logo-pill"><span className="logo-label">Blender</span></div>
              <div className="logo-pill"><span className="logo-label">C#</span></div>
              <div className="logo-pill"><span className="logo-label">C++</span></div>
              <div className="logo-pill"><span className="logo-label">Python</span></div>
              <div className="logo-pill"><img src="/vite.svg" alt="Vite" className="logo-img" /><span className="logo-label">Vite</span></div>
              <div className="logo-pill"><img src="/src/assets/react.svg" alt="React" className="logo-img" /><span className="logo-label">React</span></div>
              <div className="logo-pill"><span className="logo-label">Tailwind CSS</span></div>
              <div className="logo-pill"><span className="logo-label">Three.js</span></div>
              <div className="logo-pill"><span className="logo-label">TypeScript</span></div>
            </LogoLoop>

            {/* Row 2 (reverse) */}
            <LogoLoop speed={28} direction="reverse">
              <div className="logo-pill"><span className="logo-label">Node.js</span></div>
              <div className="logo-pill"><span className="logo-label">Express</span></div>
              <div className="logo-pill"><span className="logo-label">Git</span></div>
              <div className="logo-pill"><span className="logo-label">GitHub</span></div>
              <div className="logo-pill"><span className="logo-label">VS Code</span></div>
              <div className="logo-pill"><span className="logo-label">Figma</span></div>
              <div className="logo-pill"><span className="logo-label">Photoshop</span></div>
              <div className="logo-pill"><span className="logo-label">Illustrator</span></div>
              <div className="logo-pill"><span className="logo-label">After Effects</span></div>
              <div className="logo-pill"><span className="logo-label">MongoDB</span></div>
              <div className="logo-pill"><span className="logo-label">Prisma</span></div>
              <div className="logo-pill"><span className="logo-label">Socket.IO</span></div>
            </LogoLoop>
          </div>

          {/* Enhanced Domain Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {domains.map((domain) => {
              const DomainIcon = domain.icon
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomain(domain.id)}
                  className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 border-2 ${
                    activeDomain === domain.id
                      ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/25 scale-105"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${domain.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <DomainIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-light-primary dark:text-dark-primary">{domain.name}</span>
                  </div>
                  {activeDomain === domain.id && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 -z-10 animate-pulse"></div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Enhanced Domain Content */}
          {currentDomain && (
            <div className="max-w-6xl mx-auto">
              {/* Domain Header with animated border */}
              <div className="relative glass rounded-3xl p-10 mb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentDomain.color} flex items-center justify-center shadow-xl`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-2">{currentDomain.name}</h2>
                      <p className="text-xl text-muted-foreground">{currentDomain.description}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-light-secondary dark:text-dark-secondary">{currentDomain.fullDescription}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Skills & Learning Path */}
                <div className="space-y-8">
                  <div className="relative glass rounded-2xl p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      Key Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {currentDomain.skills.map((skill, index) => (
                        <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl px-4 py-3 text-sm border border-purple-200/50 dark:border-white/10 hover:scale-105 transition-transform duration-200">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative glass rounded-2xl p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-blue-500" />
                      Learning Path
                    </h3>
                    <div className="space-y-4">
                      {currentDomain.learningPath.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl border border-blue-200/50 dark:border-white/10">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-sm leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Projects & Team */}
                <div className="space-y-8">
                  <div className="relative glass rounded-2xl p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Zap className="w-6 h-6 text-green-500" />
                      Current Projects
                    </h3>
                    <div className="space-y-4">
                      {currentDomain.projects.map((project, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-xl border border-green-200/50 dark:border-white/10 hover:scale-105 transition-transform duration-200">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                          <span className="text-sm font-medium">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative glass rounded-2xl p-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Users className="w-6 h-6 text-pink-500" />
                      Team Members
                    </h3>
                    <div className="space-y-4">
                      {currentDomain.members.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-500/5 to-rose-500/5 rounded-xl border border-pink-200/50 dark:border-white/10 hover:bg-pink-500/10 dark:hover:bg-pink-500/10 transition-colors cursor-pointer group"
                          onClick={() => window.open(member.linkedin, "_blank")}
                        >
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-14 h-14 rounded-xl object-cover cursor-pointer hover:ring-2 hover:ring-pink-500 transition-all group-hover:scale-110"
                          />
                          <div>
                            <h4 className="font-semibold text-light-primary dark:text-dark-primary">{member.name}</h4>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
