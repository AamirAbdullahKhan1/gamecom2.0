"use client"

import { useState } from "react"
import { Card } from "./ui/card"

export default function GallerySection({ scrollY }) {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder gallery images - replace with actual event photos
  const galleryImages = [
    {
      src: "/gamecom-game-night.png",
      alt: "Game Night Event",
      title: "Friday Game Night",
      description: "Weekly gaming sessions bringing the community together",
    },
    {
      src: "/gamecom-workshop.png",
      alt: "Workshop Event",
      title: "Game Dev Workshop",
      description: "Hands-on learning sessions for aspiring developers",
    },
    {
      src: "/gamecom-team-meeting.png",
      alt: "Team Meeting",
      title: "Team Collaboration",
      description: "Domain leads planning exciting new initiatives",
    },
    {
      src: "/gamecom-design-showcase.png",
      alt: "Design Showcase",
      title: "Design Showcase",
      description: "Showcasing amazing creative work from our design domain",
    },
    {
      src: "/gamecom-tech-presentation.png",
      alt: "Tech Presentation",
      title: "Tech Talk",
      description: "Technical domain sharing knowledge and innovations",
    },
    {
      src: "/gamecom-community-celebration.png",
      alt: "Community Event",
      title: "Community Celebration",
      description: "Celebrating milestones and achievements together",
    },
  ]

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Capturing moments of learning, creativity, and community spirit at GameCom
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden glass hover:glass transition-all duration-500 hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/20 animate-fade-in-up"
              style={{
                transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)}px)`,
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h4 className="font-bold text-lg mb-1 drop-shadow-lg">{image.title}</h4>
                  <p className="text-sm text-gray-200 drop-shadow-md">{image.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 dark:border-white/20 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10+</div>
            <div className="text-gray-700 dark:text-gray-300">Events Hosted</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 dark:border-white/20 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
            <div className="text-gray-700 dark:text-gray-300">Game Nights</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 dark:border-white/20 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
            <div className="text-gray-700 dark:text-gray-300">Memories Created</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 dark:border-white/20 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">∞</div>
            <div className="text-gray-700 dark:text-gray-300">Fun Moments</div>
          </Card>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
