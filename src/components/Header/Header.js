import React from 'react';
import {Navbar,NavDropdown,Container,Nav} from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
const Header=(props)=>(
   
        <Navbar collapseOnSelect expand="md"  variant="light" className="header">
        <Container>
        <Navbar.Brand href="#home" ><img src={logo} alt="Logo" style={{width:'80px'}}/></Navbar.Brand>
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
    
)
export default Header;