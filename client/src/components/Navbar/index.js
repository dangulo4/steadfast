import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import Login from '../Modals/Login';
import Signup from '../Modals/Signup';


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // onLoginModalOpen: false,
      // onLoginModalClose: false,
      // onSignupModalOpen: false,
      // onSignupModalClose: false,
      login: false,
      signup: false
    }
  }

  // Modal state control
  onLoginModalOpen = () => {
    this.setState({ login: true });
  };

  onLoginModalClose = () => {
    this.setState({ login: false });
  };
  
  onSignupModalOpen = () => {
    this.setState({ signup: true });
  };
  onSignupModalClose = () => {
    this.setState({ signup: false });
  };
  

  render() {
    const { login, signup } = this.state;

    return (
      <div>
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
                <Login login={this.state.login} ></Login>
                <button
                  // style = {{paddingLeft: "20px"}}
                  className = 'btn btn-secondary'
                  id = 'login'
                  onClick = {this.onLoginModalOpen}>
                    Login
                </button>
              </li>
              <li className='nav-item'>
                <Signup signup={this.state.signup} ></Signup>
                <button
                  // style = {{paddingLeft: "20px"}}
                  className = 'btn btn-secondary'
                  id = 'signup'
                  onClick = {this.onSignupModalOpen}>
                    Signup
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
