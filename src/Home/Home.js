import React from 'react';
import About from './About/About';
import ContactForm from './ContactForm/ContactForm';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div id="home">
            <MyProjects></MyProjects>
         
            <ContactForm></ContactForm>
            <About></About>
        </div>
    );
};

export default Home;