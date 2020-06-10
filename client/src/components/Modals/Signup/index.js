// Dependencies
import React, { Component } from'react';
import Modal from 'react-responsive-modal';

// Signup Component
class Signup extends Component {

    // Passing props
    constructor(props) {
        super(props)

        this.state = {
            signup: false
        }
    }

    // Modal state control
    // onSignupModalOpen = () => {
    //     this.setState({ signup: true });
    // };

    // onSignupModalClose = () => {
    //     this.setState({ signup: false });
    // };

    // Modal JSX
    render() {
        const { signup } = this.state;
        return (
            <Modal open = { this.props.signup } onClose = { this.props.closeSignup }>
                <div className = 'modal-body'>
                    <h2>Signup to Get Started!</h2>
                    <form className = 'contact-form form-validate3' noValidate = 'noValidate'>
                        <div className = 'form-group'>
                            <input className = 'form-control' type = 'text' name = 'name' id = 'name' placeholder = 'First Name'  required = ''  autoComplete = 'off'></input>
                        </div>
                        <div className = 'form-group'>
                            <input className = 'form-control' type = 'email' name = 'email' placeholder = 'E-Mail' required = ''  autoComplete = 'off'></input>
                        </div>
                        <div className = 'form-group'>
                            <input className = 'form-control' type = 'password' name = 'pass' placeholder = 'Password' required = '' autoComplete = 'off'></input>
                        </div>
                        {/* <input className = 'btn btn-md btn-primary btn-center' id = 'sign_up' type = 'button' value = 'Sign Up'></input> */}
                        <button
                            className = 'btn btn-primary'
                            id = 'signup'
                            onClick = {this.onSignupModalClose}>
                                Signup
                        </button>
                    </form>
                </div>
            </Modal>
        );
    }




}

export default Signup;