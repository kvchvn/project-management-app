import React, { useRef, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import { TITLE_ROWS } from '../../constants/common-constants';
import { useClickOutside } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';

import { StyledTitle } from './styles';

interface ColumnTitleProps extends Omit<IColumn, 'id'> {
  isEditingTitle: boolean;
  setIsEditingTitle: (val: boolean) => void;
  update: UseMutateAsyncFunction<void | IColumn, unknown, Omit<IColumn, 'id'>, unknown>;
}

function ColumnTitle({
  title,
  order,
  isEditingTitle,
  setIsEditingTitle,
  update,
}: ColumnTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [newTitle, setNewTitle] = useState(title);

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
