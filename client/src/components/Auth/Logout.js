import React, { Component, Fragment } from "react";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActionss";

export class Logout extends Component {
    //Static PropTypes
    static PropTypes = {
        logout: this.PropTypes.func.isRequired
    }

    
    render() {
        return (
            <fragment>
                '<NavLink onClick = { this.props.logout } href = "#">
                    Logout
                </NavLink>
            </fragment>
        );
    }
} 

export default connect(null, { logout })(Logout);