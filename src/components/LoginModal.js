import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { GlobalContext } from './GlobalContext';

class LoginModal extends Component {

    static contextType = GlobalContext;
    
    constructor(props) {
        super(props);
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
    }

    handleCloseLoginModal() {
      this.context.setShowLoginModal( false );
    }

    handleSubmit(event){
      this.handleCloseLoginModal(); 
      console.log('ref to username: ', this.usernameInput.current.value);
      console.log('ref to password: ', this.passwordInput.current.value);
      // axios.get('https://jsonplaceholder.typicode.com/todos/1',
      // axios.get('http://localhost:3000/login-register-back2front.json',
      axios.get('https://api.myjson.com/bins/19i7wk',
        {
          "username": this.usernameInput.current.value,
          "password": this.passwordInput.current.value
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }
      ).then( response => {
        console.log( response.data );
        this.context.setToken ( response.data.token );
        // console.log( this.context.token );
        let userFromJson = {
          username: response.data.username,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          role: response.data.role
        };
        this.context.setUser ( {
          username: response.data.username,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          role: response.data.role
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('firstname', response.data.firstname);
        localStorage.setItem('lastname', response.data.lastname);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);
      })
      
      // ( function (response) {
      //   console.log(response.data);
      //   this.context.setToken ( response.data.token );
      //   let userFromJson = {
      //     username: response.data.username,
      //     firstname: response.data.firstname,
      //     lastname: response.data.lastname,
      //     email: response.data.email,
      //     role: response.data.role
      //   };
      //   this.context.setUser ( {
      //     userFromJson
      //   });
      //   localStorage.setItem('token', response.data.token);
      //   localStorage.setItem('user', userFromJson);
      // })
    }

    render() {
      return (
        <>
          <Modal show={this.context.showLoginModal} onHide={this.handleCloseLoginModal}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row} controlId="validationCustomUsername">
                  {/* <small><small>username</small></small> */}
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="user" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      ref={this.usernameInput}
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    >

                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please enter username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Row} controlId="validationCustomPassword">
                  {/* <Form.Label><small>password</small></Form.Label> */}
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="lock" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      ref={this.passwordInput}
                      type="password"
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={ this.handleCloseLoginModal }>
                Close
              </Button>
              <Button variant="primary" onClick={ this.handleSubmit }>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default LoginModal;