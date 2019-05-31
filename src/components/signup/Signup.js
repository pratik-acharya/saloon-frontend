import React, { Component } from "react";
import { Form, Badge, Button } from "react-bootstrap";
import axios from 'axios';
import "./Signup.css";
import { stateCityMap } from '../../Util';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: "",
            phoneNumber: "",
            state: "Andhra Pradesh",
            city: stateCityMap[this.state],
            email: "",
            password: ""
        };
    }



    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();
        let signupData = { ...this.state };
        console.log(this.state);
        signupData.location = this.state.state + "," + this.state.city;
        delete signupData.state;
        delete signupData.city;
        console.log(signupData);
        axios
            .post("http://135.89.12.223:9191/signup", signupData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="Signup">
                <h2>
                    <Badge variant="secondary">Signup</Badge>
                </h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="customerName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={this.state.customerName}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.state}
                            onChange={this.handleChange}
                        >
                            {Object.keys(stateCityMap).map(state => (
                                <option value={state}>{state}</option>
                            ))}{" "}
                            }
                </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.city}
                            onChange={this.handleChange}
                        >
                            {stateCityMap[this.state.state].map(city => (
                                <option value={city}>{city}</option>
                            ))}{" "}
                            }
                </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Signup
              </Button>
                </Form>
            </div>
        );
    }
}
