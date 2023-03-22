import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ isBlackAndWhite }) =>
    isBlackAndWhite ? 'center' : 'flex-start'};
  margin: -10px;
`;

const Logo = styled.div`
  margin: ${({ isBlackAndWhite }) => (isBlackAndWhite ? '16px' : '24px')};
  filter: ${({ isBlackAndWhite }) =>
    isBlackAndWhite ? 'saturate(0%)' : 'none'};
  box-sizing: border-box;
  opacity: ${({ isBlackAndWhite }) => (isBlackAndWhite ? 0.7 : 1)};
  transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 1;
    filter: saturate(1);
  }
`;

const LogoLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: ${({ isBlackAndWhite }) => (isBlackAndWhite ? '120px' : '200px')};
    aspect-ratio: 3/2;
    object-fit: contain;
  }
`;

const SponsorLogos = ({ sponsors, isBlackAndWhite }) => (
  <Container isBlackAndWhite={isBlackAndWhite}>
    {sponsors
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .map((sponsor) => (
        <Logo key={sponsor._id} isBlackAndWhite={isBlackAndWhite}>
          <LogoLink
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            isBlackAndWhite={isBlackAndWhite}
          >
            <img
              src={getSanityImageUrl(sponsor.image).width(220).url() || 'null'}
              alt={sponsor.name}
              width="100%"
              height="100%"
              style={{ objectFit: 'contain' }}
            />
          </LogoLink>
        </Logo>
      ))}
  </Container>
);

SponsorLogos.propTypes = {
  sponsors: PropTypes.array.isRequired,
  isBlackAndWhite: PropTypes.bool.isRequired
};

export default SponsorLogos;
