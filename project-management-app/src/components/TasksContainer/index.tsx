import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import TaskCreator from '../TaskCreator';
import TaskCard from '../TaskCard';
import { StyledTasksContainer } from './styles';
import { TStore } from '../../store';

function TasksContainer({ columnId }: { columnId: string }) {
  const { tasksByColumns } = useSelector((store: TStore) => store.taskReducer);
  const tasks = tasksByColumns[columnId];

  return (
    tasks && (
      <StyledTasksContainer>
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
        <TaskCreator columnId={columnId} lastTaskOrder={tasks[tasks.length - 1]?.order} />
      </StyledTasksContainer>
    )
  );
}

export default memo(TasksContainer);
