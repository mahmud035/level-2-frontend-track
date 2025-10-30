import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { sortTodos } from '../../../utils/todo-utility.js';

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted: boolean;
};

export type TInitialState = {
  todos: TTodo[];
  originalTodos: TTodo[];
  editing: Record<string, never>;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: TInitialState = {
  todos: [],
  originalTodos: [],
  editing: {},
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
      state.originalTodos.push(action.payload);
      // Shorting Todo
      state.todos = sortTodos(state.todos);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      state.originalTodos = state.originalTodos.filter(
        (todo) => todo._id !== action.payload
      );
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const taskToUpdate = state.todos.find(
        (todo) => todo._id === action.payload
      );
      taskToUpdate!.isCompleted = !taskToUpdate?.isCompleted;

      // Shorting Todo
      state.todos = sortTodos(state.todos);
    },
    filterTodo: (state, action: PayloadAction<string>) => {
      const filterValue = action.payload;

      if (filterValue === '' || filterValue === 'showAll') {
        state.todos = state.originalTodos;
      } else {
        const filteredTodos = state.originalTodos.filter(
          (todo) => todo.priority === action.payload
        );
        state.todos = filteredTodos;
      }
    },
    todoToEdit: (state, action) => {
      state.editing = action.payload;
    },
    editTodo: (state, action) => {
      const updatedTask = action.payload;

      // FIXME: Task update করার সময় issue হচ্ছে।
      state.todos = state.todos.map((todo) => {
        if (todo._id === updatedTask._id) {
          // Preserve previous values for untouched fields
          return {
            ...todo,
            title: updatedTask.title !== '' ? updatedTask.title : todo.title,
            description:
              updatedTask.description !== ''
                ? updatedTask.description
                : todo.description,
            priority:
              updatedTask.priority !== ''
                ? updatedTask.priority
                : todo.priority,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleStatus,
  filterTodo,
  todoToEdit,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
