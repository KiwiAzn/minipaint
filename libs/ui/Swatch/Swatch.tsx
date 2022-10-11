import { FunctionComponent } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

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
  const commonProps: BoxProps = {
    backgroundColor: color,
    display: "inline-block",
  };

  if (size === "small") {
    return (
      <Box {...commonProps} height={smallInPixels} width={smallInPixels} />
    );
  }

  if (size === "large") {
    return (
      <Box {...commonProps} height={largeInPixels} width={largeInPixels} />
    );
  }

  // Medium is default
  return (
    <Box {...commonProps} height={mediumInPixels} width={mediumInPixels} />
  );
};
