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
import { useAddTodoMutation } from '@/redux/api/api';
// import { addTodo } from '@/redux/features/todo/todoSlice';
// import { useAppDispatch } from '@/redux/hooks';
import { FormEvent, useState } from 'react';

const AddTodoModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  //? Post Data To Client Side Using Redux Toolkit
  // const dispatch = useAppDispatch();

  //* Post Data To Server Using RTQ Query
  // [actualMutationFunction, {data, isLoading, isError, etc}] = useAddTodoMutation()
  const [addTodo, { isLoading, isError }] = useAddTodoMutation();

  if (isLoading) {
    <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    <p>Something went wrong</p>;
  }

  const reset = () => {
    setTitle('');
    setDescription('');
    setPriority('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title === '' || description === '' || priority === '') {
      return alert('Please Fill All The Fields.');
    }
    const taskData = {
      title: title,
      description: description,
      priority: priority,
      isCompleted: false,
    };
    // dispatch(addTodo(taskData));
    addTodo(taskData);
    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-xl font-semibold bg-primary-gradient">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
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
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label className="text-right">Priority</Label>
                <Select onValueChange={(e) => setPriority(e)}>
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
                  <Button type="submit">Add New Task</Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
