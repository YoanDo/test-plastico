import React from 'react';
import { string } from 'prop-types';

import {
  Color,
  IdentityRow,
  Picture,
  PictureWrapper,
  Position,
  Wrapper
} from './styles';

const TeamCard = ({ link, name, position, surname, imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <Wrapper
    // href={link}
    // target="_blank"
    //  rel="noopener noreferrer"
    >
      <PictureWrapper>
        <Picture backgroundUrl={imageUrl} />
        <Color />
      </PictureWrapper>
      <IdentityRow>
        <span>{name}</span>
        <span>{surname}</span>
      </IdentityRow>
      <Position>{position}</Position>
    </Wrapper>
  );
};
TeamCard.propTypes = {
  imageUrl: string,
  link: string.isRequired,
  name: string.isRequired,
  position: string.isRequired,
  surname: string.isRequired
};

export default TeamCard;
