"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CountdownPage() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [showModal, setShowModal] = useState(false)
  const [countdownEnded, setCountdownEnded] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTimeAndCalculate = async () => {
      try {
        // Try multiple time APIs for better reliability
        let currentTime

        try {
          const response = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
          if (response.ok) {
            const data = await response.json()
            currentTime = new Date(data.datetime)
          } else {
            throw new Error("WorldTimeAPI failed")
          }
        } catch (error) {
          // Fallback to another API
          try {
            const response = await fetch("https://api.ipgeolocation.io/timezone?apiKey=free")
            if (response.ok) {
              const data = await response.json()
              currentTime = new Date(data.date_time)
            } else {
              throw new Error("Backup API failed")
            }
          } catch (backupError) {
            // Final fallback to local time
            currentTime = new Date()
          }
        }

        // Target date: July 1st, 2025 at 6:50 PM UTC
        const targetDate = new Date("2025-07-09T18:30:00Z");

        const difference = targetDate.getTime() - currentTime.getTime()

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((difference % (1000 * 60)) / 1000)

          setTimeLeft({ days, hours, minutes, seconds })
        } else {
          setCountdownEnded(true)
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching time:", error)
        setLoading(false)
      }
    }

    fetchTimeAndCalculate()
    const interval = setInterval(fetchTimeAndCalculate, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdownEnded) {
      router.push("/surprise")
    }
  }, [countdownEnded, router])

  return (
    <>
      <style jsx>{`
        .countdown-container {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #00b894 0%,
            #00cec9 25%,
            #55a3ff 50%,
            #74b9ff 75%,
            #a29bfe 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 1rem;
        }

        .particles-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float ease-in-out infinite;
          backdrop-filter: blur(2px);
        }

        .heart {
          position: absolute;
          opacity: 0.8;
          animation: heartFloat 8s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }

        .countdown-content {
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          padding: clamp(2rem, 5vw, 4rem);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          max-width: 95%;
          width: 100%;
          max-width: 900px;
          margin: 1rem;
        }

        .countdown-title {
          font-family: "Dancing Script", cursive;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          letter-spacing: 2px;
        }

        .countdown-subtitle {
          font-family: "Playfair Display", serif;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          font-style: italic;
          line-height: 1.6;
        }

        .timer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: clamp(1rem, 3vw, 2rem);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .time-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          padding: clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          min-width: 80px;
        }

        .time-unit:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.15);
        }

        .time-number {
          font-family: "Playfair Display", serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .time-label {
          font-family: "Dancing Script", cursive;
          font-size: clamp(1rem, 2vw, 1.4rem);
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .show-button {
          font-family: "Dancing Script", cursive;
          font-size: clamp(1.2rem, 2.5vw, 1.4rem);
          font-weight: 600;
          background: linear-gradient(45deg, #00b894, #00cec9, #55efc4);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          color: white;
          border: none;
          padding: clamp(1rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3rem);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .show-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.6);
        }

        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: #fff;
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-family: "Dancing Script", cursive;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          padding: 1rem;
        }

        .modal-content {
          background: linear-gradient(135deg, #ffeaa7, #fab1a0, #fd79a8);
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
          padding: clamp(2rem, 5vw, 3rem);
          border-radius: 25px;
          max-width: 500px;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .modal-title {
          font-family: "Dancing Script", cursive;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .modal-text {
          font-family: "Playfair Display", serif;
          font-size: clamp(1rem, 2vw, 1.1rem);
          color: #2d3436;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .modal-button {
          font-family: "Dancing Script", cursive;
          font-size: clamp(1rem, 2vw, 1.2rem);
          background: linear-gradient(45deg, #00b894, #00cec9);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 184, 148, 0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .modal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 184, 148, 0.5);
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes heartFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-20px) rotate(5deg) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotate(-3deg) scale(0.9);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-25px) rotate(2deg) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          .timer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .countdown-content {
            margin: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .timer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
          }

          .time-unit {
            min-width: 70px;
          }
        }

        /* Large desktop adjustments */
        @media (min-width: 1200px) {
          .countdown-content {
            padding: 5rem;
          }

          .timer-grid {
            gap: 3rem;
          }
        }
      `}</style>

      <div className="countdown-container">
        {/* Animated Particles */}
        <div className="particles-background">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: "rgba(255, 255, 255, 0.1)",
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Hearts */}
        <div className="particles-background">
          <div
            className="heart"
            style={{
              top: "10%",
              left: "10%",
              fontSize: "2.5rem",
              animationDelay: "0s",
            }}
          >
            💖
          </div>
          <div
            className="heart"
            style={{
              top: "20%",
              right: "15%",
              fontSize: "2rem",
              animationDelay: "1s",
            }}
          >
            💕
          </div>
          <div
            className="heart"
            style={{
              bottom: "30%",
              left: "20%",
              fontSize: "3rem",
              animationDelay: "2s",
            }}
          >
            💗
          </div>
          <div
            className="heart"
            style={{
              bottom: "20%",
              right: "10%",
              fontSize: "2rem",
              animationDelay: "3s",
            }}
          >
            💖
          </div>
          <div
            className="heart"
            style={{
              top: "50%",
              left: "50%",
              fontSize: "2.5rem",
              animationDelay: "4s",
            }}
          >
            💕
          </div>
          <div
            className="heart"
            style={{
              top: "30%",
              right: "25%",
              fontSize: "1.8rem",
              animationDelay: "5s",
            }}
          >
            💝
          </div>
          <div
            className="heart"
            style={{
              bottom: "40%",
              left: "15%",
              fontSize: "2.2rem",
              animationDelay: "6s",
            }}
          >
            💘
          </div>
        </div>

        <div className="countdown-content">
          <h1 className="countdown-title">
            Until Your Special Moment, Aloo❤️{" "}
          </h1>
          <p className="countdown-subtitle">
            Every second brings us closer to celebrating you
          </p>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <span>Synchronizing with the stars...</span>
            </div>
          ) : (
            <>
              <div className="timer-grid">
                <div className="time-unit">
                  <span className="time-number">{timeLeft.days}</span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.hours}</span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.minutes}</span>
                  <span className="time-label">Minutes</span>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.seconds}</span>
                  <span className="time-label">Seconds</span>
                </div>
              </div>

              <button
                className="show-button"
                onClick={() => setShowModal(true)}
              >
                Show Anyhow
              </button>
            </>
          )}
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="modal-title">Aise kaise meri jaan💕</h2>
              <p className="modal-text">
                I literally waited a month to open a letter jo maikbhi bhi khol
                sakta tha aur tum {timeLeft.days} din bhi nahi rukogi?🥹
              </p>
              <button
                className="modal-button"
                onClick={() => setShowModal(false)}
              >
                Ok...I'll Wait
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
