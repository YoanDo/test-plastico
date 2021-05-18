import React, { useEffect, useState } from 'react'

import { getSolutionCardById } from '../graphql/queries/index'
import SolutionCard from '../components/SolutionCard'
import { string } from 'prop-types'

const SolutionCardContainer = ({ selectedSolutionId }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getSolutionCardById(selectedSolutionId).then((res) => {
      setIsLoading(false)
      setData(res)
    })
  }, [selectedSolutionId])

  return <SolutionCard data={data} isLoading={isLoading} />
}

SolutionCardContainer.propTypes = {
  selectedSolutionId: string,
}

export default SolutionCardContainer
