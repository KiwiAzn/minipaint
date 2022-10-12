import gamesWorkshop from "./gamesWorkshop";
import scale75 from "./scale75";
import { slugify } from "../utils/slugify";

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

export const slugifiedBrandMapping: Record<string, string> = Object.keys(
  paintsByBrand
).reduce(
  (previous, brand) => ({
    ...previous,
    [slugify(brand)]: brand,
  }),
  {}
);
export const slugifiedBrandToPaintMapping: Record<
  string,
  Record<string, Paint>
> = Object.entries(paintsByBrand).reduce(
  (previous, [brand, paints]) => ({
    ...previous,
    [slugify(brand)]: paints.reduce(
      (previousPaints, paint) => ({
        ...previousPaints,
        [slugify(paint.name)]: paint,
      }),
      {}
    ),
  }),
  {}
);
