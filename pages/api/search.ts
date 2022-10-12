// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { allPaints } from "../../paints";
import Fuse from "fuse.js";

const fuseOptions = {
  minMatchCharacterLength: 3,
  keys: ["name", "range"],
};

const paints = new Fuse(allPaints, fuseOptions);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  const result = paints.search(query as string);

  res.status(200).json(result);
}
