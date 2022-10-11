import { Heading, Box, Text } from "@chakra-ui/react";
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
    <Box shadow="md" borderWidth="1px" display="inline-block">
      <Swatch color={color} size="large" />
      <Box p={4}>
        <Heading fontSize="xl">{name}</Heading>
        <Text>{range}</Text>
        <Text>{color}</Text>
      </Box>
    </Box>
  );
};
