"use client";

import { useState, useEffect } from "react";
import "./carousel.css";

export default function CarouselPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const carouselImages = [
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Our First Date ✨",
      description: "The beginning of forever",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Laughing Together 😄",
      description: "Your laughter is my favorite sound",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Sunset Moments 🌅",
      description: "Golden hours with you",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Dancing in the Rain 💃",
      description: "Pure magic in motion",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Cozy Evenings 🕯️",
      description: "Home is wherever you are",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Adventure Time 🗺️",
      description: "Exploring the world together",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Peaceful Mornings ☀️",
      description: "Starting each day with love",
    },
    {
      src: "/placeholder.svg?height=700&width=900",
      title: "Forever Moments 💕",
      description: "Every second is precious with you",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, carouselImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
    setShowControls(true);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
    setIsAutoPlaying(false);
    setShowControls(true);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
    setShowControls(true);
  };

  return (
    <div className="carousel-container">
      <div className="cosmic-background">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`star star-${i % 4}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          >
            {["⭐", "✨", "💫", "🌟"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="carousel-header">
        <h1 className="header-title">Our Beautiful Journey</h1>
        <p className="header-text">
          Every picture is a memory, every memory is a treasure that lives
          forever in my heart
        </p>
      </div>

      <div
        className={`carousel-wrapper ${showControls ? "show-controls" : ""}`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setTimeout(() => setShowControls(false), 2000)}
      >
        <button className="carousel-btn prev-btn" onClick={prevImage}>
          ❮
        </button>

        <div className="carousel-main">
          <div className="image-container">
            <img
              src={carouselImages[currentImage].src || "/placeholder.svg"}
              alt={carouselImages[currentImage].title}
              className="carousel-image"
            />
            <div className="image-overlay">
              <h3 className="overlay-title">
                {carouselImages[currentImage].title}
              </h3>
              <p className="overlay-description">
                {carouselImages[currentImage].description}
              </p>
            </div>
          </div>
        </div>

        <button className="carousel-btn next-btn" onClick={nextImage}>
          ❯
        </button>
      </div>

      <div
        className={`carousel-indicators ${showControls ? "show-controls" : ""}`}
      >
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>

      <div
        className={`carousel-counter ${showControls ? "show-controls" : ""}`}
      >
        {currentImage + 1} / {carouselImages.length}
      </div>

      <div className="final-message">
        <h2 className="final-title">
          Thank you for being the most beautiful part of my life
        </h2>
        <p className="final-text">
          Happy Birthday, my love! Every day with you is a celebration 💕
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={() => (window.location.href = "/surprise")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            backgroundColor: "#ff6699",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff3366")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6699")}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
