module.exports = {
  siteMetadata: {
    siteTitle: `Mushroom Parallax`,
    siteDescription: `Device Orientation Experiment with Gatsby.`,
    siteKeywords: `Ayaos`,
    siteUrl: `https://mushroom-parallax.netlify.app/`,
    ogpImage: `/images/img_ogp.jpg`,
    author: `Ayaos`,
    social: {
      twitter: `ayanaosawa`,
      instagram: `ayaos_eats`,
      linkedin: `ayana-osawa-22b623b`,
      github: `Ayana`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#222`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
