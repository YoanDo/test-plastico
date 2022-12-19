import styled from 'styled-components';
import { Wrapper } from '../../hoc/layout/styles';

export const PostWrapper = styled.div`
  padding-top: 50px;
  min-height: calc(100vh - 224px);
`;

export const PostBanner = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  height: 50vh;
  width: 100%;
`;

export const ContentWrapper = styled(Wrapper)`
  margin-top: 0;
  padding-top: 0;
  max-width: 1080px;
  ul {
    list-style: inside;
    text-indent: -20px;
    margin-left: 20px;
  }
`;

export const PostTitle = styled.h1`
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
