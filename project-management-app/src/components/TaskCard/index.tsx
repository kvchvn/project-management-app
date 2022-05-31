import React from 'react';
import { useDispatch } from 'react-redux';
import { useTaskDragAndDrop } from '../../hooks';
import { TaskDetailed } from '../../interfaces/task';
import { onOpenTaskModal } from '../../store/slices/task';

import { StyledTaskCard } from './styles';

function TaskCard({ id, title, columnId }: TaskDetailed) {
  const { isDragging, drag, drop } = useTaskDragAndDrop({ id, columnId, dropTarget: 'tasks' });
  const dispatch = useDispatch();

  const openTaskModal = () => {
    const payload = { taskId: id, columnId };
    dispatch(onOpenTaskModal(payload));
  };

  return (
    <StyledTaskCard
      ref={(node) => drag(drop(node))}
      isDragging={isDragging}
      onClick={openTaskModal}
    >
      {title}
    </StyledTaskCard>
  );
}

export default TaskCard;
