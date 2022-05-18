import React from 'react';
import { StyledWelcomeButton } from './StyledWelcomeButton';

type ButtonProps = {
  children: string;
};

function WelcomeButton(props: ButtonProps) {
  return <StyledWelcomeButton>{props.children}</StyledWelcomeButton>;
}

export default WelcomeButton;
