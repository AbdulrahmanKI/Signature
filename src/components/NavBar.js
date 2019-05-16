import React, { Component } from "react";
import { Navbar, Nav,DropdownButton ,Dropdown} from 'react-bootstrap';
import "./NavBar.css"

class NavBar extends Component{
    render(){
        return (

               <Navbar bg="dark" variant="dark">
                   <Navbar.Brand href="#home">
                       <img alt="" src="/ksu-logo.png" className="d-inline-block align-top" style={{display: "inline" ,paddingRight: "7px", borderRight: "1px solid #ffffff"}}/>
                   </Navbar.Brand>
                   <Nav className="mr-auto">
                       <h2>KSU Email Signature</h2>
                   </Nav>
                   <DropdownButton size="sm" variant="primary"  title="Language">
                       <Dropdown.Item eventKey="1">English</Dropdown.Item>
                       <Dropdown.Item eventKey="2">العربية</Dropdown.Item>
                   </DropdownButton>

               </Navbar>

         );
    }
}





export default NavBar;
