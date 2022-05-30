import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Column } from '../../interfaces/column';

const initialState: { columns: Column[] } = {
  columns: [],
};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    onSaveColumns: (state, { payload }: PayloadAction<{ columns: Column[] }>) => {
      state.columns = payload.columns.sort((a, b) => a.order - b.order);
    },

    onMoveColumn: (state, { payload }: PayloadAction<{ dragId: string; hoverId: string }>) => {
      const { dragId, hoverId } = payload;

      const dragIndex = state.columns.findIndex((column) => column.id === dragId);
      const hoverIndex = state.columns.findIndex((column) => column.id === hoverId);
      if (dragIndex === -1 || hoverIndex === -1) return;

      const dragColumn = state.columns.splice(dragIndex, 1)[0];

      state.columns.splice(hoverIndex, 0, dragColumn);
    },
  },
});

export const columnReducer = columnSlice.reducer;

export const { onSaveColumns, onMoveColumn } = columnSlice.actions;
