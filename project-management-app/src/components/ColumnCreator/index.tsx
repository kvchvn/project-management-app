import { useRef, useState } from 'react';
import Modal from '../Modal';

function ColumnCreator({
  hasColumn,
  onNewColumnCreate,
}: {
  hasColumn: boolean;
  onNewColumnCreate: (title: string) => Promise<void>;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleNewColumnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnTitle(e.target.value);
  };

  const handleNewColumnTitleCreate = async () => {
    await onNewColumnCreate(newColumnTitle);
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
        <button onClick={handleIsOpenModal}>{hasColumn ? 'Add another list' : 'Add a list'}</button>
      )}
    </div>
  );
}

export default ColumnCreator;
