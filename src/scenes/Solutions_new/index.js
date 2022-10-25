import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import SolutionsHeader from '../../components/SolutionsHeader'
import BlogList from '../../containers/BlogList'
import SolutionsList from '../../containers/Solutions'
import { Wrapper } from '../../hoc/layout/styles'
import { getAllPosts } from '../../services/posts'
import { setSolutionsList } from '../../services/solutions'
import { GetInTouchWrapper, Schema } from './styles'

const SolutionsPage = () => {
  useEffect(() => {
    setSolutionsList()
    getAllPosts()
  }, [])

  return (
    <>
      <Wrapper>
        <SolutionsHeader />
      </Wrapper>
      <Wrapper>
        <BlogList />
        {/* <SolutionsList /> */}
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
