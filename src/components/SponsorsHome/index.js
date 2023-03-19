import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import SponsorLogos from '../SponsorsLogo';
import { Wrapper } from '../../hoc/layout/styles';

const StyledWrapper = styled(Wrapper)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const SponsorsHome = ({ sponsors }) => (
  <StyledWrapper>
    <Title>
      <FormattedMessage id="our_partners" />
    </Title>
    <SponsorLogos sponsors={sponsors} isBlackAndWhite />
  </StyledWrapper>
);

SponsorsHome.propTypes = {
  sponsors: array
};

export default SponsorsHome;
