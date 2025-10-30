import { useAppSelector } from '@/redux/hooks';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const [parent] = useAutoAnimate();
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between w-full pb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient p-[5px] rounded-xl flex justify-center w-full">
        <div
          ref={parent}
          className="w-full p-5 space-y-3 bg-white border rounded-lg"
        >
          {todos?.length > 0 ? (
            todos?.map((todo) => <TodoCard key={todo._id} todo={todo} />)
          ) : (
            <div className="flex items-center justify-center p-5 text-2xl font-semibold bg-white rounded-md">
              <p>There is no task pending!!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
