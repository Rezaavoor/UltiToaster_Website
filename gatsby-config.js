module.exports = {
  siteMetadata: {
    title: 'UltiToaster Website',
    description:
      'A website about the product UltiToaster that makes your life easier than what you even can imagine',
  },
  plugins: ['gatsby-plugin-emotion',
   'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'images',
        path: 'images'
      }
    }],
};
