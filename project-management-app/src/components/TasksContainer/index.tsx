import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import TaskCard from '../TaskCard';
import { StyledTasksContainer } from './styles';
import { TStore } from '../../store';
import { useTaskDragAndDrop } from '../../hooks';

function TasksContainer({ columnId }: { columnId: string }) {
  const { tasksByColumns } = useSelector((store: TStore) => store.taskReducer);
  const tasks = tasksByColumns[columnId];
  const { drop: taskDrop } = useTaskDragAndDrop({ columnId });

  return (
    tasks && (
      <StyledTasksContainer ref={taskDrop}>
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </StyledTasksContainer>
    )
  );
}

export default memo(TasksContainer);
