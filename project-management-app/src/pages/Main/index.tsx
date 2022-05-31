import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';

import BoardCard from '../../components/BoardCard';
import { routerPaths } from '../../constants/common';
import useAllBoards from '../../hooks/use-all-boards';
import Loading from '../../components/Loading';
import { useUserSelector } from '../../store/selectors';
import { StyledList } from './styles';
import StyledPageTitle from '../../styles/components/StyledPageTitle';

function Main() {
  const { user } = useUserSelector();
  const navigate = useNavigate();
  const { isLoading, data: boards } = useAllBoards();
  const { t } = useTranslation();

  useEffect(() => {
    if (!user) {
      navigate(`/${routerPaths.welcome}`);
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <StyledPageTitle>{t('mainPage.title')}</StyledPageTitle>
      <StyledList>
        {boards && boards.length
          ? boards.map((board) => <BoardCard key={board.id} id={board.id} title={board.title} />)
          : t('mainPage.noBoards')}
      </StyledList>
    </main>
  );
}

export default Main;
