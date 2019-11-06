import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import { Title, Feature, Content } from "../styles/article.style"

import rehypeReact from "rehype-react"
import Caption from "../components/caption/caption"
import Aside from "../components/aside/aside"
import Game from "../components/game/game"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "thumb-caption": Caption,
                "aside-element": Aside,
                "fancy-demonstration": Game},
}).Compiler

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, htmlAst } = markdownRemark
    return (
        <Layout>
            <Title>{frontmatter.title}</Title>
            <Feature fixed={frontmatter.featuredImage.childImageSharp.fixed} alt="feature image" />
            <Content>{renderAst(htmlAst)}</Content>   
        </Layout>
    )
}

/**
  <Content
    dangerouslySetInnerHTML={{ __html: html }}
  />
 */


export const articleQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
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