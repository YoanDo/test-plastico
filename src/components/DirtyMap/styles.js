import styled from 'styled-components';
import { Wrapper } from '../../hoc/layout/styles';

export const MapWrapper = styled(Wrapper)`
  height: ${({ height }) => height};
  position: relative;
  padding-top: 2rem;
  @media ${({ theme }) => theme.device.belowLaptop} {
    margin-top: ${({ theme }) => theme.mainTitleFS};
    padding: 0;
  }
`;
export const MapStyle = styled(Wrapper)`
  width: 65vw;
  height: 80vh;
  position: absolute;
  padding: 0;
`;
export const BoxContainer = styled(Wrapper)`
  width: 30%;
  height: 100%;
  position: absolute;
  left: 0;
`;
