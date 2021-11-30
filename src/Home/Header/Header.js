import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <div>
           <>
 
 
  <Navbar  collapseOnSelect expand="lg" variant="light" style={{backgroundColor:'#251C14' ,width:'100%', padding:'5px'}}>
        <Container>
        <Navbar.Brand as={Link} style={{color:'white',fontFamily:'cursive'}}  to="#home"> <h3> Fariha Hasan Kathika
          </h3></Navbar.Brand>
       

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav  className="me-auto">
        <Nav.Link style={{color:'white',fontFamily:'cursive'}} as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link  style={{color:'white',fontFamily:'cursive'}} as={HashLink} to="/home#myproject">My Project</Nav.Link>
      <Nav.Link style={{color:'white',fontFamily:'cursive'}} as={HashLink} to="/home#contactform">Contact Form</Nav.Link>
  
     
      <a  style={{marginTop:'auto'}} href="https://drive.google.com/uc?export=download&id=1ZvFws-CyMuZ6mPtnw3N35NDhkeM9bx2e" target="_blank"><Button>Download resume</Button></a>
   </Nav>
        </Navbar.Collapse >
      
 
 
        </Container>
      </Navbar>
  
</> 
        </div>
    );
};

export default Header;