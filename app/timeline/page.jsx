"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./timeline.css"

export default function TimelinePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const timelineSteps = [
    {
      title: "Class 9 – First Spark ✨",
      content:
        "It was in the corridors of our school when I first noticed you. Your laugh echoed through the hallway, and something in my heart stirred. I didn't know then that this moment would change everything. You were just a classmate, but there was something magical about the way you carried yourself, the way you smiled at everyone with such genuine warmth.",
      icon: "💫",
    },
    {
      title: "The First Conversation 💭",
      content:
        "Remember that day when we were paired for the science project? I was nervous, my hands were shaking, but you made everything so easy. We talked for hours about everything and nothing. Your eyes lit up when you spoke about your dreams, and I found myself falling deeper into something I couldn't quite understand yet.",
      icon: "💝",
    },
    {
      title: "Friendship Blooms 🌸",
      content:
        "Days turned into weeks, and our friendship grew stronger. We shared secrets, dreams, and countless moments of laughter. You became my safe haven, the person I could be completely myself with. Every day at school became brighter because I knew I'd see your smile.",
      icon: "🌺",
    },
    {
      title: "The Realization 💡",
      content:
        "It hit me like a wave on a quiet evening. I was thinking about you, as I often did, when I realized that what I felt wasn't just friendship. It was love – pure, innocent, and overwhelming. You had become the most important person in my world without me even realizing when it happened.",
      icon: "💖",
    },
    {
      title: "Confession of Hearts 💕",
      content:
        "The day I told you how I felt was the scariest and most beautiful day of my life. My heart was racing, my voice was trembling, but when you smiled and said you felt the same way, the whole world seemed to light up. That was the beginning of our beautiful love story.",
      icon: "💗",
    },
    {
      title: "Growing Together 🌱",
      content:
        "Through all the ups and downs, the laughter and tears, the dreams and challenges, we've grown together. You've been my strength, my inspiration, and my greatest blessing. Every day with you has been a gift, and I can't imagine my life without you in it.",
      icon: "🌟",
    },
  ]

  const nextStep = () => {
    if (currentStep < timelineSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="timeline-container">
      <div className="cosmic-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`floating-element floating-element-${i}`}>
            {["💕", "💖", "💗", "💝", "💘", "💞"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="timeline-header">
        <h1 className="timeline-title">Our Magical Love Story</h1>
        <p className="timeline-subtitle">Every chapter written with love, every moment a precious memory</p>
      </div>

      <div className="timeline">
        {timelineSteps.map((step, index) => (
          <div key={index}>
            <div
              className={`timeline-item ${index <= currentStep ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">{step.icon}</div>
                <div className="timeline-dot"></div>
                {index < timelineSteps.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <h3 className="content-title">{step.title}</h3>
                <p className="content-text">{step.content}</p>
              </div>
            </div>

            {/* Show Next Chapter button right after the current visible step */}
            {index === currentStep && currentStep < timelineSteps.length - 1 && (
              <div className="next-button-container">
                <button className="next-button" onClick={nextStep}>
                  Next Chapter →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show final navigation only when all steps are visible */}
      {currentStep === timelineSteps.length - 1 && (
        <div className="navigation-buttons">
          <button className="nav-button" onClick={() => router.push("/favorites")}>
            My Favorite Aloo →
          </button>
        </div>
      )}
    </div>
  )
}
