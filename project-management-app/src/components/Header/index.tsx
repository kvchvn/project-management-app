import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const moveToMainPage = () => {
    navigate(routerPaths.main);
  };

  const moveToProfilePage = () => {
    navigate(`/${routerPaths.profile}`);
  };

  const handleSignOut = () => {
    signOut();
    dispatch(onSignOut());
  };

  const openBoardForm = () => {
    setIsBoardFormOpen(true);
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
          <StyledToggler />
          <StyledHiddenInput />
          <section>
            <StyledNav sticky={isSticky}>
              <StyledNavButton onClick={moveToMainPage}>{t('header.home')}</StyledNavButton>
              <StyledNavButton onClick={openBoardForm}>{t('header.createBoard')}</StyledNavButton>
              <StyledNavButton onClick={handleSignOut}>{t('header.signOut')}</StyledNavButton>
            </StyledNav>
            <StyledAside>
              <LangDropdown />
              <StyledProfileButton onClick={moveToProfilePage}>
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
