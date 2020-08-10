module.exports = {
  siteMetadata: {
    title: `jantonioavalos | Blogfolio`,
    name: `Juan Antonio Avalos`,
    siteUrl: `https://jantonioavalos.com`,
    description: `Juan Antonio Avalos UX Portfolio.`,
    hero: {
      heading: `Hi! I'm J. Antonio Avalos.<br>
      And I help businesses to create solutions that people can easily use.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `mailto`,
        url: `mailto:hey@jantonioavalos.com`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jantonioavalos/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/jantonioavalos`,
      },
      {
        name: `medium`,
        url: `https://uxdesign.cc/@jantonioavalos`,
      },
      {
        name: `github`,
        url: `https://github.com/jantonioavalos`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true, //Authors enable/disable
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blogfolio by jantonioavalos`,
        short_name: `jantonioavalos`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "XX-XXXXXXXXX-X",
      },
    },
  ],
};
