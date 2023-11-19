import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ubifiyk', 'template_k0dqiuc', form.current, 'u4znpM9OfuSd6QPHV')
        .then((result) => {
            console.log(result.text);
            console.log('message sent!')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} id='form' onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Full Name'/>
          <input type="email" name="user_email" placeholder='Email'/>
          <textarea name="message" placeholder='Type your message here'/>
          <input type="submit" className='sendButton' value="Send" />
        </form>
      );
}

function Contact() {
    return (
        <article className="flexboxcontainer3" id="contact">
      <div>
         <h2>Reach Out</h2>
      </div>
      <div>
        <Form />
      </div>
    </article>
    )
};

export default Contact;
