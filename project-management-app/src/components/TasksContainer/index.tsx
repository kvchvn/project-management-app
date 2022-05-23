import React, { memo } from 'react';
import { useDrop } from 'react-dnd';

import TaskCreator from '../TaskCreator';
import { useMoveItems, useUpdateTask } from '../../hooks';
import { DND_ITEM_TYPES } from '../../constants/common-constants';
import { TaskDetailed } from '../../interfaces/task';
import TaskCard from '../TaskCard';
import { StyledTasksContainer } from './styles';

function TasksContainer({ items, columnId }: { items: TaskDetailed[]; columnId: string }) {
  const { mutateAsync: update } = useUpdateTask({ columnId });

  const {
    items: tasks,
    findItem,
    moveItem,
    updateItemOrder,
  } = useMoveItems({
    items,
    update,
  });

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.task }));

  return (
    <StyledTasksContainer ref={drop}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          moveTask={moveItem}
          findTask={findItem}
          updateTask={updateItemOrder}
        />
      ))}
      <TaskCreator columnId={columnId} lastTaskOrder={tasks[tasks.length - 1]?.order} />
    </StyledTasksContainer>
  );
}

export default memo(TasksContainer);
