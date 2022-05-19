import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background: #ebecf0;
`;

export type NavbarProps = {
  children: ReactNode;
};

function Navbar(props: NavbarProps) {
  return <StyledNav>{props.children}</StyledNav>;
}

export default Navbar;
