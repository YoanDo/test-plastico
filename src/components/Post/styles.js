import styled from 'styled-components';
import { Wrapper } from '../../hoc/layout/styles';

export const PostWrapper = styled.div`
  padding-top: 86px;
  min-height: calc(100vh - 224px);
  h1 {
    line-height: 1;
  }
  ${Wrapper} {
    padding-top: 0;
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
  @media (min-width: 900px) {
    padding-top: 0;
  }
`;

export const PostBanner = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  height: 50vh;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  margin-top: 0;
  max-width: 1080px;
  padding-top: 0;

  ul {
    list-style-type: disc;
  }

  p {
    font-weight: 400;
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  li {
    font-size: ${({ theme }) => theme.defaultFS};
    font-weight: 400;
  }

  img {
    display: block;
    margin: auto;
    max-width: 45vw;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;

export const PostTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.secondaryFS};
`;

export const DateText = styled.span`
  color: ${({ theme }) => theme.grey};
  display: block;
  font-size: ${({ theme }) => theme.smallFS};
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;
