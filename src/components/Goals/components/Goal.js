import React, { Fragment } from 'react'
import { string } from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { GoalWrapper, Title } from './styles'

const Goal = ({ label }) => (
  <GoalWrapper>
    <Fragment>
      <Title>
        <FormattedMessage id={`${label}_title`} />
      </Title>
      <p>
        <FormattedMessage id={`${label}_text`} />
      </p>
    </Fragment>
  </GoalWrapper>
)

Goal.propTypes = {
  label: string,
}

Goal.defaultProps = {
  label: null,
}

export default Goal
