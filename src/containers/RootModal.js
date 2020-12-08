import React from 'react'
import { connect } from 'react-redux'
import { bool, string, object, func } from 'prop-types'
// modal
import * as modalTypes from '../constants/modalTypes'
import { hideModal, toggleCanCloseModal } from '../redux/actions'
import { modalDataSelector } from '../redux/selectors/ui'
import BaseModal from '../components/UI/BaseModal'

// declare components
// import Example from '../components/Modal/ExampleModal';
import downloadAppDesktopModal from '../components/Modals/DownloadAppModal'

const MODAL_COMPONENTS = {
  // to use a modal, just add it below with its corresponding type
  // e.g.: [modalTypes.TEST_MODAL]: TestModal,
  [modalTypes.DOWNLOAD_APP_MODAL]: downloadAppDesktopModal,
}

function RootModal({ modalType, modalProps, hideModal, toggleCanCloseModal, isOpen, canClose }) {
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]

  return (
    <BaseModal isOpen={isOpen} closeModal={hideModal} canClose={canClose}>
      {SpecificModal && (
        <SpecificModal closeModal={hideModal} toggleCanCloseModal={toggleCanCloseModal} {...modalProps} />
      )}
    </BaseModal>
  )
}

RootModal.defaultProps = {
  modalType: null,
  modalProps: {},
  isOpen: false,
  canClose: true,
}

RootModal.propTypes = {
  modalType: string,
  modalProps: object,
  isOpen: bool,
  canClose: bool,
  hideModal: func.isRequired,
  toggleCanCloseModal: func.isRequired,
}

function mapStateToProps(state) {
  const modalData = modalDataSelector(state)

  return { ...modalData }
}

export default connect(mapStateToProps, {
  hideModal,
  toggleCanCloseModal,
})(RootModal)
