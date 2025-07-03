"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./timeline.css"

export default function TimelinePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const timelineSteps = [
    {
      title: "Tuition Days – The First Spark 💫",
      icon: "🌱",
      content:
        "It all began in Class 9 at a nearby tuition center. That’s where I saw you for the first time. You were cheerful, talkative, and effortlessly lively. Your presence had a strange pull. By Class 10, those little glances turned into deep feelings. One day, silently, I gave you my number, hoping you’d somehow understand what I felt without saying a word. I was nervous, but hopeful.",
    },
    {
      title: "Balcony Goodbye – Forced Silence 💔",
      icon: "🚪",
      content:
        "But fate had its plans. Your mom found out about us. Suddenly, everything came crashing down. We were kept apart, no calls, no messages. The last time I saw you that year, we stood on a balcony outside tuition—just a few words, a glance, and then… silence. That balcony moment stayed with me for years. It was the end of a beginning.",
    },
    {
      title: "Lockdown Years – Longing in Silence 📵",
      icon: "🕰️",
      content:
        "The world went into lockdown, but my heart remained wide open—for you. Days passed, months passed, and I couldn’t stop thinking about you. I tried everything just to hear your voice—fake numbers, alternate ways—nothing worked. But you were always there, living in my thoughts, my memories, my dreams. I missed you every day.",
    },
    {
      title: "Reconnected on Instagram 🔁",
      icon: "📱",
      content:
        "One day, Jayita gave me your Instagram ID. I messaged you, not knowing what to expect. You replied. Then you called. And when I heard your voice after so long—I was overwhelmed. It felt like life had hit the un-pause button. I was nervous, but alive again.",
    },
    {
      title: "Just to See You 🎯",
      icon: "👀",
      content:
        "Even though we weren’t talking regularly, I started going to your tuition center again—just to see you from a distance. Sometimes you noticed, sometimes you didn’t. But that small glimpse of you meant the world to me. I didn't even need a conversation. Just knowing you were there was enough.",
    },
    {
      title: "Kota Confession – The Message That Changed Everything 💌",
      icon: "📨",
      content:
        "After Class 12, I moved to Kota to prepare for JEE. I had promised myself—no distractions. But suddenly, a message from Jayita changed everything: 'Paramita still likes you.' Then you messaged me yourself. You told me that you’d always felt something for me, too. That one message flipped my world around. We were finally together—officially.",
    },
    {
      title: "Distance & Disconnection 💔",
      icon: "📚",
      content:
        "With JEE exams near, I told you we should talk less—maybe once or twice a week. You understood. And even though those moments were brief, they felt magical. But after the exams, you said we should go back to being friends. I was shattered. I couldn’t take it. I blocked you. Everything ended—again—in June 2023.",
    },
    {
      title: "The Message That Opened the Door Again 🔁",
      icon: "📩",
      content:
        "1.5 years later, around September or October 2024, I texted you: 'How are you?' Your reaction to the name Sureshtha said more than words ever could. I knew—some part of you still cared. On Ashtami, we met at a café. You held my hand while crossing the road. That one small moment told me everything. But when I proposed, you said no. I got angry. Said some things I shouldn’t have. Walked away, again.",
    },
    {
      title: "January 2025 – Your Honest Confession 💬",
      icon: "📨",
      content:
        "In January, you messaged me. A long, emotional, honest message. You apologized, opened your heart, and said: 'You are the only person who matters to me after my parents.' That line—it broke every wall I had built. You ended with: 'Will you accept me one last time?' I had no doubt. I said yes.",
    },
    {
      title: "Saraswati Puja – Our First Real Date 🌼",
      icon: "🌸",
      content:
        "This time, our bond was different—strong, real, and open. On Saraswati Puja, we met for our first real date. I gave you a rose and a letter—something I had never done for anyone before. You were glowing. I was watching you, wondering how someone could be so beautiful, so perfect, so mine.",
    },
    {
      title: "Movie Date – Our First Kiss 💋",
      icon: "🎬",
      content:
        "We went to see Shabba. I kissed you on your cheek, and you kissed me back. That day was filled with quiet smiles, warm glances, a tight hug, and our first forehead kiss. The kind of day you don’t just remember—you relive it in your heart, every single day.",
    },
    {
      title: "Science City – A Thousand Kisses 💖",
      icon: "💋",
      content:
        "When we met at Science City, I had missed you so much... I couldn't stop myself. I kissed you again and again—I don’t even remember the count. Each kiss felt like making up for all those silent years. Later, at a café, you gave me a flower—my first flower from a girl. My hands were shaking. My heart was full.",
    },
    {
      title: "Victoria Memorial – You, The Child in You 🎠",
      icon: "🏰",
      content:
        "At Victoria Memorial, you were playful, like a little child. Running, smiling, teasing me. I didn’t care about the place. I was busy capturing you—your joy, your silliness, your innocence. That version of you… I want to remember forever. It’s the most precious thing I’ve ever seen.",
    },
    {
      title: "Our Nightly 11PM Calls 🌙",
      icon: "☎️",
      content:
        "Despite strict parents, studies, work—every day, from 11PM to midnight—we find our little world. No matter what happened during the day, that one hour is my peace, my joy, my everything. No calls before that, no messages—just us, just that hour. That’s how I end every day—with you.",
    },
    {
      title: "A Love That Grew, Faded, and Found Its Way Back ❤️",
      icon: "❤️",
      content:
        "From a teenage crush at tuition… to a silent balcony goodbye… from a blocked number… to countless kisses at Science City. From a rose on Saraswati Puja… to forehead kisses, and Victoria moments. From long silences to 11PM calls. Our story isn't about perfection—it's about growth, mistakes, forgiveness, and choosing each other again and again. This is not just love. This is us.",
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
