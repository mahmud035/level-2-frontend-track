import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEditTodoMutation, useGetSingleTodoQuery } from '@/redux/api/api';
import { TTodo } from '@/redux/features/todo/todoSlice';
import { FormEvent, useEffect, useState } from 'react';

const EditTodoModal = ({ todo }: { todo: TTodo }) => {
  //* Edit Data From Server Using RTQ Query
  const [editTodo] = useEditTodoMutation();
  const [isEditMode, setIsEditMode] = useState(false);

  const { data: todoData } = useGetSingleTodoQuery(todo._id, {
    skip: !isEditMode, // Skip the query when isEditMode is false
  });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (todoData) {
      setTitle(todoData.title);
      setDescription(todoData.description);
      setPriority(todoData.priority);
    }
  }, [todoData]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title === '' || description === '' || priority === '') {
      return alert('Please Fill All The Fields.');
    }
    const updatedTodoData = {
      ...todo,
      title: title,
      description: description,
      priority: priority,
    };
    const options = {
      id: todo._id,
      data: updatedTodoData,
    };
    editTodo(options);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={handleEditClick} className="bg-[#5C53FE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>Edit your task.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  defaultValue={title}
                  onBlur={(e) => setTitle(e.target.value)}
                  id="name"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  defaultValue={description}
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label className="text-right">Priority</Label>
                <Select
                  defaultValue={priority}
                  onValueChange={(e) => setPriority(e)}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select Task Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end mt-2">
                <DialogClose asChild>
                  <Button type="submit">Save Changes</Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditTodoModal;
