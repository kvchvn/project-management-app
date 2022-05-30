import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routerPaths } from '../../constants/common';
import StyledButton from '../../styles/components/StyledButton';
import { Styled404 } from './style';

function NotFound() {
  const { t } = useTranslation();

  return (
    <Styled404>
      <p>{t('notFound.title')}</p>
      <Link to={routerPaths.main}>
        <StyledButton variant="primary">{t('notFound.toMain')}</StyledButton>
      </Link>
    </Styled404>
  );
}

export default NotFound;
