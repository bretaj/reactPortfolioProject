// TODO: proper pathways, and imports?

import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import ContactForm from './ContactForm'; 

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