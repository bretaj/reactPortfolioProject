import React from 'react';
import portrait from '../assets/portrait.jpg';
// import Header from '../components/Header.jsx';
// import Footer from '../components/Footer.jsx';

function AboutMe() {
    return (
        <div>
            <main>
                <h1>About Me</h1>
                <img 
                    src={portrait}
                    alt="portrait"
                />
                <p>
                    textextextext
                </p>
            </main>
        </div>
    );
};


export default AboutMe;