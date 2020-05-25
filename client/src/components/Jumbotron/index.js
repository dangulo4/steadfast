import React from 'react';

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 500,
        clear: 'both',
        paddingTop: 25,
        textAlign: 'center',
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
