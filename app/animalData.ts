import { AnimalPart, AnimalParts } from "./types";

// Define our animal parts
export const animalParts: AnimalParts = {
  heads: [
    { name: "Lion", svg: "lion-head" },
    { name: "Elephant", svg: "elephant-head" },
    { name: "Giraffe", svg: "giraffe-head" },
    { name: "Penguin", svg: "penguin-head" },
    { name: "Crocodile", svg: "crocodile-head" },
  ],
  bodies: [
    { name: "Lion", svg: "lion-body" },
    { name: "Elephant", svg: "elephant-body" },
    { name: "Giraffe", svg: "giraffe-body" },
    { name: "Penguin", svg: "penguin-body" },
    { name: "Crocodile", svg: "crocodile-body" },
  ],
  legs: [
    { name: "Lion", svg: "lion-legs" },
    { name: "Elephant", svg: "elephant-legs" },
    { name: "Giraffe", svg: "giraffe-legs" },
    { name: "Penguin", svg: "penguin-legs" },
    { name: "Crocodile", svg: "crocodile-legs" },
  ],
};

// Generate a random name based on the parts
export const generateName = (
  head: AnimalPart,
  body: AnimalPart,
  legs: AnimalPart
): string => {
  // Take portions of each animal name and combine them
  const firstPart = head.name.substring(0, Math.ceil(head.name.length / 2));
  const middlePart = body.name.substring(0, Math.ceil(body.name.length / 3));
  const lastPart = legs.name.substring(legs.name.length / 2);

  return `${firstPart}${middlePart}${lastPart}`;
};

// Alternative app name suggestions
export const alternativeNames = [
  "AnimalMix",
  "CreatureCraft",
  "BeastBlender",
  "ZooFusion",
  "WildMorph",
  "MixiMals",
  "CreatureMash",
  "AnimalArtist",
  "BeastBuilder",
  "ZooMixer",
];
