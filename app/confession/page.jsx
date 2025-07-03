"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import "./confession.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const confessions = [
  "I still remember that balcony moment outside tuition — our last real talk in Class 10. I never knew silence could last this long.",
  "When I gave you my number that day, I wasn’t hoping you'd text. I was hoping you’d understand what I couldn’t say.",
  "During lockdown, I tried fake numbers just to hear your voice once. Not to talk, just to feel close to you again.",
  "Jayita giving me your Instagram ID wasn’t luck — it felt like fate giving us one more shot.",
  "Even when I walked past your tuition after all that time, I didn’t care if you noticed — I just wanted to see you.",
  "I know I rejected other girls, not because I didn’t want love, but because they weren’t you.",
  "When you finally said you liked me too, it felt like all those quiet years suddenly made sense.",
  "That first café date on Ashtami — when you held my hand crossing the road — I swear my whole world paused.",
  "That line — 'you matter to me after my parents' — broke me, beautifully.",
  "Saraswati Puja was the first time I gave anyone a rose and a letter — and I’m glad it was you, Paramita.",
  "When you kissed me back that day, when we hugged — I realized love isn’t about fireworks. It’s about peace.",
  "Science City — our first kiss, That day lives rent-free in my heart.",
  "That day at Victoria Memorial wasn’t about the place — it was about watching you smile in the golden light, your hand in mine, and me enjoying Paramita looking like an energetic child.",
  "Even now, I wait for 11 PM every night. No matter what the day was, hearing your voice makes it home again.",
  "You’ve always been my favorite hello, my hardest silence, and my most beautiful return.",
  "After those chats at 11 PM, I often kiss your photo and realise how cute my girlfriend is."
];


function useConfessionRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const nextConfession = () => {
    if (!isTyping) {
      setCurrentIndex((prev) => (prev + 1) % confessions.length);
    }
  };

  useEffect(() => {
    const confession = confessions[currentIndex];
    setDisplayText("");
    setIsTyping(true);

    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < confession.length) {
        setDisplayText(confession.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return {
    currentConfession: displayText,
    nextConfession,
    isTyping,
    currentIndex,
  };
}

export default function ConfessionPage() {
  const router = useRouter();
  const { currentConfession, nextConfession, isTyping, currentIndex } =
    useConfessionRotator();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCTAClick = () => {
    router.push("/carousel");
  };

  const handleFavoritesClick = () => {
    router.push("/carousel");
  };

  if (!mounted) return null;

  return (
    <div className="confession-container">
      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/placeholder-audio.mp3" type="audio/mpeg" />
      </audio>

      {/* Animated Gradient Background */}
      <div className="gradient-bg"></div>

      {/* Sparkle Canvas Background */}
      <div className="sparkle-overlay"></div>

      {/* Floating Hearts and Sparkles */}
      <div className="floating-elements">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className={`floating-element floating-element-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              fontSize: `${Math.random() * 1.5 + 0.8}rem`,
            }}
          >
            {i % 3 === 0 ? "💚" : i % 3 === 1 ? "❤️" : "✨"}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Large Heading Above Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="main-heading"
        >
          <h1 className={`${dancingScript.className} heading-text`}>
            Things I Never Said
          </h1>
          <div className="heading-decoration">
            <div className="decoration-line"></div>
            <span className="decoration-heart">💕</span>
            <div className="decoration-line"></div>
          </div>
        </motion.div>

        {/* Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="confession-card"
        >
          <div className="card-inner">
            <div className="confession-counter">
              <span className={playfairDisplay.className}>
                {currentIndex + 1} of {confessions.length}
              </span>
            </div>

            <div className="confession-content">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`${dancingScript.className} confession-text`}
                >
                  {currentConfession}
                  <span
                    className={`cursor ${isTyping ? "blinking" : "hidden"}`}
                  >
                    |
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.button
              onClick={nextConfession}
              disabled={isTyping}
              className="next-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={playfairDisplay.className}>
                {isTyping ? "Writing..." : "Next"}
              </span>
              <span className="button-icon">💌</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Animated CTA Button */}
        <motion.button
          onClick={handleCTAClick}
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`${dancingScript.className} cta-text`}>
            My favorites❤️
          </span>
          <div className="cta-glow"></div>
          <div className="heart-particles">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className={`heart-particle heart-particle-${i}`}>
                💖
              </span>
            ))}
          </div>
        </motion.button>
      </div>

      {/* Fixed Favorites Button */}
      <motion.button
        onClick={handleFavoritesClick}
        className="favorites-button"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="favorites-icon">⭐</span>
        <span className={playfairDisplay.className}>Just one last Thing</span>
      </motion.button>
    </div>
  );
}
