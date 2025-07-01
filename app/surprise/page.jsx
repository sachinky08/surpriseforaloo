"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import "./surprise.css"

export default function SurprisePage() {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(true)
  const [photosLoaded, setPhotosLoaded] = useState(false)

  const photos = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ]

  useEffect(() => {
    if (!showAlert) {
      setTimeout(() => setPhotosLoaded(true), 500)
    }
  }, [showAlert])

  return (
    <div className="surprise-container">
      {showAlert && (
        <div className="birthday-alert">
          <div className="alert-content">
            <h1 className="alert-title">🎉 Happy Birthday, My Beautiful Angel! 🎉</h1>
            <p className="alert-text">
              Today marks another year of your incredible existence, and I couldn't be more grateful to celebrate this
              special day with you. You bring magic into every moment!
            </p>
            <button className="alert-button" onClick={() => setShowAlert(false)}>
              Continue to My Surprise
            </button>
          </div>
        </div>
      )}

      {!showAlert && (
        <div className="photos-section">
          <div className="magical-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`sparkle sparkle-${i % 4}`}>
                {["✨", "⭐", "💫", "🌟"][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>

          <h2 className="photos-title">Precious Memories of You</h2>
          <p className="photos-subtitle">Each moment captured is a treasure in my heart</p>

          <div className="photos-grid">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`photo-card ${photosLoaded ? "loaded" : ""}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img src={photo || "/placeholder.svg"} alt={`Beautiful Memory ${index + 1}`} className="photo-image" />
                <div className="photo-overlay">
                  <p className="overlay-text">Beautiful Memory #{index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="navigation-buttons">
            <button className="nav-button" onClick={() => router.push("/timeline")}>
              Our Love Story →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
