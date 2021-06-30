import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import SolutionsHeader from '../../components/SolutionsHeader'
import SolutionsList from '../../containers/Solutions'
import { Wrapper } from '../../hoc/layout/styles'
import { setSolutionsList } from '../../services/solutions'
import { GetInTouchWrapper, Schema } from './styles'

const SolutionsPage = () => {
  useEffect(() => {
    setSolutionsList()
  }, [])

  return (
    <>
      <Wrapper>
        <SolutionsHeader />
      </Wrapper>
      {/* <Wrapper>
        <Schema />
      </Wrapper> */}
      <Wrapper>
        <SolutionsList />
      </Wrapper>
      <Wrapper>
        <GetInTouchWrapper>
          <span>
            <FormattedMessage id="solution_get_in_touch" />
          </span>
          <span>
            <a href="mailto:jpoumey@surfrider.eu?subject=Plastic origins" target="_top">
              email
            </a>
          </span>
        </GetInTouchWrapper>
      </Wrapper>
    </>
  )
}

SolutionsPage.propTypes = {}

export default SolutionsPage
