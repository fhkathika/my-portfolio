import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About/About';
import ContactForm from './ContactForm/ContactForm';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div id="home">
            <h1 style={{color:'black',fontFamily:'cursive',margin:'2%'}} > Fariha Hasan Kathika
          </h1>
          <p style={{width:'75%',color:'#251C14',margin:'auto'}}>"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them." - Andrew Hunt</p>
            <MyProjects></MyProjects>
         
            <ContactForm></ContactForm>
            <About></About>
        </div>
    );
};

export default Home;