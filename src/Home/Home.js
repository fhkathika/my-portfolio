import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div id="home">
            <MyProjects></MyProjects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;