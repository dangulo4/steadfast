import React from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';
import LoggedOut from '../LoggedOut';
import LoggedIn from '../LoggedIn';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        SteadFast
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                // window.location.pathname === '/' ||
                window.location.pathname === '/about'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/contacts'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              My Contacts
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === '/search'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Search
            </Link>
          </li> */}
          <li>
            {props.loggedIn ? (
              <LoggedIn setLoggedIn={props.setLoggedIn} />
            ) : (
              <LoggedOut setLoggedIn={props.setLoggedIn} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
