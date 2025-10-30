import { TTodo } from '@/redux/features/todo/todoSlice';

const sortTodos = (todos: TTodo[]): TTodo[] => {
  return todos?.slice()?.sort((a) => (a.isCompleted === true ? 1 : -1));
};

export { sortTodos };
