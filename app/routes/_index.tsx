/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from "react";
import { animalParts, generateName } from "../animalData";
import { AnimalPart } from "../types";
import AnimalPartRenderer from "../animals/part-renderer";
import "../animated-background.css"; // We'll create this file for the gradient animation

const App: React.FC = () => {
  const [currentHead, setCurrentHead] = useState<AnimalPart | null>(null);
  const [currentBody, setCurrentBody] = useState<AnimalPart | null>(null);
  const [currentLegs, setCurrentLegs] = useState<AnimalPart | null>(null);
  const [animalName, setAnimalName] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [bounceAnimation, setBounceAnimation] = useState<boolean>(false);

  // Function to randomize all parts
  const randomizeAll = useCallback(() => {
    setIsAnimating(true);
    triggerBounce();

    const newHead = getRandomPart(animalParts.heads);
    const newBody = getRandomPart(animalParts.bodies);
    const newLegs = getRandomPart(animalParts.legs);

    setCurrentHead(newHead);
    setCurrentBody(newBody);
    setCurrentLegs(newLegs);

    // Generate a new name
    const newName = generateName(newHead, newBody, newLegs);
    setAnimalName(newName);

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, []);

  // Initialize with random parts
  useEffect(() => {
    randomizeAll();
  }, [randomizeAll]);

  // Function to get random animal part
  const getRandomPart = (partArray: AnimalPart[]): AnimalPart => {
    const randomIndex = Math.floor(Math.random() * partArray.length);
    return partArray[randomIndex];
  };

  // Function to trigger bounce animation
  const triggerBounce = () => {
    setBounceAnimation(true);
    setTimeout(() => setBounceAnimation(false), 800);
  };

  // Function to randomize a specific part
  const randomizePart = (partType: "head" | "body" | "legs") => {
    setIsAnimating(true);
    setActiveSection(partType);

    let newHead = currentHead;
    let newBody = currentBody;
    let newLegs = currentLegs;

    if (partType === "head" && newHead) {
      newHead = getRandomPart(animalParts.heads);
      setCurrentHead(newHead);
    } else if (partType === "body" && newBody) {
      newBody = getRandomPart(animalParts.bodies);
      setCurrentBody(newBody);
    } else if (partType === "legs" && newLegs) {
      newLegs = getRandomPart(animalParts.legs);
      setCurrentLegs(newLegs);
    }

    // Generate a new name
    if (newHead && newBody && newLegs) {
      const newName = generateName(newHead, newBody, newLegs);
      setAnimalName(newName);
    }

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
      setActiveSection(null);
    }, 500);
  };

  const handleExportToPNG = () => {
    // This is where you could implement export functionality
    // For a full implementation, you would need to use html2canvas or a similar library
    alert("Export to PNG feature would save your creation as an image!");
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 gradient-background z-0"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-20 pt-4 pb-2 px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-3xl">
          Miximals
        </h1>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-white mr-4 drop-shadow-md hidden sm:block">
            {animalName || "Your Creature"}
          </h2>
          <button
            onClick={randomizeAll}
            className="py-2 px-3 bg-white bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg shadow-lg hover:bg-opacity-40 transition-all flex items-center justify-center border border-white border-opacity-40 text-sm sm:text-base"
          >
            <span className="mr-1 sm:mr-2">🎲</span>
            <span className="hidden sm:inline">Randomize All</span>
            <span className="sm:hidden">Randomize</span>
          </button>
        </div>
      </header>

      {/* Mobile-only animal name */}
      <div className="relative z-10 text-center sm:hidden">
        <h2 className="text-xl font-bold text-white drop-shadow-md">
          {animalName || "Your Creature"}
        </h2>
      </div>

      {/* Animal Display Area */}
      <div className="flex h-full justify-center relative z-10 pb-16 sm:pb-0">
        <div
          className={`relative w-full h-screen max-w-xl mx-auto px-4 sm:w-2/3 sm:h-2/3
            ${bounceAnimation ? "animate-bounce" : ""}
          `}
        >
          {/* Container that preserves aspect ratio */}
          <div className="relative w-full h-screen flex flex-col">
            {/* Head Section */}
            <div
              className={`w-full h-1/3 flex justify-center cursor-pointer
                ${activeSection === "head" ? "animate-pulse" : ""}
                ${isAnimating && !activeSection ? "animate-pulse" : ""}
                transition-all duration-300
              `}
              onClick={() => randomizePart("head")}
            >
              {currentHead && (
                <div className="w-full max-w-xs h-full relative flex flex-col items-center justify-end">
                  <AnimalPartRenderer svgKey={currentHead.svg} />

                  {/* Hover effect indicator */}
                  <div className="absolute inset-0 rounded-t-full transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                    <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-70 text-pink-600 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                        Change Head
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Body Section */}
            <div
              className={`w-full h-1/3 flex items-center justify-center cursor-pointer overflow-visible
                ${activeSection === "body" ? "animate-pulse" : ""}
                ${isAnimating && !activeSection ? "animate-pulse" : ""}
                transition-all duration-300
              `}
              onClick={() => randomizePart("body")}
            >
              {currentBody && (
                <div className="w-full max-w-xs h-full relative flex items-center justify-center">
                  <AnimalPartRenderer svgKey={currentBody.svg} />

                  {/* Hover effect indicator */}
                  <div className="absolute inset-0 transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                    <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-70 text-blue-600 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                        Change Body
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legs Section */}
            <div
              className={`w-full h-1/3 flex items-start justify-center cursor-pointer overflow-visible
                ${activeSection === "legs" ? "animate-pulse" : ""}
                ${isAnimating && !activeSection ? "animate-pulse" : ""}
                transition-all duration-300
              `}
              onClick={() => randomizePart("legs")}
            >
              {currentLegs && (
                <div className="w-full max-w-xs h-full relative flex items-start justify-center">
                  <div className="w-full h-full" style={{ maxHeight: "100%" }}>
                    <AnimalPartRenderer svgKey={currentLegs.svg} />
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute inset-0 rounded-b-full transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                    <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-70 text-green-600 px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                        Change Legs
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with controls - fixed at bottom with proper spacing */}
      <footer className="relative z-20 w-full pb-4 pt-2 flex justify-center gap-4 bg-gradient-to-t from-black to-transparent bg-opacity-20">
        <button
          onClick={randomizeAll}
          className="py-2 px-4 bg-white bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg shadow-lg hover:bg-opacity-40 transition-all flex items-center justify-center border border-white border-opacity-40"
        >
          <span className="mr-2">🦄</span> New Mix
        </button>

        <button
          onClick={handleExportToPNG}
          className="py-2 px-4 bg-white bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg shadow-lg hover:bg-opacity-40 transition-all flex items-center justify-center border border-white border-opacity-40"
        >
          <span className="mr-2">📷</span> Export
        </button>
      </footer>

      {/* Instruction overlay */}
      <div className="fixed bottom-20 left-4 bg-black bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-lg text-sm z-20 border border-white border-opacity-20 sm:bottom-4">
        Click on any part of the animal to change just that section!
      </div>
    </div>
  );
};

export default App;
