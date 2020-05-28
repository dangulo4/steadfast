import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

export class Logout extends Component {
    //Static PropTypes
    static propTypes = {
        logout: this.propTypes.func.isRequired
    };

    
    render() {
        return (
            <fragment>
                <NavLink onClick = { this.props.logout } href = "#">
                    Logout
                </NavLink>
            </fragment>
        );
    }
} 

export default connect(null, { logout })(Logout);