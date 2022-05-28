import { useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { useUpdateTask } from '.';
import { DND_ITEM_TYPES } from '../constants/common';
import { store } from '../store';
import { onMoveTask } from '../store/slices/task';
import { calculateUpdatedOrder } from '../utils/common';

const useTaskDragAndDrop = ({ id, columnId }: { id: string; columnId: string }) => {
  const dispatch = useDispatch();
  const { mutateAsync: update } = useUpdateTask({ columnId });

  const updateItemOrder = useCallback(
    async ({ hoverColumnId, dropId }: { hoverColumnId: string; dropId: string }) => {
      const { tasksByColumns } = store.getState().taskReducer;

      const tasks = tasksByColumns[hoverColumnId];
      const dropIndex = tasks.findIndex((task) => task.id === dropId);
      if (dropIndex === -1) return;

      const dropItem = tasks[dropIndex];
      const hoverItem = tasks[dropIndex - 1];
      const nextToDropItem = tasks[dropIndex + 1];
      const order = calculateUpdatedOrder(hoverItem?.order, nextToDropItem?.order);
      await update({ ...dropItem, columnId: hoverColumnId, order });
    },
    [update]
  );

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DND_ITEM_TYPES.task,
      item: () => ({ id, columnId }),
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
      isDragging: (monitor) => id === monitor.getItem().id,
      end: async (item) => {
        await updateItemOrder({ hoverColumnId: item.columnId, dropId: item.id });
      },
    }),
    [id, columnId]
  );

  const [, drop] = useDrop(
    () => ({
      accept: DND_ITEM_TYPES.task,
      hover: (dragItem: { id: string; columnId: string }, monitor) => {
        const { id: dragId, columnId: dragColumnId } = dragItem;
        const canDrop = dragId !== id && monitor.isOver({ shallow: true }) === monitor.isOver();

        if (canDrop) {
          dispatch(onMoveTask({ dragColumnId, dragId, hoverColumnId: columnId, hoverId: id }));
          dragItem.columnId = columnId;
        }
      },
    }),
    [dispatch, onMoveTask]
  );

  return { isDragging, drag, drop };
};

export default useTaskDragAndDrop;
