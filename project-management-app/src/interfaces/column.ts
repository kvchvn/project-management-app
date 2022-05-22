import { TaskWithFiles } from './task';

export interface Column {
  id: string;
  title: string;
  order: number;
}

export interface ColumnDetailed extends Column {
  tasks: TaskWithFiles[];
}
