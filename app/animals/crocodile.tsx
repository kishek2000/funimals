import React, { useState, useEffect } from "react";

export const CrocodileHead: React.FC = () => {
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
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
      {/* Extended viewBox to avoid clipping */}

      {/* Head */}
      <path
        d="M 10 90 L 30 75 L 50 70 L 70 75 L 90 90 L 70 95 L 50 100 L 30 95 Z"
        fill="#4e7d47"
      />
      <path
        d="M 10 90 L 30 85 L 50 80 L 70 85 L 90 90"
        fill="none"
        stroke="#3a6235"
        strokeWidth="1"
      />

      {/* Scales/texture */}
      <path
        d="M 30 75 L 35 78 L 40 75 L 45 78 L 50 75 L 55 78 L 60 75 L 65 78 L 70 75"
        stroke="#3a6235"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 30 95 L 35 92 L 40 95 L 45 92 L 50 95 L 55 92 L 60 95 L 65 92 L 70 95"
        stroke="#3a6235"
        strokeWidth="1"
        fill="none"
      />

      {/* Eyes (on top of head) */}
      <ellipse
        cx="35"
        cy="72"
        rx="5"
        ry="3"
        fill="#5d8c54"
        stroke="#3a6235"
        strokeWidth="1"
      />
      <ellipse
        cx="65"
        cy="72"
        rx="5"
        ry="3"
        fill="#5d8c54"
        stroke="#3a6235"
        strokeWidth="1"
      />

      {isBlinking ? (
        <>
          <path d="M 30 72 L 40 72" stroke="#3a6235" strokeWidth="1.5" />
          <path d="M 60 72 L 70 72" stroke="#3a6235" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <circle cx="35" cy="72" r="2" fill="#553300" />
          <circle cx="65" cy="72" r="2" fill="#553300" />
        </>
      )}

      {/* Teeth */}
      <path
        d="M 15 89 L 17 85 L 19 89 L 21 85 L 23 89 L 25 85 L 27 89"
        fill="none"
        stroke="ivory"
        strokeWidth="1.5"
      />
      <path
        d="M 73 89 L 75 85 L 77 89 L 79 85 L 81 89 L 83 85 L 85 89"
        fill="none"
        stroke="ivory"
        strokeWidth="1.5"
      />

      {/* Nostrils */}
      <ellipse cx="40" cy="80" rx="2" ry="1" fill="#3a6235" />
      <ellipse cx="60" cy="80" rx="2" ry="1" fill="#3a6235" />
    </svg>
  );
};

export const CrocodileBody: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 110"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main body */}
      <ellipse cx="50" cy="60" rx="45" ry="60" fill="#5d8c54" />

      {/* Scales and details */}
      <path
        d="M 10 40 L 15 35 L 20 40 L 25 35 L 30 40 L 35 35 L 40 40 L 45 35 L 50 40 L 55 35 L 60 40 L 65 35 L 70 40 L 75 35 L 80 40 L 85 35 L 90 40"
        stroke="#447744"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 10 60 L 15 55 L 20 60 L 25 55 L 30 60 L 35 55 L 40 60 L 45 55 L 50 60 L 55 55 L 60 60 L 65 55 L 70 60 L 75 55 L 80 60 L 85 55 L 90 60"
        stroke="#447744"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 10 80 L 15 75 L 20 80 L 25 75 L 30 80 L 35 75 L 40 80 L 45 75 L 50 80 L 55 75 L 60 80 L 65 75 L 70 80 L 75 75 L 80 80 L 85 75 L 90 80"
        stroke="#447744"
        strokeWidth="2"
        fill="none"
      />

      {/* Belly */}
      <ellipse cx="50" cy="90" rx="35" ry="15" fill="#7baa73" />

      {/* Back spikes */}
      <path
        d="M 10 30 L 15 20 L 20 30 L 25 15 L 30 30 L 35 18 L 40 30 L 45 15 L 50 30 L 55 15 L 60 30 L 65 18 L 70 30 L 75 15 L 80 30 L 85 20 L 90 30"
        fill="#4e7d47"
        stroke="#3a6235"
        strokeWidth="1"
      />
    </svg>
  );
};

export const CrocodileLegs: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMin meet"
    >
      {/* Legs - made significantly thicker */}
      <path
        d="M 25 0 C 25 20 22 40 25 60 C 25 70 20 75 25 80"
        fill="#5d8c54"
        stroke="#4e7d47"
        strokeWidth="2"
      />
      <path
        d="M 75 0 C 75 20 78 40 75 60 C 75 70 80 75 75 80"
        fill="#5d8c54"
        stroke="#4e7d47"
        strokeWidth="2"
      />

      {/* Add width to legs */}
      <path d="M 15 0 C 18 20 15 40 18 60" fill="#5d8c54" stroke="none" />
      <path d="M 85 0 C 82 20 85 40 82 60" fill="#5d8c54" stroke="none" />

      {/* Feet with claws - made larger and more defined */}
      <path
        d="M 12 75 L 18 82 L 25 75 L 32 82 L 38 75"
        fill="#5d8c54"
        stroke="#3a6235"
        strokeWidth="1.5"
      />
      <path
        d="M 62 75 L 68 82 L 75 75 L 82 82 L 88 75"
        fill="#5d8c54"
        stroke="#3a6235"
        strokeWidth="1.5"
      />

      <path
        d="M 18 82 L 18 88"
        stroke="#3a6235"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 25 75 L 25 82"
        stroke="#3a6235"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 32 82 L 32 88"
        stroke="#3a6235"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M 68 82 L 68 88"
        stroke="#3a6235"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 75 75 L 75 82"
        stroke="#3a6235"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 82 82 L 82 88"
        stroke="#3a6235"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Scales on legs */}
      <path d="M 23 20 L 27 20" stroke="#4e7d47" strokeWidth="1.5" />
      <path d="M 23 30 L 27 30" stroke="#4e7d47" strokeWidth="1.5" />
      <path d="M 23 40 L 27 40" stroke="#4e7d47" strokeWidth="1.5" />
      <path d="M 23 50 L 27 50" stroke="#4e7d47" strokeWidth="1.5" />

      <path d="M 73 20 L 77 20" stroke="#4e7d47" strokeWidth="1.5" />
      <path d="M 73 30 L 77 30" stroke="#4e7d47" strokeWidth="1.5" />
      <path d="M 73 40 L 77 40" stroke="#4e7d47" strokeWidth="1.5" />
      <path d="M 73 50 L 77 50" stroke="#4e7d47" strokeWidth="1.5" />

      {/* Tail */}
      <path
        d="M 50 10 C 60 15 65 25 70 40 C 75 50 80 60 85 70"
        fill="#5d8c54"
        stroke="#4e7d47"
        strokeWidth="2"
      />

      {/* Tail ridges */}
      <path
        d="M 55 12 L 60 16 L 65 12"
        stroke="#4e7d47"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 60 25 L 65 30 L 70 25"
        stroke="#4e7d47"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 65 35 L 70 40 L 75 35"
        stroke="#4e7d47"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 70 45 L 75 50 L 80 45"
        stroke="#4e7d47"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 75 55 L 80 60 L 85 55"
        stroke="#4e7d47"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};
