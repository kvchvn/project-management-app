import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
import { onSignOut } from '../../store/slices/user';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isBoardFormOpen, setIsBoardFormOpen] = useState(false);
  const { user } = useSelector((state: TStore) => state.userReducer);
  const signOut = useSignOut();
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
    dispatch(onSignOut());
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
              <StyledNavButton onClick={moveToMainPage}>{t('header.home')}</StyledNavButton>
              <StyledNavButton onClick={openBoardForm}>{t('header.createBoard')}</StyledNavButton>
              <StyledNavButton onClick={handleSignOut}>{t('header.signOut')}</StyledNavButton>
            </StyledNav>
            <StyledAside>
              <LangDropdown sticky={isSticky} />
              <StyledProfileButton sticky={isSticky} onClick={moveToProfilePage}>
                <StyledUserImage />
                <p>{user ? user.login : ''}</p>
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
