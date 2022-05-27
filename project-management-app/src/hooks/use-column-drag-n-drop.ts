import { useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { useUpdateColumn } from '.';
import { DND_ITEM_TYPES } from '../constants/common-constants';
import { store } from '../store';
import { onMoveColumn } from '../store/slices/column';
import { calculateUpdatedOrder } from '../utils/common';

const useColumnDragAndDrop = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const { mutateAsync: update } = useUpdateColumn();

  const updateItemOrder = useCallback(
    async ({ dropId }: { dropId: string }) => {
      const { columns } = store.getState().columnReducer;

      const dropIndex = columns.findIndex((column) => column.id === dropId);
      if (dropIndex === -1) return;

      const dropItem = columns[dropIndex];
      const prevItem = columns[dropIndex - 1];
      const nextItem = columns[dropIndex + 1];
      const order = calculateUpdatedOrder(prevItem?.order, nextItem?.order);
      await update({ ...dropItem, order });
    },
    [update]
  );

  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: DND_ITEM_TYPES.column,
      item: () => ({ id }),
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
      end: async (item) => {
        await updateItemOrder({ dropId: item.id });
      },
    }),
    [id]
  );

  const [, drop] = useDrop(
    () => ({
      accept: DND_ITEM_TYPES.column,
      hover: (dragItem: { id: string }) => {
        if (dragItem.id !== id) {
          dispatch(onMoveColumn({ dragId: dragItem.id, hoverId: id }));
        }
      },
    }),
    [dispatch, onMoveColumn]
  );

  return { isDragging, drag, dragPreview, drop };
};

export default useColumnDragAndDrop;
