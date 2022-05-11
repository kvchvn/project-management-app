import { ColumnDetailed } from './column';

export interface Board {
  id: string;
  title: string;
}

export interface BoardDetailed extends Board {
  columns: ColumnDetailed;
}

export type Boards = Board[];
