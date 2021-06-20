import styled from 'styled-components'

export const SolutionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ theme }) => theme.white};
  height: 100%;
  width: 100%;
  overflow: scroll;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.primaryColor};
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fourthFS};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ isIntro, theme }) => (isIntro ? theme.surfRiderBlue : theme.black)};
`

export const PreConclusion = styled(Text)`
  color: ${({ theme }) => theme.surfRiderBlue};
  font-size: ${({ theme }) => theme.biggerFS};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing(2)};
`

export const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 400px;
  width: 100%;
`
