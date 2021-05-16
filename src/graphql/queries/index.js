import { gql } from '@apollo/client'
import client from '../../../apollo-client'

export async function getSolutionsList() {
  const { data } = await client.query({
    query: gql`
      query Solutions {
        solutionCards {
          id
          title_fr
          title_en
        }
      }
    `,
  })

  return {
    solutionsList: data.solutionCards,
  }
}
