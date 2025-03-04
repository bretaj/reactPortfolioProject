import React from 'react';
import avatar from '../assets/avatar.png';
// import Header from '../components/Header.jsx';
// import Footer from '../components/Footer.jsx';

function AboutMe() {
    return (
        <div className='about-me-container'>
            <p className ='about-me-text'>About Me</p>
            <img
                src={avatar}
                alt="self-image"
                class="avatar"
            />
            <p className='about-me-text'>
                textextextext
            </p>
        </div>
    );
};


export default AboutMe;