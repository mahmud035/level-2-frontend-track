import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TTodo = {
  _id: string;
  status?: 'finished' | 'pending';
  title: string;
  description: string;
  dateTime?: string;
  priority?: 'high' | 'medium' | 'low';
  isCompleted: boolean;
};

type TInitialState = {
  todos: TTodo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: TInitialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const taskToUpdate = state.todos.find(
        (todo) => todo._id === action.payload
      );
      taskToUpdate!.isCompleted = !taskToUpdate?.isCompleted;

      // Sorting task
      state.todos = state.todos.sort((a, b) =>
        a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
