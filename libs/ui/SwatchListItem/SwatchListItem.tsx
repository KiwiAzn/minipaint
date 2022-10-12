import { Box, Paper, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Paint } from "../../../paints";
import { Swatch } from "../Swatch/Swatch";

export interface SwatchProps extends Pick<Paint, "color" | "name" | "range"> {}

export const SwatchListItem: FunctionComponent<SwatchProps> = ({
  color,
  name,
  range,
}) => {
  return (
    <Stack component={Paper} direction="row">
      <Swatch color={color} size="md" />
      <Box p={2}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">{range}</Typography>
        <Typography variant="subtitle1">{color}</Typography>
      </Box>
    </Stack>
  );
};
