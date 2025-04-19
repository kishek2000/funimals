export interface AnimalPart {
  name: string;
  svg: string;
}

export interface AnimalParts {
  heads: AnimalPart[];
  bodies: AnimalPart[];
  legs: AnimalPart[];
}

export interface ComponentMapType {
  [key: string]: React.FC;
}
