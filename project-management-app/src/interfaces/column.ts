import { Task, TaskFiles } from './task';

export interface Column {
  id: string;
  title: string;
  order: number;
}

interface TaskExtended extends Task {
  files: TaskFiles;
}

export interface ColumnDetailed extends Column {
  tasks: TaskExtended;
}
