import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <div>
           <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link  as={HashLink} to="/home#myproject">My Project</Nav.Link>
      <Nav.Link as={HashLink} to="/home#contactform">Contact Form</Nav.Link>
      {/* <Button onClick="https://drive.google.com/uc?export=download&id=1ZvFws-CyMuZ6mPtnw3N35NDhkeM9bx2e">Download resume</Button> */}
     
      <a  style={{marginTop:'auto'}} href="https://drive.google.com/uc?export=download&id=1ZvFws-CyMuZ6mPtnw3N35NDhkeM9bx2e" target="_blank"><Button>Download resume</Button></a>
   
    </Nav>
    </Container>
  </Navbar>
 

  
</> 
        </div>
    );
};

export default Header;