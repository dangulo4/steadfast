import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "PropTypes";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import { NavItem } from "reactstrap";

class Navbar extends Component {
  // state = {
  //   isOpen: false
  // };

  static PropTypes = {
    auth: PropTypes.object.isRequired
  };

  // toggle = () =>  {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // };

  render () {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <li>
          <span className = "navbar-text mr-3">
            <p>{ user ? `Welcome ${user.name}!` : "" }</p>
          </span>
        </li>
        <li>
          <Logout />
        </li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <li>
          <RegisterModal />
        </li>
        <li>
          <LoginModal />
        </li>
      </Fragment>
    );

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
                to="/company"
                className={
                  window.location.pathname === '/company'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Company
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
            <li>
              { isAuthenticated ? authLinks : guestLinks }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Navbar);
