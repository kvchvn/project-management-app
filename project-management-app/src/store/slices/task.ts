import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskDetailed } from '../../interfaces/task';

const initialState: { tasksByColumns: Record<string, TaskDetailed[]> } = {
  tasksByColumns: {},
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
        hoverId: string;
      }>
    ) => {
      const { dragColumnId, dragId, hoverColumnId, hoverId } = payload;

      const dragIndex = state.tasksByColumns[dragColumnId].findIndex((task) => task.id === dragId);
      const hoverIndex = state.tasksByColumns[hoverColumnId].findIndex(
        (task) => task.id === hoverId
      );
      if (dragIndex === -1 || hoverIndex === -1) return;

      const dragTask = state.tasksByColumns[dragColumnId].splice(dragIndex, 1)[0];

      dragTask.columnId = hoverColumnId;
      state.tasksByColumns[hoverColumnId].splice(hoverIndex, 0, dragTask);
    },
  },
});

export const taskReducer = taskSlice.reducer;

export const { onSaveTasksByColumn, onMoveTask } = taskSlice.actions;
