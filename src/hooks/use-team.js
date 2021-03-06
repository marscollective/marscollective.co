import { graphql, useStaticQuery } from 'gatsby'

export default function useTeam() {
  const {
    team: { edges }
  } = useStaticQuery(graphql`
    query {
      team: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "team-member" } } }
      ) {
        edges {
          node {
            frontmatter {
              bio {
                en
                es
                pt
              }
              image {
                childImageSharp {
                  fluid(maxWidth: 160, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              name
              position {
                en
                es
                pt
              }
              social {
                label
                url
              }
            }
          }
        }
      }
    }
  `)
  return edges
}
