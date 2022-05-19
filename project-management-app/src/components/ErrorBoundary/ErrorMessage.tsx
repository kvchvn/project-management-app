import React from 'react';
import img from './error.gif';
import { StyledError } from './styles';

const ErrorMessage = () => {
  return <StyledError src={img} />;
};

export default ErrorMessage;
