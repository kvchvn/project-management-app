export interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
}

export interface TaskDetailed extends Task {
  boardId: string;
  columnId: string;
}

export interface TaskFile {
  filename: string;
  fileSize: number;
}

export type TaskFiles = TaskFile[];
