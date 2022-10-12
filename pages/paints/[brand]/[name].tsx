import { Center, Container, Heading } from "@chakra-ui/react";
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
      <Link href={`../${brand as string}`}>
        <Heading size="4xl" sx={{ m: 4 }}>
          {slugifiedBrandMapping[brand as string]}
        </Heading>
      </Link>
      <Center pt={8}>
        <HeroSwatch {...paint} />
      </Center>
    </Container>
  );
};

export default Paints;
