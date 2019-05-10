import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { Overlay } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { GlobalContext } from './GlobalContext';

class RegisterModal extends Component {

    static contextType = GlobalContext;
    
    constructor(props) {
        super(props);
        console.log(props);

        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        this.passwordConfirmInput = React.createRef();
        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.emailInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this);   
        
        /* for pass don't match tooltip */
        this.attachRef = target => this.setState({ target });
        this.state = { showPasswordsDontMatch: false };
    }

    handleCloseRegisterModal() {
      this.context.setShowRegisterModal( false );
    }

    handleSubmit(event){

      /* for pass don't match tooltip */
      if(this.passwordInput.current.value !== this.passwordConfirmInput.current.value){
        this.setState({ showPasswordsDontMatch: true })
      }else{
        this.setState({ showPasswordsDontMatch: false });
        this.handleCloseRegisterModal();
        console.log('ref to username: ', this.usernameInput.current.value);
        console.log('ref to password: ', this.passwordInput.current.value);
        console.log('ref to password: ', this.passwordConfirmInput.current.value);
        console.log('ref to firstName: ', this.firstNameInput.current.value);
        console.log('ref to lastName: ', this.lastNameInput.current.value);
        console.log('ref to email: ', this.emailInput.current.value);
        // axios.post('testUrlHere',
        axios.post('http://localhost:8080/register/user',
          {
            "username": this.usernameInput.current.value,
            "password": this.passwordInput.current.value,
            "firstName": this.firstNameInput.current.value,
            "lastName": this.lastNameInput.current.value,
            "photoLink": this.lastNameInput.current.value,
            "role": { id: 1 },
            "email": this.emailInput.current.value
          },
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          }
        ).then( response => {
          alert("Registered sucessfully, you can now login");
      })
    }
  }
    render() {
      const { showPasswordsDontMatch, target } = this.state;
      return (
        <>
          <Modal show={this.context.showRegisterModal} onHide={this.handleCloseRegisterModal}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row} controlId="validationCustomUsername">
                  {/* <small><small>username</small></small> */}
                  <InputGroup>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="user" /></InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      ref={this.usernameInput}
                      type="text"
                      placeholder="username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Row} controlId="validationCustomPassword">
                  {/* <Form.Label><small>password</small></Form.Label> */}
                  <InputGroup>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="lock" /></InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      ref={this.passwordInput}
                      type="password"
                      placeholder="password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group ref={this.attachRef} as={Row} controlId="validationCustomPasswordConfirm">
                  {/* <Form.Label><small>confirm password</small></Form.Label> */}
                  <InputGroup>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="lock" /></InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      ref={this.passwordConfirmInput}
                      type="password"
                      placeholder="confrirm password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please confirm your password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                { /* for pass don't match tooltip */ }
                <Overlay id="passwordsDontMatchOverlay" target={target} show={showPasswordsDontMatch} placement="right">
                  {props => (
                    <Tooltip id="passwords-dont-match" {...props}>
                      Passwords don't match
                    </Tooltip>
                  )}
                </Overlay>

                <Form.Group as={Row} controlId="validationCustomFirstName">
                  {/* <Form.Label><small>confirm password</small></Form.Label> */}
                  <InputGroup>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="lock" /></InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      ref={this.firstNameInput}
                      type="text"
                      placeholder="first name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter first name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Row} controlId="validationCustomLastName">
                  {/* <Form.Label><small>confirm password</small></Form.Label> */}
                  <InputGroup>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="lock" /></InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      ref={this.lastNameInput}
                      type="text"
                      placeholder="last name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter last name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Row} controlId="validationCustomEmail">
                  {/* <Form.Label><small>confirm password</small></Form.Label> */}
                  <InputGroup>
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon="lock" /></InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <Form.Control
                      ref={this.emailInput}
                      type="email"
                      placeholder="email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={ this.handleCloseRegisterModal }>
                Close
              </Button>
              <Button variant="primary" onClick={ this.handleSubmit }>
                Register
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default RegisterModal;