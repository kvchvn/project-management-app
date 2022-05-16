import React from 'react';
import Modal from '../Modal';

type BoardFormProps = {
  closeModal: () => void;
};

function BoardForm({ closeModal }: BoardFormProps) {
  return (
    <Modal closeModal={closeModal}>
      <h2>Modal</h2>
    </Modal>
  );
}

export default BoardForm;
