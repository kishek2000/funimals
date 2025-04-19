import React from "react";
import { componentMap } from "./component-map";

interface AnimalPartRendererProps {
  svgKey: string;
}

// Render the correct component based on the svg property
const AnimalPartRenderer: React.FC<AnimalPartRendererProps> = ({ svgKey }) => {
  const Component = componentMap[svgKey];
  return Component ? <Component /> : null;
};

export default AnimalPartRenderer;
