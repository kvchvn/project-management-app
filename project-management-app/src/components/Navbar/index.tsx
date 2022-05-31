import React from 'react';
import { ReactNode } from 'react';
import { StyledNavbar } from './styles';

export type NavbarProps = {
  children: ReactNode;
};

function Navbar(props: NavbarProps) {
  return <StyledNavbar>{props.children}</StyledNavbar>;
}

export default Navbar;
