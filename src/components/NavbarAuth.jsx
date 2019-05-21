import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { GlobalContext } from './GlobalContext';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './NavbarAuth.css';

class NavbarAuth extends React.Component {

    static contextType = GlobalContext;

    constructor(props, context) {
        super(props, context);

        // Text.defaultProps.style = { fontFamily: 'Comfortaa' };

        this.handleShowLoginModal = this.handleShowLoginModal.bind(this);
        this.handleShowRegisterModal = this.handleShowRegisterModal.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.handleDashboardClick = this.handleDashboardClick.bind(this);
        this.handleMySessionsClick = this.handleMySessionsClick.bind(this);

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

    handleDashboardClick(){
        this.props.history.push('/dashboard');
    }

    handleMySessionsClick(){
        this.props.history.push('/mysessions');
    }

    doLogout(){
        let customHeader = "X-KLICKS-AUTH"
        this.context.setToken( null );
        this.context.setUser( {
            username: "",
              firstname: "",
              lastname: "",
              email: "",
              role: {"id":"",
                   "name":""     
              }
                            } );
        localStorage.clear();
        axios.post('http://localhost:8080/login/logout',
            {
                headers: {
                    "X-KLICKS-AUTH": this.context.token
                }
            });
    }

    logged() {
        console.log(this.context.token);
        return (
            <NavDropdown title={this.context.user.username} id="nav-dropdown" alignRight="true" className="mx-3 d-flex align-items-center">
                <NavDropdown.Item eventKey="4.3" onClick={ this.handleMySessionsClick }>
                {((this.context.user.role.id === 2) ? "All Sessions" : "My Sessions")}
                </NavDropdown.Item>
                {((this.context.user.role.id === 2) ? <NavDropdown.Item eventKey="4.4" onClick={ this.handleDashboardClick }>
                    Dashboard
                </NavDropdown.Item> : null)}
                {/* {((true) ? <NavDropdown.Item eventKey="4.3" onClick={ this.handleDashboardClick }>
                    Dashboard
                </NavDropdown.Item> : null)} */}
                
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

export default withRouter(NavbarAuth);