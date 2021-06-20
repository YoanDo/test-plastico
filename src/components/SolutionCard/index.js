import React from 'react'
import { bool, string } from 'prop-types'

import { Text, SolutionCardWrapper, PreConclusion, LoaderWrapper } from './styles'
import Title from '../Title'
import theme from '../../assets/theme'
import Button from '../UI/Button'
import { FormattedMessage } from 'react-intl'
import Loader from '../UI/Loader'

const SolutionCard = ({ description, intro, title, conclusion, isLoading, pdfLink }) => {
  return (
    <SolutionCardWrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <Title color={theme.surfRiderBlue}>{title}</Title>
          {intro && <Text isIntro>{intro}</Text>}
          {description && <Text>{description}</Text>}
          {conclusion && (
            <PreConclusion>
              <FormattedMessage id="what_you_learn" />
            </PreConclusion>
          )}
          {conclusion && <Text>{conclusion}</Text>}
          {pdfLink && (
            <a target="_blank" href={pdfLink} rel="noreferrer">
              <Button label={'download_solution'} />
            </a>
          )}
        </>
      )}
    </SolutionCardWrapper>
  )
}

SolutionCard.propTypes = {
  conclusion: string,
  description: string,
  intro: string,
  isLoading: bool,
  pdfLink: string,
  title: string,
}

export default SolutionCard
