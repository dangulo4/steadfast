import React from 'react';
import { Link } from 'react-router-dom';

function LoggedIn(props) {
  function handleLogout() {
    props.setLoggedIn(false);
    localStorage.removeItem('steadfastToken');
    localStorage.removeItem('steadfastUsername');
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <Link className="btn btn-sm btn-success mr-2" to="/search">
        Search Contacts
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default LoggedIn;
