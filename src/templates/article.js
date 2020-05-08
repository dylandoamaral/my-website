import React from "react";
import { graphql } from "gatsby";
import Helmet from "../components/global/helmet/helmet";

import Layout from "../components/global/layout/layout";
import {
    Wrapper,
    Feature,
    Article,
    Title,
    Subtitle,
    Content,
    Back,
} from "../styles/article.style";
import { H2, H3, P, Span, A, Li } from "../styles/global.style";

import rehypeReact from "rehype-react";
import Aside from "../components/article/aside/aside";
import Horizontal from "../components/article/horizontal/horizontal";
import Callout from "../components/article/callout/callout";
import Caption from "../components/article/caption/caption";
import ProsCons from "../components/article/proscons/proscons";

import Game from "../components/article/game/game";

import info from "../configurations/info.json";
import { websiteSchema, meSchema } from "../configurations/schema";
import colors from "../configurations/colors.json";

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
        "pros-and-cons": ProsCons,

        // Special components
        "fancy-demonstration": Game,
    },
}).Compiler;

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, htmlAst } = markdownRemark;

    const title = `${frontmatter.title} | ${info.author}`;
    const image =
        "https://www.dylandoamaral.me" +
        frontmatter.featuredImage.childImageSharp.fixed.src;

    const dateArray = frontmatter.date.split("/");
    const date = new Date(dateArray[2], dateArray[1], dateArray[0]);

    const articleSchema = {
        "@content": frontmatter.path,
        "@type": "BlogPosting",
        headline: frontmatter.title,
        about: frontmatter.description,
        author: info.author,
        keywords: frontmatter.keywords,
        image: image,
        datePublished: date.toISOString(),
    };

    return (
        <Layout page="articles">
            <Helmet
                title={title}
                defer={false}
                author={info.author}
                description={frontmatter.description}
                keywords={frontmatter.keywords}
                url={frontmatter.path}
                image={image}
                type="article"
                schemas={[websiteSchema, meSchema, articleSchema]}
            />
            <Wrapper>
                <Feature
                    fixed={frontmatter.featuredImage.childImageSharp.fixed}
                    alt="feature image"
                />
            </Wrapper>
            <Article>
                <Title>{frontmatter.title}</Title>
                <Subtitle>{frontmatter.subtitle}</Subtitle>

                <Content>{renderAst(htmlAst)}</Content>
            </Article>
            <Back cover bg={colors.secondary} duration={0.8} to={"/articles/"}>
                Retour vers mes articles...
            </Back>
        </Layout>
    );
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
                subtitle
                keywords
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
`;
