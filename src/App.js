import React, { useState } from 'react';
import './style.css';
import MyComp from './MyComp';
import Funcomp from './HookUseMemo';
import DualCounter from './Hooks/useCallbackHooks';
import Calculator from './Hooks/UseReducerHooks';
// import PrintList from './Hooks/useEffectHooks';
export default function App() {
  const [countObj, setCount] = useState({ count: 0, userList: 'people' });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="button"
        value="Increase Count"
        onClick={() =>
          setCount({ count: countObj.count + 1, userList: 'vehicles' })
        }
      />
      <MyComp />
      <Funcomp count={countObj.count} />
      <DualCounter />
      <Calculator />
      {/* <PrintList userList={countObj.userList} /> */}

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
