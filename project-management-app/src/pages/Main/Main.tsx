import React, { useEffect } from 'react';
import { Wrapper } from '../../layouts/containers';
import { getAllBoards } from '../../utils/boards-api';
import './main-page.scss';

function Main() {
  useEffect(() => {
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
