import { useCallback, useEffect, useState } from 'react';

const useSortByOrder = <T extends { order: number }>(data?: T[]) => {
  const [items, setItems] = useState<T[]>([]);

  const sortColumns = useCallback(() => {
    if (data) setItems(data.sort((a, b) => a.order - b.order));
  }, [data]);

  useEffect(() => {
    sortColumns();
  }, [sortColumns]);

  return items;
};

export default useSortByOrder;
