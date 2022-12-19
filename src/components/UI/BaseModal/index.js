import React from 'react';
import { bool, func, node } from 'prop-types';

import Image from 'next/image';
import { StyledModal, CloseButton, ContentWrapper } from './styles';

function BaseModal({ children, closeModal, isOpen, canClose }) {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={canClose && closeModal}
      shouldCloseOnOverlayClick={canClose}
      ariaHideApp={false}
      canClose={canClose}
    >
      <CloseButton
        type="button"
        onClick={canClose && closeModal}
        disabled={!canClose}
      >
        <Image src="/svg/x.svg" />
      </CloseButton>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledModal>
  );
}

BaseModal.defaultProps = {
  isOpen: false,
  canClose: true
};

BaseModal.propTypes = {
  children: node.isRequired,
  closeModal: func.isRequired,
  isOpen: bool,
  canClose: bool
};

export default BaseModal;
