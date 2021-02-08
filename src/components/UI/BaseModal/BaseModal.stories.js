import React from 'react'
import { action } from '@storybook/addon-actions'
import BaseModal from '.'
import { ModalHeader, ModalBody, ModalText } from './components'
import DownloadAppModal from '../../Modals/DownloadAppModal'

export default {
  title: 'UI/BaseModal',
  component: BaseModal,
}

const baseProps = {
  isOpen: true,
  isLoading: false,
  closeModal: action('Close modal'),
  title: 'This is a modal',
}

export const withStaticProps = () => (
  <BaseModal {...baseProps}>
    <ModalHeader title={'modal header component'} />
    <ModalBody>
      modal body
      <ModalText>This is a modal text generic component</ModalText>
    </ModalBody>
  </BaseModal>
)

export const withDynamicVariables = () => {
  const dynamicProps = {
    ...baseProps,
  }

  return (
    <BaseModal {...dynamicProps}>
      <ModalHeader title={'modal header component'} />
      <ModalBody>
        modal body
        <ModalText>This is a modal text generic component</ModalText>
      </ModalBody>
    </BaseModal>
  )
}

export const WithDownloadAppModal = () => {
  const dynamicProps = {
    ...baseProps,
  }

  return (
    <BaseModal {...dynamicProps}>
      <ModalHeader title={null} />
      <ModalBody>
        <DownloadAppModal />
      </ModalBody>
    </BaseModal>
  )
}
