/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const gatsby_remark_image_wrapper = `
    margin: 20px auto;
  `;

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.dylandoamaral.me`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-151934237-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `dylandoamaral`,
                short_name: `dylandoamaral`,
                start_url: `/`,
                background_color: `#ECECEC`,
                theme_color: `#284739`,
                display: `standalone`,
                icon: `src/assets/images/icon.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/pages/articles`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            wrapperStyle: gatsby_remark_image_wrapper,
                            backgroundColor: "none",
                        },
                    },
                ],
            },
        },
    ],
};
