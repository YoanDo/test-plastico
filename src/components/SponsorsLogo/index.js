import React from 'react';
import styled from 'styled-components';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';

const SponsorLogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px;
`;

const SponsorLogo = styled.div`
  margin: 10px;
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

const SponsorLogoLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: 120px;
    aspect-ratio: 3/2;
    object-fit: contain;
  }
`;

const SponsorLogos = ({ sponsors, isBlackAndWhite = false }) => (
  <SponsorLogosContainer>
    {sponsors
      .sort(() => (Math.random() > 0.5 ? 1 : -1)) // todo delete
      .map((sponsor) => {
        const imageUrl =
          getSanityImageUrl(sponsor.image).width(220).url() || 'null';
        const { link } = sponsor;

        return (
          <SponsorLogo key={sponsor._id} isBlackAndWhite={isBlackAndWhite}>
            <SponsorLogoLink
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={imageUrl}
                alt={sponsor.name}
                width="100%"
                height="100%"
                style={{ objectFit: 'contain' }}
              />
            </SponsorLogoLink>
          </SponsorLogo>
        );
      })}
  </SponsorLogosContainer>
);

export default SponsorLogos;
