const HelloWorld = () => {
  return React.createElement('p', null, 'This is a paragraph');
};

const AnotherHello = () => {
  return React.createElement('p', null, 'This is another paragraph');
};

console.log('React =>', React);
console.log('ReactDOM =>', ReactDOM);

const App = () => {
  {
    return React.createElement(
      'h1',
      { style: { color: 'red' } },
      'Hello World',
      HelloWorld(),
      AnotherHello()
    );
  }
};

// const HelloWorld = () => {
//   return <h2>Hello World</h2>;
// };

// const App = () => {
//   return (
//     <div>
//       <h1>This is App Component</h1>
//       <HelloWorld />
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App));
