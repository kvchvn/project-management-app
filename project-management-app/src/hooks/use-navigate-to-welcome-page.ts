import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../constants/common-constants';

const useNavigateToWelcomePage = () => {
  const navigate = useNavigate();
  navigate(`${routerPaths.welcome}`, { replace: true });
};

export default useNavigateToWelcomePage;
