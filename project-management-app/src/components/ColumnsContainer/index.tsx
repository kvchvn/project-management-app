import React, { useCallback, useRef, useState } from 'react';
import { Column as IColumn } from '../../interfaces/column';
import Column from '../Column';
import Modal from '../Modal';

import { StyledColumnCreateButtonContainer, StyledColumnsContainer } from './styles';

function ColumnsContainer({
  columns,
  onNewColumnCreate,
}: {
  columns: IColumn[];
  onNewColumnCreate: (title: string) => Promise<void>;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [localColumns, setColumns] = useState(columns);

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

  const moveColumns = useCallback(
    (dragItem: { id: string; order: number }, hoverItem: { id: string; order: number }) => {
      console.log(dragItem.order, hoverItem.order);
      setColumns((prevColumns) => {
        const copy = prevColumns.slice();
        [copy[dragItem.order], copy[hoverItem.order]] = [
          copy[hoverItem.order],
          copy[dragItem.order],
        ];
        return copy;
      });
    },
    []
  );

  const renderColumn = useCallback(
    (column: IColumn, index: number) => {
      return <Column key={column.id} {...column} order={index} moveColumns={moveColumns} />;
    },
    [moveColumns]
  );

  return (
    <StyledColumnsContainer>
      {localColumns.map(renderColumn)}
      <StyledColumnCreateButtonContainer ref={modalRef} order={columns.length + 1}>
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
      </StyledColumnCreateButtonContainer>
    </StyledColumnsContainer>
  );
}

export default ColumnsContainer;
