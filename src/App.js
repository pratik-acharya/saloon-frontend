import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import './App.css';
import Routes from './Routes';
import { LinkContainer } from 'react-router-bootstrap'
import {withRouter} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: false
    }
  }

 

  userHasAuthenticated = authenticated =>{
    this.setState({isAuthenticated: authenticated});
  }

  handleLogout = event =>{ 
          this.userHasAuthenticated(false);
          console.log(this);
          this.props.history.push("/login");
        
        }

  render = () =>{
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return(
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Saloon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            <Nav className="mr-sm-2">
              {
                this.state.isAuthenticated?
                  <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                  : 
                  <Fragment>
                    <LinkContainer to="/signup">
                      <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/login">
                      <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                  </Fragment>

              }
              


              <NavDropdown title="Acount" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
              </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
              </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
              </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Routes childProps={childProps} />
      </div>
    );
  }


  
}

export default withRouter(App);


