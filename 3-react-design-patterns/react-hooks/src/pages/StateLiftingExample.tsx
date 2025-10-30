type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const StateLiftingExample = ({ counter, setCounter }: TCounter) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{counter}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default StateLiftingExample;
