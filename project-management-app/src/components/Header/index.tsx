import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { useSignOut } from '../../hooks';
import { TStore } from '../../store';
import BoardForm from '../BoardForm';
import LangDropdown from '../LangDropdown';
import Modal from '../Modal';
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledNav,
  StyledNavButton,
  StyledHeaderTitle,
  StyledAside,
  StyledProfileButton,
  StyledUserImage,
  StyledToggler,
  StyledHiddenInput,
} from './styles';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isBoardFormOpen, setIsBoardFormOpen] = useState(false);
  const { user } = useSelector((state: TStore) => state.userReducer);
  const signOut = useSignOut();
  const navigate = useNavigate();
  const menuToggler = useRef<HTMLInputElement>(null);

  const closeMenu = () => {
    if (menuToggler.current) {
      menuToggler.current.checked = false;
    }
  };

  const moveToMainPage = () => {
    navigate(routerPaths.main);
    closeMenu();
  };

  const moveToProfilePage = () => {
    navigate(`/${routerPaths.profile}`);
    closeMenu();
  };

  const handleSignOut = () => {
    signOut();
  };

  const openBoardForm = () => {
    setIsBoardFormOpen(true);
    closeMenu();
  };

  const closeBoardFormModal = useCallback(() => {
    setIsBoardFormOpen(false);
  }, []);

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
        <StyledHeaderWrapper>
          <StyledHeaderTitle sticky={isSticky}>taskify</StyledHeaderTitle>
          <StyledToggler sticky={isSticky} />
          <StyledHiddenInput ref={menuToggler} />
          <section>
            <StyledNav sticky={isSticky}>
              <StyledNavButton sticky={isSticky} onClick={moveToMainPage}>
                Home
              </StyledNavButton>
              <StyledNavButton sticky={isSticky} onClick={openBoardForm}>
                Create board
              </StyledNavButton>
              <StyledNavButton sticky={isSticky} onClick={handleSignOut}>
                Sign out
              </StyledNavButton>
            </StyledNav>
            <StyledAside>
              <LangDropdown sticky={isSticky} />
              <StyledProfileButton sticky={isSticky} onClick={moveToProfilePage}>
                <StyledUserImage />
                <p>{user ? user.login : 'Profile'}</p>
              </StyledProfileButton>
            </StyledAside>
          </section>
        </StyledHeaderWrapper>
      </StyledHeader>
      {isBoardFormOpen ? (
        <Modal onClose={closeBoardFormModal}>
          <BoardForm closeModal={closeBoardFormModal} />
        </Modal>
      ) : null}
    </>
  );
}

export default Header;
