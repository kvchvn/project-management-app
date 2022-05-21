import React from 'react';
import { Link } from 'react-router-dom';
import { Styled404, StyledImg } from './style';

function NotFound() {
  return (
    <Styled404>
      <StyledImg src="./404.jpg" alt="not found" />
      <Link to="/">Go to Main page</Link>
    </Styled404>
  );
}

export default NotFound;
