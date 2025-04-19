import React, { useState, useEffect } from "react";

export const GiraffeHead: React.FC = () => {
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
    <svg viewBox="0 0 100 120" preserveAspectRatio="xMidYMax meet">
      {/* Extended viewBox to avoid cutting off the head */}

      {/* Head */}
      <path d="M 38 120 L 38 70 C 38 55 62 55 62 70 L 62 120" fill="#e2c070" />
      <path d="M 40 75 C 40 60 60 60 60 75" fill="#e2c070" stroke="none" />

      {/* Horns/Ossicones */}
      <path
        d="M 42 46 C 40 36 41 32 45 28"
        stroke="#8b4513"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 58 46 C 60 36 59 32 55 28"
        stroke="#8b4513"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="45" cy="28" r="3" fill="#8b4513" />
      <circle cx="55" cy="28" r="3" fill="#8b4513" />

      {/* Spots */}
      <circle cx="45" cy="85" r="4" fill="#8b4513" />
      <circle cx="55" cy="90" r="5" fill="#8b4513" />
      <circle cx="37" cy="100" r="3" fill="#8b4513" />
      <circle cx="63" cy="105" r="4" fill="#8b4513" />
      <circle cx="48" cy="110" r="3" fill="#8b4513" />

      {/* Ears */}
      <path
        d="M 37 75 C 30 70 28 75 30 80 L 37 78 Z"
        fill="#e2c070"
        stroke="#8b4513"
        strokeWidth="1"
      />
      <path
        d="M 63 75 C 70 70 72 75 70 80 L 63 78 Z"
        fill="#e2c070"
        stroke="#8b4513"
        strokeWidth="1"
      />

      {/* Eyes - proper blinking with conditional rendering */}
      {isBlinking ? (
        <>
          <path
            d="M 37 65 Q 42 63 47 65"
            stroke="#333333"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 53 65 Q 58 63 63 65"
            stroke="#333333"
            strokeWidth="1.5"
            fill="none"
          />
        </>
      ) : (
        <>
          <circle cx="42" cy="65" r="4" fill="#553300" />
          <circle cx="58" cy="65" r="4" fill="#553300" />
          {/* Eye highlights */}
          <circle cx="43" cy="64" r="1.5" fill="white" />
          <circle cx="59" cy="64" r="1.5" fill="white" />
        </>
      )}

      {/* Nose and mouth */}
      <ellipse cx="50" cy="85" rx="8" ry="5" fill="#d1af60" />
      <path
        d="M 45 90 Q 50 94 55 90"
        stroke="#8b4513"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};

export const GiraffeBody: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Neck */}
      <rect x="40" y="0" width="20" height="120" fill="#e2c070" />

      {/* Body/shoulder area */}
      <ellipse cx="50" cy="90" rx="35" ry="30" fill="#e2c070" />

      {/* Spots */}
      <circle cx="45" cy="20" r="6" fill="#8b4513" />
      <circle cx="55" cy="35" r="5" fill="#8b4513" />
      <circle cx="47" cy="55" r="7" fill="#8b4513" />
      <circle cx="55" cy="70" r="4" fill="#8b4513" />
      <circle cx="40" cy="85" r="5" fill="#8b4513" />
      <circle cx="60" cy="95" r="6" fill="#8b4513" />
      <circle cx="35" cy="105" r="4" fill="#8b4513" />
      <circle cx="65" cy="75" r="3" fill="#8b4513" />

      {/* Neck details */}
      <path
        d="M 40 20 Q 45 15 50 20 Q 55 15 60 20"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />
      <path
        d="M 40 40 Q 45 35 50 40 Q 55 35 60 40"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />
      <path
        d="M 40 60 Q 45 55 50 60 Q 55 55 60 60"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />

      {/* Body details/shading */}
      <path
        d="M 25 85 Q 35 75 40 75"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />
      <path
        d="M 75 85 Q 65 75 60 75"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />
    </svg>
  );
};

export const GiraffeLegs: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMin meet"
    >
      {/* Legs - made significantly thicker */}
      <rect x="23" y="0" width="14" height="85" fill="#e2c070" rx="4" />
      <rect x="63" y="0" width="14" height="85" fill="#e2c070" rx="4" />

      {/* Hooves */}
      <path
        d="M 23 85 C 23 90 30 95 37 95 C 42 95 37 90 37 85 Z"
        fill="#8b4513"
      />
      <path
        d="M 63 85 C 63 90 70 95 77 95 C 82 95 77 90 77 85 Z"
        fill="#8b4513"
      />

      {/* Spots on legs */}
      <circle cx="30" cy="20" r="4" fill="#8b4513" />
      <circle cx="30" cy="45" r="3" fill="#8b4513" />
      <circle cx="30" cy="70" r="4" fill="#8b4513" />

      <circle cx="70" cy="15" r="3" fill="#8b4513" />
      <circle cx="70" cy="40" r="4" fill="#8b4513" />
      <circle cx="70" cy="65" r="3" fill="#8b4513" />

      {/* Leg joint details */}
      <path
        d="M 23 40 C 28 38 32 38 37 40"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />
      <path
        d="M 63 40 C 68 38 72 38 77 40"
        fill="none"
        stroke="#d1af60"
        strokeWidth="1"
      />

      {/* Tail */}
      <path
        d="M 50 10 C 55 30 55 50 50 70"
        fill="none"
        stroke="#e2c070"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 50 70 C 48 80 52 85 50 90"
        fill="none"
        stroke="#8b4513"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
