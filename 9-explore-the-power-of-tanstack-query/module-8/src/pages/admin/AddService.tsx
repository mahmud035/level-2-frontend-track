import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

const AddService = () => {
  const [serviceName, setServiceName] = useState('');

  //* Add New Service Data (POST)
  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch('http://localhost:5000/api/v1/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  });

  console.log({ isError, isSuccess });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: 'Description',
      devices: ['Smartphone', 'Laptop', 'Tablet'],
      price: 130.0,
    };

    await mutateAsync(serviceData); // call the mutate function
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="mr-3 border-2 rounded border-primary "
          onChange={(e) => setServiceName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
