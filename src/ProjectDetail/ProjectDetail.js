import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjectDetail from '../hooks/useProjectDetail';
import Slider from "react-slick";

const ProjectDetail = () => {
   
    const {detailId}=useParams()
    const [details]=useProjectDetail()
    const [singleDetail,setSingleDetail]=useState([])
 // useEffect(()=>{
    //     fetch('/myproject.json')
    //     .then(res => res.json())
    //     .then(data => setProjectDetails('data..........',data))
    // },[projectDetails])

// load  service detail
useEffect(()=>{
   const findDetail=details.find(detailproject=>detailproject.id==detailId)
 
   setSingleDetail(findDetail)
},[details])
    
var settings = {
    dots: true
  }; 
    return (
      
        <Container>
        <Row style={{ marginTop:'5%' }}>
          <Col sm={6}>
          <Slider {...settings}>
        {
          details.map(detailImage =>
            <Container style={{ margin: '10%' }}>
              {/* reviewValue,userName,userEmail, */}
              <Card style={{ width: 'auto', margin: '5%', background: '#E3D1C1' }} sx={{ minWidth: 275 }}>
              <Card.Img  style={{ width: '100%',marginLeft:'auto',marginRight:'auto',borderRadius:'20px'}} variant="top" src={detailImage.image} />

              </Card>
            </Container>)
        }


      </Slider>
        
          </Col>
          <Col sm={5}>
          <Card style={{ width: '100%',marginLeft:'auto',marginRight:'auto' }}>
  <Card.Body>
    <Card.Title>{singleDetail?.name}</Card.Title>
    
    <Card.Text> </Card.Text>
    <Card.Text
style={{flex: 1, paddingLeft: 5}}> <p>{singleDetail?.fulldetail1}</p> 
<p>{singleDetail?.fulldetail2}</p>
<p>{singleDetail?.fulldetail3}</p><p>{singleDetail?.fulldetail4}</p><p>{singleDetail?.fulldetail5}</p>

    </Card.Text>
   
    <Card.Link href={singleDetail?.github}>Github</Card.Link>
    <Card.Link href={singleDetail?.livesite}>Live-site link</Card.Link>
  </Card.Body>
</Card>  
          </Col>
        </Row>
       
      </Container>
    );
};

export default ProjectDetail;