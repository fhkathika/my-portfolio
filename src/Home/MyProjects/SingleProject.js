import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const SingleProject = ({myproject}) => {
    const {id,name,image,detail}=myproject
    return (
     <Col sm>

<Card border="light" style={{ width: '35rem',marginBottom:"5%",borderRadius:"20px"}}>
  <Card.Img style={{width:'100%',marginLeft:'auto',marginRight:'auto',marginTop:'5px',borderRadius:"20px"}} variant="top" src={image} />
  <Card.Body style={{marginTop:'-30px',marginBottom:'15px',backgroundColor:'#C8A382',width:'75%',margin:'auto',borderRadius:'10px'}}>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
   { detail}
    </Card.Text>
    <Button variant="primary">Detail</Button>
  </Card.Body>
</Card>
    </Col>
    
     
    );
};

export default SingleProject;