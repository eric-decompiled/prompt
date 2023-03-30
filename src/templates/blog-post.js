import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Box>
        <strong>{post.frontmatter.date}</strong>
        <Heading as="h1">{post.frontmatter.title}</Heading>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
