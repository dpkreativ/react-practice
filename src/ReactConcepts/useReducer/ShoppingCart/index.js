import React, { useReducer } from 'react';

const ShoppingCart = () => {
  const initialState = {
    input: '',
    items: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        let updatedState = {
          ...state,
          items: [...state.items, action.payload],
        };
        state.input = '';
        return updatedState;
      case 'delete':
        let filteredState = {
          ...state,
          items: [...state.items].filter((x) => x.id !== action.payload),
        };
        return filteredState;
      case 'input':
        return {
          ...state,
          input: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      payload: {
        id: new Date().getTime(),
        name: state.input,
      },
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: 'input',
      payload: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.input} onChange={handleChange} />
      </form>
      <div>
        {state &&
          state.items.map((item, index) => (
            <div key={index} className="flex">
              <div>
                {index + 1}. {item.name}
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: 'delete', payload: item.id })}
                >
                  x
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShoppingCart;

// TODOS:
// What are we trying to achieve?
// We want our users to:
// - view the cart when it's empty,
// - add items to the cart via an input, and
// - be able to delete items from the cart

// The cart has to be an array of objects
// We need to define a schema?
/* 
new Item {
  name: string
  id: number (randomly generated number)
}
*/

// Defining the logic
// How do we create a new item?
/* 
- user types input
- value from input is gotten
- value from input creates a new object
- new object is added to the state
- updated state is returned
*/

// How do we delete an item?
/*
- search for item based on id
- delete object
*/

// What if we identify by name instead of ID, that way we don't need to create an object, we can just use an array.

// Get the index in the array by name...
