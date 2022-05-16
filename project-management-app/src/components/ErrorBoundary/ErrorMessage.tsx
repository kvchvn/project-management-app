import React from 'react';
import img from './error.gif';
import styled from 'styled-components';

const StyledError = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  objectfit: contain;
  margin: 0 auto;
`;
const ErrorMessage = () => {
  return <StyledError src={img} />;
};

export default ErrorMessage;
