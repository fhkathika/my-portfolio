import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardStyle.css'
const SingleProject = ({myproject}) => {
    const {id,name,image,detail}=myproject
    return (
     <Col sm >

<Card   border="light" style={{ width: '100%',height:"75%",marginBottom:'5%',borderRadius:"20px",backgroundColor:"#EADDD0"}} >
  <Card.Img style={{width:'100%',marginLeft:'auto',marginRight:'auto',marginTop:'15px',borderRadius:"20px"}} variant="top" src={image} />
  <Card.Body  style={{marginTop:'-30px',backgroundColor:'#EADDD0',width:'75%',border:'1px solid #d3b194 ', boxShadow:' 10px solid gray',margin:'auto',borderRadius:'10px'}}>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
   { detail}
    </Card.Text>
    <Link to={`/projectdetail/${id}`}>
            <Button style={{backgroundColor:' #d3b194',borderRadius:'5px'}}>Detail of {name.toLowerCase()}</Button>
            </Link>
   
  </Card.Body>
</Card>
    </Col>
    
     
    );
};

export default SingleProject;