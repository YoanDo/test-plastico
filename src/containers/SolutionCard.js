import React, { useEffect, useState } from 'react'

import { getSolutionCardById } from '../graphql/queries/index'
import SolutionCard from '../components/SolutionCard'
import { number, oneOfType, string } from 'prop-types'

const SolutionCardContainer = ({ selectedSolutionId }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const isUserFrench =
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined' &&
    navigator.language &&
    navigator.language.split(/[-_]/)[0] === 'fr'

  const lang = isUserFrench ? 'fr' : 'en'

  useEffect(() => {
    getSolutionCardById(selectedSolutionId).then((res) => {
      setIsLoading(false)
      setData(res)
    })
  }, [selectedSolutionId])

  if (!data || !lang) return 'empty'

  if (data?.[lang]) {
    const { title, description, intro, pdf, whatYouWillFind } = data[lang]

    return (
      <SolutionCard
        title={title}
        intro={intro}
        description={description}
        conclusion={whatYouWillFind}
        pdf={pdf}
        isLoading={isLoading}
      />
    )
  }

  // todo replace & display loading
  return null
}

SolutionCardContainer.propTypes = {
  selectedSolutionId: oneOfType([string, number]),
}

export default SolutionCardContainer
