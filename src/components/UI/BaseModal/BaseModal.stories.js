import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import BaseModal from '.'
import { ModalHeader, ModalBody, ModalText, ModalFooter } from './components'

export default {
  title: 'UI/BaseModal',
  component: BaseModal,
  decorators: [withKnobs],
}

const baseProps = { isOpen: true, isLoading: false, closeModal: action('Close modal'), title: 'This is a modal' }

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
    isLoading: boolean('isLoading', false),
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
