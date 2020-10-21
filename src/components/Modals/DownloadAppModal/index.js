import React from 'react'
import { FormattedMessage } from 'react-intl'

import {
  AppleDownloadBadge,
  GooglePlayBadgeWrapper,
  Text,
  Wrapper,
} from './styles'

const DownloadAppDesktopModal = () => {
  return (
    <Wrapper>
      <a
        href="https://play.google.com/store/apps/details?id=com.plasticorigins&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        target="_blank"
      >
        <GooglePlayBadgeWrapper />
      </a>
      <AppleDownloadBadge />
      <Text><FormattedMessage id="soon_available" /></Text>
    </Wrapper>
  )
}

export default DownloadAppDesktopModal
