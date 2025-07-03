"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./favorites.css";

export default function FavoritesPage() {
  const router = useRouter();
  const [photosLoaded, setPhotosLoaded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const favoritePhotos = [
    {
      src: "/aloo/Aloo5.jpg",
      caption: "Your beautiful smile that lights up my entire world",
      mood: "joy",
    },
    {
      src: "/aloo/Aloo6.jpg",
      caption: "The way you laugh at my silly jokes makes everything perfect",
      mood: "happiness",
    },
    {
      src: "/aloo/Aloo7.jpg",
      caption: "Your eyes that hold all the stars in the universe",
      mood: "wonder",
    },
    {
      src: "/aloo/Aloo8.jpg",
      caption: "The moment you said yes to forever with me",
      mood: "love",
    },
    {
      src: "/aloo/Aloo9.jpg",
      caption: "Dancing in the rain together, pure magic",
      mood: "romance",
    },
    {
      src: "/aloo/Aloo10.jpg",
      caption: "Your peaceful face while sleeping, my guardian angel",
      mood: "peace",
    },
    {
      src: "/aloo/Aloo11.jpg",
      caption: "Holding hands, walking nowhere, just together",
      mood: "togetherness",
    },
    {
      src: "/aloo/Aloo12.jpg",
      caption: "Every moment with you is a beautiful memory",
      mood: "nostalgia",
    },
    {
      src: "/aloo/Aloo13.jpg",
      caption: "The way you look at me makes me feel infinite",
      mood: "eternity",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setPhotosLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="favorites-container">
      {/* Floating aura elements */}
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

      {/* Header */}
      <div className="favorites-header">
        <h1 className="header-title">My Favorite Aloo</h1>
        <p className="header-text">
          Every picture tells a story of how much you mean to me, each moment a
          treasure in my heart
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="photos-gallery">
        {favoritePhotos.map((photo, index) => (
          <div
            key={index}
            className={`photo-item ${photosLoaded ? "loaded" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div
              className="photo-frame"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={`Favorite moment ${index + 1}`}
                className="photo-image"
              />
              <div className="photo-caption">
                <p className="caption-text">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="navigation-section">
        <button className="nav-button" onClick={() => router.push("/confession")}>
          Some small confessions →
        </button>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <img
            src={selectedPhoto.src}
            alt="Selected memory"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
