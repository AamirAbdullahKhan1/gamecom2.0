"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Users, Trophy, Code, Palette, Camera, Megaphone, Gamepad2 } from "lucide-react"

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
      {/* Background grid pattern */}
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

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Domains
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the five specialized domains that make GameCom the premier gaming club at SRM University
            </p>
          </div>

          {/* Domain Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {domains.map((domain) => {
              const DomainIcon = domain.icon
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomain(domain.id)}
                  className={`glass rounded-xl px-6 py-3 flex items-center gap-3 transition-all duration-300 ${
                    activeDomain === domain.id
                      ? "ring-2 ring-blue-500 bg-blue-500/10"
                      : "hover:bg-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  <DomainIcon className="w-5 h-5" />
                  <span className="font-medium">{domain.name}</span>
                </button>
              )
            })}
          </div>

          {/* Domain Content */}
          {currentDomain && (
            <div className="max-w-6xl mx-auto">
              {/* Domain Header */}
              <div className="glass rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentDomain.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{currentDomain.name}</h2>
                    <p className="text-muted-foreground">{currentDomain.description}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{currentDomain.fullDescription}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Skills & Learning Path */}
                <div className="space-y-8">
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      Key Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {currentDomain.skills.map((skill, index) => (
                        <div key={index} className="bg-primary/10 rounded-lg px-3 py-2 text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Learning Path</h3>
                    <div className="space-y-3">
                      {currentDomain.learningPath.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Projects & Team */}
                <div className="space-y-8">
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Current Projects</h3>
                    <div className="space-y-3">
                      {currentDomain.projects.map((project, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                          <span className="text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      Team Members
                    </h3>
                    <div className="space-y-4">
                      {currentDomain.members.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                        >
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-12 h-12 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                            onClick={() => window.open(member.linkedin, "_blank")}
                          />
                          <div>
                            <h4 className="font-medium">{member.name}</h4>
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
    </div>
  )
}
