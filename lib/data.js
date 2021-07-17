import { GraphQLClient, gql } from 'graphql-request'

export const getProjects = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckr89n88816b401xxbzts6hr4/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      projects {
        title
        slug
        image {
          url
          height
          width
        }
        description
        links
        client
        date
        summary {
          html
        }
        techStack
        infrastructure
      }
    }
  `

  return await graphQLClient.request(query)
}
