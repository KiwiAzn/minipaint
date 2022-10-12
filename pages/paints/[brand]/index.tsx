import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { SwatchListItem } from "../../../libs/ui/SwatchListItem/SwatchListItem";
import { Paint, paintsByBrand, slugifiedBrandMapping } from "../../../paints";
import { slugify } from "../../../libs/utility/slugify";
import { Container, Typography, Stack } from "@mui/material";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(paintsByBrand).map((brand) => ({
      params: {
        brand: slugify(brand),
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
  const {
    query: { brand },
  } = useRouter();

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        {formattedBrand}
      </Typography>
      <Stack spacing={2} alignItems="stretch">
        {paints.map(({ name, color, range }) => {
          const href = `${brand}/${slugify(name)}`;

          return (
            <Link key={name} href={href}>
              <a>
                <SwatchListItem name={name} color={color} range={range} />
              </a>
            </Link>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Paints;
