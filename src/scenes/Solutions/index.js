import React, { useEffect } from 'react'

import SolutionsHeader from '../../components/SolutionsHeader'
import SolutionsList from '../../containers/Solutions'
import { Wrapper } from '../../hoc/layout/styles'
import { setSolutionsList } from '../../services/solutions'
import { Schema } from './styles'

const SolutionsPage = () => {
  useEffect(() => {
    setSolutionsList()
  }, [])

  return (
    <>
      <SolutionsHeader />
      <Wrapper>
        <Schema />
      </Wrapper>
      <Wrapper>
        <SolutionsList />
      </Wrapper>
    </>
  )
}

SolutionsPage.propTypes = {}

export default SolutionsPage
