/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `myszojelen.pl - strona poświęcona cudownemu zwierzęciu o nazwie Myszojeleń`,
    siteUrl: `https://myszojelen.pl`,
    description: `Naukowcy myśleli że wszystkie gatunek Myszojelenia już dawno wyginął. Byli jednak w błędzie, ponieważ Myszojelenie żyją!`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156522420-1",
        head: true,
      },
    },
  ],
}
