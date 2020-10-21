import styled from 'styled-components'
import AppleBadge from '../../../assets/images/appleBadge.png'
import GooglePlayBadge from '../../../assets/images/googlePlayBadge.png'

export const AppleDownloadBadge = styled.div`
  background-image: url(${AppleBadge});
  background-position: center;
  background-size: cover;
  height: 47px;
  width: 140px;
  opacity: 50%;
  margin-top: ${({ theme }) => theme.spacing(1)};
`
export const GooglePlayBadgeWrapper = styled.div`
  background-image: url(${GooglePlayBadge});
  background-position: center;
  background-size: cover;
  height: 54px;
  width: 160px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3)};
`

export const Text = styled.span`
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.surfRiderBlue};
`
