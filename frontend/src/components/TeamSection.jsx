"use client"

import { Card } from "./ui/card"
import ProfileCard from "./effects/ProfileCard"
import TeamCard from "./effects/TeamCard"
import { Crown, Star, Shield, Zap, Code, Palette, Megaphone, Gamepad2, Camera, Users, Trophy, Award, Target, Sparkles } from "lucide-react"

export default function TeamSection({ scrollY }) {
  const coreTeam = [
    {
      role: "President",
      name: "Aamir Abdullah Khan",
      image: "https://live.staticflickr.com/65535/54644987566_28480da066_z.jpg",
      linkedin: "https://www.linkedin.com/in/aamir-abdullah-khan",
      instagram: "https://www.instagram.com/_.aamir._.khan._/",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
      icon: Crown,
      description: "Leading GameCom's vision and strategic direction",
      special: true,
      achievements: ["2+ Years Experience", "10+ Events Led", "Strategic Visionary"],
    },
    {
      role: "Vice-President",
      name: "J Swethaa",
      image: "https://imgur.com/mpqlDzy.jpg",
      imageOffsetY: -55,
      linkedin: "https://www.linkedin.com/in/j-s-4819682b0/",
      instagram: "https://www.instagram.com/j_swethaa/",
      gradient: "from-blue-500 via-purple-500 to-indigo-600",
      icon: Star,
      description: "Supporting leadership and driving innovation",
      special: true,
      achievements: ["Innovation Expert", "Team Builder", "Problem Solver"],
    },
    {
      role: "Director",
      name: "Adityanshu Padhy",
      image: "https://imgur.com/b2h3VU4.jpg",
      imageOffsetY: -55,
      linkedin: "https://www.linkedin.com/in/adityanshu-padhy-672945293/",
      instagram: "https://www.instagram.com/_.adityanshu._/",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      icon: Shield,
      description: "Overseeing operations and team coordination",
      special: true,
      achievements: ["Operations Master", "Coordination Expert", "Process Optimizer"],
    },
    {
      role: "Administrator",
      name: "Rajeev Suri Anand",
      image: "https://imgur.com/tCkd7Jw.jpg",
      imageOffsetY: -5,
      linkedin: "https://www.linkedin.com/in/rajeev-suri-anand-73b3a3296/",
      instagram: "https://www.instagram.com/the_virus2204/",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      icon: Zap,
      description: "Managing resources and organizational excellence",
      special: true,
      achievements: ["Resource Manager", "Excellence Driver", "Organizational Expert"],
    },
    {
      role: "Creative Strategist",
      name: "Pravin Kumar V",
      image: "https://live.staticflickr.com/65535/54745051422_192f647649_z.jpg",
      imageOffsetY: 35,
      linkedin: "https://www.linkedin.com/in/pravin-kumar-v-0ab99a2b0",
      instagram: "https://www.instagram.com/prxv._tf",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      icon: Zap,
      description: "Shaping GameCom's creative direction, brand voice, and campaign strategy",
      special: true,
      achievements: ["Resource Manager", "Excellence Driver", "Organizational Expert"],
    },
  ]

  const domainLeads = [
    {
      role: "Technical Lead",
      name: "Kanishak Bishnoi",
      image: "/tech-lead-student.png",
      linkedin: "https://linkedin.com/in/vikram-singh-tech",
      gradient: "from-blue-600 to-cyan-500",
      icon: Code,
      domain: "Technical",
      expertise: ["Full Stack", "Game Dev", "AI/ML"],
    },
    {
      role: "Technical Co-Lead",
      name: "Pradeepa Jai",
      image: "/female-tech-developer.png",
      linkedin: "https://linkedin.com/in/ananya-gupta-tech",
      gradient: "from-blue-500 to-cyan-400",
      icon: Code,
      domain: "Technical",
      expertise: ["Mobile Dev", "Backend", "DevOps"],
    },
    {
      role: "Design Lead",
      name: "Abhinav Pillai",
      image: "/creative-designer-student.png",
      linkedin: "https://linkedin.com/in/karthik-menon-design",
      gradient: "from-pink-600 to-rose-500",
      icon: Palette,
      domain: "Design",
      expertise: ["UI/UX", "3D Design", "Branding"],
    },
    {
      role: "Design Co-Lead",
      name: "Rashmi Ganesh",
      image: "/female-ui-designer.png",
      linkedin: "https://linkedin.com/in/ishita-jain-design",
      gradient: "from-pink-500 to-rose-400",
      icon: Palette,
      domain: "Design",
      expertise: ["Graphic Design", "Animation", "Concept Art"],
    },
    {
      role: "PR Lead",
      name: "Varsha V",
      image: "/pr-marketing-student.png",
      linkedin: "https://linkedin.com/in/aditya-verma-pr",
      gradient: "from-orange-600 to-red-500",
      icon: Megaphone,
      domain: "Public Relations",
      expertise: ["Event Management", "Marketing", "Communications"],
    },
    {
      role: "Game Dev Lead",
      name: "Vansh Jain",
      image: "/placeholder-kn8ld.png",
      linkedin: "https://linkedin.com/in/rohan-das-gamedev",
      gradient: "from-purple-600 to-pink-500",
      icon: Gamepad2,
      domain: "Game Development",
      expertise: ["Unity", "Unreal", "Game Design"],
    },
    {
      role: "Game Dev Co-Lead",
      name: "Anshuman Behera",
      image: "/female-game-developer.png",
      linkedin: "https://linkedin.com/in/meera-nair-gamedev",
      gradient: "from-purple-500 to-pink-400",
      icon: Gamepad2,
      domain: "Game Development",
      expertise: ["Mobile Games", "VR/AR", "Game Mechanics"],
    },
    {
      role: "Head of Media",
      name: "A S Vignesh",
      image: "/media-photographer-student.png",
      linkedin: "https://linkedin.com/in/aryan-khanna-media",
      gradient: "from-green-600 to-emerald-500",
      icon: Camera,
      domain: "Media",
      expertise: ["Photography", "Video Editing", "Content Creation"],
    },
    {
      role: "Creative Video Grapher",
      name: "Hemantheswar Reddy",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "https://linkedin.com/in/kavya-iyer-media",
      gradient: "from-green-500 to-emerald-400",
      icon: Camera,
      domain: "Media",
      expertise: ["Cinematography", "Motion Graphics", "Live Streaming"],
    },
  ]

  return (
    <section id="team" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
        {/* Gaming and Tech themed floating elements */}
        <div className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-float text-light-primary dark:text-dark-primary">👑</div>
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
        <div
          className="absolute top-1/3 right-1/6 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "6s" }}
        >
          🎯
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "8s" }}
        >
          🚀
        </div>
        <div
          className="absolute top-1/6 left-1/3 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "10s" }}
        >
          💎
        </div>
        <div
          className="absolute bottom-1/6 left-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "12s" }}
        >
          ⭐
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 border-2 border-amber-500 rounded-full glass-light dark:glass-dark">
            <Crown className="w-6 h-6 text-amber-500" />
            <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">Leadership</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-primary-light dark:text-gradient-primary-dark animate-fade-in-up leading-[1.08] pb-3">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={member.role}
                className={`${member.name === "Pravin Kumar V" ? "md:col-span-2 flex justify-center" : ""} animate-fade-in-up`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <TeamCard
                  photo={member.image}
                  name={member.name}
                  role={member.role}
                  subtitle={member.description}
                  accent={index <= 1 ? "amber" : "indigo"}
                  size="lg"
                  variant="core"
                  imageOffsetY={member.imageOffsetY}
                  linkedinUrl={member.linkedin}
                  instagramUrl={member.instagram}
                  onClick={() => window.open(member.linkedin, "_blank")}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-4">Domain Leadership</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainLeads.map((member, index) => (
              <div key={member.role} className="animate-fade-in-up" style={{ animationDelay: `${(index + 4) * 80}ms` }}>
                <TeamCard
                  photo={member.image}
                  name={member.name}
                  role={`${member.role}`}
                  subtitle={`${member.domain} • ${member.expertise.slice(0,3).join(" • ")}`}
                  accent={"blue"}
                  size="md"
                  imageOffsetY={member.imageOffsetY}
                  linkedinUrl={member.linkedin}
                  instagramUrl={member.instagram}
                  onClick={() => window.open(member.linkedin, "_blank")}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="inline-block p-10 card-light dark:card-dark max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-blue-500" />
              <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary">Join Our Legendary Team</h3>
              <Trophy className="w-8 h-8 text-purple-500" />
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
