import React, {Component} from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Container,

} from 'react-bootstrap';
import "./NavBar.css"

class NavBar extends Component {

  render() {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <img alt="" src="/ksu-logo.png" className="nav-brand-img"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Generate Signature</Nav.Link>
            <Nav.Link href="#features">How To</Nav.Link>
            <Nav.Link href="#pricing">features</Nav.Link>
          </Nav>
          <DropdownButton size="sm" variant="primary" title="Language">
            <Dropdown.Item eventKey="1">English</Dropdown.Item>
            <Dropdown.Item eventKey="2">العربية</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;