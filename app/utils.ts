import { CSSProperties } from "react";

// Height adjustment to handle object fit
export const getContainFitStyle = (
  partType: "head" | "body" | "legs"
): CSSProperties => {
  const baseStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "flex",
  };

  // Customize alignments per part type
  if (partType === "head") {
    return {
      ...baseStyle,
      alignItems: "flex-end",
      justifyContent: "center",
    };
  } else if (partType === "body") {
    return {
      ...baseStyle,
      alignItems: "center",
      justifyContent: "center",
    };
  } else if (partType === "legs") {
    return {
      ...baseStyle,
      alignItems: "flex-start",
      justifyContent: "center",
    };
  }

  return baseStyle;
};
