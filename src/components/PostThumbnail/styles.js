import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.surfRiderBlue};
  cursor: pointer;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;
  transition: all .2s ease-in-out; 

  &:hover{
    transform: scale(1.025); 
  }
`
export const CardBanner = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.surfRiderBlue};
  margin-bottom: ${({ theme }) => theme.spacing(.25)};
  line-height: 1;
`

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(.5)};
  display: flex;
  flex-direction: column;
`

export const DateText = styled.span`
  color: ${({ theme }) => theme.grey};
  font-size: ${({ theme }) => theme.smallerFS};
  margin-bottom: ${({ theme }) => theme.spacing(.25)};
`

export const PreText = styled.span`
  text-transform: lowercase;
  font-size: ${({theme}) => theme.defaultFS};
  &:first-letter{
    text-transform: capitalize;
  }
  
`