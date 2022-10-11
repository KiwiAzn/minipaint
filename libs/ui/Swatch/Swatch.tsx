import { FunctionComponent } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export interface SwatchProps {
  size?: "small" | "medium" | "large";
  color: string;
}

const smallInPixels = "64px";
const mediumInPixels = "128px";
const largeInPixels = "256px";

export const Swatch: FunctionComponent<SwatchProps> = ({ size, color }) => {
  const commonProps: BoxProps = {
    backgroundColor: color,
    display: "inline-block",
  };

  if (size === "small") {
    return (
      <Box
        {...commonProps}
        sx={{ height: smallInPixels, width: smallInPixels }}
      />
    );
  }

  if (size === "large") {
    return (
      <Box
        {...commonProps}
        sx={{ height: largeInPixels, width: largeInPixels }}
      />
    );
  }

  // Medium is default
  return (
    <Box
      {...commonProps}
      sx={{ height: mediumInPixels, width: mediumInPixels }}
    />
  );
};
