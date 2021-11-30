import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useProjectDetail from '../../hooks/useProjectDetail';
import ProjectDetail from '../../ProjectDetail/ProjectDetail';
import SingleProject from './SingleProject';
 import './SingleProject.css'
const MyProjects = () => {
    // const [myProject,setMyProject]=useState([])
   const [details]=useProjectDetail()
    return (
        <div id="myproject" className='projectStyle' style={{marginTop:'5%'}}>
           <h1>My Project</h1> 
           
             
<Container >
  <Row xs={1} md={2} className="g-4 " >
  {
                      details.map(myproject=>
                     
                      <SingleProject
                      key={myproject.id}
                      myproject={myproject}
                      ></SingleProject>

                  
                      ) 
                   }
  </Row>

  </Container> 
                  
               
           
           
          
        </div>
    );
};

export default MyProjects;