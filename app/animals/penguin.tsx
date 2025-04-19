import React, { useState, useEffect } from "react";

export const PenguinHead: React.FC = () => {
  // Blinking animation
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <svg
      viewBox="0 0 100 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Extended viewBox to avoid clipping */}

      {/* Head */}
      <ellipse cx="50" cy="75" rx="35" ry="45" fill="black" />
      <path d="M 30 65 Q 50 100 70 65" fill="white" />

      {/* Eyes - proper blinking with conditional rendering */}
      {isBlinking ? (
        <>
          <path
            d="M 35 65 Q 40 63 45 65"
            stroke="#333333"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 55 65 Q 60 63 65 65"
            stroke="#333333"
            strokeWidth="2"
            fill="none"
          />
        </>
      ) : (
        <>
          <circle cx="40" cy="65" r="5" fill="white" />
          <circle cx="60" cy="65" r="5" fill="white" />
          <circle cx="40" cy="65" r="3" fill="black" />
          <circle cx="60" cy="65" r="3" fill="black" />

          {/* Eye highlights */}
          <circle cx="41" cy="64" r="1" fill="white" />
          <circle cx="61" cy="64" r="1" fill="white" />
        </>
      )}

      {/* Beak */}
      <path d="M 40 75 L 50 90 L 60 75 Z" fill="orange" />
      <path d="M 45 80 L 55 80" stroke="#ff8c00" strokeWidth="1" fill="none" />
    </svg>
  );
};

export const PenguinBody: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Body */}
      <ellipse cx="50" cy="60" rx="35" ry="60" fill="black" />

      {/* White belly */}
      <path
        d="M 30 10 Q 50 0 70 10 Q 75 60 70 110 Q 50 120 30 110 Q 25 60 30 10"
        fill="white"
      />

      {/* Body details */}
      <path
        d="M 50 0 Q 55 10 55 20"
        fill="none"
        stroke="#333333"
        strokeWidth="1"
      />
      <path
        d="M 50 0 Q 45 10 45 20"
        fill="none"
        stroke="#333333"
        strokeWidth="1"
      />

      {/* Wing outlines */}
      <path
        d="M 15 40 Q 20 30 25 35 Q 30 80 25 110"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M 85 40 Q 80 30 75 35 Q 70 80 75 110"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* Wings */}
      <path d="M 20 40 C 15 45 15 70 20 100" fill="black" stroke="none" />
      <path d="M 80 40 C 85 45 85 70 80 100" fill="black" stroke="none" />
    </svg>
  );
};

export const PenguinLegs: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMin meet"
    >
      {/* Legs - made significantly thicker */}
      <path
        d="M 36 0 C 34 20 30 40 30 60"
        fill="black"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M 64 0 C 66 20 70 40 70 60"
        fill="black"
        stroke="black"
        strokeWidth="3"
      />

      {/* Add some width to the legs */}
      <path d="M 30 0 C 28 20 25 40 25 60" fill="black" stroke="none" />
      <path d="M 70 0 C 72 20 75 40 75 60" fill="black" stroke="none" />

      {/* Feet - made larger and more defined */}
      <ellipse cx="35" cy="70" rx="18" ry="8" fill="orange" />
      <ellipse cx="65" cy="70" rx="18" ry="8" fill="orange" />

      {/* Webbed feet details */}
      <path
        d="M 22 70 L 28 63 L 35 70 L 42 63 L 48 70"
        fill="none"
        stroke="#ff8c00"
        strokeWidth="1.5"
      />
      <path
        d="M 52 70 L 58 63 L 65 70 L 72 63 L 78 70"
        fill="none"
        stroke="#ff8c00"
        strokeWidth="1.5"
      />

      {/* Black markings on orange feet */}
      <path
        d="M 30 67 C 35 65 40 65 45 67"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M 60 67 C 65 65 70 65 75 67"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
      />

      {/* Tail (small) */}
      <path d="M 45 10 L 55 10 L 50 30 Z" fill="black" />
    </svg>
  );
};
