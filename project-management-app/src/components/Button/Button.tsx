import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
min-width: 100px;
border: none;
border-radius: 5px;
padding: 10px 15px;
background: #4676D7;
font-size: 18px;
cursor: pointer;
&: hover {
  background: #1d49aa;
}
&: focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}`
type ButtonProps = {
  children: string;
}

function Button (props: ButtonProps) {
  return <StyledButton>{props.children}</StyledButton>
}

export default Button;