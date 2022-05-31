import { AxiosError } from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DEFAULT_SERVER_ERROR, QUERY_KEYS, STATUS_BAD_REQUEST, URLS } from '../constants/api';
import { routerPaths } from '../constants/common';
import { Column } from '../interfaces/column';
import { TStore } from '../store';
import { onSaveColumns } from '../store/slices/column';
import { getAll } from '../utils/api';

const getAllColumns = async (token?: string, boardId?: string) => {
  if (token && boardId) {
    const url = `${URLS.boards}/${boardId}/columns`;

    const columns = await getAll<Column>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return columns;
  }
};

const useColumnsQuery = (
  options: UseQueryOptions<Column[] | undefined, unknown, Column[] | undefined, QueryKey> = {}
) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store: TStore) => store.userReducer);
  const navigate = useNavigate();
  const { id: boardId } = useParams();
  const token = user?.token;

  const queryResult = useQuery<Column[] | undefined, unknown, Column[] | undefined>(
    [QUERY_KEYS.columns, token, boardId],
    async () => {
      const columns = await getAllColumns(token, boardId);
      return columns;
    },
    {
      ...options,
      onSuccess: (columns) => columns && dispatch(onSaveColumns({ columns })),
      enabled: !!token || !!boardId,
      onError: (error) => {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          if (axiosError.response.status === STATUS_BAD_REQUEST) {
            toast.error('Board is not found');
            navigate(routerPaths.default);
          }
        } else {
          toast.error(DEFAULT_SERVER_ERROR.data.message);
        }
      },
    }
  );

  return queryResult;
};

export default useColumnsQuery;
