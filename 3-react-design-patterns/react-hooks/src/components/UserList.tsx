import User from './User';

// NOTE: Presentational Component
const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!!</p>;
  }

  return (
    <div className="container grid grid-cols-1 gap-4 px-5 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((user) => (
        <User user={user} key={user.phone} />
      ))}
    </div>
  );
};

export default UserList;
