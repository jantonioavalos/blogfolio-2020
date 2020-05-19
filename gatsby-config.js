module.exports = {
  siteMetadata: {
    title: `jantonioavalos | Blogfolio`,
    name: `Juan Antonio Avalos`,
    siteUrl: `https://jantonioavalos.com`,
    description: `Juan Antonio Avalos UX Portfolio.`,
    hero: {
      heading: `Hi. I'm Antonio! <br>
      And I can help you translating your business needs into value for your customers.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jantonioavalos/`,
      },
      {
        name: `github`,
        url: `https://github.com/jantonioavalos`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@jantonioavalos`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/jantonioavalos`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jantonioavalos`,
      },
      {
        name: `mailto`,
        url: `mailto:hey@jantonioavalos.com`,
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
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
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
  ],
};
