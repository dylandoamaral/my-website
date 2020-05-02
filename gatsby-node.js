const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const articleTemplate = path.resolve(`src/templates/article.js`)

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path,
                            hide
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.path[0] === "/") // Only create pages for articles from this blog
        .filter(({ node }) => node.frontmatter.hide !== true) // Only create pages for articles that are not hided
        .forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: articleTemplate,
                context: {},
            })
        })
}
