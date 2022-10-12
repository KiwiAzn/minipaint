import { hex } from "color-convert";

export const convertHexToLab = (hexCode: string) => {
  const [L, A, B] = hex.lab(hexCode);
  return { L, A, B };
};
