import React, {useState} from 'react';
import '../styles/Contact.css';

function Form() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState ('');
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };
    const handleFormSubmit = (e) => {
        e.preventDefualt();
    };

    return (
        <form id="form">
        <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type='text'
            placeholder='Full Name'
        />
        <input
            value={email}
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
        />
        <input
            value={message}
            name='message'
            onChange={handleInputChange}
            type='text'
            placeholder='Message'
        />
        <button type='button' onClick={handleFormSubmit}>Submit</button>
        </form>
    )

}

function Contact() {
    return (
        <article class="flexboxcontainer3" id="contact">
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
