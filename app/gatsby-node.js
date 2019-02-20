const path = require('path')

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise
    .then(result => ({ result, error: null }))
    .catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const workTemplate = path.resolve(`./src/templates/work.jsx`)

  const { error, result } = await wrapper(
    graphql(`
      {
        allStrapiWork {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `)
  )

  if (!error) {
    const works = result.data.allStrapiWork.edges

    works.forEach(work => {
      createPage({
        path: `/work/${work.node.slug}/`,
        component: workTemplate,
        context: {
          slug: work.node.slug,
        },
      })
    })

    return
  }

  console.log(error)
}
