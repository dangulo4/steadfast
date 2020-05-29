import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import propTypes from "prop-types";
import RegisterModal from "../Auth/RegisterModal.js";
import LoginModal from "../Auth/LoginModal.js";
import Logout from "../Auth/Logout.js";
// import { NavItem } from "reactstrap";

class Navbar extends Component {
  // state = {
  //   isOpen: false
  // };

  //Static PropTypes
  static propTypes = {
    auth: propTypes.object.isRequired
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
            <li>
              { isAuthenticated ? authLinks : guestLinks }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         SteadFast
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === '/' ||
//                 window.location.pathname === '/about'
//                   ? 'nav-link active'
//                   : 'nav-link'
//               }
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/contacts"
//               className={
//                 window.location.pathname === '/contacts'
//                   ? 'nav-link active'
//                   : 'nav-link'
//               }
//             >
//               Contact
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/search"
//               className={
//                 window.location.pathname === '/search'
//                   ? 'nav-link active'
//                   : 'nav-link'
//               }
//             >
//               Search
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Navbar);
