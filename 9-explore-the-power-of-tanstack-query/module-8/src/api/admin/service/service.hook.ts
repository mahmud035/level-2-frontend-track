import { useQuery } from '@tanstack/react-query';
import { getServices } from './service.api';

export type TService = {
  _id: string;
  name: string;
  description: string;
  price: string;
};

const useGetServices = () => {
  const {
    isLoading,
    isError,
    data: services,
    error,
  } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,

    //* For transforming data
    select: (data) => {
      const services = data?.data?.data?.map((service: TService) => {
        return {
          _id: service._id,
          name: service.name,
          description: service.description,
          price: service.price,
        };
      });

      return services;
    },
  });

  return { isLoading, isError, services, error };
};

export default useGetServices;
