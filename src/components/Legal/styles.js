import styled from 'styled-components';

export const Text = styled.p`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'regular')};
  li {
    list-style-type: circle;
  }
`;
