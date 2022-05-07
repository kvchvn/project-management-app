import React, { useEffect } from 'react';
import { Wrapper } from '../../layouts/containers';
import { createNewBoard, getAllBoards } from '../../utils/boards-api';
import './main-page.scss';

function Main() {
  console.log('render');
  useEffect(() => {
    createNewBoard('wash the car');
    getAllBoards();
  }, []);

  return (
    <main>
      <Wrapper>
        <h2>My boards</h2>
      </Wrapper>
    </main>
  );
}

export default Main;
