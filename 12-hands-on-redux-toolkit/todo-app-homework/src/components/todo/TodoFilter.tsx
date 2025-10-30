import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { filterTodo } from '@/redux/features/todo/todoSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect, useState } from 'react';

const TodoFilter = () => {
  const [filterBy, setFilterBy] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterTodo(filterBy));
  }, [filterBy, dispatch]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-xl font-semibold bg-primary-gradient">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={filterBy} onValueChange={setFilterBy}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="showAll">
            Show All
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
