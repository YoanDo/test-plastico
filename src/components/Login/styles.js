import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-height: calc(100vh - 50px);
  overflow: hidden;
`

export const Left = styled.div`
  align-items: center;
  background-image: url('/images/trashRiver.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  justify-content: center;
  width: 50vw;

  @media (max-width: 900px) {
    display: none;
  }
`
export const InnerSpace = styled.div`
  display: flex;
  width: calc(${(props) => props.theme.maxWidth} / 2);
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  flex-direction: column;
`

export const Claim = styled.span`
  color: ${(props) => props.theme.white};
  font-family: 'Bebas Neue';
  font-size: ${(props) => props.theme.mainTitleFS};
  max-height: ${(props) => props.theme.mainTitleFS};
  line-height: 1;
  opacity: 1;
  overflow: hidden;
  text-align: left;
`

export const ClaimWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const Right = styled.div`
  display: flex;
  width: calc(${(props) => props.theme.maxWidth} / 2);
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  @media (max-width: 900px) {
    width: 100%;
  }
`
