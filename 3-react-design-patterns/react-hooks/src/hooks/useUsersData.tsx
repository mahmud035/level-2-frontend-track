/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useUsersData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const controller = new AbortController(); // for useEffect clean up function
  const signal = controller.signal;

  const url = 'https://randomuser.me/api/?results=15';

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, { signal });
      const data = await res.json();
      setIsLoading(false);
      setData(data.results);
    } catch (error) {
      setError(true);
    }
  };

  // WARNING: MUST call the function inside useEffect.
  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, error, data };
};

export default useUsersData;
