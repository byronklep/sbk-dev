import { GraphQLClient, gql } from 'graphql-request'

export const getProjectsHome = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckr89n88816b401xxbzts6hr4/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      projects(first: 3, orderBy: date_DESC) {
        title
        slug
        category
        image {
          url
          height
          width
        }
        description
        links
        client
        date

        techStack
        infrastructure
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getProjects = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckr89n88816b401xxbzts6hr4/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      projects(orderBy: date_DESC) {
        title
        slug
        category
        image {
          url
          height
          width
        }
        description
        links
        client
        date

        techStack
        infrastructure
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getProject = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckr89n88816b401xxbzts6hr4/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getProject($slug: String!) {
      projects(where: { slug: $slug }) {
        title
        slug
        category
        image {
          url
          height
          width
        }
        description
        links
        client
        date
        summary
        techStack
        infrastructure
      }
    }
  `

  const variables = { slug }

  return await graphQLClient.request(query, variables)
}

export const getProjectSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckr89n88816b401xxbzts6hr4/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      projects {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getProjectCategories = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckr89n88816b401xxbzts6hr4/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      projects {
        category
      }
    }
  `

  return await graphQLClient.request(query)
}
