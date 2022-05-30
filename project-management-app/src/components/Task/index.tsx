import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useUpdateTask, useRemoveTask } from '../../hooks';
import { TaskDetailed } from '../../interfaces/task';
import { useTaskSelector } from '../../store/selectors';
import { onCloseTaskModal } from '../../store/slices/task';
import ConfirmationModal from '../ConfirmationModal';

import { StyledForm, StyledInput, StyledTextarea, StyledButtonsContainer } from './styles';
import StyledButton from '../../styles/components/StyledButton';

function Task() {
  const { t } = useTranslation();
  const [isGoingToRemove, setIsGoingToRemove] = useState(false);
  const { id: boardId } = useParams();
  const { taskModal, tasksByColumns: allColumns } = useTaskSelector();
  const { taskId, ...task } = taskModal;
  const dispatch = useDispatch();

  const columnId = task.columnId ? task.columnId : '';
  const updateTask = useUpdateTask({ columnId });
  const removeTask = useRemoveTask({ boardId, columnId });

  const column = columnId ? allColumns[columnId] : null;
  const taskData = column ? column.find((task) => task.id === taskId) : null;

  const initialValues = {
    title: taskData ? taskData.title : '',
    description: taskData ? taskData.description : '',
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: async ({ title, description }) => {
      const updatedTaskData = { ...(taskData as TaskDetailed), title, description };
      updateTask.mutateAsync(updatedTaskData);
      dispatch(onCloseTaskModal());
    },
  });

  const openConfirmationModal = () => setIsGoingToRemove(true);

  const handleConfirmDeletion = () => {
    if (taskId) {
      removeTask.mutateAsync(taskId as string);
      dispatch(onCloseTaskModal());
    }
  };

  if (taskData && task.isOpen) {
    return (
      <StyledForm onSubmit={handleSubmit} onReset={openConfirmationModal}>
        <StyledInput id="title" name="title" value={values.title} onChange={handleChange} />
        <StyledTextarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <StyledButtonsContainer>
          <StyledButton variant="warning" type="reset">
            {t('taskModal.buttons.delete')}
          </StyledButton>
          <StyledButton variant="primary" type="submit">
            {t('taskModal.buttons.update')}
          </StyledButton>
        </StyledButtonsContainer>
        {isGoingToRemove && (
          <ConfirmationModal onConfirm={handleConfirmDeletion} setIsOpen={setIsGoingToRemove}>
            <p>{t('taskModal.removingTask')}</p>
          </ConfirmationModal>
        )}
      </StyledForm>
    );
  }
  return null;
}

export default Task;
