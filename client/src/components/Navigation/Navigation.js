import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import lo from '../img/lo.png';


const Navigation = () => {
   
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
            <img src={lo} style={{height:'30px'}}alt="Logo" />
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/" style={{color:'rgb(154,157,160)', fontFamily:'Didact Gothic'}}>Home</Nav.Link>
      {/* <Nav.Link href="#" style={{color:'rgb(154,157,160)', fontFamily:'Didact Gothic'}}>About</Nav.Link>
      <Nav.Link href="#" style={{color:'rgb(154,157,160)', fontFamily:'Didact Gothic'}}>Calendar</Nav.Link> */}
      <Nav.Link href="/membership" style={{color:'rgb(154,157,160)', fontFamily:'Didact Gothic'}}>Membership</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Navigation;
