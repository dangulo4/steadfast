import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import Login from '../Modals/Login';
import Signup from '../Modals/Signup';
import './style.css';


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // onLoginModalOpen: false,
      // onLoginModalClose: false,
      // onSignupModalOpen: false,
      // onSignupModalClose: false,
      
      // login: false,
      // signup: false
    }
  }

  // Modal state control
  // onLoginModalOpen = () => {
  //   this.setState({ login: true });
  // };

  // onLoginModalClose = () => {
  //   this.setState({ login: false });
  // };

  // onSignupModalOpen = () => {
  //   this.setState({ signup: true });
  // };
  // onSignupModalClose = () => {
  //   this.setState({ signup: false });
  // };


  render() {
    // const { login, signup } = this.state;

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      <img
                    src="https://files.slack.com/files-pri/TQT6VKHUN-F014X2B9MQC/84f5789f-9f60-4305-8e7e-abb13be496da_200x200.png"
                    alt="logo"
                    className="img-logo"             
                  />
      </Link>
      <div>
        <Login login={this.state.login} closeModal={this.state.closeLogin}></Login>
        <Signup signup={this.state.signup} closeModal={this.state.closeSignup}></Signup>
        
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
                  // style = {{paddingLeft: "20px"}}
                  className = 'btn btn-secondary'
                  // id = 'login'
                  // onClick = {this.onLoginModalOpen}
                  >
                    Login
                </button>
              </li>
              <li className='nav-item'>
                <button
                  // style = {{paddingLeft: "20px"}}
                  className = 'btn btn-secondary'
                  // id = 'signup'
                  // onClick = {this.onSignupModalOpen}
                  >
                    Signup
                </button>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;
