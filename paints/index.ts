import gamesWorkshop from "./gamesWorkshop";
import scale75 from "./scale75";

export type PaintFinish = "Matte" | "Satin" | "Gloss" | "Metallic" | "String";

export interface Paint {
  name: string;
  range?: string;
  color: string;
  finish: PaintFinish;
}

export const allPaints = [...gamesWorkshop];

export const paintsByBrand: Record<string, Array<Paint>> = {
  "Games Workshop": gamesWorkshop,
  Scale75: scale75,
};
