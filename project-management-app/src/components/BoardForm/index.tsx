import React from 'react';
import Modal from '../Modal';

type BoardFormProps = {
  closeBoardForm: () => void;
};

function BoardForm({ closeBoardForm }: BoardFormProps) {
  return (
    <Modal closeBoardForm={closeBoardForm}>
      <h2>Modal</h2>
    </Modal>
  );
}

export default BoardForm;
