import { ChangeEvent, useReducer } from 'react';

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: '',
  email: '',
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case 'addName':
      return {
        ...currentState,
        name: action.payload,
      };
    case 'addEmail':
      return {
        ...currentState,
        email: action.payload,
      };
    default:
      return currentState;
  }
};

const UseReducerExampleForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 border-green-500"
        onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })}
      />
      <input
        type="text"
        name="email"
        id="email"
        className="border-2 border-green-500"
        onChange={(e) =>
          dispatch({ type: 'addEmail', payload: e.target.value })
        }
      />
      <button type="submit" className="btn btn-accent">
        Submit
      </button>
    </form>
  );
};

export default UseReducerExampleForm;
