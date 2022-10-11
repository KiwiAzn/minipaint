import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import slugify from "slugify";
import { SwatchListItem } from "../../../libs/ui/SwatchListItem/SwatchListItem";
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
    <Container maxW="container.lg">
      <Heading size="4xl" sx={{ m: 4 }}>
        {formattedBrand}
      </Heading>
      <VStack spacing={2} alignItems="stretch">
        {paints.map(({ name, color, range }) => (
          <SwatchListItem key={name} name={name} color={color} range={range} />
        ))}
      </VStack>
    </Container>
  );
};

export default Paints;
