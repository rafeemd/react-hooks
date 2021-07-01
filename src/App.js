import React, { useState } from 'react';
import './style.css';
import MyComp from './MyComp';
import Funcomp from './HookUseMemo';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="button"
        value="Increase Count"
        onClick={() => setCount(count + 1)}
      />
      <MyComp />
      <Funcomp count={count} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
