import React, { memo, useRef, useState } from 'react';
import { TITLE_ROWS } from '../../constants/common-constants';

import { useClickOutside, useColumnDragAndDrop, useColumnMutation } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledColumn, StyledTitle } from './styles';

interface ColumnProps extends IColumn {
  moveColumn: (id: string, to: number) => void;
  findColumn: (id: string) => { index: number };
}

function Column({ id, title, order, moveColumn, findColumn }: ColumnProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const { isDragging, drag, drop } = useColumnDragAndDrop({ id, moveColumn, findColumn });
  const [newTitle, setNewTitle] = useState(title);

  const { mutateAsync: update } = useColumnMutation({ method: 'update', columnId: id });

  useClickOutside(titleRef, () => {
    setIsEditingTitle(false);
    setNewTitle(title);
  });

  const handleTitleEdit = () => setIsEditingTitle(true);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTitle(e.target.value);
  };

  const handleTitleSubmit = async () => {
    setIsEditingTitle(false);
    await update({ title: newTitle, order });
  };

  const handleTitleEditCancel = () => setNewTitle(title);

  return (
    <StyledColumn ref={(node) => !isEditingTitle && drag(drop(node))} isDragging={isDragging}>
      <StyledTitle ref={titleRef} isEditing={isEditingTitle}>
        <h2>{title}</h2>
        <textarea
          rows={TITLE_ROWS}
          value={newTitle}
          onChange={handleTitleChange}
          onClick={handleTitleEdit}
        />
        <button onClick={handleTitleSubmit}>√</button>
        <button onClick={handleTitleEditCancel}>x</button>
      </StyledTitle>
    </StyledColumn>
  );
}

export default memo(Column);
