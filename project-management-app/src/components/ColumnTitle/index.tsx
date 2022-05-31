import React, { useRef, useState } from 'react';

import { useClickOutside, useUpdateColumn } from '../../hooks';
import { Column as IColumn } from '../../interfaces/column';
import { TITLE_ROWS } from '../../constants/common';

import { StyledTextArea, StyledTitle } from './styles';
import StyledIconButton from '../../styles/components/StyledIconButton';
import { CloseIcon, ConfirmIcon } from '../../assets/icons';

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

  const handleTitleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    e.target.value = '';
    e.target.value = value;
  };

  return (
    <StyledTitle ref={titleRef} isEditing={isEditingTitle}>
      <StyledTextArea isEditing={isEditingTitle}>
        <div onClick={handleTitleEdit} />
        <textarea
          ref={(node) => isEditingTitle && node?.focus()}
          rows={TITLE_ROWS}
          value={newTitle}
          onChange={handleTitleChange}
          onFocus={handleTitleFocus}
        />
      </StyledTextArea>
      <StyledIconButton variant="primary" onClick={handleTitleSubmit} disabled={!newTitle}>
        <ConfirmIcon />
      </StyledIconButton>
      <StyledIconButton variant="warning" onClick={handleTitleEditCancel}>
        <CloseIcon />
      </StyledIconButton>
    </StyledTitle>
  );
}

export default ColumnTitle;
