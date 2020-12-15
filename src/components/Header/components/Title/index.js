import React from 'react'
import { Wrapper, TitlePrimary, TitleSecondary } from './styles.js'
import { string } from 'prop-types'

const Title = ({ label }) => (
  <Wrapper>
    <TitlePrimary>{label}</TitlePrimary>
    <TitleSecondary>{label}</TitleSecondary>
  </Wrapper>
)

Title.propTypes = {
  label: string,
}

Title.defaultProps = {
  label: null,
}

export default Title
