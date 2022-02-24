import React, { useReducer } from 'react';
import './Restaurant.css';

const Restaurant = () => {
  const customers = [
    {
      table: 1,
      order: '',
      served: false,
      eaten: false,
      paid: false,
    },
    {
      table: 2,
      order: 'chicken masala',
      served: true,
      eaten: false,
      paid: true,
    },
    {
      table: 3,
      order: 'basmati rice',
      served: true,
      eaten: true,
      paid: false,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'serve':
        return state.map((customer) => {
          if (customer.table === action.payload) {
            customer.served = true;
          }
          return customer;
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, customers);

  return (
    <div>
      <h1>Restaurant</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {state.map((customer, idx) => {
          return (
            <div key={idx}>
              <h2>Table {customer.table}</h2>
              <p>Order: {customer.order}</p>
              <div>
                <div>
                  <div>{customer.served ? 'Served' : 'Not served'}</div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'serve',
                        payload: { table: `${customer.table}` },
                      })
                    }
                  >
                    Serve
                  </button>
                </div>
                <div>{customer.eaten ? 'Eaten' : 'Not eaten'}</div>
                <div>{customer.paid ? 'Paid' : 'Not paid'}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurant;
