import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import { HeaderWrapper, HeaderIntroWrapper, SponsorRow, PageTitle, SponsorLogo, SponsorsWrapper } from './styles'
import Title from '../../components/Title'
import TeamList from '../../components/TeamList'
import JoinUs from '../../components/JoinUs'
import { Wrapper } from '../../hoc/layout/styles'

const Team = () => {
  //images
  const gold1 = require('../../assets/images/sponsors/gold/ADEME-min.png')
  const gold2 = require('../../assets/images/sponsors/gold/gobi-min.png')
  const gold3 = require('../../assets/images/sponsors/gold/logo-macif-min.png')
  const gold4 = require('../../assets/images/sponsors/gold/me-min.png')
  const gold5 = require('../../assets/images/sponsors/gold/sogeti-min.png')

  const silver1 = require('../../assets/images/sponsors/silver/actOutdoor-min.png')
  const silver2 = require('../../assets/images/sponsors/silver/aeroportNice-min.png')
  const silver3 = require('../../assets/images/sponsors/silver/dirm-min.png')

  const bronze1 = require('../../assets/images/sponsors/bronze/natureDecouverte-min.png')

  const technical1 = require('../../assets/images/sponsors/technical/Ecole-IA-min.png')
  const technical2 = require('../../assets/images/sponsors/technical/Heuritech-min.png')
  const technical3 = require('../../assets/images/sponsors/technical/Share-AI-min.png')

  const field1 = require('../../assets/images/sponsors/field/DPPM-min.png')
  const field2 = require('../../assets/images/sponsors/field/natureLibre-min.png')
  const field3 = require('../../assets/images/sponsors/field/waterTrek-min.png')

  return (
    <Fragment>
      <HeaderWrapper>
        <PageTitle>
          <FormattedMessage id="team_title_1" /> <br />
          <FormattedMessage id="team_title_2" />
        </PageTitle>
        <HeaderIntroWrapper>
          <span>
            <FormattedMessage id="team_intro_1" />
            <br />
            <br />
            <FormattedMessage id="team_intro_2" />
            <br />
            <FormattedMessage id="team_intro_3" />
          </span>
        </HeaderIntroWrapper>
      </HeaderWrapper>
      <Wrapper>
        <TeamList />
      </Wrapper>
      <JoinUs />
      <Wrapper>
        <Title>
          <FormattedMessage id="financial_partners" />
        </Title>
        <SponsorsWrapper>
          <span>🥇</span>
          <SponsorRow>
            <SponsorLogo url={gold1} />
            <SponsorLogo url={gold2} />
            <SponsorLogo url={gold3} />
            <SponsorLogo url={gold4} />
            <SponsorLogo url={gold5} />
          </SponsorRow>
        </SponsorsWrapper>
        <SponsorsWrapper>
          <span>🥈</span>
          <SponsorRow>
            <SponsorLogo url={silver1} />
            <SponsorLogo url={silver2} />
            <SponsorLogo url={silver3} />
          </SponsorRow>
        </SponsorsWrapper>
        <SponsorsWrapper>
          <span>🥉</span>
          <SponsorRow>
            <SponsorLogo url={bronze1} />
          </SponsorRow>
        </SponsorsWrapper>
      </Wrapper>
      <Wrapper>
        <Title>
          <FormattedMessage id="technical_partners" />
        </Title>
        <SponsorsWrapper>
          <SponsorRow>
            <SponsorLogo url={technical1} />
            <SponsorLogo url={technical2} />
            <SponsorLogo url={technical3} />
          </SponsorRow>
        </SponsorsWrapper>
      </Wrapper>
      <Wrapper>
        <Title>
          <FormattedMessage id="field_partners" />
        </Title>
        <SponsorRow>
          <SponsorLogo url={field1} />
          <SponsorLogo url={field2} />
          <SponsorLogo url={field3} />
        </SponsorRow>
      </Wrapper>
    </Fragment>
  )
}

export default Team
