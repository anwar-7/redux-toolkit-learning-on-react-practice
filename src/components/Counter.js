import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../services/actions/counterAction';

const Counter = () => {
  //
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
    //
  };

  return (
    <div>
      <h2>Counter App</h2>

      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      {/* <button onClick={handleReset}>Reset</button> */}
      {/* <button onClick={handleDecrement}>Decrement</button> */}
    </div>
  );
};

export default Counter;
