import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/global/layout/layout"

import { Wrapper, Preface, Description, Cards } from "../styles/articles.style"
import { H1 } from "../styles/global.style"
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
                        <meta name="author" content="Dylan Do Amaral" />
                        <meta property="og:type" content="website" />
                        <meta
                            name="title"
                            property="og:title"
                            content="Dylan Do Amaral"
                        />
                        <meta
                            name="description"
                            property="og:description"
                            content="Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
                        />
                        <meta
                            name="keywords"
                            content="dylan, dylan do amaral, do amaral, engineer, ingénieur, big data, ingénieur data, website, gatsby, date engineer, ingénieur de la donnée"
                        />

                        <meta
                            name="image"
                            property="og:image"
                            content="https://www.dylandoamaral.me/index/forest.jpg"
                        />

                        <meta
                            name="twitter:card"
                            content="summary_large_image"
                        />
                        <meta name="twitter:title" content="Dylan Do Amaral" />
                        <meta
                            name="twitter:description"
                            content="Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
                        />
                        <meta
                            name="twitter:image"
                            content="http://www.dylandoamaral.me/index/forest.jpg"
                        />
                    </Helmet>
                    <Preface>
                        <H1>Mes articles</H1>
                        <Description>
                            Dans cette section, j'écris des articles sur des
                            choses qui m'amusent, qui me divertissent toujours
                            en rapport avec ma passion, la programmation.
                        </Description>
                    </Preface>
                    <Cards>
                        {addUniqueIdToArray(articles).map((article, index) => {
                            return (
                                <ArticleCard
                                    key={article.uniqueId}
                                    even={index % 2 === 1 ? "true" : "false"}
                                    title={article.value.node.frontmatter.title}
                                    subtitle={
                                        article.value.node.frontmatter.subtitle
                                    }
                                    description={
                                        article.value.node.frontmatter
                                            .description
                                    }
                                    path={article.value.node.frontmatter.path}
                                    date={article.value.node.frontmatter.date}
                                    source={
                                        article.value.node.frontmatter.source
                                    }
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
                        subtitle
                        description
                        subtitle
                        date(formatString: "DD/MM/YYYY")
                        source
                        featuredImage {
                            childImageSharp {
                                fixed(width: 500) {
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
                        fixed(height: 20) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`
