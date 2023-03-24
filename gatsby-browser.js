import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./src/theme";

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>;
};

