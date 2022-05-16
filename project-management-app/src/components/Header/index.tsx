import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { useSignOut } from '../../hooks';
import { StyledWrapper } from '../../layouts/containers';
import BoardForm from '../BoardForm';
import Dropdown from '../Dropdown';
import { StyledHeader, Nav, NavButton, HeaderTitle } from './styles';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isBoardFormOpen, setIsBoardFormOpen] = useState(false);
  const signOut = useSignOut();

  const handleSignOut = () => {
    signOut();
  };

  const openBoardForm = () => {
    setIsBoardFormOpen(true);
  };

  const closeBoardForm = () => {
    setIsBoardFormOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY === 0 && isSticky) {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <StyledHeader sticky={isSticky}>
        <StyledWrapper>
          <HeaderTitle sticky={isSticky}>AppName</HeaderTitle>
          <Nav sticky={isSticky}>
            <NavButton as={Link} to={routerPaths.profile}>
              Edit profile
            </NavButton>
            <NavButton onClick={openBoardForm}>Create board</NavButton>
            <NavButton onClick={handleSignOut}>Sign out</NavButton>
            <Dropdown />
          </Nav>
        </StyledWrapper>
      </StyledHeader>
      {isBoardFormOpen ? <BoardForm closeBoardForm={closeBoardForm} /> : null}
    </>
  );
}

export default Header;
