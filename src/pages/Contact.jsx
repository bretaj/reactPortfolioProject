import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'; 
import ContactForm from '../components/ContactForm.jsx'; 


function Contact() {
    return (
        <div className="">
            <Header />
            <main>
                <h1>Contact Me</h1>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;