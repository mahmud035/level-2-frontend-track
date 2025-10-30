import { useContext } from 'react';
import { TThemeContext, ThemeContext } from '../contexts/ThemeProvider';

const ContextAPIExample = () => {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;

  return (
    <div
      className={`h-full w-full flex justify-center items-center  ${
        dark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div>
        <h1 className="text-2xl font-semibold">Context API</h1>

        <button onClick={() => setDark(!dark)} className="btn btn-accent">
          {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default ContextAPIExample;
