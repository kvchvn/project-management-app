import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCreateTask } from '../../hooks';
import { TStore } from '../../store';
import { setOrder } from '../../utils/common';
import Modal from '../Modal';
import { StyledCreateTaskButton } from './styles';

function TaskCreator({ columnId }: { columnId: string }) {
  const { t } = useTranslation();
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
            <input
              placeholder={t('boardPage.creatingTask.placeholder.title')}
              onChange={handleTaskTitleChange}
            />
            <input
              placeholder={t('boardPage.creatingTask.placeholder.description')}
              onChange={handleTaskDescriptionChange}
            />
            <button onClick={handleTaskCreate} disabled={!taskTitle || !taskDescription}>
              {t('boardPage.creatingTask.buttonCreate')}
            </button>
            <button onClick={handleIsOpenModal}>X</button>
          </Modal>
        )
      ) : (
        <StyledCreateTaskButton variant="primary" onClick={handleIsOpenModal}>
          {t('boardPage.creatingTask.buttonCreate')}
        </StyledCreateTaskButton>
      )}
    </div>
  );
}

export default TaskCreator;
