import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/global/layout/layout"
import { Title, Wrapper, Feature, Content } from "../styles/article.style"
import { H2, H3, P, Span, A, Li } from "../styles/global.style"

import rehypeReact from "rehype-react"
import Aside from "../components/article/aside/aside"
import Horizontal from "../components/article/horizontal/horizontal"
import Callout from "../components/article/callout/callout"
import Caption from "../components/article/caption/caption"
import Game from "../components/article/game/game"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        // Normal components
        h1: H2,
        h2: H3,
        p: P,
        span: Span,
        a: A,
        li: Li,

        // Additional components
        "aside-element": Aside,
        "horizontal-element": Horizontal,
        "callout-element": Callout,
        "thumb-caption": Caption,

        // Special components
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
            >
                <meta
                    name="description"
                    content={
                        "Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
                    }
                />
            </Helmet>
            <Title>{frontmatter.title}</Title>
            <Wrapper>
                <Feature
                    fixed={frontmatter.featuredImage.childImageSharp.fixed}
                    alt="feature image"
                />
            </Wrapper>
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
