import { Box, Paper, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Paint } from "../../../paints";
import { Swatch } from "../Swatch/Swatch";

export interface SwatchWithBrandListItemProps
  extends Pick<Paint, "color" | "name" | "range"> {
  brand: string;
}

export const SwatchWithBrandListItem: FunctionComponent<
  SwatchWithBrandListItemProps
> = ({ color, name, range, brand }) => {
  return (
    <Stack component={Paper} direction="row">
      <Swatch color={color} size="md" />
      <Box p={2}>
        <Typography variant="h5">{brand}</Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{range}</Typography>
      </Box>
    </Stack>
  );
};
