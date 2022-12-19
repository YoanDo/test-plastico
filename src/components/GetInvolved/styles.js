import styled from 'styled-components';
import { Wrapper } from '../../hoc/layout/styles';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlueWrapper = styled(Wrapper)`
  padding-top: 0;
  margin-top: 0;
  display: flex;
  max-width: ${(props) => props.theme.maxWidth};
  align-items: center;
  @media (max-width: 1280px) {
    margin-top: 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 ${(props) => props.theme.spacing(1)};
  }
`;
