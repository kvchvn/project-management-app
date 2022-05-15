import React, { memo, useCallback, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';

import Column from '../Column';
import Modal from '../Modal';
import { Column as IColumn } from '../../interfaces/column';
import { DND_ITEM_TYPES } from '../../constants/common-constants';

import { StyledColumnsContainer } from './styles';

function ColumnsContainer({
  items,
  onNewColumnCreate,
}: {
  items: IColumn[];
  onNewColumnCreate: (title: string) => Promise<void>;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [columns, setColumns] = useState(items);

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleNewColumnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnTitle(e.target.value);
  };

  const handleNewColumnTitleCreate = async () => {
    await onNewColumnCreate(newColumnTitle);
    setIsOpenModal(false);
  };

  const findColumn = useCallback(
    (id: string) => {
      const index = columns.findIndex((c) => c.id === id);
      return { column: columns[index], index };
    },
    [columns]
  );

  const moveColumn = useCallback(
    (droppedId: string, hoverIndex: number) => {
      const droppedIndex = findColumn(droppedId).index;
      setColumns((prevColumns) => {
        const copy = prevColumns.slice();
        [copy[droppedIndex], copy[hoverIndex]] = [copy[hoverIndex], copy[droppedIndex]];
        return copy;
      });
    },
    [findColumn, setColumns]
  );

  const [, drop] = useDrop(() => ({ accept: DND_ITEM_TYPES.column }));

  return (
    <StyledColumnsContainer ref={drop}>
      {columns.map((column) => (
        <Column key={column.id} {...column} moveColumn={moveColumn} findColumn={findColumn} />
      ))}
      <div ref={modalRef}>
        {isOpenModal ? (
          modalRef.current && (
            <Modal parent={modalRef.current}>
              <input placeholder="Enter list title..." onChange={handleNewColumnTitleChange} />
              <button onClick={handleNewColumnTitleCreate}>Add list</button>
              <button onClick={handleIsOpenModal}>X</button>
            </Modal>
          )
        ) : (
          <button onClick={handleIsOpenModal}>
            {columns?.length ? 'Add another column' : 'Add a column'}{' '}
          </button>
        )}
      </div>
    </StyledColumnsContainer>
  );
}

export default memo(ColumnsContainer);
