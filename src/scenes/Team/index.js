import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import { HeaderWrapper, HeaderIntroWrapper, Sponsors, Title } from './styles'
import TeamList from '../../components/TeamList'
import JoinUs from '../../components/JoinUs'
import { Wrapper } from '../../hoc/layout/styles'

const Team = () => (
  <Fragment>
    <HeaderWrapper>
      <Title>
        <FormattedMessage id="team_title_1" /> <br />
        <FormattedMessage id="team_title_2" />
      </Title>
      <HeaderIntroWrapper>
        <span>
          <FormattedMessage id="team_intro_1" />
          <br /><br />
          <FormattedMessage id="team_intro_2" />
          <br />
          <FormattedMessage id="team_intro_3" />
        </span>
      </HeaderIntroWrapper>
    </HeaderWrapper>
    <Sponsors />
    <JoinUs />
    <Wrapper>
      <TeamList />
    </Wrapper>
  </Fragment>
)

export default Team
