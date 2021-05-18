import React, { useState } from 'react'

import { getSolutionsList } from '../graphql/queries/index'
import Solutions from '../components/Solutions'

const SolutionsContainer = () => {
  const [solutionsList, setSolutionsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  getSolutionsList().then((res) => {
    setIsLoading(false)
    setSolutionsList(res.solutionsList)
  })

  return <Solutions isLoading={isLoading} solutionsList={solutionsList} />
}

export default SolutionsContainer
