import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import { HeroSwatch } from "../../../libs/ui/HeroSwatch/HeroSwatch";
import {
  Paint,
  paintsByBrand,
  slugifiedBrandMapping,
  slugifiedBrandToPaintMapping,
} from "../../../paints";
import { slugify } from "../../../libs/utility/slugify";
import { getDeltaE00 } from "delta-e";
import { SwatchWithBrandListItem } from "../../../libs/ui/SwatchWithBrandListItem/SwatchWithBrandListItem";
import { convertHexToLab } from "../../../libs/utility/color";
import { Container, Grid, Stack, Typography } from "@mui/material";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.entries(paintsByBrand).flatMap(([brand, paints]) => {
      return paints.map(({ name }) => ({
        params: {
          brand: slugify(brand),
          name: slugify(name),
        },
      }));
    }),
    fallback: false,
  };
};

interface PaintParams extends ParsedUrlQuery {
  brand: string;
  name: string;
}

interface PaintProps {
  paint: Paint;
  similarPaints: PaintWithBrand[];
}

interface PaintWithBrand extends Paint {
  brand: string;
}

const deltaEThreshold = 10;

export const getStaticProps: GetStaticProps<PaintProps, PaintParams> = async ({
  params,
}) => {
  const { brand, name } = params ?? { brand: "", name: "" };

  const paint = slugifiedBrandToPaintMapping[brand][name];

  const paintsWithDeltaE: [number, PaintWithBrand][] = Object.entries(
    slugifiedBrandToPaintMapping
  )
    .flatMap(([currentBrand, paints]) =>
      Object.values(paints).map((currentPaint) => ({
        ...currentPaint,
        brand: slugifiedBrandMapping[currentBrand],
      }))
    )
    .map((otherPaint) => {
      const deltaE = getDeltaE00(
        convertHexToLab(paint.color),
        convertHexToLab(otherPaint.color)
      );
      return [deltaE, otherPaint];
    });

  const sortedSimilarPaints = paintsWithDeltaE
    .filter(([currentDeltaE]) => currentDeltaE < deltaEThreshold)
    .filter(
      ([, currentPaint]) =>
        currentPaint.name !== paint.name &&
        currentPaint.brand !== brand &&
        currentPaint.color !== paint.color
    )
    .sort(([a], [b]) => a - b)
    .map(([, similarPaint]) => similarPaint);

  return {
    props: { paint, similarPaints: sortedSimilarPaints },
  };
};

const Paints: NextPage<PaintProps> = ({ paint, similarPaints }) => {
  const {
    query: { brand },
  } = useRouter();

  return (
    <Container sx={{ mb: 8 }}>
      <Link href={`../${brand as string}`}>
        <Typography variant="h1" gutterBottom>
          {slugifiedBrandMapping[brand as string]}
        </Typography>
      </Link>
      <Stack alignItems="center" sx={{ pb: 4 }}>
        <HeroSwatch {...paint} />
      </Stack>
      <Typography variant="h2" gutterBottom>
        Similar paints
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {similarPaints.map(({ name, color, range, brand }) => {
          const href = `/paints/${slugify(brand)}/${slugify(name)}`;

          return (
            <Grid item key={name} xs={6}>
              <Link href={href}>
                <a>
                  <SwatchWithBrandListItem
                    brand={brand}
                    name={name}
                    color={color}
                    range={range}
                  />
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Paints;
