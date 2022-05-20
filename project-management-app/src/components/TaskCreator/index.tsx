import { useRef, useState } from 'react';
import { useCreateTask } from '../../hooks';
import { setOrder } from '../../utils/common';
import Modal from '../Modal';

function TaskCreator({ columnId, lastTaskOrder }: { columnId: string; lastTaskOrder?: number }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const { mutateAsync: create } = useCreateTask({ columnId });

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleNewTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const handleTaskCreate = async () => {
    await create({
      title: newTaskTitle,
      order: setOrder(lastTaskOrder),
      description: 'some description',
    });
    setIsOpenModal(false);
  };

  return (
    <div ref={modalRef}>
      {isOpenModal ? (
        modalRef.current && (
          <Modal parent={modalRef.current}>
            <input placeholder="Enter task title..." onChange={handleNewTaskTitleChange} />
            <button onClick={handleTaskCreate}>Add task</button>
            <button onClick={handleIsOpenModal}>X</button>
          </Modal>
        )
      ) : (
        <button onClick={handleIsOpenModal}>Add a task</button>
      )}
    </div>
  );
}

export default TaskCreator;
