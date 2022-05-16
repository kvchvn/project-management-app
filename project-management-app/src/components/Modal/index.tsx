import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { StyledModalContainer, StyledModalOverlay } from './styles';

type ModalProps = {
  closeBoardForm: () => void;
  children: React.ReactNode;
};

function Modal({ closeBoardForm, children }: ModalProps) {
  const [rootModal] = useState(() => document.createElement('div'));
  const modalId = 'modal';

  useEffect(() => {
    rootModal.id = modalId;
    document.body.appendChild(rootModal);
    rootModal.addEventListener('click', closeBoardForm);

    return () => {
      document.body.removeChild(rootModal);
      rootModal.removeEventListener('click', closeBoardForm);
    };
  });

  return ReactDOM.createPortal(
    <StyledModalOverlay>
      <StyledModalContainer>{children}</StyledModalContainer>
    </StyledModalOverlay>,
    rootModal
  );
}

export default Modal;
