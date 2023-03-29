import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: props => ({
      body: {
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.5",
        color: props.colorMode === "dark" ? "brand.100" : "brand.900",
        bg: props.colorMode === "dark" ? "brand.900" : "brand.100",
      },
      a: {
        color:
          props.colorMode === "dark"
            ? "blue.300 !important"
            : "blue.700 !important",
        textDecoration: "underline !important",
        cursor: "auto",
        fontWeight: "medium",
        _hover: {
          textDecoration: "underline",
          cursor: "pointer",
          color:
            props.colorMode === "dark"
              ? "blue.100 !important"
              : "blue.900 !important",
        },
      },
      h1: {
        fontSize: "3xl",
      },
      h2: {
        fontSize: "2xl",
      },
      h3: {
        fontSize: "xl",
      },
      h4: {
        fontSize: "lg",
      },
    }),
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
    CopyToClipboardButton: {
      baseStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        padding: "4px 8px",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        color: "white",
        fontSize: "0.8em",
        cursor: "pointer",
        border: "none",
        zIndex: 1,
        _hover: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      },
    },
  },
})

export default theme
