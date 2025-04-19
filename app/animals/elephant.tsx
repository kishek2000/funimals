import React, { useState, useEffect } from "react";

export const ElephantHead: React.FC = () => {
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
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Head */}
      <ellipse cx="50" cy="60" rx="40" ry="35" fill="#a5a5a5" />

      {/* Ears */}
      <ellipse cx="20" cy="55" rx="15" ry="25" fill="#8a8a8a" />
      <ellipse cx="80" cy="55" rx="15" ry="25" fill="#8a8a8a" />
      <ellipse cx="20" cy="55" rx="10" ry="20" fill="#b0b0b0" />
      <ellipse cx="80" cy="55" rx="10" ry="20" fill="#b0b0b0" />

      {/* Eyes - using conditional rendering for proper blinking */}
      {isBlinking ? (
        <>
          <path
            d="M 35 55 Q 40 53 45 55"
            stroke="#333333"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 55 55 Q 60 53 65 55"
            stroke="#333333"
            strokeWidth="2"
            fill="none"
          />
        </>
      ) : (
        <>
          <circle cx="40" cy="55" r="5" fill="#553300" />
          <circle cx="60" cy="55" r="5" fill="#553300" />
          {/* Eye highlights */}
          <circle cx="42" cy="53" r="2" fill="white" />
          <circle cx="62" cy="53" r="2" fill="white" />
        </>
      )}

      {/* Trunk */}
      <path
        d="M 45 70 C 45 85 50 95 55 100 L 55 100 C 60 95 55 85 55 70 Z"
        fill="#8a8a8a"
      />
      <path
        d="M 48 95 C 48 95 52 95 52 95"
        stroke="#5a5a5a"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 47 90 C 47 90 53 90 53 90"
        stroke="#5a5a5a"
        strokeWidth="1"
        fill="none"
      />

      {/* Tusks */}
      <path
        d="M 35 70 C 30 80 25 85 20 87"
        stroke="ivory"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M 65 70 C 70 80 75 85 80 87"
        stroke="ivory"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export const ElephantBody: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 120"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main body */}
      <ellipse cx="50" cy="60" rx="45" ry="60" fill="#a5a5a5" />

      {/* Body details and shading */}
      <path
        d="M 25 30 Q 35 20 50 15 Q 65 20 75 30"
        fill="none"
        stroke="#959595"
        strokeWidth="2"
      />
      <path
        d="M 20 60 Q 30 50 40 45"
        fill="none"
        stroke="#959595"
        strokeWidth="2"
      />
      <path
        d="M 80 60 Q 70 50 60 45"
        fill="none"
        stroke="#959595"
        strokeWidth="2"
      />

      {/* Skin wrinkles */}
      <path
        d="M 30 40 Q 50 35 70 40"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 30 60 Q 50 55 70 60"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 30 80 Q 50 75 70 80"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />

      {/* Belly */}
      <ellipse cx="50" cy="85" rx="30" ry="20" fill="#b0b0b0" />
    </svg>
  );
};

export const ElephantLegs: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMin meet"
    >
      {/* Front legs - made significantly thicker */}
      <path
        d="M 30 0 Q 25 40 30 80 Q 30 85 30 90"
        fill="#a5a5a5"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 70 0 Q 75 40 70 80 Q 70 85 70 90"
        fill="#a5a5a5"
        stroke="#959595"
        strokeWidth="1"
      />

      {/* Add more volume to legs */}
      <path d="M 22 0 Q 20 40 25 80" fill="#a5a5a5" stroke="none" />
      <path d="M 78 0 Q 80 40 75 80" fill="#a5a5a5" stroke="none" />

      {/* Feet */}
      <ellipse cx="30" cy="95" rx="12" ry="5" fill="#8a8a8a" />
      <ellipse cx="70" cy="95" rx="12" ry="5" fill="#8a8a8a" />

      {/* Leg wrinkles */}
      <path
        d="M 28 20 C 30 18 32 18 34 20"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 28 40 C 30 38 32 38 34 40"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 28 60 C 30 58 32 58 34 60"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />

      <path
        d="M 68 20 C 70 18 72 18 74 20"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 68 40 C 70 38 72 38 74 40"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />
      <path
        d="M 68 60 C 70 58 72 58 74 60"
        fill="none"
        stroke="#959595"
        strokeWidth="1"
      />

      {/* Tail */}
      <path
        d="M 50 10 C 55 30 55 50 50 70"
        fill="none"
        stroke="#a5a5a5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 50 70 C 48 75 52 80 50 85"
        fill="none"
        stroke="#a5a5a5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
