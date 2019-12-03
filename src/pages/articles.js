import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/global/layout/layout"

import { Wrapper, Preface, Cards } from "../styles/articles.style"
import { H1, P, Line } from "../styles/global.style"
import ArticleCard from "../components/article/article_card/article_card"

import { addUniqueIdToArray } from "../utils/array"

class Articles extends React.Component {
    render() {
        const articles = this.props.data.allMarkdownRemark.edges
        const themes = this.props.data.themes.edges

        return (
            <Layout page="articles">
                <Wrapper>
                    <Helmet
                        title="Mes articles | Dylan Do Amaral"
                        defer={false}
                    >
                        <meta
                            name="description"
                            content={
                                "Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
                            }
                        />
                    </Helmet>
                    <Preface>
                        <H1>Mes articles</H1>
                        <P>
                            Dans cette section, j'écris des articles sur des
                            choses qui m'amusent, qui me divertissent toujours
                            en rapport avec ma passion, la programmation.
                        </P>
                    </Preface>
                    <Line />
                    <Cards>
                        {addUniqueIdToArray(articles).map(article => {
                            return (
                                <ArticleCard
                                    first={article.value === articles[0]}
                                    title={article.value.node.frontmatter.title}
                                    key={article.uniqueId}
                                    path={article.value.node.frontmatter.path}
                                    description={
                                        article.value.node.frontmatter
                                            .description
                                    }
                                    date={article.value.node.frontmatter.date}
                                    featuredImage={
                                        article.value.node.frontmatter
                                            .featuredImage.childImageSharp.fixed
                                    }
                                    themesImage={addUniqueIdToArray(themes)
                                        .filter(theme =>
                                            article.value.node.frontmatter.tags.includes(
                                                theme.value.node.name
                                            )
                                        )
                                        .map(theme => {
                                            return {
                                                uniqueId: theme.uniqueId,
                                                value:
                                                    theme.value.node
                                                        .childImageSharp.fixed,
                                            }
                                        })}
                                />
                            )
                        })}
                    </Cards>
                </Wrapper>
            </Layout>
        )
    }
}

export default Articles

export const articlesQuery = graphql`
    query {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
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

        themes: allFile(
            filter: {
                extension: { regex: "/(jpg)|(jpeg)|(png)/" }
                relativeDirectory: { eq: "themes" }
            }
        ) {
            edges {
                node {
                    name
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
