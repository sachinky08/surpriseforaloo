"use client";

import Aloo1 from "../aloo/Aloo1.jpg";
import Aloo2 from "../aloo/Aloo2.jpg";
import Aloo3 from "../aloo/Aloo3.jpg";
import Aloo4 from "../aloo/Aloo4.jpg";
import Aloo15 from "../aloo/Aloo15.jpg";
import Aloo16 from "../aloo/Aloo16.jpg";
import Aloo17 from "../aloo/Aloo17.jpg";
import Aloo18 from "../aloo/Aloo18.jpg";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./surprise.css";

export default function SurprisePage() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(true);
  const [photosLoaded, setPhotosLoaded] = useState(false);

  const photos = [Aloo1, Aloo2, Aloo3, Aloo4, Aloo15, Aloo16, Aloo17,Aloo18];

  useEffect(() => {
    if (!showAlert) {
      setTimeout(() => setPhotosLoaded(true), 500);
    }
  }, [showAlert]);

  return (
    <div className="surprise-container">
      {showAlert && (
        <div className="birthday-alert">
          <div className="alert-content">
            <h1 className="alert-title">
              🎉 Happy Birthday, My Beautiful Angel! 🎉
            </h1>
            <p className="alert-text">
              Today marks another year of your incredible existence, and I
              couldn't be more grateful to celebrate this special day with you.
              You bring magic into every moment!
            </p>
            <button
              className="alert-button"
              onClick={() => setShowAlert(false)}
            >
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
          <p className="photos-subtitle">
            Each moment captured is a treasure in my heart
          </p>

          <div className="photos-grid">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`photo-card ${photosLoaded ? "loaded" : ""}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={photo.src}
                  alt={`Beautiful Memory ${index + 1}`}
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <p className="overlay-text">Beautiful Memory #{index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="navigation-buttons">
            <button
              className="nav-button"
              onClick={() => router.push("/timeline")}
            >
              Our Love Story →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
