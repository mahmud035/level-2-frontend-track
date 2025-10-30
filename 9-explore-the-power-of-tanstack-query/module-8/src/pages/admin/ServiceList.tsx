import useGetServices, { TService } from '@/api/admin/service/service.hook';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

const ServiceList = () => {
  //* Add New Service Data (POST)
  const [serviceName, setServiceName] = useState('');
  const queryClient = useQueryClient();

  const {
    mutateAsync: postMutateAsync,
    isError: isPostError,
    isSuccess,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch('http://localhost:5000/api/v1/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['services'],
      });
    },
  });
  console.log({ isPostError, isSuccess });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: 'Description',
      devices: ['Smartphone', 'Laptop', 'Tablet'],
      price: 130.0,
    };

    await postMutateAsync(serviceData); // call the mutate function
  };

  //* Delete Service Data (DELETE)
  const { mutateAsync: deleteMutateAsync } = useMutation({
    mutationFn: async (id) => {
      return await fetch(`http://localhost:5000/api/v1/services/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ['services'],
      });
    },
  });

  const handleDeleteService = (id) => {
    deleteMutateAsync(id); // call the mutate function
  };

  //* Get Services Data Using Hook (GET)
  const { isLoading, isError, services, error } = useGetServices();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error!.message}</span>;
  }

  return (
    <Container className="p-0 mt-5 border rounded-2xl">
      {/* NOTE: When using axios */}

      {/* {data?.data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))} */}

      {/* NOTE: When using fetch */}

      {/* {data?.data?.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))} */}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-black">Name</TableHead>
            <TableHead className="font-semibold text-black">
              Description
            </TableHead>
            <TableHead className="font-semibold text-black">Price</TableHead>
            <TableHead className="font-semibold text-black">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service: TService) => (
            <TableRow key={service._id}>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>${service.price}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDeleteService(service._id)}
                  variant="destructive"
                  className="p-2"
                >
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell>{services.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div>
        <form onSubmit={handleSubmit} className="my-10 text-center ">
          <input
            type="text"
            className="mr-3 border-2 rounded border-primary "
            onChange={(e) => setServiceName(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Container>
  );
};

export default ServiceList;
