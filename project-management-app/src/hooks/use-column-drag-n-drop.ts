import { useDrag, useDrop } from 'react-dnd';
import { DND_ITEM_TYPES } from '../constants/common-constants';

const useColumnDragAndDrop = ({
  id,
  moveColumn,
  findColumn,
  updateColumn,
}: {
  id: string;
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
  updateColumn: (id: string, to: number) => void;
}) => {
  const originalIndex = findColumn(id).index;

  // REFERENCE: https://react-dnd.github.io/react-dnd/examples/sortable/cancel-on-drop-outside
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DND_ITEM_TYPES.column,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        if (monitor.didDrop()) updateColumn(droppedId, originalIndex);
      },
    }),
    [id, originalIndex, moveColumn]
  );

  const [, drop] = useDrop(
    () => ({
      accept: DND_ITEM_TYPES.column,
      hover: ({ id: draggedId }: { id: string }) => {
        if (draggedId !== id) {
          const { index: overIndex } = findColumn(id);
          moveColumn(draggedId, overIndex);
        }
      },
    }),
    [findColumn, moveColumn]
  );

  return { isDragging, drag, drop };
};

export default useColumnDragAndDrop;
