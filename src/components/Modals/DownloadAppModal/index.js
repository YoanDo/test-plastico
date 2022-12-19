import React from 'react';

import { AppleDownloadBadge, GooglePlayBadgeWrapper, Wrapper } from './styles';
import { IOS_APP_LINK, ANDROID_APP_LINK } from '../../../constants/appLinks';
import { ModalHeader, ModalBody } from '../../UI/BaseModal/components';

const DownloadAppDesktopModal = () => (
  <Wrapper>
    <ModalHeader title="download_app" />
    <ModalBody>
      <a href={ANDROID_APP_LINK} target="_blank" rel="noreferrer">
        <GooglePlayBadgeWrapper />
      </a>
      <a href={IOS_APP_LINK} target="_blank" rel="noreferrer">
        <AppleDownloadBadge />
      </a>
    </ModalBody>
  </Wrapper>
);

export default DownloadAppDesktopModal;
