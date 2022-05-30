import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCreateTask } from '../../hooks';
import { TStore } from '../../store';
import { setOrder } from '../../utils/common';
import Modal from '../Modal';

function TaskCreator({ columnId }: { columnId: string }) {
  const { tasksByColumns } = useSelector((store: TStore) => store.taskReducer);
  const lastTaskOrder = tasksByColumns[columnId]?.at(-1)?.order;

  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const { mutateAsync: create } = useCreateTask({ columnId });

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleTaskTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const handleTaskCreate = async () => {
    await create({
      title: taskTitle,
      order: setOrder(lastTaskOrder),
      description: taskDescription,
    });
    setIsOpenModal(false);
  };

  return (
    <div ref={modalRef}>
      {isOpenModal ? (
        modalRef.current && (
          <Modal parent={modalRef.current}>
            <input placeholder="Enter task title..." onChange={handleTaskTitleChange} />
            <input placeholder="Enter task description..." onChange={handleTaskDescriptionChange} />
            <button onClick={handleTaskCreate} disabled={!taskTitle || !taskDescription}>
              Add task
            </button>
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
