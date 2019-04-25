import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { GlobalContext } from './GlobalContext';

class NavbarAuth extends React.Component {

    static contextType = GlobalContext;

    constructor(props, context) {
        super(props, context);

        // Text.defaultProps.style = { fontFamily: 'Comfortaa' };

        this.handleShowLoginModal = this.handleShowLoginModal.bind(this);
        this.handleShowRegisterModal = this.handleShowRegisterModal.bind(this);

        this.state = {
            showLoginModal: false,
            showRegisterModal: false
        };
    }

    handleShowLoginModal() {
        console.log('boong');
        this.context.setShowLoginModal( true );
    }

    handleShowRegisterModal() {
        console.log('bang');
        this.context.setShowRegisterModal( true );
    }

    logged() {
        console.log(this.context.token);
        return (
            <NavDropdown title={this.context.user.username} id="nav-dropdown" alignRight className="mx-3">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                    Something else here
                        </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
            </NavDropdown>
        );
    }

    notLogged(){
        return(
            <React.Fragment>
                <Navbar.Text>
                    <span className="mr-2" onClick={this.handleShowLoginModal}>Login</span>
                </Navbar.Text>
                <Navbar.Text>
                    <a onClick={this.handleShowRegisterModal} ><strong>Register</strong></a>
                </Navbar.Text>
            </React.Fragment>    
        );
    }

    render() {
        if ((this.context.token === null) || (this.context.token === undefined)) {
            return (
                this.notLogged()
            );
        } else {
            return (
                this.logged()
            )
        }
    }

}

export default NavbarAuth;