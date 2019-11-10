import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout/layout"

import { Preface } from "../styles/articles.style"
import { Line } from "../styles/global.style"
import ArticleCard from "../components/article_card/article_card"

import { addUniqueIdToArray } from "../utils/array"

class Articles extends React.Component {
  render() {
    const articles = this.props.data.allMarkdownRemark.edges;
    const themes = this.props.data.themes.edges;

    return (
      <Layout>
        <Helmet title="Mes articles | Dylan Do Amaral" defer={false} />
        <Preface>
          <h1>Mes articles</h1>
          <p>Dans cette section, j'écris des articles sur des choses qui m'amusent,
                    qui me divertissent toujours en rapport avec ma passion, la programmation.</p>
        </Preface>
        <Line />
        {addUniqueIdToArray(articles).map(article => {
          return (
            <ArticleCard 
              title={article.value.node.frontmatter.title}
              key={article.uniqueId}
              path={article.value.node.frontmatter.path}
              description={article.value.node.frontmatter.description}
              date={article.value.node.frontmatter.date}
              featuredImage={article.value.node.frontmatter.featuredImage.childImageSharp.fixed}
              themesImage={addUniqueIdToArray(themes)
                .filter(theme => article.value.node.frontmatter.tags.includes(theme.value.node.name))
                .map(theme => { 
                  return {uniqueId: theme.uniqueId, value: theme.value.node.childImageSharp.fixed}
                })}
            />
          )
        }
        )}
      </Layout>
    )
  }
}

export default Articles;

export const articlesQuery = graphql`
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

    themes: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "themes"}}) {
      edges {
        node {
          name,
          childImageSharp {
            fixed(width: 20, height: 20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`