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
        e.preventDefault();
    };

    return (
        <form id="form" onSubmit={handleFormSubmit}>
        <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type='text'
            placeholder='Full Name'
            required
        />
        <input
            value={email}
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
            required
        />
        <textarea
            value={message}
            name='message'
            onChange={handleInputChange}
            type='text'
            placeholder='Write Your Message Here'
            id='message'
            required
        />
        <button type='submit'>Submit</button>
        </form>
    )

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
