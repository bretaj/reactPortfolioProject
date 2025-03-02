import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function AboutMe() {
    return (
        <div>
            <Header />
            <main>
                <h1>About Me</h1>
                <img 
                    src="./assets/portrait.jpg"
                    alt="portrait"
                />
                <p>
                    textextextext
                </p>
            </main>
            <Footer />
        </div>
    );
};


export default AboutMe;