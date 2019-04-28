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
        this.doLogout = this.doLogout.bind(this);

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

    doLogout(){
        this.context.setToken( null );
        this.context.setUser( {
            username: "",
              firstname: "",
              lastname: "",
              email: "",
              role: ""
                            } );
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        localStorage.removeItem("email");
        localStorage.removeItem("role");
    }

    logged() {
        console.log(this.context.token);
        return (
            <NavDropdown title={this.context.user.username} id="nav-dropdown" alignRight="true" className="mx-3 d-flex align-items-center">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                    Something else here
                        </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={ this.doLogout }>Logout</NavDropdown.Item>
            </NavDropdown>
        );
    }

    notLogged(){
        return(
            <React.Fragment>
                <Navbar.Text className="d-flex align-items-center">
                    <a className="btn btn-outline-dark mr-2" onClick={this.handleShowLoginModal}>Login</a>
                </Navbar.Text>
                <Navbar.Text className="d-flex align-items-center">
                    <a className="btn btn-outline-dark mr-2" onClick={this.handleShowRegisterModal} >Register</a>
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