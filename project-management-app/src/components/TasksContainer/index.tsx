import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

import TaskCreator from '../TaskCreator';
import { useUpdateTask } from '../../hooks';
import { DND_ITEM_TYPES } from '../../constants/common-constants';
import { TaskDetailed } from '../../interfaces/task';
import { calculateUpdatedOrder } from '../../utils/common';
import TaskCard from '../TaskCard';
import { StyledTasksContainer } from './styles';

function TasksContainer({ items, columnId }: { items: TaskDetailed[]; columnId: string }) {
  const [tasks, setTasks] = useState(items);

  const { mutateAsync: update } = useUpdateTask({ columnId });

  useEffect(() => setTasks(items), [items]);

  const findTask = useCallback(
    (id: string) => {
      const index = tasks.findIndex((c) => c.id === id);
      return { task: tasks[index], index };
    },
    [tasks]
  );

  const moveTask = useCallback(
    (droppedId: string, hoverIndex: number) => {
      const droppedIndex = findTask(droppedId).index;
      const tasksCopy = [...tasks];
      const droppedTask = tasksCopy.splice(droppedIndex, 1)[0];
      tasksCopy.splice(hoverIndex, 0, droppedTask);

      setTasks(tasksCopy);
    },
    [findTask, tasks, setTasks]
  );

  const updateTaskOrder = useCallback(
    async (droppedId: string, hoverIndex: number) => {
      const { index: droppedIndex, task: droppedTask } = findTask(droppedId);
      if (droppedIndex === hoverIndex) return;

      const direction = droppedIndex > hoverIndex ? 'forward' : 'backward';
      const hoverTask = tasks[hoverIndex];
      const nextToDroppedTask =
        tasks[droppedIndex > hoverIndex ? droppedIndex + 1 : droppedIndex - 1];

      await update({
        ...droppedTask,
        id: droppedId,
        order: calculateUpdatedOrder(hoverTask.order, nextToDroppedTask?.order, direction),
      });
    },
    [findTask, tasks, update]
  );

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.task }));

  return (
    <StyledTasksContainer ref={drop}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          moveTask={moveTask}
          findTask={findTask}
          updateTask={updateTaskOrder}
        />
      ))}
      <TaskCreator columnId={columnId} lastTaskOrder={tasks[tasks.length - 1]?.order} />
    </StyledTasksContainer>
  );
}

export default memo(TasksContainer);
