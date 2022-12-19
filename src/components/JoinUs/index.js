import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SponsorsWrapper } from './styles';
import { Wrapper } from '../../hoc/layout/styles';
import Button from '../UI/Button';

const JoinUs = () => (
  <SponsorsWrapper>
    <Wrapper>
      <span>
        <FormattedMessage id="join_team_1" />
        <br />
        <FormattedMessage id="join_team_2" />
      </span>
      <a href="mailto:plasticorigins@surfrider.eu">
        <Button label="join_team_cta" negative />
      </a>
    </Wrapper>
  </SponsorsWrapper>
);

export default JoinUs;
