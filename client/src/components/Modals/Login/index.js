// Dependencies
import React, { Component } from'react';
import Modal from 'react-responsive-modal';

// Login Component
class Login extends Component {

    // Passing props
    constructor(props) {
        super(props)

        this.state = {
            login: false
        }
    }

    // Modal state control
    // onLoginModalOpen = () => {
    //     this.setState({ login: true });
    // };

    // onLoginModalClose = () => {
    //     this.setState({ login: false });
    // };

    // Modal JSX
    render() {
        // const { login } = this.state;
        return (
            <Modal open = { this.props.login } onClose = { this.props.closeLogin }>
                <div className = 'modal-body'>
                    <h2>Login</h2>
                    <form className = 'contact-form form-validate4' noValidate = 'noValidate'>
                        <div className = 'form-group'>
                            <input className = 'form-control' type = 'email' name = 'email' placeholder = 'E-Mail' required = ''  autoComplete = 'off'></input>
                        </div>
                        <div className = 'form-group'>
                            <input className = 'form-control' type = 'password' name = 'pass' placeholder = 'Password' required = '' autoComplete = 'off'></input>
                        </div>
                        {/* <input className = 'btn btn-md btn-primary btn-center' id = 'login_btn' type = 'button' value = 'Login'></input> */}
                        <button
                            className = 'btn btn-primary'
                            id = 'login'
                            onClick = {this.onLoginModalClose}>
                                Login
                        </button>
                    </form>
                </div>
            </Modal>
        );
    }




}

export default Login;

