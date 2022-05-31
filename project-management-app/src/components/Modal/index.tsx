import React, { memo, useCallback, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { disableScrolling, enableScrolling } from '../../utils/common';
import { StyledModalContainer } from './styles';
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

  const handleClose = useCallback(
    (e: MouseEvent) => {
      if (e.target === rootModal && onClose) onClose();
    },
    [onClose, rootModal]
  );

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
    parent ? children : <StyledModalContainer>{children}</StyledModalContainer>,
    rootModal
  );
}

export default memo(Modal);
