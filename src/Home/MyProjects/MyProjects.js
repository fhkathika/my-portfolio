import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
           
             
<Container className="width:'100%',marginLeft:'auto',marginRight:'auto',marginTop:'auto'" >
  <Row>
  {
                      myProject.map(myproject=><SingleProject
                      key={myproject.id}
                      myproject={myproject}
                      ></SingleProject>) 
                   }
  </Row>

  </Container> 
                  
               
           
           
          
        </div>
    );
};

export default MyProjects;