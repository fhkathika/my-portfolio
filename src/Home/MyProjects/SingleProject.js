import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardStyle.css'
const SingleProject = ({myproject}) => {
    const {id,name,image,detail}=myproject
    return (
     <Col sm >

<Card   border="light" style={{ width: '100%',margin:'auto',borderRadius:"20px",backgroundColor:"#EADDD0"}} >
  <Card.Img style={{width:'100%',marginLeft:'auto',marginRight:'auto',marginTop:'5px',borderRadius:"20px"}} variant="top" src={image} />
  <Card.Body style={{marginTop:'-30px',marginBottom:'15px',backgroundColor:'#C8A382',width:'75%',margin:'auto',borderRadius:'10px'}}>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
   { detail}
    </Card.Text>
    <Link to={`/projectdetail/${id}`}>
            <Button variant="primary">Detail of {name.toLowerCase()}</Button>
            </Link>
   
  </Card.Body>
</Card>
    </Col>
    
     
    );
};

export default SingleProject;