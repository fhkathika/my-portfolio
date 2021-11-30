import React, { useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetail = () => {
   
    const {detailId}=useParams()
    const [details,setDetails]=useState({})
    fetch(`../public/${detailId}`)
    .then(res => res.json())
    .then(data => console.log('details..........',data))
    return (
        <div>
            <h1>detail of </h1>
        </div>
    );
};

export default ProjectDetail;