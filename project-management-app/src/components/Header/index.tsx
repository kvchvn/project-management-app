import React, { useCallback, useEffect, useState } from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import { useTranslation } from 'react-i18next';
>>>>>>> 51d92ab (feat: add translation for Header, BoardForm)
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { useSignOut } from '../../hooks';
import { StyledWrapper } from '../../layouts/containers';
import { onSignOut } from '../../store/slices/user';
import BoardForm from '../BoardForm';
import LangDropdown from '../LangDropdown';
import Modal from '../Modal';
import { StyledHeader, Nav, NavButton, HeaderTitle } from './styles';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isBoardFormOpen, setIsBoardFormOpen] = useState(false);
  const signOut = useSignOut();
<<<<<<< HEAD
  const dispatch = useDispatch();
=======
  const { t } = useTranslation();
>>>>>>> 51d92ab (feat: add translation for Header, BoardForm)

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
        <StyledWrapper>
          <HeaderTitle sticky={isSticky}>AppName</HeaderTitle>
          <Nav sticky={isSticky}>
            <NavButton as={Link} to={routerPaths.profile}>
              {t('header.editProfile')}
            </NavButton>
            <NavButton onClick={openBoardForm}>{t('header.createBoard')}</NavButton>
            <NavButton onClick={handleSignOut}>{t('header.signOut')}</NavButton>
            <LangDropdown />
          </Nav>
        </StyledWrapper>
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
