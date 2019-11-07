import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

import { Preface } from "../styles/articles.style"
import { Line } from "../styles/global.style"
import ArticleCard from "../components/article_card/article_card"

class Articles extends React.Component {
    render() {
        const articles = this.props.data.allMarkdownRemark.edges

        return (
            <Layout>
                <Preface>
                    <h1>Mes articles</h1>
                    <p>Dans cette section, j'écris des articles sur des choses qui m'amusent,
                    qui me divertissent toujours en rapport avec ma passion, la programmation.</p>
                </Preface>
                <Line />
                {articles.map(article => (
                    <ArticleCard title={article.node.frontmatter.title}
                        path={article.node.frontmatter.path}
                        description={article.node.frontmatter.description}
                        date={article.node.frontmatter.date}
                        featuredImage={article.node.frontmatter.featuredImage.childImageSharp.fixed}
                        tags={article.node.frontmatter.tags}
                    />
                ))}
            </Layout>
        )
    }
}

export default Articles;

export const articleQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
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
            tags
          }
        }
      }
    }
  }
`