import * as React from "react"
import { Box, Heading } from "@chakra-ui/react"
import Layout from "../components/layout"
import BlogList from "../components/bloglist"

const IndexPage = () => {
  return (
    <Layout>
      <Box>
        <Heading size="xl">Notes on Machine Intelligence</Heading>
        <br />
        <BlogList />
      </Box>
    </Layout>
  )
}

export default IndexPage
