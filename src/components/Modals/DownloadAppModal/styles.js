import styled from 'styled-components';

export const AppleDownloadBadge = styled.div`
  background-image: url('/images/appleBadge.png');
  background-position: center;
  background-size: cover;
  height: 47px;
  width: 140px;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const GooglePlayBadgeWrapper = styled.div`
  background-image: url('/images/googlePlayBadge.png');
  background-position: center;
  background-size: cover;
  height: 54px;
  width: 160px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3)};
`;
