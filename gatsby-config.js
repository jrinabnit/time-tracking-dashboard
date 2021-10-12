module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Time Tracking Dashboard",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    // local data
    {
      resolve: "gatsby-source-filesystem",
      options: {
        // name: `data`,
        path: `${__dirname}/src/assets/`,
      },
    },
    // enables to query json files
    "gatsby-transformer-json",
    // necessary to load images using gatsby-plugin-image
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
