import React, { useLayoutEffect, useRef, useState } from 'react';

const RenderRectangle = () => {
  const [display, setDisplay] = useState(false);

  const rectangle = useRef();

  useLayoutEffect(() => {
    if (rectangle.current == null) return;
    rectangle.current.style.backgroundColor = 'green';
    rectangle.current.style.marginTop = '20px';
  }, [display]);

  return (
    <div>
      <h1>useLayoutEffect - Render Rectangle</h1>
      <div>
        <button
          style={{ width: 100, height: 40, borderRadius: 5 }}
          onClick={() => setDisplay(!display)}
        >
          {display ? 'Hide' : 'Show'}
        </button>
        {/* Rectangle */}
        {display && (
          <div
            style={{ width: 100, height: 50, backgroundColor: 'red' }}
            ref={rectangle}
          ></div>
        )}
      </div>
    </div>
  );
};

export default RenderRectangle;
