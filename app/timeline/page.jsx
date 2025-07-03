"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./timeline.css"

export default function TimelinePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const timelineSteps = [
    {
      title: "Tuition Days – Where It All Began 🌼",
      icon: "🌱",
      content:
        "Class 9 tuition was where I first saw you—full of life, effortlessly charming. By Class 10, I had already fallen for you. I gave you my number one day, silently hoping you’d feel what I felt.",
    },
    {
      title: "Balcony Goodbye – The Pause 💔",
      icon: "🚪",
      content:
        "Your mom found out, and we were asked to stop talking. Our last moment was outside tuition, on a balcony—just a glance, a smile, and silence that lasted for months.",
    },
    {
      title: "Lockdown – Quiet Longing 📵",
      icon: "🕰️",
      content:
        "Even in the chaos of lockdown, you stayed in my heart. I missed your voice, your presence. I tried many ways just to hear from you, but you remained a beautiful memory in my thoughts.",
    },
    {
      title: "Reconnecting on Instagram 🔁",
      icon: "📱",
      content:
        "Thanks to Jayita, I got your Insta. You replied, and later called. Just hearing your voice again felt like something inside me lit up again.",
    },
    {
      title: "Glances from Afar 🎯",
      icon: "👀",
      content:
        "I started visiting your tuition place just to see you, even if we didn’t talk. Sometimes you noticed. For me, even that was enough.",
    },
    {
      title: "Kota Days – Your Message 💌",
      icon: "📨",
      content:
        "After Class 12, I moved to Kota. Suddenly, a message came: 'Paramita still likes you.' Then you messaged me yourself. That day—we were finally together.",
    },
    {
      title: "Distance and Focus 📚",
      icon: "📖",
      content:
        "With JEE close, I asked to limit chats. You understood. Even short talks felt special. But after exams, you asked to go back to being friends. It hurt, and I couldn’t handle it. We drifted again.",
    },
    {
      title: "Rekindling – A Glimpse of Hope 💫",
      icon: "🔁",
      content:
        "In late 2024, I texted: 'How are you?' We met on Ashtami, had coffee, and when you held my hand while crossing the road—I knew something still remained.",
    },
    {
      title: "The January Message ❤️",
      icon: "📩",
      content:
        "You sent a message in Jan 2025, full of emotion and honesty. When you said, 'You matter to me after my parents,' I didn’t think twice—I accepted you again.",
    },
    {
      title: "Saraswati Puja – Our First Real Date 🌸",
      icon: "🌼",
      content:
        "I gave you a rose and a letter. You glowed with happiness. It wasn’t just a date—it was a moment I’d dreamed of for years.",
    },
    {
      title: "Movie Date – First Kiss 🎬",
      icon: "💋",
      content:
        "We watched Chhava that day. I kissed your cheek, and you kissed me back. We hugged, smiled, and sealed a beautiful memory with a forehead kiss.",
    },
    {
      title: "Science City – Day full of kisses 💖",
      icon: "🎡",
      content:
        "I missed you so much that I couldn’t stop kissing you. Later, you gave me a flower, man kar raha tha itni kiss karu itna kiss karu",
    },
    {
      title: "Victoria Memorial – Your Purest Self 🎠",
      icon: "🏰",
      content:
        "You were playful and innocent, like a little girl. I didn’t care about the monument—I was busy capturing the most real and beautiful version of you.",
    },
    {
      title: "11 PM Calls – Our Little World 🌙",
      icon: "☎️",
      content:
        "Every night from 11 to 12, we make time for each other. That one hour is my peace, my joy, my everything—because it’s ours.",
    },
    {
      title: "Our Love Story – The One That Stayed ❤️",
      icon: "💞",
      content:
        "From teenage glances to real love, from silence to roses and kisses—our story is about two people who always found their way back. And this time, it’s forever.",
    },
  ];
  
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
