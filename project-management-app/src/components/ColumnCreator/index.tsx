import { useRef, useState } from 'react';
import { useClickOutside, useCreateColumn } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { setOrder } from '../../utils/common';
import Modal from '../Modal';
import { CloseIcon, ConfirmIcon } from '../../assets/icons';

import { StyledColumnCreateButton, StyledColumnCreator, StyledContainer } from './styles';
import StyledIconButton from '../../styles/components/StyledIconButton';

function ColumnCreator({ lastColumnOrder }: { lastColumnOrder?: number }) {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');

  useClickOutside(modalRef, () => setIsOpenModal(false));

  const { mutateAsync: create } = useCreateColumn();

  const handleIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleNewColumnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnTitle(e.target.value);
  };

  const handleColumnCreate = async () => {
    await create({ title: newColumnTitle, order: setOrder(lastColumnOrder) });
    setIsOpenModal(false);
  };

  return (
    <StyledContainer ref={modalRef}>
      {isOpenModal ? (
        modalRef.current && (
          <Modal parent={modalRef.current}>
            <StyledColumnCreator>
              <input
                placeholder={t('boardPage.creatingColumn.placeholder')}
                onChange={handleNewColumnTitleChange}
              />
              <StyledIconButton
                variant="primary"
                onClick={handleColumnCreate}
                disabled={!newColumnTitle}
              >
                <ConfirmIcon />
              </StyledIconButton>
              <StyledIconButton variant="warning" onClick={handleIsOpenModal}>
                <CloseIcon />
              </StyledIconButton>
            </StyledColumnCreator>
          </Modal>
        )
      ) : (
        <StyledColumnCreateButton variant="primary" onClick={handleIsOpenModal}>
          {lastColumnOrder
            ? t('boardPage.creatingColumn.another')
            : t('boardPage.creatingColumn.first')}
        </StyledColumnCreateButton>
      )}
    </StyledContainer>
  );
}

export default ColumnCreator;
