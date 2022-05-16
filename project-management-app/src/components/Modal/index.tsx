import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
};

function Modal({ closeModal, children }: ModalProps) {
  const [rootModal] = useState(() => document.createElement('div'));
  const modalId = 'modal';

  useEffect(() => {
    rootModal.id = modalId;
    document.body.appendChild(rootModal);
    rootModal.addEventListener('click', closeModal);

    return () => {
      document.body.removeChild(rootModal);
      rootModal.removeEventListener('click', closeModal);
    };
  });

  return ReactDOM.createPortal(
    <div>
      <section>{children}</section>
    </div>,
    rootModal
  );
}

export default Modal;
