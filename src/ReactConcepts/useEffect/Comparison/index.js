import React, { useEffect, useLayoutEffect } from 'react';

const Comparison = () => {
  // with useEffect
  useEffect(() => {
    console.log('This is useEffect');
  }, []);

  // with useLayoutEffect
  useLayoutEffect(() => {
    console.log('This is useLayoutEffect');
  }, []);

  return <div>Comparison</div>;
};

export default Comparison;
