import React from 'react';

function Footer({ children }) {
    return (
      <div
        style={{  height: 150, clear: "both", paddingTop: 100, textAlign: "center" }}
        className="Footer"
      >
        {children}
      </div>
    );
  }
  
  export default Footer;