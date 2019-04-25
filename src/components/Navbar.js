import React from 'react';
import { Navbar } from 'react-bootstrap';
import klicksLogo from '../img/aperture-1142967.svg';

class NavbarStranger extends React.Component {

    constructor(props, context) {
        super(props, context);
    
        // Text.defaultProps.style = { fontFamily: 'Comfortaa' };
    
        this.handleShowLoginModal = this.handleShowLoginModal.bind(this);
        this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
        this.handleShowRegisterModal = this.handleShowRegisterModal.bind(this);
        this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this);
    
        this.state = {
          showLoginModal: false,
          showRegisterModal: false
        };
      }

    handleCloseLoginModal() {
        this.setState({ showLoginModal: false });
      }
    
      handleShowLoginModal() {
        this.setState({ showLoginModal: true });
      }
    
      handleCloseRegisterModal() {
        this.setState({ showRegisterModal: false });
      }
    
      handleShowRegisterModal() {
        this.setState({ showRegisterModal: true });
      }

    render() {
        return (
            <Navbar>
                <Navbar.Brand id="NavbarBrand" href="/"><img src={ klicksLogo }></img><strong>k</strong>lic<strong>k</strong>s</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <span className="mr-2" onClick={this.handleShowLoginModal}>Login</span>
                    </Navbar.Text>
                    <Navbar.Text>
                        <a onClick={this.handleShowRegisterModal}><strong>Register</strong></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavbarStranger;