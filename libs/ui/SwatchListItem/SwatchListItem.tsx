import { Heading, Box, Text, HStack } from "@chakra-ui/react";
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
    <HStack borderWidth="1px">
      <Swatch color={color} size="medium" />
      <Box p={4}>
        <Heading fontSize="xl">{name}</Heading>
        <Text>{range}</Text>
        <Text>{color}</Text>
      </Box>
    </HStack>
  );
};
