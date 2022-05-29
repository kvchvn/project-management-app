import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';

import BoardCard from '../../components/BoardCard';
import { routerPaths } from '../../constants/common';
import useAllBoards from '../../hooks/use-all-boards';
import Loading from '../../components/Loading';
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
<<<<<<< HEAD
      <h2>{t('mainPage.title')}</h2>
=======
      <StyledPageTitle>{t('mainPage.title')}</StyledPageTitle>
>>>>>>> 7ad7425 (feat: add styles for Main page)
      <StyledList>
        {boards && boards.length
          ? boards.map((board) => <BoardCard key={board.id} id={board.id} title={board.title} />)
          : t('mainPage.noBoards')}
      </StyledList>
    </main>
  );
}

export default Main;
