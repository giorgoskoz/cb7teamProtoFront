import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavDropDownExample.css';
import { GlobalContext } from './GlobalContext';
import klicksLogo from '../img/aperture-1142967.svg';
import NavbarAuth from './NavbarAuth';

class NavDropdownExample extends React.Component {

    static contextType = GlobalContext;

    handleSelect(eventKey) {
    //   alert(`selected ${eventKey}`);
        console.log("clicked a button");
    }
  
    render() {
      return (
        <Navbar id="Navbar" collapseOnSelect expand="lg" className="navbar-dark" >
        <Navbar.Brand id="NavbarBrand" href="/"><img src={ klicksLogo }></img><strong>k</strong>lic<strong>k</strong>s</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav id="Nav" variant="pills" activeKey="0" onSelect={k => this.handleSelect(k)}>
                <Nav.Item>
                    <Nav.Link eventKey="1" href="#/home">
                        <Link id="Link" to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Book">
                        <Link  id="Link" to="/calendar">Book</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Gear">
                        <Link  id="Link" to="/gear">Gear</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mr-4">
                    <Nav.Link eventKey="3">
                        <Link  id="Link" to="/crew">The Crew</Link>
                    </Nav.Link>
                </Nav.Item>


                    <NavbarAuth></NavbarAuth>


                    {/* <NavDropdown title={ this.context.user.username } id="nav-dropdown" alignRight className="mx-3">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                        Something else here
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
//   render(<NavDropdownExample />);

  export default NavDropdownExample;