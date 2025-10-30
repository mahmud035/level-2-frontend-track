// import { useAppSelector } from '@/redux/hooks';
import { useGetTodosQuery } from '@/redux/api/api';
import { TTodo } from '@/redux/features/todo/todoSlice';
import { sortTodos } from '@/utils/todo-utility';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const [parent] = useAutoAnimate();
  const [priority, setPriority] = useState('');

  //? Get Data From Client Side Using Redux Toolkit
  // const { todos } = useAppSelector((state) => state.todos);

  //* Get Data From Server Using RTQ Query
  const { data, isLoading, isError } = useGetTodosQuery(priority);
  const todos = data?.data;
  const sortedTodos = sortTodos(todos);

  //* Decide what to render on UI
  let content = null;

  if (isLoading) {
    content = (
      <p className="flex items-center justify-center w-full h-full text-2xl font-semibold">
        Loading...
      </p>
    );
  }
  if (!isLoading && isError) {
    content = <p>Something went wrong</p>;
  }
  if (!isLoading && !isError && todos.length === 0) {
    content = (
      <div className="flex items-center justify-center p-5 text-2xl font-semibold bg-white rounded-md">
        <p>There is no task pending!!</p>
      </div>
    );
  }
  if (!isLoading && !isError && todos.length > 0) {
    content = sortedTodos?.map((todo: TTodo) => (
      <TodoCard key={todo._id} todo={todo} />
    ));
  }

  return (
    <div>
      <div className="flex justify-between w-full pb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-primary-gradient p-[5px] rounded-xl flex justify-center w-full">
        <div
          ref={parent}
          className="w-full p-5 space-y-3 bg-white border rounded-lg"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
