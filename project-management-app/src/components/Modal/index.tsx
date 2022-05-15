import React, { memo, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { disableScrolling, enableScrolling } from '../../utils/common';
import { StyledButtonClose, StyledModalContainer, StyledModalContent } from './styles';
import './styles.scss';

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
  parent?: HTMLElement;
};

function Modal({ closeModal, children, parent }: ModalProps) {
  const rootModal = useMemo(() => document.createElement('div'), []);
  rootModal.id = 'modal';

  useEffect(() => {
    const target = parent ?? document.body;

    target.appendChild(rootModal);
    rootModal.addEventListener('click', closeModal);
    disableScrolling();

    return () => {
      target.removeChild(rootModal);
      rootModal.removeEventListener('click', closeModal);
      enableScrolling();
    };
  }, [rootModal, parent, closeModal]);

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

export default memo(Modal);
