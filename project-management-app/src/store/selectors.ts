import { useSelector } from 'react-redux';
import { TStore } from '.';

export const useUserSelector = () => useSelector((store: TStore) => store.userReducer);
