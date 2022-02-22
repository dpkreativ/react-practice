import React, { useReducer } from 'react';

const Counter = () => {
  // set initial state
  const initialState = 0;
  // implement reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return state + action.payload;
      case 'subtract':
        return state - action.payload;
      case 'reset':
        return initialState;
      default:
        return new Error();
    }
  };
  // write useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // display state in component and trigger dispatch with buttons
  return (
    <div>
      <h3>Counter</h3>
      <h1>{state}</h1>

      <button onClick={() => dispatch({ type: 'subtract', payload: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'add', payload: 2 })}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
