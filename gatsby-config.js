module.exports = {
  siteMetadata: {
    title: 'UltiToaster Website',
    description:
      'A website about the product UltiToaster that makes your life easier than what you even can imagine',
    siteUrl: 'https://www.ultitoaster.netlify.com',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'UltiToaster Website',
        short_name: 'UltiToaster',
        start_url: 'https://www.ultitoaster.netlify.com',
        display: 'standalone',
        icon: 'images/Logo.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
};
