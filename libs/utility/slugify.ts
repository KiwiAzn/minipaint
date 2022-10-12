import slugifyPackage from "slugify";

const slugifyOptions = { lower: true };

export const slugify = (inputString: string) =>
  slugifyPackage(inputString, slugifyOptions);
