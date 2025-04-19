import { ComponentMapType } from "../types";
import { LionHead, LionBody, LionLegs } from "./lion";
import { ElephantHead, ElephantBody, ElephantLegs } from "./elephant";
import { GiraffeHead, GiraffeBody, GiraffeLegs } from "./giraffe";
import { PenguinHead, PenguinBody, PenguinLegs } from "./penguin";
import { CrocodileHead, CrocodileBody, CrocodileLegs } from "./crocodile";

// Map of components for each animal part
export const componentMap: ComponentMapType = {
  "lion-head": LionHead,
  "elephant-head": ElephantHead,
  "giraffe-head": GiraffeHead,
  "penguin-head": PenguinHead,
  "crocodile-head": CrocodileHead,
  "lion-body": LionBody,
  "elephant-body": ElephantBody,
  "giraffe-body": GiraffeBody,
  "penguin-body": PenguinBody,
  "crocodile-body": CrocodileBody,
  "lion-legs": LionLegs,
  "elephant-legs": ElephantLegs,
  "giraffe-legs": GiraffeLegs,
  "penguin-legs": PenguinLegs,
  "crocodile-legs": CrocodileLegs,
};
