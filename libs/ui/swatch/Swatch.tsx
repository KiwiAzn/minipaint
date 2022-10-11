import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";

export interface SwatchProps {
  size?: "small" | "medium" | "large";
  color: string;
}

const smallInPixels = 64;
const mediumInPixels = 128;
const largeInPixels = 256;

export const Swatch: FunctionComponent<SwatchProps> = ({
  size = "medium",
  color,
}) => {
  if (size === "small") {
    return (
      <Box
        backgroundColor={color}
        height={smallInPixels}
        width={smallInPixels}
      />
    );
  }

  if (size === "large") {
    return (
      <Box
        backgroundColor={color}
        height={largeInPixels}
        width={largeInPixels}
      />
    );
  }

  // Medium is default
  return (
    <Box
      backgroundColor={color}
      height={mediumInPixels}
      width={mediumInPixels}
    />
  );
};
