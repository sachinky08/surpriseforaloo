"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./surprise.css";

export default function SurprisePage() {
  const router = useRouter();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const photoMemories = [
    {
      src: "/aloo/Aloo1.jpg",
      caption: "I promise I'll always love this kiddo",
    },
    {
      src: "/aloo/Aloo2.jpg",
      caption: "Heheee",
    },
    {
      src: "/aloo/Aloo3.jpg",
      caption:
        "The first pic jisme we both are there.I used to see this pic whenever I missed you during lockdown",
    },
    {
      src: "/aloo/Aloo4.jpg",
      caption: "Meri pyari Aloo😚",
    },
    {
      src: "/aloo/Aloo15.jpg",
      caption: "You had no idea how cute you looked here",
    },
    {
      src: "/aloo/Aloo16.jpg",
      caption:
        "Thank you so much for this, the first flower I recieved from you.",
    },
    {
      src: "/aloo/Aloo17.jpg",
      caption:
        "This was your first photo I saw after July 15th, couldn't stop myself from smiling and talking a screenshot🥹",
    },
    { src: "/aloo/Aloo18.jpg",
     caption: "Ekbar fir kabhi ye hairstyle me photo bhejo na yaar Aloo" 
    },
  ];

  useEffect(() => {
    setTimeout(() => setImagesLoaded(true), 300);
  }, []);

  return (
    <div className="surprise-wrapper">
      <section className="intro-section">
        <h1 className="main-heading">🎉 Happy Birthday, Paramita 🎉</h1>
        <p className="birthday-message">
          I didn’t know how, when or why — but you slowly became a part of me.
          From silly chats to quiet thoughts, you've stayed on my mind longer
          than you’d believe. I never told you enough, but I genuinely like you.
          You’re beautiful — inside and out — and your presence has made my days
          warmer. On your birthday, I just want to say — you deserve the kind of
          happiness you never have to question. Happy Birthday again, Aloo.
          You're unforgettable.I can never love anybody like you. 
        </p>
      </section>

      <section className="photos-grid-section">
        <h2 className="grid-title">Your Little Moments, My Big Memories 💛<br/>Tap to see small messages</h2>

        <div className="photo-grid">
          {photoMemories.map((photo, index) => (
            <div
              className={`photo-card ${imagesLoaded ? "loaded" : ""}`}
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={photo.src}
                alt={`memory-${index}`}
                className="photo-img"
              />
              <div className="caption-overlay">
                <p>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => router.push("/timeline")}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
