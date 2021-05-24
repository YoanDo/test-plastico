import React from 'react'

import SolutionsHeader from '../../components/SolutionsHeader'
import SolutionsList from '../../containers/Solutions'
import { Wrapper } from '../../hoc/layout/styles'
import { Schema } from './styles'

const SolutionsPage = () => {
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
