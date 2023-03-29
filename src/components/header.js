import {
  Box,
  Heading,
  Link,
  Flex,
  IconButton,
  useColorMode,
} from "@chakra-ui/react"
import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { FaMoon, FaSun } from "react-icons/fa"

const Header = props => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as="header"
      bg={colorMode === "dark" ? "blue.800" : "blue.600"}
      py={4}
      px={6}
    >
      <Flex
        as="nav"
        maxW="container.xl"
        mx="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="2xl" flexGrow={1}>
          <Link
            as={GatsbyLink}
            to="/"
            textDecoration="none !important"
            color="white !important"
            _hover={{ textDecoration: "underline", color: "blue.300" }}
          >
            {props.siteTitle}
          </Link>
        </Heading>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          colorScheme="whiteAlpha"
          onClick={toggleColorMode}
          ml={4}
        />
      </Flex>
    </Box>
  )
}

export default Header
