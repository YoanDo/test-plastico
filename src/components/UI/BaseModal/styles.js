import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'

// we have to create an adapter in order to use styled-components here
function ReactModalAdapter({ className, modalClassName, ...props }) {
  return <ReactModal className={modalClassName} portalClassName={className} {...props} />
}

export const CloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  z-index: 999;

  svg path {
    stroke: ${({ theme }) => theme.black};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media ${({ theme }) => theme.device.belowLaptop} {
    top: 18px;
    right: 18px;
  }
`

export const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: { base: 'Overlay', afterOpen: 'Overlay--open' },
  modalClassName: { base: 'Modal', afterOpen: 'Modal--open' },
})`
  .Modal {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: white;
    cursor: initial;
    &:focus {
      outline: 0;
    }

    @media ${({ theme }) => theme.device.laptop} {
      max-width: 80%;
      min-width: 940px;
    }

    @media ${({ theme }) => theme.device.belowLaptop} {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }

  .Overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 999;
    opacity: 0;
    transition: 0.3s ease;
    background: rgba(79, 79, 79, 0.5);
    cursor: ${({ canClose }) => (canClose ? 'pointer' : 'not-allowed')};

    &--open {
      opacity: 1;
    }
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.secondaryFF};
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 39px;
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.grey2};

  @media ${({ theme }) => theme.device.belowLaptop} {
    font-size: 18px;
    margin: 0 auto;
  }
`

export const Text = styled.span`
  font-family: ${(props) => props.theme.primaryFF};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.largerFS};
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.2px;
  color: ${(props) => props.theme.secondaryColor};
  max-width: 450px;

  @media ${({ theme }) => theme.device.laptop} {
    width: 50%;
    margin: ${(props) => props.theme.spacing(3.5)} auto;
  }
`

export const WrapperBody = styled.div`
  padding: ${({ theme }) => `${theme.spacing(3.5)} ${theme.spacing(7)}`};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.device.belowLaptop} {
    flex: 1;
  }
`
