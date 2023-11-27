import { useState } from 'react';
const HelloWorldToggle = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        style={{
          width: 'fit-content',
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        Toggle World
      </button>
      {show && <h2>HELLO WORLD</h2>}
    </>
  );
};

export default HelloWorldToggle;
