import React from "react";
import { Box, useColorMode } from "native-base";

export function AppBackground({ children }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
      minHeight="100vh"
      justifyContent="center"
      px={4}
    >
      {children}
    </Box>
  );
}
