import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskDetailed, TaskModal } from '../../interfaces/task';

const initialState: { tasksByColumns: Record<string, TaskDetailed[]>; taskModal: TaskModal } = {
  tasksByColumns: {},
  taskModal: {
    isOpen: false,
    taskId: null,
    columnId: null,
  },
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    onSaveTasksByColumn: (
      state,
      { payload }: PayloadAction<{ columnId: string; tasks: TaskDetailed[] }>
    ) => {
      state.tasksByColumns[payload.columnId] = payload.tasks.sort((a, b) => a.order - b.order);
    },

    onMoveTask: (
      state,
      {
        payload,
      }: PayloadAction<{
        dragColumnId: string;
        hoverColumnId: string;
        dragId: string;
        hoverId?: string;
        dropTarget: 'column' | 'tasks';
      }>
    ) => {
      const { dragColumnId, dragId, hoverColumnId, hoverId, dropTarget } = payload;

      const dragIndex = state.tasksByColumns[dragColumnId].findIndex((task) => task.id === dragId);
      const hoverIndex =
        dropTarget === 'tasks'
          ? state.tasksByColumns[hoverColumnId].findIndex((task) => task.id === hoverId)
          : state.tasksByColumns[hoverColumnId].length;

      if (dragIndex === -1 || hoverIndex === -1) return;

      const dragTask = state.tasksByColumns[dragColumnId].splice(dragIndex, 1)[0];

      dragTask.columnId = hoverColumnId;
      state.tasksByColumns[hoverColumnId].splice(hoverIndex, 0, dragTask);
    },
    onOpenTaskModal: (state, { payload }: PayloadAction<Omit<TaskModal, 'isOpen'>>) => {
      state.taskModal = { isOpen: true, taskId: payload.taskId, columnId: payload.columnId };
    },
    onCloseTaskModal: (state) => {
      state.taskModal = { isOpen: false, taskId: null, columnId: null };
    },
  },
});

export const taskReducer = taskSlice.reducer;

export const { onSaveTasksByColumn, onMoveTask, onOpenTaskModal, onCloseTaskModal } =
  taskSlice.actions;
