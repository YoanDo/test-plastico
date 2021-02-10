import styled from 'styled-components'
import { Wrapper } from '../../hoc/layout/styles'

export const SponsorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
  max-width: 100vw;
  padding: calc(${({ theme }) => theme.fourthFS}*2);
  position: relative;
  z-index: 2;

  span {
    color: ${({ theme }) => theme.white};
    display: block;
    font-size: ${({ theme }) => theme.fourthFS};
    margin: calc(${({ theme }) => theme.fourthFS}*2) 0;
    max-width: 75vw;
    position: relative;
    text-align: left;
  }

  ${Wrapper} {
    align-items: center;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
    padding: 0;
    position: relative;
    z-index: 3;
  }

  &:before {
    background: ${({ theme }) => theme.surfRiderBlue};
    content: '';
    height: calc(100% - ${({ theme }) => theme.spacing(6)});
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-2deg);
    width: 200vw;
    z-index: 0;
  }
`
