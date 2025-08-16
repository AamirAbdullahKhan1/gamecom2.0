"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"


export default function DomainsSection({ scrollY }) {
  const domains = [
    {
      name: "Technical",
      icon: "💻",
      description: "Dive deep into programming, software development, and cutting-edge technologies",
      skills: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Game Development",
      icon: "🎮",
      description: "Create immersive gaming experiences using modern game engines and frameworks",
      skills: ["Unity", "Unreal Engine", "Game Design", "3D Modeling"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Design",
      icon: "🎨",
      description: "Craft beautiful user experiences and stunning visual designs",
      skills: ["UI/UX Design", "Graphic Design", "Animation", "Branding"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Media",
      icon: "📸",
      description: "Tell compelling stories through video, photography, and digital content",
      skills: ["Video Editing", "Photography", "Content Creation", "Social Media"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Public Relations",
      icon: "📢",
      description: "Build communities, manage events, and create meaningful connections",
      skills: ["Event Management", "Community Building", "Marketing", "Communications"],
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary-light dark:text-gradient-primary-dark">
            Our Domains
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto">
            Five specialized domains where passion meets expertise. Choose your path and master your craft.
          </p>
        </div>

        {/* Domains grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {domains.map((domain, index) => (
            <Card
              key={domain.name}
              className="group p-8 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                transform: `translateY(${scrollY * 0.05 * (index % 2 === 0 ? 1 : -1)}px)`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Domain icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${domain.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-2xl">{domain.icon}</span>
              </div>

              {/* Domain name */}
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {domain.name}
              </h3>

              {/* Description */}
              <p className="text-light-secondary dark:text-dark-secondary mb-6 leading-relaxed">{domain.description}</p>

              {/* Skills */}
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-light-secondary dark:bg-white/10 text-light-primary dark:text-gray-300 text-sm rounded-full backdrop-blur-sm border border-light dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn more button */}
              <Button
                variant="outline"
                className={`w-full border-2 bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent border-current hover:bg-current hover:text-white transition-all duration-300`}
                onClick={() => (window.location.href = "/domains")} // Navigate to domains page on button click
              >
                Explore {domain.name}
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4">Ready to Choose Your Domain?</h3>
            <p className="text-light-secondary dark:text-dark-secondary mb-6 max-w-2xl">
              Each domain offers unique opportunities for growth and learning. Join us and discover where your passion
              lies!
            </p>
            <Button className="gradient-primary-light dark:gradient-primary-dark hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Join a Domain
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
