import React from 'react';
import { array, string } from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import SponsorLogos from '../SponsorsLogo';

const CategoryWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  h1 {
    font-family: ${({ theme }) => theme.secondaryFF};
    font-size: ${({ theme }) => theme.thirdFS};
  }
`;

const SponsorsCategory = ({ category, sponsors }) => {
  const selectedSponsors = sponsors.filter(
    ({ category: cat }) => cat === category
  );

  if (!selectedSponsors.length) return null;

  return (
    <CategoryWrapper>
      <h1>
        <FormattedMessage id={category} />
      </h1>
      <SponsorLogos isBlackAndWhite={false} sponsors={selectedSponsors} />
    </CategoryWrapper>
  );
};

SponsorsCategory.propTypes = {
  sponsors: array,
  category: string
};

export default SponsorsCategory;
