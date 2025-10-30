import './App.css';

function App() {
  const name = 'Programming Hero';

  const nameArr = name.split('');

  return (
    <div className="main">
      <div className="container">
        {nameArr.map((item, i) => (
          <span
            key={i}
            className="alphabet"
            style={{
              transitionDelay: `${i * 100}ms`, // stagger animation
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
