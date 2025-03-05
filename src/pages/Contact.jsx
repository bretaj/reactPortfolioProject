import React from 'react';
// import Header from '../components/Header.jsx';
// import Footer from '../components/Footer.jsx'; 
import ContactForm from '../components/ContactForm.jsx'; 

const style = {
    fontFamily: 'Arial',
    fontSize: '1rem',
    margin: '25px',
    color: 'white',
};


function Contact() {
    return (
        <div>
            <main>
                <p style={style}>like what you're seeing? send me a message!</p>
                <ContactForm />
            </main>
        </div>
    );
};

export default Contact;