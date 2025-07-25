"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./favorites.css";

export default function FavoritesPage() {
  const router = useRouter();
  const [photosLoaded, setPhotosLoaded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const favoritePhotos = [
    {
      src: "/aloo/Aloo5.jpg",
      caption: "I've kissed this photo more times than I ever got to kiss you.",
      mood: "joy",
    },
    {
      src: "/aloo/Aloo6.jpg",
      caption:
        "You looked so beautiful that day even though I wasn't there, I can almost feel the moment. The colors, your calm smile",
      mood: "happiness",
    },
    {
      src: "/aloo/Aloo7.jpg",
      caption:
        "This kurti looks so good on you, it's like it was made for you, And uspe victoria piche, Chaar chaand",
      mood: "wonder",
    },
    {
      src: "/aloo/Aloo8.jpg",
      caption:
        "I've mentioned the day you posted this pic that you look so graceful in here, phone me ghus ke kiss karne ka man kar raha tha",
      mood: "love",
    },
    {
      src: "/aloo/Aloo9.jpg",
      caption: "Aloo kahi ki, kitni pyari ho yaar, I can't even describe it.",
      mood: "romance",
    },
    {
      src: "/aloo/Aloo10.jpg",
      caption:
        "Someone commented 'Pink Saraswati' on this post and she was nothing wrong, glad that pic was clicked by me. Love you aloo",
      mood: "peace",
    },
    {
      src: "/aloo/Aloo11.jpg",
      caption:
        "The day when you became a child, I felt like recording each and every moment of my Aloo.",
      mood: "togetherness",
    },
    {
      src: "/aloo/Aloo12.jpg",
      caption:
        "There's a folder named 'Memories' in my phone, this was the first photo I added to it, and it still makes me smile every time I see it.",
      mood: "nostalgia",
    },
    {
      src: "/aloo/Aloo13.jpg",
      caption:
        "I kissed you on your aloo jaise cheeks and you kissed me back. Itne butterflies kabhi nahi aaye thay. Also I hugged you for the first time, and it felt like home.",
      mood: "eternity",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setPhotosLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handlePhotoClick = (photo, index) => {
    if (window.innerWidth <= 768) {
      // On mobile, toggle caption visibility
      setActivePhotoIndex(activePhotoIndex === index ? null : index);
    } else {
      // On desktop, open modal
      setSelectedPhoto(photo);
    }
  };

  const handlePhotoDoubleClick = (photo) => {
    setSelectedPhoto(photo);
  };

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
        <h2 className="header-text">
          Every picture tells a story of how much you mean to me, each moment a
          treasure in my heart
        </h2>
        <p className="grid-title">
          <span className="desktop-instruction">
            Each photo wants to tell you something, hover to see the message
          </span>
          <span className="mobile-instruction">
            Each photo wants to tell you something, tap to see the message
          </span>
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="photos-gallery">
        {favoritePhotos.map((photo, index) => (
          <div
            key={index}
            className={`photo-item ${photosLoaded ? "loaded" : ""} ${
              activePhotoIndex === index ? "active-mobile" : ""
            }`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div
              className="photo-frame"
              onClick={() => handlePhotoClick(photo, index)}
              onDoubleClick={() => handlePhotoDoubleClick(photo)}
            >
              <img
                src={photo.src || "/placeholder.svg"}
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
        <button
          className="nav-button"
          onClick={() => router.push("/confession")}
        >
          Some small confessions →
        </button>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content">
            <img
              src={selectedPhoto.src || "/placeholder.svg"}
              alt="Selected memory"
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="modal-caption">
              <p className="modal-caption-text">{selectedPhoto.caption}</p>
            </div>
            <button
              className="modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
