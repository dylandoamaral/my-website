import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout/layout"
import { Title, Feature, Content, H1 } from "../styles/article.style"

import rehypeReact from "rehype-react"
import Aside from "../components/aside/aside"
import Horizontal from "../components/horizontal/horizontal"
import Callout from "../components/callout/callout"
import Caption from "../components/caption/caption"
import Game from "../components/game/game"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "aside-element": Aside,
        "horizontal-element": Horizontal,
        "callout-element": Callout,
        "thumb-caption": Caption,

        h1: H1,

        "fancy-demonstration": Game,
    },
}).Compiler

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, htmlAst } = markdownRemark
    return (
        <Layout page="articles">
            <Helmet
                title={frontmatter.title + " | Dylan Do Amaral"}
                defer={false}
            />
            <Title>{frontmatter.title}</Title>
            <Feature
                fixed={frontmatter.featuredImage.childImageSharp.fixed}
                alt="feature image"
            />
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
