import React from 'react';
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
const Header=(props)=>(
    <React.Fragment>
        <Navbar collapseOnSelect expand="md"  variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <Nav>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Boy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Girl</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Unisex</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </React.Fragment>
)
export default Header;