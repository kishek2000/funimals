import React, { useState, useEffect } from "react";

export const LionHead: React.FC = () => {
  // Blinking animation using CSS
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 3000 + 2000); // Random blink between 2-5 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      {/* Ensure enough space at top */}

      {/* Mane */}
      <path
        d="M 15 90 Q 0 70 5 50 Q 10 30 25 20 Q 35 10 50 5 Q 65 10 75 20 Q 90 30 95 50 Q 100 70 85 90"
        fill="#e2a952"
      />

      {/* Face */}
      <circle cx="50" cy="70" r="30" fill="#e2b280" />

      {/* Ears */}
      <path d="M 25 55 Q 20 45 25 40 Q 30 35 35 40 L 30 55 Z" fill="#c19a6b" />
      <path d="M 75 55 Q 80 45 75 40 Q 70 35 65 40 L 70 55 Z" fill="#c19a6b" />

      {/* Eyes - using conditional rendering for blinking instead of adding elements */}
      {isBlinking ? (
        <>
          <path
            d="M 35 65 Q 40 63 45 65"
            stroke="#553300"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 55 65 Q 60 63 65 65"
            stroke="#553300"
            strokeWidth="2"
            fill="none"
          />
        </>
      ) : (
        <>
          <circle cx="40" cy="65" r="5" fill="#553300" />
          <circle cx="60" cy="65" r="5" fill="#553300" />
          {/* Eye highlights */}
          <circle cx="42" cy="63" r="2" fill="white" />
          <circle cx="62" cy="63" r="2" fill="white" />
        </>
      )}

      {/* Nose */}
      <path d="M 45 75 Q 50 72 55 75 L 55 78 Q 50 82 45 78 Z" fill="#553300" />

      {/* Mouth */}
      <path
        d="M 43 85 Q 50 90 57 85"
        stroke="#553300"
        strokeWidth="2"
        fill="none"
      />

      {/* Whiskers */}
      <path d="M 35 78 L 20 75" stroke="#c19a6b" strokeWidth="1" />
      <path d="M 35 80 L 15 80" stroke="#c19a6b" strokeWidth="1" />
      <path d="M 35 82 L 20 85" stroke="#c19a6b" strokeWidth="1" />

      <path d="M 65 78 L 80 75" stroke="#c19a6b" strokeWidth="1" />
      <path d="M 65 80 L 85 80" stroke="#c19a6b" strokeWidth="1" />
      <path d="M 65 82 L 80 85" stroke="#c19a6b" strokeWidth="1" />
    </svg>
  );
};

export const LionBody: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main body */}
      <ellipse cx="50" cy="60" rx="40" ry="60" fill="#e2b280" />

      {/* Mane transition */}
      <path
        d="M 20 20 Q 35 0 50 0 Q 65 0 80 20 Q 90 40 90 60 Q 80 80 75 85 Q 60 90 40 90 Q 25 85 10 60 Q 10 40 20 20"
        fill="#c19a6b"
      />
      <path
        d="M 25 25 Q 35 15 50 15 Q 65 15 75 25 Q 82 40 82 60 Q 75 75 70 80 Q 60 82 40 82 Q 30 80 20 65 Q 18 40 25 25"
        fill="#e2b280"
      />

      {/* Chest details */}
      <path
        d="M 30 30 Q 40 25 50 30 Q 60 25 70 30 Q 75 40 75 50 Q 70 70 65 80 Q 60 85 50 85 Q 40 85 35 80 Q 30 70 25 50 Q 25 40 30 30"
        fill="#f1c290"
      />

      {/* Details and shading */}
      <path
        d="M 25 40 Q 30 30 40 25"
        fill="none"
        stroke="#c19a6b"
        strokeWidth="1"
      />
      <path
        d="M 75 40 Q 70 30 60 25"
        fill="none"
        stroke="#c19a6b"
        strokeWidth="1"
      />
      <path
        d="M 40 85 Q 50 90 60 85"
        fill="none"
        stroke="#c19a6b"
        strokeWidth="1"
      />
    </svg>
  );
};

export const LionLegs: React.FC = () => {
  // Add a simple swinging animation to the tail
  const [tailSwing, setTailSwing] = useState(0);

  useEffect(() => {
    const swingInterval = setInterval(() => {
      setTailSwing((prev) => (prev + 1) % 6);
    }, 1000);

    return () => clearInterval(swingInterval);
  }, []);

  // Calculate tail curve based on swing state
  const getTailPath = () => {
    const swingOffsets = [0, 5, 10, 5, 0, -5];
    const offset = swingOffsets[tailSwing];
    return `M 50 10 C 60 30 ${70 + offset} 50 ${75 + offset} 70`;
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMin meet"
    >
      {/* Front legs - made thicker */}
      <path
        d="M 32 0 C 30 20 30 40 33 60 C 34 65 38 70 33 80"
        fill="#d1af60"
        stroke="#c19a6b"
        strokeWidth="1"
      />
      <path
        d="M 68 0 C 70 20 70 40 67 60 C 66 65 62 70 67 80"
        fill="#d1af60"
        stroke="#c19a6b"
        strokeWidth="1"
      />

      {/* Improved leg shape with more volume */}
      <path d="M 26 0 C 26 30 26 50 30 70" fill="#d1af60" stroke="none" />
      <path d="M 74 0 C 74 30 74 50 70 70" fill="#d1af60" stroke="none" />

      {/* Paws */}
      <ellipse cx="33" cy="85" rx="10" ry="6" fill="#a57c45" />
      <ellipse cx="67" cy="85" rx="10" ry="6" fill="#a57c45" />

      {/* Paw details */}
      <path
        d="M 28 83 C 29 81 33 81 34 83"
        fill="none"
        stroke="#8b4513"
        strokeWidth="1"
      />
      <path
        d="M 32 83 C 33 81 37 81 38 83"
        fill="none"
        stroke="#8b4513"
        strokeWidth="1"
      />

      <path
        d="M 62 83 C 63 81 67 81 68 83"
        fill="none"
        stroke="#8b4513"
        strokeWidth="1"
      />
      <path
        d="M 66 83 C 67 81 71 81 72 83"
        fill="none"
        stroke="#8b4513"
        strokeWidth="1"
      />

      {/* Rear legs (partially visible) - made thicker */}
      <path d="M 25 0 C 20 20 18 40 23 55" fill="#d1af60" stroke="none" />
      <path d="M 75 0 C 80 20 82 40 77 55" fill="#d1af60" stroke="none" />

      {/* Tail */}
      <path
        d={getTailPath()}
        fill="none"
        stroke="#c19a6b"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ transition: "3s" }}
      />
      <circle
        style={{ transition: "3s" }}
        cx={75 + (tailSwing === 2 ? 10 : tailSwing === 5 ? -5 : 0)}
        cy="70"
        r="6"
        fill="#a57c45"
      />
    </svg>
  );
};
