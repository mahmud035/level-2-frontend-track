import { useReducer } from 'react';

type TAction = {
  type: string;
  payload?: number;
};

const initialState = {
  count: 0,
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  // console.log('Current State =>', currentState);
  // console.log('Action =>', action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: currentState.count + 1,
      };
    case 'DYNAMIC_INCREMENT':
      return {
        count: currentState.count + action.payload!,
      };
    case 'DECREMENT':
      return {
        count: currentState.count - 1,
      };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDynamicIncrement = () => {
    dispatch({ type: 'DYNAMIC_INCREMENT', payload: 3 });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  console.log('Render');

  return (
    <div>
      <h1>useReducer</h1>
      <h2 className="text-2xl font-semibold">{state.count}</h2>

      <button className="btn btn-success" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn btn-info" onClick={handleDynamicIncrement}>
        Increment by 3 (Payload)
      </button>
      <button className="btn btn-accent" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
