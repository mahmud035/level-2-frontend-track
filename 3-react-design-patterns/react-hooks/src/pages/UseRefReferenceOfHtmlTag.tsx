import { useEffect, useRef } from 'react';

const UseRefReferenceOfHtmlTag = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // input element will be focused after initial page load / reloading the page
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold">useRef</h1>
      <form>
        <input
          ref={myRef}
          type="text"
          name="name"
          id="name"
          className="p-2 border-2 border-green-500 rounded focus:outline-2 focus:outline-red-500"
        />
      </form>
    </div>
  );
};

export default UseRefReferenceOfHtmlTag;
