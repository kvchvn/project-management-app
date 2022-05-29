import React, { memo, useCallback, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { disableScrolling, enableScrolling } from '../../utils/common';
import { StyledButtonClose, StyledModalContainer, StyledModalContent } from './styles';
import './styles.scss';

type ModalProps = {
  children: React.ReactNode;
  parent?: HTMLElement;
  className?: string;
  onClose?: () => void;
};

function Modal({ children, parent, className, onClose }: ModalProps) {
  const rootModal = useMemo(() => document.createElement('div'), []);
  if (!parent) rootModal.id = 'modal';
  if (className) rootModal.classList.add(className);

  const handleClose = useCallback(() => onClose && onClose(), [onClose]);

  useEffect(() => {
    const target = parent ?? document.body;

    target.appendChild(rootModal);
    rootModal.addEventListener('click', handleClose);
    disableScrolling();

    return () => {
      target.removeChild(rootModal);
      rootModal.removeEventListener('click', handleClose);
      enableScrolling();
    };
  }, [rootModal, parent, handleClose]);

  return ReactDOM.createPortal(
    <StyledModalContainer>
      {onClose && <StyledButtonClose onClick={onClose} />}
      <StyledModalContent onClickCapture={(e) => onClose && e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalContainer>,
    rootModal
  );
}

export default memo(Modal);
