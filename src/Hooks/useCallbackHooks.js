import React, { useState } from 'react';

const CountButton = React.memo(function(props) {
  console.log('re-rendering', props);
  const { onClick, count } = props;
  return (
    <button type="button" style={{ width: 100 }} onClick={onClick}>
      Click Me! {count}
    </button>
  );
});

function UseMemoCalculator({ value, multiplier }) {
  const heavyResult = React.useMemo(() => {
    console.log('called only on dependent array value change');
    return value * multiplier;
  }, [value, multiplier]);

  return <div>Heavy Calculator: {heavyResult}</div>;
}
function DualCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [value, setValue] = useState(0);
  const [multiplier, setmultiplier] = useState(0);

  const setCalculatorValue = () => {
    setValue(100);
    setmultiplier(20);
  };

  const setCalculatorValue2 = () => {
    setValue(Math.random(10, 20));
    setmultiplier(Math.random(10, 100));
  };

  const countIncrement1 = () => setCount1(count1 + 1);
  const countIncrement2 = React.useCallback(() => setCount2(c => c + 1), []);

  //problem with this code on click of button both the buttons are getting re-rendered. this is causing duplicate re-rendering

  return (
    <>
      <CountButton count={count1} onClick={countIncrement1} />
      &nbsp;&nbsp;
      <CountButton count={count2} onClick={countIncrement2} />
      &nbsp;
      <button onClick={setCalculatorValue}> Click to Increment Count </button>
      <button onClick={setCalculatorValue2}> Click to rerender Count </button>
      <UseMemoCalculator value={value} multiplier={multiplier} />
    </>
  );
}

export default DualCounter;
