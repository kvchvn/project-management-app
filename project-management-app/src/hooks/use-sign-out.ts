import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../constants/common';
import { onSignOut } from '../store/slices/user';
import { removeFromLocalStorage } from '../utils/common';

const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    removeFromLocalStorage('user');
    dispatch(onSignOut());
    navigate(`/${routerPaths.welcome}`);
  };

  return signOut;
};

export default useSignOut;
