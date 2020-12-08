import styled from 'styled-components'

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2.4em;
`

export const Link = styled.a`
  height: 18px;
  width: 18px;
  margin: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-of-type {
    margin-left: 0;
  }
`

export const Icon = styled.svg`
  cursor: pointer;
  flex: none;
  fill: ${(props) => props.theme.black};
  transition: fill 0.25s;
  height: auto;
  width: 12px;
  opacity: 0.8;

  ${Link}:hover & {
    fill: ${(props) => props.theme.surfRiderBlue};
    opacity: 1;
  }
`
