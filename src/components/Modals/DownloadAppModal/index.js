import React from 'react'

import { AppleDownloadBadge, GooglePlayBadgeWrapper, Wrapper } from './styles'
import { ModalHeader, ModalBody } from '../../UI/BaseModal/components'

const DownloadAppDesktopModal = () => {
  return (
    <Wrapper>
      <ModalHeader title={"download_app"} />
      <ModalBody>
        <a
          href="https://play.google.com/store/apps/details?id=com.plasticorigins&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
        >
          <GooglePlayBadgeWrapper />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.plasticorigins&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
        >
          <AppleDownloadBadge />
        </a>
      </ModalBody>
    </Wrapper>
  )
}

export default DownloadAppDesktopModal
