import { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
      {count === 0 && <span> - no mark</span>}
    </button>
  );
};

const MyApp = () => {
  return (
    <div>
      <h1>Counters that update separately</h1>
      {Array.from({ length: 5 }, (_, i) => (
        <Counter key={i} initialCount={i} />
      ))}
    </div>
  );
};

export default MyApp;
