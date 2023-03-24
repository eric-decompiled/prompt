import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "light",
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
        color: props.colorMode === "dark" ? "blue.300" : "blue.600",
        fontWeight: "medium",
        _hover: {
          textDecoration: "underline",
          color: props.colorMode === "dark" ? "blue.100" : "blue.900",
        },
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
    Heading: {
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
