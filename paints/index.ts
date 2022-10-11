import gamesWorkshop from "./gamesWorkshop";

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
};
