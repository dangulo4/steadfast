import React from 'react';
import "./style.css";

function Footer({ children }) {
    return (
      <div className="Footer col-md-12">
        {children}
      </div>
    );
  }
  
  export default Footer;