import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';


function Navbar() {
  const { login, signup } = this.state;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        SteadFast
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === '/' ||
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
              to="/contacts"
              className={
                window.location.pathname === '/contacts'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
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
          </li>
          <li className='nav-item'>
            <button
              className = 'btn btn-secondary'
              id = 'login'
              onClick = {this.onLoginModalOpen}>
                Login
            </button>
          </li>
          <li className='nav-item'>
            <button
              className = 'btn btn-secondary'
              id = 'signup'
              onClick = {this.onSignupModalOpen}>
                Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
