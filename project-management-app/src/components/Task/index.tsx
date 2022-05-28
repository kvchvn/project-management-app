import React from 'react';
import { useFormik } from 'formik';

import { useUpdateTask } from '../../hooks';
import { TaskDetailed } from '../../interfaces/task';
import { useTaskSelector } from '../../store/selectors';
import {
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledButtonsContainer,
  StyledButton,
  StyledButtonSubmit,
} from './styles';

function Task() {
  const { taskModal, tasksByColumns: allColumns } = useTaskSelector();
  const { taskId, ...task } = taskModal;
  const columnId = task.columnId ? task.columnId : '';

  const updateTask = useUpdateTask({ columnId });
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
    },
  });

  if (taskData) {
    return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput id="title" name="title" value={values.title} onChange={handleChange} />
        <StyledTextarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <StyledButtonsContainer>
          <StyledButton>Delete</StyledButton>
          <StyledButtonSubmit>Update</StyledButtonSubmit>
        </StyledButtonsContainer>
      </StyledForm>
    );
  }
  return null;
}

export default Task;
