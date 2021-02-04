import React from "react";
import { graphql } from "gatsby";

import Helmet from "../components/global/helmet/helmet";
import Layout from "../components/global/layout/layout";

import { Wrapper, Preface, Description, Cards } from "../styles/articles.style";
import { H1 } from "../styles/global.style";
import ArticleCard from "../components/article/article_card/article_card";

import { addUniqueIdToArray } from "../utils/array";

import info from "../configurations/info.json";
import { websiteSchema, meSchema } from "../configurations/schema";

const description =
    "Dans cette section, j'écris des articles sur des choses qui m'amusent, qui me divertissent toujours en rapport avec ma passion, la programmation.";

class Articles extends React.Component {
    render() {
        const articles = this.props.data.allMarkdownRemark.edges;
        const themes = this.props.data.themes.edges;

        return (
            <Layout page="articles">
                <Wrapper>
                    <Helmet
                        author={info.author}
                        description={description}
                        keywords={info.keywords}
                        url="https://www.dylan.doamaral.dev/articles"
                        image="http://www.dylan.doamaral.dev/index/taiwan.jpg"
                        type="website"
                        schemas={[websiteSchema, meSchema]}
                    />
                    <Preface>
                        <H1>Mes articles</H1>
                        <Description>{description}</Description>
                    </Preface>
                    <Cards>
                        {articles
                            .filter(
                                article =>
                                    article.node.frontmatter.hide !== true
                            )
                            .map((article, index) => {
                                let articleData = article.node.frontmatter;
                                return (
                                    <ArticleCard
                                        key={index}
                                        even={
                                            index % 2 === 1 ? "true" : "false"
                                        }
                                        title={articleData.title}
                                        subtitle={articleData.subtitle}
                                        description={articleData.description}
                                        path={articleData.path}
                                        date={articleData.date}
                                        minutes={article.node.fields.readingTime.minutes}
                                        source={articleData.source}
                                        featuredImage={
                                            articleData.featuredImage
                                                .childImageSharp.fixed
                                        }
                                        themesImage={addUniqueIdToArray(themes)
                                            .filter(theme =>
                                                articleData.tags.includes(
                                                    theme.value.node.name
                                                )
                                            )
                                            .map(theme => {
                                                return {
                                                    uniqueId: theme.uniqueId,
                                                    value:
                                                        theme.value.node
                                                            .childImageSharp
                                                            .fixed,
                                                };
                                            })}
                                    />
                                );
                            })}
                    </Cards>
                </Wrapper>
            </Layout>
        );
    }
}

export default Articles;

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
                        hide
                    }
                    fields {
                        readingTime {
                            minutes
                        }
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
`;
