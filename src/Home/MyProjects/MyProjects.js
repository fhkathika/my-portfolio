import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectDetail from '../../ProjectDetail/ProjectDetail';
import SingleProject from './SingleProject';
 import './SingleProject.css'
const MyProjects = () => {
    const [myProject,setMyProject]=useState([])
    useEffect(()=>{
        fetch("myproject.json")
        .then(res => res.json())
        .then(data => setMyProject(data))
    },[])
    return (
        <div id="myproject" className='projectStyle' style={{marginTop:'5%'}}>
           <h1>My Project</h1> 
           
             
<Container >
  <Row xs={1} md={2} className="g-5 " >
  {
                      myProject.map(myproject=>
                        <Container>
                      <SingleProject
                      key={myproject.id}
                      myproject={myproject}
                      ></SingleProject>

                        <ProjectDetail
                      key={myproject.id}
                      myproject={myproject}
                      ></ProjectDetail>
                      </Container>
                      ) 
                   }
  </Row>

  </Container> 
                  
               
           
           
          
        </div>
    );
};

export default MyProjects;