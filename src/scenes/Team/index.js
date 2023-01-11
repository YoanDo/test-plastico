import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  HeaderWrapper,
  HeaderIntroWrapper,
  SponsorRow,
  PageTitle,
  SponsorLogo,
  SponsorsWrapper
} from './styles';
import Title from '../../components/Title';
import JoinUs from '../../components/JoinUs';
import { Wrapper } from '../../hoc/layout/styles';
import TeamMembers from '../../containers/TeamMembers';
import TeamVolunteers from '../../containers/TeamVolunteers';

const Team = () => {
  // images
  const gold1 = '/images/sponsors/gold/axa-logo-solid.png';

  const silver1 = '/images/sponsors/silver/ADEME-min.png';
  const silver2 = '/images/sponsors/silver/gobi-min.png';
  const silver3 = '/images/sponsors/silver/logo-macif-min.png';
  const silver4 = '/images/sponsors/silver/me-min.png';
  const silver5 = '/images/sponsors/silver/sogeti-min.png';

  const bronze1 = '/images/sponsors/bronze/natureDecouverte-min.png';
  const bronze2 = '/images/sponsors/bronze/dirm-min.png';

  const technical1 = '/images/sponsors/technical/Ecole-IA-min.png';
  const technical2 = '/images/sponsors/technical/Heuritech-min.png';
  const technical3 = '/images/sponsors/technical/Share-AI-min.png';

  const field1 = '/images/sponsors/field/DPPM-min.png';
  const field2 = '/images/sponsors/field/natureLibre-min.png';
  const field3 = '/images/sponsors/field/waterTrek-min.png';

  return (
    <>
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
        <TeamMembers />
        <TeamVolunteers />
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
          </SponsorRow>
        </SponsorsWrapper>
        <SponsorsWrapper>
          <span>🥈</span>
          <SponsorRow>
            <SponsorLogo url={silver1} />
            <SponsorLogo url={silver2} />
            <SponsorLogo url={silver3} />
            <SponsorLogo url={silver4} />
            <SponsorLogo url={silver5} />
          </SponsorRow>
        </SponsorsWrapper>
        <SponsorsWrapper>
          <span>🥉</span>
          <SponsorRow>
            <SponsorLogo url={bronze1} />
            <SponsorLogo url={bronze2} />
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
    </>
  );
};

export default Team;
