import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.fields.slug}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default BlogList
