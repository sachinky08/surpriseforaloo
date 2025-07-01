"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import "./favorites.css"

export default function FavoritesPage() {
  const router = useRouter()
  const [photosLoaded, setPhotosLoaded] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const favoritePhotos = [
    {
      src: "/placeholder.svg?height=500&width=500",
      caption: "Your beautiful smile that lights up my entire world",
      mood: "joy",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      caption: "The way you laugh at my silly jokes makes everything perfect",
      mood: "happiness",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      caption: "Your eyes that hold all the stars in the universe",
      mood: "wonder",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      caption: "The moment you said yes to forever with me",
      mood: "love",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      caption: "Dancing in the rain together, pure magic",
      mood: "romance",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      caption: "Your peaceful face while sleeping, my guardian angel",
      mood: "peace",
    },
  ]

  useEffect(() => {
    setTimeout(() => setPhotosLoaded(true), 800)
  }, [])

  return (
    <div className="favorites-container">
      <div className="magical-aura">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`aura-element aura-element-${i % 5}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="favorites-header">
        <h1 className="header-title">My Favorite Aloo</h1>
        <p className="header-text">
          Every picture tells a story of how much you mean to me, each moment a treasure in my heart
        </p>
      </div>

      <div className="photos-gallery">
        {favoritePhotos.map((photo, index) => (
          <div
            key={index}
            className={`photo-item ${photosLoaded ? "loaded" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="photo-frame" onClick={() => setSelectedPhoto(photo)}>
              <img src={photo.src || "/placeholder.svg"} alt={`Favorite moment ${index + 1}`} className="photo-image" />
              <div className="photo-caption">
                <p className="caption-text">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-section">
        <button className="nav-button" onClick={() => router.push("/carousel")}>
          View Magical Carousel →
        </button>
      </div>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <img
            src={selectedPhoto.src || "/placeholder.svg"}
            alt="Selected memory"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
