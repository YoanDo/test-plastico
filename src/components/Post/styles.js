import styled from 'styled-components';
import { Wrapper } from '../../hoc/layout/styles';

export const PostWrapper = styled.div`
  padding-top: 50px;
  min-height: calc(100vh - 224px);
  ${Wrapper} {
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
  margin-top: 0;
  padding-top: 0;
  max-width: 1080px;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  ul {
    list-style: inside;
    text-indent: -20px;
    margin-left: 20px;
  }
  p {
    font-weight: 400;
  }
  li {
    font-size: ${({ theme }) => theme.defaultFS};
    font-weight: 400;
  }
`;

export const PostTitle = styled.h1`
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
