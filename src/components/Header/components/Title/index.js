import React from 'react'
import { Wrapper, TitlePrimary, TitleSecondary } from './styles.js'

const Title = ({ label }) => (
  <Wrapper>
    <TitlePrimary>{label}</TitlePrimary>
    <TitleSecondary>{label}</TitleSecondary>
  </Wrapper>
)

export default Title
