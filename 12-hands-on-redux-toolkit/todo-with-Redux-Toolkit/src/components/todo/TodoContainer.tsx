import { useAppSelector } from '@/redux/hooks';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const [parent] = useAutoAnimate();
  //* From Local State
  const { todos } = useAppSelector((state) => state.todos);

  //* From Server
  // const { data, isLoading, isError } = useGetTasksQuery(undefined);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>Something went wrong!</p>;
  // }

  // const todos = data?.data;

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div
          ref={parent}
          className="bg-white p-5 rounded-lg w-full h-full space-y-3"
        >
          {todos?.length > 0 ? (
            todos?.map((todo) => <TodoCard key={todo._id} todo={todo} />)
          ) : (
            <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-semibold">
              <p>There is no task pending!!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
