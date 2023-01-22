import styled from 'styled-components';

export const CardBanner = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.black};
  margin-bottom: ${({ theme }) => theme.spacing(0.25)};
  line-height: 1.1;
  font-size: 26px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const DateText = styled.span`
  color: ${({ theme }) => theme.grey} !important;
  font-size: ${({ theme }) => theme.smallFS};
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

export const PreText = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.defaultFS};
  text-transform: lowercase;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const Wrapper = styled.div`
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.015);
  }
  ${DateText} {
    color: ${({ theme }) => theme.grey};
  }
`;
