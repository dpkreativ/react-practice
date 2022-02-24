import React, { useReducer } from 'react';
import './SmartHome.css';

const SmartHome = () => {
  const appliances = [
    {
      name: 'bulbs',
      active: false,
    },
    {
      name: 'air conditioner',
      active: true,
    },
    {
      name: 'music',
      active: true,
    },
    {
      name: 'television',
      active: false,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'deactivate':
        return state.map((appliance) => {
          if (appliance.name === action.payload) {
            appliance.active = false;
          }
          return appliance;
        });
      case 'activate':
        return state.map((appliance) => {
          if (appliance.name === action.payload) {
            appliance.active = true;
          }
          return appliance;
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, appliances);

  return (
    <div className="container">
      <h1>SmartHome</h1>
      <div className="grid">
        {state.map((appliance, idx) => (
          <div key={idx} className="card">
            <h2>{appliance.name}</h2>
            {appliance.active ? (
              <div className="status active">Active</div>
            ) : (
              <div className="status inactive">Not active</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartHome;
