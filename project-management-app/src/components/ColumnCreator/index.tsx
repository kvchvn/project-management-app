import { useRef, useState } from 'react';
import { useCreateColumn } from '../../hooks';
import { setColumnOrder } from '../../utils/common';
import Modal from '../Modal';

function ColumnCreator({ columnsLength }: { columnsLength: number }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');

  const { mutateAsync: create } = useCreateColumn();

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleNewColumnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnTitle(e.target.value);
  };

  const handleNewColumnTitleCreate = async () => {
    await create({ title: newColumnTitle, order: setColumnOrder(columnsLength) });
    setIsOpenModal(false);
  };

  return (
    <div ref={modalRef}>
      {isOpenModal ? (
        modalRef.current && (
          <Modal parent={modalRef.current}>
            <input placeholder="Enter list title..." onChange={handleNewColumnTitleChange} />
            <button onClick={handleNewColumnTitleCreate}>Add list</button>
            <button onClick={handleIsOpenModal}>X</button>
          </Modal>
        )
      ) : (
        <button onClick={handleIsOpenModal}>
          {columnsLength ? 'Add another list' : 'Add a list'}
        </button>
      )}
    </div>
  );
}

export default ColumnCreator;
