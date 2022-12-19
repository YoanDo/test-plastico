import styled from 'styled-components';
import { TextTitle } from '../Title/styles';

export const SolutionCardWrapper = styled.div`
  align-items: flex-start;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  overflow: scroll;
  padding-left: ${({ theme }) => theme.spacing(1)};
  @media ${({ theme }) => theme.device.belowLaptop} {
    padding-left: 0;
    ${TextTitle} {
      font-size: ${({ theme }) => theme.thirdFS};
      line-height: ${({ theme }) => theme.thirdFS};
    }
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fourthFS};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ isIntro, theme }) =>
    isIntro ? theme.surfRiderBlue : theme.black};
`;

export const PreConclusion = styled(Text)`
  color: ${({ theme }) => theme.surfRiderBlue};
  font-size: ${({ theme }) => theme.biggerFS};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 400px;
  width: 100%;
`;
