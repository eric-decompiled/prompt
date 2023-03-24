import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./src/theme"

import initClipboard from "./src/copy-to-clipboard"
import wrapCodeBlocks from "./src/wrap-code-blocks"
import "prismjs/themes/prism.css"

export const onRouteUpdate = () => {
  initClipboard()
  wrapCodeBlocks()
}

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}
