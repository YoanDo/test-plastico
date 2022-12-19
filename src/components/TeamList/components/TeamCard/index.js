import React from 'react';
import { string } from 'prop-types';

import { useIntl } from 'react-intl';
import {
  Color,
  IdentityRow,
  Picture,
  PictureWrapper,
  Position,
  Wrapper
} from './styles';

const TeamCard = ({ link, name, position, surname }) => {
  const imageLink = `/images/team_profiles/${name}${surname}.jpg`;
  const positionTrad = useIntl().formatMessage({ id: position });
  if (!imageLink && !positionTrad) return null;

  return (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer">
      <PictureWrapper>
        <Picture backgroundUrl={imageLink} />
        <Color />
      </PictureWrapper>
      <IdentityRow>
        <span>{name}</span>
        <span>{surname}</span>
      </IdentityRow>
      <Position>{positionTrad}</Position>
    </Wrapper>
  );
};
TeamCard.propTypes = {
  link: string.isRequired,
  name: string.isRequired,
  position: string.isRequired,
  surname: string.isRequired
};

TeamCard.defaultProps = {
  link: null,
  name: null,
  position: null,
  surname: null
};
export default TeamCard;
