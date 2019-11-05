import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import { Title, Feature, Content } from "../styles/article.style"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Title>{frontmatter.title}</Title>
            <Feature fixed={frontmatter.featuredImage.childImageSharp.fixed} alt="feature image" />
            <Content
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    )
}
export const articleQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        date(formatString: "DD/MM/YYYY")
        featuredImage {
            childImageSharp {
                fixed(width: 2000) {
                ...GatsbyImageSharpFixed
              }
            }
        }
      }
    }
  }
`