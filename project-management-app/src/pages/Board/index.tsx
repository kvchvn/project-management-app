import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useColumnsQuery } from '../../hooks';
import ColumnsContainer from '../../components/ColumnsContainer';
import Loading from '../../components/Loading';
import Task from '../../components/Task';
import Modal from '../../components/Modal';
import { onCloseTaskModal } from '../../store/slices/task';
import { useTaskSelector } from '../../store/selectors';
import { StyledBoard } from './style';
import StyledPageTitle from '../../styles/components/StyledPageTitle';

function Board() {
  const { isLoading } = useColumnsQuery();
  const { taskModal } = useTaskSelector();
  const { isOpen: isTaskModalOpen } = taskModal;
  const dispatch = useDispatch();
  const { title } = useParams();

  const handleCloseTaskModal = () => {
    dispatch(onCloseTaskModal());
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledBoard>
        <StyledPageTitle>{title}</StyledPageTitle>
        <ColumnsContainer />
        {isTaskModalOpen && (
          <Modal onClose={handleCloseTaskModal}>
            <Task />
          </Modal>
        )}
      </StyledBoard>
    </DndProvider>
  );
}

export default Board;
