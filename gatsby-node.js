exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(``)
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
