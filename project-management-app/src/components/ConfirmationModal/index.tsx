import React, { ReactNode } from 'react';
import Modal from '../Modal';
import { StyledButtonsContainer } from './styles';

function ConfirmationModal({
  children,
  onConfirm,
  onCancel,
  setIsOpen,
}: {
  children: ReactNode;
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void;
  setIsOpen: (val: boolean) => void;
}) {
  const handleConfirm = async () => {
    setIsOpen(false);
    await onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancel && onCancel();
  };

  return (
    <Modal onClose={handleCancel}>
      {children}
      <StyledButtonsContainer>
        <button onClick={handleConfirm}>Yes</button>
        <button onClick={handleCancel}>No</button>
      </StyledButtonsContainer>
    </Modal>
  );
}

export default ConfirmationModal;
