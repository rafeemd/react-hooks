import React, { useReducer } from 'react';

function Calculator() {
  let IntialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return { count: state.count + 1 };
    }
  };

  let [state, dispatch] = useReducer(reducer, IntialState);

  return (
    <>
      <h1>Count is :{state.count}</h1>
      <button
        value=""
        onClick={() => {
          dispatch({ type: 'ADD' });
        }}
      >
        Increase
      </button>
      <button value="Decrease" />
    </>
  );
}

export default Calculator;
