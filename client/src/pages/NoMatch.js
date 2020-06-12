import React from 'react';
import { Link } from 'react-router-dom'

function NoMatch() {
  return (
    <>
      <h1>No Match</h1>
      <button className = "btn btn-secondary" onClick="/">
        <Link
              to="/"
              className={
                // window.location.pathname === '/' ||
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              To return to safe waters, click here
        </Link>
      </button>
    </>
  );
}

export default NoMatch;
