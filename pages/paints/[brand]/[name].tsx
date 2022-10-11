import { Center, Container, Heading } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import { HeroSwatch } from "../../../libs/ui/HeroSwatch/HeroSwatch";
import { Paint, paintsByBrand } from "../../../paints";

const slugifyOptions = { lower: true };

const slugifiedBrandMapping: Record<string, string> = Object.keys(
  paintsByBrand
).reduce(
  (previous, brand) => ({
    ...previous,
    [slugify(brand, slugifyOptions)]: brand,
  }),
  {}
);

const slugifiedBrandToPaintMapping: Record<
  string,
  Record<string, Paint>
> = Object.entries(paintsByBrand).reduce(
  (previous, [brand, paints]) => ({
    ...previous,
    [slugify(brand, slugifyOptions)]: paints.reduce(
      (previousPaints, paint) => ({
        ...previousPaints,
        [slugify(paint.name, slugifyOptions)]: paint,
      }),
      {}
    ),
  }),
  {}
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.entries(paintsByBrand).flatMap(([brand, paints]) => {
      return paints.map(({ name }) => ({
        params: {
          brand: slugify(brand, slugifyOptions),
          name: slugify(name, slugifyOptions),
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
}

export const getStaticProps: GetStaticProps<PaintProps, PaintParams> = async ({
  params,
}) => {
  const { brand, name } = params ?? { brand: "", name: "" };

  const paints = slugifiedBrandToPaintMapping[brand];
  const paint = paints[name];

  return {
    props: { paint }, // will be passed to the page component as props
  };
};

const Paints: NextPage<PaintProps> = ({ paint }) => {
  const {
    query: { brand },
  } = useRouter();

  return (
    <Container maxW="container.lg">
      <Heading size="4xl" sx={{ m: 4 }}>
        {slugifiedBrandMapping[brand as string]}
      </Heading>
      <Center pt={8}>
        <HeroSwatch {...paint} />
      </Center>
    </Container>
  );
};

export default Paints;
