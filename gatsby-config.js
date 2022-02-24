const config = {
  siteMetadata: {
    title: "Your awesome design system",
    shortName: "Doctocat",
    description:
      "Lorem ipsum dolor sit amet, pri in legere perfecto elaboraret, ei vix volutpat pericula. Scripta dolores ex vel, nulla nostrum te qui, has erat ludus vitae eu. Modus iudico cotidieque usu cu, ullum assentior an usu. ",
    imageUrl:
      "https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png",
  },
  plugins: [
    {
      resolve: "@bridgetool/gatsby-theme-dev",
    },
  ],
}

// DO NOT REMOVE
// https://www.gatsbyjs.org/docs/path-prefix/
if (process.env.PATH_PREFIX) {
  config.pathPrefix = process.env.PATH_PREFIX
}

module.exports = config
