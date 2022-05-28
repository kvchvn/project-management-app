import React from 'react';
import { useTaskDragAndDrop } from '../../hooks';
import { TaskDetailed } from '../../interfaces/task';

import { StyledTaskCard } from './styles';

function TaskCard({ id, title, columnId }: TaskDetailed) {
  const { isDragging, drag, drop } = useTaskDragAndDrop({ id, columnId, dropTarget: 'tasks' });

  return (
    <StyledTaskCard ref={(node) => drag(drop(node))} isDragging={isDragging}>
      {title}
    </StyledTaskCard>
  );
}

export default TaskCard;
