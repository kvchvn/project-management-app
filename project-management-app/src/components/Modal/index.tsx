import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { disableScrolling, enableScrolling } from '../../utils/common';
import { StyledButtonClose, StyledModalContainer, StyledModalContent } from './styles';
import './styles.scss';

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
};

function Modal({ closeModal, children }: ModalProps) {
  const rootModal = document.createElement('div');
  rootModal.id = 'modal';

  useEffect(() => {
    document.body.appendChild(rootModal);
    rootModal.addEventListener('click', closeModal);
    disableScrolling();

    return () => {
      document.body.removeChild(rootModal);
      rootModal.removeEventListener('click', closeModal);
      enableScrolling();
    };
  });

  return ReactDOM.createPortal(
    <StyledModalContainer>
      <StyledButtonClose onClick={closeModal}>x</StyledButtonClose>
      <StyledModalContent onClickCapture={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalContainer>,
    rootModal
  );
}

export default Modal;
