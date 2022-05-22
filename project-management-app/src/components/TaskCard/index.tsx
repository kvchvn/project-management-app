import React from 'react';
import { DND_ITEM_TYPES } from '../../constants/common-constants';
import { useDragAndDrop } from '../../hooks';
import { TaskDetailed } from '../../interfaces/task';

import { StyledTaskCard } from './styles';

interface TaskCardProps extends TaskDetailed {
  moveTask: (id: string, to: number) => void;
  findTask: (id: string) => { index: number };
  updateTask: (id: string, to: number) => void;
}

function TaskCard({ id, title, moveTask, findTask, updateTask }: TaskCardProps) {
  const { isDragging, drag, drop } = useDragAndDrop({
    id,
    itemType: DND_ITEM_TYPES.task,
    moveColumn: moveTask,
    findColumn: findTask,
    updateColumn: updateTask,
  });

  return (
    <StyledTaskCard ref={(node) => drag(drop(node))} isDragging={isDragging}>
      {title}
    </StyledTaskCard>
  );
}

export default TaskCard;
