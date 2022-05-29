import React from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import StyledButton from '../../styles/components/StyledButton';
import { Styled404 } from './style';

function NotFound() {
  return (
    <Styled404>
      <p>404 Page Not Found</p>
      <Link to={routerPaths.main}>
        <StyledButton variant="primary">Go to Main page</StyledButton>
      </Link>
    </Styled404>
  );
}

export default NotFound;
