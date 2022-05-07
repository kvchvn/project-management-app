import React from "react";
import styled from 'styled-components';
const StyledButton = styled.button`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&: hover {
  outline: none;
}`
type ButtonProps = {
  children: string;
}

function Button (props: ButtonProps) {
  return <StyledButton>{props.children}</StyledButton>
}

export default Button;