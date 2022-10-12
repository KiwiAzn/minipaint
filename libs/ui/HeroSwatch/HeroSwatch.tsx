import { Box, Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Paint } from "../../../paints";
import { Swatch } from "../Swatch/Swatch";

export interface SwatchProps extends Paint {}

export const HeroSwatch: FunctionComponent<SwatchProps> = ({
  color,
  name,
  range,
}) => {
  return (
    <Paper>
      <Swatch color={color} size="xl" />
      <Box p={4}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{range}</Typography>
        <Typography variant="subtitle1">{color}</Typography>
      </Box>
    </Paper>
  );
};
