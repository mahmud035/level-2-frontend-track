import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center w-full h-screen text-center">
      <div className="p-10 border border-purple-300 rounded-md bg-slate-50">
        <span className="block mb-4 text-2xl font-medium text-emerald-500">
          {count}
        </span>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 mr-3 font-medium text-white rounded bg-cyan-500"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 mr-3 font-medium text-white bg-orange-500 rounded"
        >
          Decrement
        </button>

        {/* Payload */}
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 py-2 mr-3 font-medium text-white rounded bg-cyan-500"
        >
          IncrementBy 5
        </button>
        <button
          onClick={() => dispatch(decrementByAmount({ value: 5 }))}
          className="px-3 py-2 mr-3 font-medium text-white bg-orange-500 rounded"
        >
          DecrementBy 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
