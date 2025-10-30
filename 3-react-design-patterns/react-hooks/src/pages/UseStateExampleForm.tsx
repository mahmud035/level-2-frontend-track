import React, { useState } from 'react';

const UseStateExampleForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  //* 2.4 Handle Multiple State Using Plain Object
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  // IMPORTANT: 2.5 Refactoring Change Event Functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 border-green-500"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        id="email"
        className="border-2 border-green-500"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-accent">
        Submit
      </button>
    </form>
  );
};

export default UseStateExampleForm;
