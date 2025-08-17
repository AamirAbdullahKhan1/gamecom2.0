"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Camera, Heart, Eye, Play, Star, Sparkles, Trophy, Award, Gamepad2 } from "lucide-react"

export default function GallerySection({ scrollY }) {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder gallery images - replace with actual event photos
  const galleryImages = [
    {
      src: "/gamecom-game-night.png",
      alt: "Game Night Event",
      title: "Friday Game Night",
      description: "Weekly gaming sessions bringing the community together",
      category: "Events",
      likes: 156,
      views: 1200,
      featured: true,
    },
    {
      src: "/gamecom-workshop.png",
      alt: "Workshop Event",
      title: "Game Dev Workshop",
      description: "Hands-on learning sessions for aspiring developers",
      category: "Workshops",
      likes: 89,
      views: 800,
      featured: false,
    },
    {
      src: "/gamecom-team-meeting.png",
      alt: "Team Meeting",
      title: "Team Collaboration",
      description: "Domain leads planning exciting new initiatives",
      category: "Team",
      likes: 234,
      views: 1500,
      featured: true,
    },
    {
      src: "/gamecom-design-showcase.png",
      alt: "Design Showcase",
      title: "Design Showcase",
      description: "Showcasing amazing creative work from our design domain",
      category: "Showcase",
      likes: 178,
      views: 1100,
      featured: false,
    },
    {
      src: "/gamecom-tech-presentation.png",
      alt: "Tech Presentation",
      title: "Tech Talk",
      description: "Technical domain sharing knowledge and innovations",
      category: "Tech",
      likes: 145,
      views: 950,
      featured: true,
    },
    {
      src: "/gamecom-community-celebration.png",
      alt: "Community Event",
      title: "Community Celebration",
      description: "Celebrating milestones and achievements together",
      category: "Community",
      likes: 267,
      views: 1800,
      featured: true,
    },
  ]

  return (
    <section id="gallery" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        {/* Gaming and Tech themed floating elements */}
        <div className="absolute top-1/4 right-1/4 text-4xl opacity-20 animate-float text-light-primary dark:text-dark-primary">📸</div>
        <div
          className="absolute bottom-1/3 left-1/4 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "2s" }}
        >
          🎬
        </div>
        <div
          className="absolute top-1/2 left-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "4s" }}
        >
          ✨
        </div>
        <div
          className="absolute top-1/3 right-1/6 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "6s" }}
        >
          🎪
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "8s" }}
        >
          🎭
        </div>
        <div
          className="absolute top-1/6 left-1/3 text-3xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "10s" }}
        >
          🎨
        </div>
        <div
          className="absolute bottom-1/6 left-1/6 text-2xl opacity-20 animate-float text-light-primary dark:text-dark-primary"
          style={{ animationDelay: "12s" }}
        >
          🎯
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
            <Camera className="w-6 h-6 text-purple-500" />
            <span className="text-sm font-semibold text-light-primary dark:text-dark-primary uppercase tracking-wider">Our Moments</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-primary-light dark:text-gradient-primary-dark animate-fade-in-up">
            Gallery
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Capturing moments of learning, creativity, and community spirit at GameCom. Every image tells a story of passion, innovation, and friendship.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className={`group overflow-hidden card-light dark:card-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl animate-fade-in-up ${
                image.featured ? 'ring-2 ring-amber-400' : ''
              }`}
              style={{
                transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)}px)`,
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Featured badge */}
              {image.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white text-xs font-semibold shadow-lg">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="px-3 py-1 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold shadow-lg">
                  {image.category}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 group-hover:brightness-110"
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h4 className="font-bold text-lg mb-2 drop-shadow-lg flex items-center gap-2">
                    {image.title}
                    {image.featured && <Sparkles className="w-4 h-4 text-amber-400" />}
                  </h4>
                  <p className="text-sm text-gray-200 drop-shadow-md mb-3">{image.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-red-400" />
                      <span>{image.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-blue-400" />
                      <span>{image.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="group p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-2">10+</div>
            <div className="text-light-secondary dark:text-dark-secondary font-medium">Events Hosted</div>
          </Card>
          
          <Card className="group p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl border border-blue-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-2">50+</div>
            <div className="text-light-secondary dark:text-dark-secondary font-medium">Game Nights</div>
          </Card>
          
          <Card className="group p-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 dark:from-green-500/10 dark:to-blue-500/10 backdrop-blur-xl border border-green-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-2">100+</div>
            <div className="text-light-secondary dark:text-dark-secondary font-medium">Memories Created</div>
          </Card>
          
          <Card className="group p-8 bg-gradient-to-br from-pink-500/20 to-purple-500/20 dark:from-pink-500/10 dark:to-purple-500/10 backdrop-blur-xl border border-pink-200 dark:border-white/10 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-2">∞</div>
            <div className="text-light-secondary dark:text-dark-secondary font-medium">Fun Moments</div>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="inline-block p-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200 dark:border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary">Share Your Moments</h3>
              <Camera className="w-8 h-8 text-pink-500" />
            </div>
            <p className="text-light-secondary dark:text-dark-secondary mb-6">
              Have amazing photos from GameCom events? Share them with our community and be featured in our gallery!
            </p>
            <button className="gradient-primary-light dark:gradient-primary-dark hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Submit Photos
            </button>
          </Card>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 hover:scale-110"
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
