import React, { memo } from 'react';

function printNumber(props) {
  return <h1>count is : {props.count}</h1>;
}

function validator(prevProp, newProp) {
  return newProp.count % 3 === 0 ? false : true;
}

export default memo(printNumber, validator);
