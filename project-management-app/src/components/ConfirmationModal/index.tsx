import React, { ReactNode } from 'react';
import StyledButton from '../../styles/components/StyledButton';
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
        <StyledButton variant="warning" onClick={handleConfirm}>
          Delete
        </StyledButton>
        <StyledButton variant="primary" onClick={handleCancel}>
          Cancel
        </StyledButton>
      </StyledButtonsContainer>
    </Modal>
  );
}

export default ConfirmationModal;
