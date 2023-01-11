import styled from 'styled-components';

const size = '120px';
export const Picture = styled.div`
  display: block;
  background: url(${({ backgroundUrl }) => backgroundUrl});
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 100%;
  height: ${size};
  width: ${size};
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  right: 0;
`;
export const Color = styled.div`
  background: ${({ theme }) => theme.surfRiderBlue};
  border-radius: 100%;
  height: ${size};
  left: 50%;
  opacity: 30%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${size};
`;

export const PictureWrapper = styled.div`
  position: relative;
  transition-duration: 2s;
  margin-bottom: calc(${({ theme }) => theme.biggerFS} / 2);
`;

export const IdentityRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  span {
    font-size: ${({ theme }) => theme.defaultFS};
    white-space: nowrap;
  }

  span:nth-child(1) {
    margin-right: 4px;
  }
`;

export const Position = styled.span`
  color: ${({ theme }) => theme.surfRiderBlue};
  letter-spacing: 1px;
  text-align: center;
`;

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  cursor: pointer;
  color: inherit;

  * {
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
  }

  &:hover {
    ${Picture} {
      right: 10%;
    }

    ${Color} {
      opacity: 20%;
      transform: translate(-40%, -50%);
    }
  }
`;
