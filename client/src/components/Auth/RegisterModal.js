import React, { Component } from "react";
import propTypes from "prop-types";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from "reactstrap";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";


class RegisterModal extends Component {
    state = {
        modal: false,
        name: "",
        email: "",
        password: "",
        msg: null
    };

    //Static PropTypes
    static propTypes = {
        isAuthenticated: propTypes.bool,
        error:  propTypes.object.isRequired,
        register: propTypes.func.isRequired,
        clear: propTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            // Check for a register error
            if(error.id === "REGISTER_FAIL") {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        } 
        // If authentication is successfull, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    };

    toggle = () => {
        // Clear errors from modal
        this.props.clearErrors();

        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = e => {
        e.preventDefault();
        const { name, email, password } = this.state;

        // Create new user
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register new user
        this.props.register(newUser);
    
        // Close modal
        // this.toggle();
    }

    render() {
        return (
            <div>
                <div>
                    <Link onClick = { this.toggle } href = "#">
                        Register
                    </Link>
                </div>

                <Modal isOpen = { this.state.modal } toggle = { this.toggle }>
                    <ModalHeader toggle = { this.toggle }>Register</ModalHeader>
                    <ModalBody>
                        { this.state.msg ? (
                            <Alert color = "danger">{ this.state.msg }</Alert>
                        ) : null }
                        <Form onSubmit = { this.onSubmit }>
                            <FormGroup>
                                <Label for = "name">Name</Label>
                                <Input
                                    type = "text"
                                    name = "name"
                                    id = "id"
                                    placeholder = "Name"
                                    className = "mb-2"
                                    onChange = { this.onChange }
                                />
                                <Label for = "email">Email</Label>
                                <Input
                                    type = "email"
                                    name = "email"
                                    id = "email"
                                    placeholder = "Email"
                                    className = "mb-2"
                                    onChange = { this.onChange }
                                />
                                <Label for = "password">Password</Label>
                                <Input
                                    type = "password"
                                    name = "password"
                                    id = "password"
                                    placeholder = "Password"
                                    className = "mb-2"
                                    onChange = { this.onChange }
                                />
                                <Button color = "dark" style = {{ marginTop: "32px" }} block>
                                    Register Now
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);