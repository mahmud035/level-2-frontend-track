import { useEffect, useState } from 'react';

const UseEffectUseObjectAsADependency = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  console.log(user);

  useEffect(() => {
    console.log('Render');
  }, [user.name, user.email]); //* provide string value (primitive data type)

  return (
    <div>
      <form>
        <input
          onBlur={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className="p-2 mr-2 border-2 border-green-500"
        />
        <input
          onBlur={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className="p-2 border-2 border-green-500"
        />
      </form>
    </div>
  );
};

export default UseEffectUseObjectAsADependency;
