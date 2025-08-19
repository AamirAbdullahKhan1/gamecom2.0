"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarDays, Clock3, Monitor, Palette, Gamepad2, Sparkles } from "lucide-react"

export default function EventsSection({ scrollY }) {
  const upcomingEvents = [
    {
      title: "Weekly Game Night",
      date: "Every Friday",
      time: "7:00 PM - 10:00 PM",
      description: "Join us for an evening of competitive gaming, fun challenges, and community bonding.",
      type: "Recurring",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Game Development Workshop",
      date: "Coming Soon",
      time: "TBA",
      description: "Learn the fundamentals of game development with Unity and create your first game.",
      type: "Workshop",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Design Thinking Session",
      date: "Coming Soon",
      time: "TBA",
      description: "Explore UI/UX design principles and create stunning user interfaces.",
      type: "Workshop",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const contentSchedule = [
    {
      day: "Monday",
      content: "TechScope",
      description: "Dive into the latest technology trends and innovations",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      day: "Wednesday",
      content: "Glitch & Aesthetics",
      description: "Explore digital art, design trends, and visual creativity",
      icon: Palette,
      gradient: "from-pink-500 to-purple-500",
    },
    {
      day: "Friday",
      content: "Behind the Pixel",
      description: "Get insights into game development and behind-the-scenes content",
      icon: Gamepad2,
      gradient: "from-green-500 to-blue-500",
    },
  ]

  const [sparkleIndex, setSparkleIndex] = useState(null)

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary-light dark:text-gradient-primary-dark">
            Events & Activities
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto">
            Stay engaged with our regular events, workshops, and content that keeps the community thriving
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.title}
                className="group p-6 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105"
                style={{
                  transform: `translateY(${scrollY * 0.03 * (index % 2 === 0 ? 1 : -1)}px)`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Event type badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${event.gradient} text-white text-sm font-semibold rounded-full`}
                  >
                    {event.type}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {event.title}
                </h4>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-light-secondary dark:text-dark-secondary">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-light-secondary dark:text-dark-secondary">
                    <Clock3 className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <p className="text-light-secondary dark:text-dark-secondary mb-6 leading-relaxed">{event.description}</p>

                <Button
                  variant="outline"
                  className="w-full btn-outline-light dark:btn-outline-dark transition-all duration-300"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Schedule */}
        <div>
          <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-8 text-center">Weekly Content Schedule</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contentSchedule.map((item, index) => {
              const IconComp = item.icon
              return (
                <Card
                  key={item.day}
                  className="group relative p-8 card-light dark:card-dark hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 text-center"
                  style={{
                    transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)}px)`,
                    animationDelay: `${index * 100}ms`,
                  }}
                  onDoubleClick={() => {
                    setSparkleIndex(index)
                    setTimeout(() => setSparkleIndex(null), 1500)
                  }}
                  title="Hint: double-click for a surprise"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComp className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">{item.day}</h4>
                  <h5 className="text-lg font-semibold text-gradient-primary-light dark:text-gradient-primary-dark mb-4">
                    {item.content}
                  </h5>
                  <p className="text-light-secondary dark:text-dark-secondary leading-relaxed">{item.description}</p>

                  {sparkleIndex === index && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>

        {/* Follow us CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-4">Stay Connected</h3>
            <p className="text-light-secondary dark:text-dark-secondary mb-6 max-w-2xl">
              Follow us on Instagram to never miss our weekly content and stay updated with all GameCom activities!
            </p>
            <Button className="gradient-primary-light dark:gradient-primary-dark hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Follow @GameCom_SRM
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
