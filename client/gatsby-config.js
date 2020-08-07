/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `myszojelen.pl - strona poświęcona cudownemu zwierzęciu o nazwie Myszojeleń`,
    siteUrl: `https://myszojelen.pl`,
    description: `Naukowcy myśleli że gatunek Myszojelenia już dawno wyginął. Byli jednak w błędzie, ponieważ Myszojelenie żyją!`,
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
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: process.env.DB_NAME,
        collection: "comments",
        server: {
          address: process.env.DB_HOST,
          port: process.env.DB_PORT,
        },
        auth: {
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
      },
    },
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:5000",
  },
}
