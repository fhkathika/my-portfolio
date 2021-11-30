
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useHistory, useLocation } from 'react-router-dom';
import './ContactForm.css'


const ContactForm = () => {
   
   const [email,setEmail]=useState(false)
    const form = useRef();
    const sendemail=e=>{
        emailjs.sendForm('service_1evx2md', 'template_z69dbsv',form.current, 'user_9OmuJUFcoeAAJDoAqTtfB')
        .then((result) => {
            console.log(result.text);
            setEmail(true)
        }, (error) => {
            console.log(error.text);
        });
        // const name=nameRef.current.value
        // const detail=detailRef.current.value
        // const img=imgRef.current.value
        // const price=priceRef.current.value
       
          e.preventDefault()
         e.target.reset()
        
      
      }
    return (
        <div  id="contactform">
            <h1>ContactForm</h1>
            <div className='mx-auto w-100'>
            <form ref={form} onSubmit={sendemail}>
            <div class="half left cf">
            <input    type="text" id="input-name" placeholder="Name" name="name"></input>
            <input   type="email" id="input-email" placeholder="Email address"  name="email"></input>
    <input   type="text" id="input-subject" placeholder="Subject"  name="subject"></input>
        </div>
        <div class="half right cf">
    <textarea type="text" id="input-message" placeholder="Message" name="message" ></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit"></input>
            </form>
            
                <div className='alert ' style={{transitionDelay:'4s ease forwards'}}>
                    {
email && <p >email send!</p>
                    }
                
                </div>
            
            
            </div>
        </div>
    );
};

export default ContactForm;