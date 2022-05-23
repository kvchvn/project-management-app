import { useCallback, useEffect, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import { calculateUpdatedOrder } from '../utils/common';

const useMoveItems = <T extends { id: string; title: string; order: number }>({
  items: values,
  update,
}: {
  items: T[];
  update: UseMutateAsyncFunction<T | undefined, unknown, T, unknown>;
}) => {
  const [items, setItems] = useState(values);
  useEffect(() => setItems(items), [items]);

  const findItem = useCallback(
    (id: string) => {
      const index = items.findIndex((c) => c.id === id);
      return { item: items[index], index };
    },
    [items]
  );

  const moveItem = useCallback(
    (droppedId: string, hoverIndex: number) => {
      const droppedIndex = findItem(droppedId).index;
      const itemsCopy = [...items];
      const droppedItem = itemsCopy.splice(droppedIndex, 1)[0];
      itemsCopy.splice(hoverIndex, 0, droppedItem);

      setItems(itemsCopy);
    },
    [findItem, items, setItems]
  );

  const updateItemOrder = useCallback(
    async (droppedId: string, hoverIndex: number) => {
      const { index: droppedIndex, item: droppedItem } = findItem(droppedId);
      if (droppedIndex === hoverIndex) return;

      const direction = droppedIndex > hoverIndex ? 'forward' : 'backward';
      const hoverItem = items[hoverIndex];
      const nextToDroppedItem =
        items[droppedIndex > hoverIndex ? droppedIndex + 1 : droppedIndex - 1];

      await update({
        ...droppedItem,
        order: calculateUpdatedOrder(hoverItem.order, nextToDroppedItem?.order, direction),
      });
    },
    [findItem, items, update]
  );

  return { items, findItem, moveItem, updateItemOrder };
};

export default useMoveItems;
