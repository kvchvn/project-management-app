import React from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common-constants';
import { StyledWrapper } from '../../layouts/containers';
import Dropdown from '../Dropdown/Dropdown';
import { StyledHeader, Nav, NavButton } from './styles';

function Header() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <h1>AppName</h1>
        <Nav>
          <NavButton as={Link} to={routerPaths.profile}>
            Edit profile
          </NavButton>
          <NavButton>Create board</NavButton>
          <NavButton>Log out</NavButton>
          <Dropdown />
        </Nav>
      </StyledWrapper>
    </StyledHeader>
  );
}

export default Header;
