import styled from 'styled-components';

export const AccordionsWrapper = styled.div`
  .accordion-button {
    color: ${({ theme }) => theme.black};
    opacity: 0.6;
    font-size: 2rem;
    &:focus {
      box-shadow: none;
    }
  }
  .accordion-button:not(.collapsed) {
    color: ${({ theme }) => theme.surfRiderBlue};
    background: ${({ theme }) => theme.lightBlue};
    opacity: 1;
  }
  .accordion-body {
  }
`;
