import { gql } from '@apollo/client'
import client from '../../../apollo-client'
import capitalize from '../../helpers/CapitalizeFirstLetterOfSentence'

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

export async function getSolutionCardById(selectedId) {
  const { data, error } = await client.query({
    query: gql`
      query SolutionCardById($selectedId: ID!) {
        solutionCard(id: $selectedId) {
          id
          created_at
          updated_at
          title_fr
          title_en
          intro_fr
          intro_en
          description_fr
          description_en
          sanitation_label
          wild_landfill_label
          other_label
          food_packaging_label
          cigarette_butts_label
          agricultural_label
          published_at
          pdf_en {
            url
          }
          pdf_fr {
            url
          }
          what_you_will_find_fr
          what_you_will_find_en
        }
      }
    `,
    variables: { selectedId: selectedId },
  })

  if (error) {
    console.log(error)
  }

  const {
    agricultural_label,
    cigarette_butts_label,
    description_en,
    description_fr,
    food_packaging_label,
    id,
    intro_en,
    intro_fr,
    other_label,
    what_you_will_find_en,
    what_you_will_find_fr,
    pdf_en,
    pdf_fr,
    sanitation_label,
    title_en,
    title_fr,
    wild_landfill_label,
  } = data.solutionCard

  return {
    id: id,
    fr: {
      title: capitalize(title_fr),
      intro: capitalize(intro_fr),
      description: description_fr,
      pdf: pdf_fr?.url,
      whatYouWillFind: what_you_will_find_fr,
    },
    en: {
      title: capitalize(title_en),
      intro: capitalize(intro_en),
      description: description_en,
      pdf: pdf_en?.url,
      whatYouWillFind: what_you_will_find_en,
    },
    label: {
      sanitation: sanitation_label,
      wildLandfill: wild_landfill_label,
      else: other_label,
      foodPackaging: food_packaging_label,
      cigaretteButts: cigarette_butts_label,
      agricultural: agricultural_label,
    },
  }
}
