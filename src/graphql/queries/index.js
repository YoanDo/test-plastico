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
          wind_label
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
          pdf_content_fr
          pdf_content_en
        }
      }
    `,
    variables: { selectedId: selectedId },
  })

  if (error) {
    console.log(error)
  }

  const {
    id,
    title_fr,
    intro,
    description_fr,
    pdf_fr,
    title_en,
    description_en,
    pdf_en,
    sanitation_label,
    wild_landfill_label,
    wind_label,
    food_packaging_label,
    cigarette_butts_label,
    agricultural_label,
    pdf_content_fr,
    pdf_content_en,
  } = data.solutionCard

  return {
    id: id,
    fr: {
      title: title_fr,
      intro: intro,
      description: description_fr,
      pdf: pdf_fr?.url,
      pdfContent: pdf_content_fr,
    },
    en: {
      title: title_en,
      description: description_en,
      pdf: pdf_en?.url,
      pdfContent: pdf_content_en,
    },
    label: {
      sanitation: sanitation_label,
      wildLandfill: wild_landfill_label,
      wind: wind_label,
      foodPackaging: food_packaging_label,
      cigaretteButts: cigarette_butts_label,
      agricultural: agricultural_label,
    },
  }
}
