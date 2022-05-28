import React from 'react';
import { useTaskSelector } from '../../store/selectors';
import { StyledContainer, StyledInput } from './styles';

function Task() {
  const { tasksByColumns: allColumns, taskModal } = useTaskSelector();
  const { taskId, columnId } = taskModal;
  const column = columnId ? allColumns[columnId] : null;
  const taskData = column ? column.find((task) => task.id === taskId) : null;
  if (taskData) {
    return (
      <StyledContainer>
        <StyledInput defaultValue={taskData.title} />
        <p>{taskData.description}</p>
      </StyledContainer>
    );
  }
  return null;
}

export default Task;
