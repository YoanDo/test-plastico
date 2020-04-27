import React, { Fragment } from 'react'
import { string, number } from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Fade from 'react-reveal/Fade'
import { GoalWrapper, Title } from './styles'

const Goal = ({ label, delay }) => (
  <GoalWrapper>
    <Fade bottom delay={delay}>
      <Fragment>
        <Title>
          <FormattedMessage id={`${label}_title`} />
        </Title>
        <p>
          <FormattedMessage id={`${label}_text`} />
        </p>
      </Fragment>
    </Fade>
  </GoalWrapper>
)

Goal.propTypes = {
  label: string,
  delay: number,
}

Goal.defaultProps = {
  label: null,
  delay: 0,
}

export default Goal
