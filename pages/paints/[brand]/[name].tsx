import { Center, Container, Heading, SimpleGrid } from "@chakra-ui/react";
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
import { slugify } from "../../../utils/slugify";
import { getDeltaE00 } from "delta-e";
import { SwatchWithBrandListItem } from "../../../libs/ui/SwatchWithBrandListItem/SwatchWithBrandListItem";
import { convertHexToLab } from "../../../utils/color";

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
    <Container maxW="container.lg" sx={{ mb: 8 }}>
      <Link href={`../${brand as string}`}>
        <Heading size="4xl" sx={{ m: 4 }}>
          {slugifiedBrandMapping[brand as string]}
        </Heading>
      </Link>
      <Center sx={{ pt: 8, pb: 8 }}>
        <HeroSwatch {...paint} />
      </Center>
      <Heading size="3xl" sx={{ m: 4 }}>
        Similar paints
      </Heading>
      <SimpleGrid columns={2} spacing={2} alignItems="stretch">
        {similarPaints.map(({ name, color, range, brand }) => {
          const href = `/paints/${slugify(brand)}/${slugify(name)}`;

          return (
            <Link key={name} href={href}>
              <a>
                <SwatchWithBrandListItem
                  brand={brand}
                  name={name}
                  color={color}
                  range={range}
                />
              </a>
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Paints;
