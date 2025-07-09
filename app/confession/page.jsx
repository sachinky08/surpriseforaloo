"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import "./confession.css";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

const confessions = [
  "I still remember that balcony moment outside tuition — our last real talk in Class 10. I never knew silence could last this long.",
  "When I gave you my number that day, I wasn’t hoping you'd text. I was hoping you’d understand what I couldn’t say.",
  "During lockdown, I tried fake numbers just to hear your voice once. Not to talk, just to feel close to you again.",
  "Jayita giving me your Instagram ID wasn’t luck — it felt like fate giving us one more shot.",
  "Even when I walked past your tuition after all that time, I didn’t care if you noticed — I just wanted to see you.",
  "I know I rejected other girls(you did the same), not because I didn’t want love, but because they weren’t you.",
  "When you finally said you liked me too, it felt like all those quiet years suddenly made sense.",
  "That day on ashatmi — when you held my hand crossing the road — I swear that moment will stay with me forever.",
  "That line — 'you matter to me after my parents' — broke me, beautifully.",
  "Saraswati Puja was the first time I gave anyone a rose and a letter — and I’m glad it was you, Paramita.",
  "When you kissed me back that day, when we hugged — I realized love isn’t about fireworks. It’s about peace.",
  "Science City — our first kiss, That day lives rent-free in my heart.",
  "That day at Victoria Memorial wasn’t about the place — it was about watching you smile in the golden light, your hand in mine, and me enjoying Paramita looking like an energetic child.",
  "Even now, I wait for 11 PM every night. No matter what the day was, hearing your voice makes it home again.",
  "You’ve always been my favorite hello, my hardest silence, and my most beautiful return.",
  "After those chats at 11 PM, I often kiss your photo and realise how cute my girlfriend is.",
  "*This one in hindi*- Hote honge logo ke chehre cetaphil lagane se glow, but mera toh tumhari ek jhalak ya kehlo ek message se hi ho jata hai",
  "If I'm even totally mad or angry on you, I would still always care for you."
];

export default function ConfessionPage() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (index < confessions.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="confession-wrapper">
      <div className="background-hearts">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className={`heart heart-${i % 3}`}>
            💖
          </span>
        ))}
      </div>

      <h1 className={`confession-heading ${dancing.className}`}>
        Things I Never Said 💌
      </h1>

      <div className="confession-card">
        {/* Confession Number Indicator */}
        <p className="confession-counter">
          Confession {index + 1} of {confessions.length}
        </p>

        <p className={`confession-text ${playfair.className}`}>
          {confessions[index]}
        </p>

        {index < confessions.length - 1 && (
          <button className="next-button" onClick={handleNext}>
            Next one
          </button>
        )}
      </div>

      {/* Final Note + Button */}
      {index === confessions.length - 1 && (
        <>
          <p className={`final-message ${playfair.className}`}>
            Wanna see you through my eyes?
          </p>
          <button
            className="video-button"
            onClick={() => router.push("/videopage")}
          >
            Yes !!
          </button>
        </>
      )}
    </div>
  );
}
