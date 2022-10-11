import { Box, Heading, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import { Paint, paintsByBrand } from "../../../paints";

const slugfiyOptions = { lower: true };

const slugifiedBrandMapping: Record<string, string> = Object.keys(
  paintsByBrand
).reduce(
  (previous, brand) => ({
    ...previous,
    [slugify(brand, slugfiyOptions)]: brand,
  }),
  {}
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(paintsByBrand).map((brand) => ({
      params: {
        brand: slugify(brand, slugfiyOptions),
      },
    })),
    fallback: false,
  };
};

interface PaintsByBrandParams extends ParsedUrlQuery {
  brand: string;
}

interface PaintsByBrandProps {
  formattedBrand: string;
  paints: Array<Paint>;
}

export const getStaticProps: GetStaticProps<
  PaintsByBrandProps,
  PaintsByBrandParams
> = async ({ params }) => {
  const { brand } = params ?? { brand: "" };
  const formattedBrand = slugifiedBrandMapping[brand];
  const paints = paintsByBrand[formattedBrand];
  return {
    props: { formattedBrand, paints }, // will be passed to the page component as props
  };
};

const Paints: NextPage<PaintsByBrandProps> = ({ formattedBrand, paints }) => {
  return (
    <Box>
      <Heading>{formattedBrand}</Heading>
      <Text>{JSON.stringify(paints)}</Text>
    </Box>
  );
};

export default Paints;
