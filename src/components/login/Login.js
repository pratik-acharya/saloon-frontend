import React, { Component } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import axios from 'axios';

import './Login.css'

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this);

        // let response = await axios.get("http://135.89.12.223:9191/healthCheck/");
        // console.log(response);
        this.props.userHasAuthenticated(true);
        this.props.history.push("/");
    }

    validateForm = () => this.state.email.length > 0 && this.state.password.length > 0;

    render() {
        return (
            <div className="Login">
                <h2>
                    <Badge variant="secondary">Login</Badge>
                </h2>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control autoFocus type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!this.validateForm()}>
                        Login
          </Button>
                </Form>

            </div>
        );
    }
}
