import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { useSignOut } from '../../hooks';
import { StyledWrapper } from '../../layouts/containers';
import Dropdown from '../Dropdown';
import { StyledHeader, Nav, NavButton, HeaderTitle } from './styles';

function Header() {
  const [sticky, setSticky] = useState(false);
  const signOut = useSignOut();

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !sticky) {
        setSticky(true);
      } else if (window.scrollY === 0 && sticky) {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledHeader sticky={sticky}>
      <StyledWrapper>
        <HeaderTitle sticky={sticky}>AppName</HeaderTitle>
        <Nav sticky={sticky}>
          <NavButton as={Link} to={routerPaths.profile}>
            Edit profile
          </NavButton>
          <NavButton>Create board</NavButton>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          <Dropdown />
        </Nav>
      </StyledWrapper>
    </StyledHeader>
  );
}

export default Header;
