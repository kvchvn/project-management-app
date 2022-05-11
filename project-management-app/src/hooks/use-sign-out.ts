import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../constants/common-constants';
import { removeFromLocalStorage } from '../utils/common';

const useSignOut = () => {
  const navigate = useNavigate();

  const signOut = () => {
    removeFromLocalStorage('user');
    navigate(`/${routerPaths.welcome}`);
  };

  return signOut;
};

export default useSignOut;
