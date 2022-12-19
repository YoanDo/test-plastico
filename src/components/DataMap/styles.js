import styled from 'styled-components';
import { Wrapper } from '../../hoc/layout/styles';

export const MapWrapper = styled(Wrapper)`
  height: ${({ height }) => height};
  position: relative;
  @media ${({ theme }) => theme.device.belowLaptop} {
    margin-top: ${({ theme }) => theme.mainTitleFS};
    padding: 0;
  }
`;
