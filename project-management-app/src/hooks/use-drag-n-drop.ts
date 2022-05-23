import { useDrag, useDrop } from 'react-dnd';

const useDragAndDrop = ({
  id,
  itemType,
  moveColumn,
  findColumn,
  updateColumn,
}: {
  id: string;
  itemType: string;
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
  updateColumn: (id: string, to: number) => void;
}) => {
  const originalIndex = findColumn(id).index;

  // REFERENCE: https://react-dnd.github.io/react-dnd/examples/sortable/cancel-on-drop-outside
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: itemType,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        if (monitor.didDrop()) updateColumn(droppedId, originalIndex);
      },
    }),
    [id, originalIndex, updateColumn]
  );

  const [, drop] = useDrop(
    () => ({
      accept: itemType,
      hover: ({ id: draggedId }: { id: string }) => {
        if (draggedId !== id) {
          const { index: overIndex } = findColumn(id);
          moveColumn(draggedId, overIndex);
        }
      },
    }),
    [findColumn, moveColumn]
  );

  return { isDragging, drag, dragPreview, drop };
};

export default useDragAndDrop;
