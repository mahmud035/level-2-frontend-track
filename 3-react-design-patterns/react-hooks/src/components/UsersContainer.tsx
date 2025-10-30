import useUsersData from '../hooks/useUsersData';
import UserList from './UserList';

// NOTE: Container Component
const UsersContainer = () => {
  const { isLoading, error, data } = useUsersData(); // custom hook

  return <UserList isLoading={isLoading} error={error} data={data} />;
};

export default UsersContainer;
