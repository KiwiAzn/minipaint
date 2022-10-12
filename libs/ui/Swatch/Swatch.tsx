import { FunctionComponent } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export interface SwatchProps {
  size?: "sm" | "md" | "lg" | "xl";
  color: string;
}

const smInPixels = "64px";
const mdInPixels = "128px";
const lgInPixels = "256px";
const xlInPixels = "512px";

export const Swatch: FunctionComponent<SwatchProps> = ({ size, color }) => {
  const commonProps: BoxProps = {
    backgroundColor: color,
    display: "inline-block",
  };

  if (size === "sm") {
    return (
      <Box {...commonProps} sx={{ height: smInPixels, width: smInPixels }} />
    );
  }

  if (size === "lg") {
    return (
      <Box {...commonProps} sx={{ height: lgInPixels, width: lgInPixels }} />
    );
  }

  if (size === "xl") {
    return (
      <Box {...commonProps} sx={{ height: xlInPixels, width: xlInPixels }} />
    );
  }

  // Medium is default
  return (
    <Box {...commonProps} sx={{ height: mdInPixels, width: mdInPixels }} />
  );
};
