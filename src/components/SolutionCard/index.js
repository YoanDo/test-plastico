import React from 'react'
import { bool, string } from 'prop-types'
import { Text, SolutionCardWrapper, PreConclusion } from './styles'
import Title from '../Title'
import theme from '../../assets/theme'
import Button from '../UI/Button'
import { FormattedMessage } from 'react-intl'

const SolutionCard = ({ description, intro, title, conclusion }) => {
  return (
    <SolutionCardWrapper>
      <Title color={theme.surfRiderBlue}>{title}</Title>
      {intro && <Text isIntro>{intro}</Text>}
      {description && <Text>{description}</Text>}
      {conclusion && (
        <PreConclusion>
          <FormattedMessage id="what_you_learn" />
        </PreConclusion>
      )}
      {conclusion && <Text>{conclusion}</Text>}
      {/* //todo condition  */}
      <Button label={'download_solution'} />
    </SolutionCardWrapper>
  )
}

SolutionCard.propTypes = {
  conclusion: string,
  description: string,
  intro: string,
  isLoading: bool,
  pdf: string,
  title: string,
}

export default SolutionCard
