import React, { useRef, useState } from 'react';

import { useClickOutside, useUpdateColumn } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';
import { TITLE_ROWS } from '../../constants/common-constants';

import { StyledTitle } from './styles';

interface ColumnTitleProps extends IColumn {
  isEditingTitle: boolean;
  setIsEditingTitle: (val: boolean) => void;
}

function ColumnTitle({ id, title, order, isEditingTitle, setIsEditingTitle }: ColumnTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [newTitle, setNewTitle] = useState(title);

  const { mutateAsync: update } = useUpdateColumn();

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
    await update({ id, title: newTitle, order });
  };

  const handleTitleEditCancel = () => {
    setIsEditingTitle(false);
    setNewTitle(title);
  };

  return (
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
  );
}

export default ColumnTitle;
