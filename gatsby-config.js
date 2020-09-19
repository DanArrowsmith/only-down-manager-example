require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Only Down`,
    description: `Get down with Down.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // This plugin lets me access environment variables that
      // aren't prefixed with Gatsby. This allows me to use
      // Shopify-related variables in the context setup script.
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["SHOP_NAME", "SHOP_TOKEN"],
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOP_TOKEN,
      },
    },
    "gatsby-plugin-theme-ui",
    `gatsby-theme-style-guide`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`, 
        // This path is relative to the root of the site.
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/images/icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/images/icon.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],  
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
        options: {
          devMode: true,
      },
    },
  `gatsby-plugin-offline`,
  ],
}