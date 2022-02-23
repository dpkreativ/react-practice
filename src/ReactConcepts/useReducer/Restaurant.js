import React from 'react';

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

  return <div>Restaurant</div>;
};

export default Restaurant;
