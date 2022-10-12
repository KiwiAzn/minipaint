import { Heading, Box, Text, HStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Paint } from "../../../paints";
import { Swatch } from "../Swatch/Swatch";

export interface SwatchProps extends Pick<Paint, "color" | "name" | "range"> {
  brand: string;
}

export const SwatchWithBrandListItem: FunctionComponent<SwatchProps> = ({
  color,
  name,
  range,
  brand,
}) => {
  return (
    <HStack borderWidth="1px">
      <Swatch color={color} size="md" />
      <Box p={4}>
        <Heading fontSize="xl">{brand}</Heading>
        <Heading fontSize="l">{name}</Heading>
        <Text>{range}</Text>
        <Text fontSize="sm">{color}</Text>
      </Box>
    </HStack>
  );
};
