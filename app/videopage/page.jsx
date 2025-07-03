"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import "./videopage.css";

export default function VideoPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-page">
      <div className="background" />
      <div className="content">
        {/* Romantic heading section */}
        <div className="heading-section">
          <h1 className="main-heading">To My Aloo, with All My Heart 💌</h1>
          <p className="sub-text">
            Our story doesn’t need many words — Ek baat bolun tumhe record karna
            when you become a kid is my favorite pesha.
          </p>
        </div>
        {/* Controls */}
        <div className="controls">
          <button className="play-btn" onClick={togglePlayPause}>
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </div>
        {/* Video area */}
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video"
            src="/video.mp4"
            onClick={togglePlayPause}
            loop
            playsInline
          />
        </div>

        {/* ✅ Download button */}
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <a
            href="/video.mp4"
            download="my-special-video.mp4"
            className="continue-btn"
          >
            ⬇️ Download Video
          </a>
        </div>

        {/* Continue button */}
        <Link href="/surprise" className="continue-btn">
          Start again
        </Link>
      </div>
    </div>
  );
}
