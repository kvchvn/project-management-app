import React, { useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';

import { DND_ITEM_TYPES } from '../../constants/common-constants';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn } from './styles';

function Column({
  id,
  title,
  order,
  moveColumns,
}: IColumn & {
  moveColumns: (
    dragItem: { id: string; order: number },
    hoverItem: { id: string; order: number }
  ) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop<{ id: string; order: number }, void, { isOver: boolean }>(
    () => ({
      accept: DND_ITEM_TYPES.column,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        handlerId: monitor.getHandlerId(),
      }),
      hover: (item: { id: string; order: number }, monitor) => {
        if (!ref.current) return;

        const dragItem = item;
        const hoverItem = { id, order };
        if (dragItem.order === hoverItem.order) return;

        const hoverBoundingRect = ref.current.getBoundingClientRect();
        // console.log(hoverBoundingRect);
        const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
        console.log('middle', hoverMiddleX);

        const clientOffset = monitor.getClientOffset() as XYCoord;
        console.log('offset', clientOffset);

        const hoverClientX = hoverBoundingRect.right - clientOffset.x;
        console.log('client', hoverClientX);

        // if (dragItem.order < hoverItem.order && hoverClientX < hoverMiddleX) return;
        // if (dragItem.order > hoverItem.order && hoverClientX > hoverMiddleX) return;

        moveColumns(dragItem, hoverItem);
        item.order = hoverItem.order;
      },
      // drop: (item: { id: string; order: number }) => {
      //   // const dragItem = item;
      //   // const hoverItem = { id, order };
      //   // if (dragItem.id === hoverItem.id) return;
      //   // moveColumns(dragItem, hoverItem);
      //   console.log('drop');
      //   console.log('from', item);
      //   console.log('to', { id, order });
      // },
    }),
    [order]
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DND_ITEM_TYPES.column,
    item: () => ({ id, order }),
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <StyledColumn ref={ref} style={{ opacity }} order={order}>
      <h3>{title}</h3>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </StyledColumn>
  );
}

export default Column;
