import React, { useEffect } from 'react'

import { setSolutionsDetails } from '../services/solutions'
import SolutionCard from '../components/SolutionCard'
import { number, oneOfType, string } from 'prop-types'
import { useSelector } from 'react-redux'
import { getSolutionById } from '../redux/selectors/solutions'

const SolutionCardContainer = ({ selectedSolutionId, lang }) => {
  const solution = useSelector((state) => getSolutionById(state, selectedSolutionId))
  const { isFullyLoaded } = solution
  useEffect(() => {
    if (!isFullyLoaded) return setSolutionsDetails(selectedSolutionId)
  }, [selectedSolutionId])

  const { title, intro, pdfLink } = solution[lang]
  const description = solution[lang].description || ''
  const whatYouWillFind = solution[lang].whatYouWillFind || ''

  return (
    <SolutionCard
      title={title}
      intro={intro}
      description={description}
      conclusion={whatYouWillFind}
      isLoading={!isFullyLoaded}
      pdfLink={pdfLink}
    />
  )
}

SolutionCardContainer.propTypes = {
  selectedSolutionId: oneOfType([string, number]),
  lang: string,
}

export default SolutionCardContainer
