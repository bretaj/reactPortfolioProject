import React from 'react';
import avatar from '../assets/avatar.png';

const style = {
    fontSize: '1.25rem',
    maxWidth: '500px',
    margin: '20px',
}

function AboutMe() {
    return (
        <div className='about-me-container'>
            <p className='about-me-text-top'>About Me</p>
            <img
                src={avatar}
                alt="self-image"
                class="avatar"
            />
            <div className='about-me-text'>
                <p style={style}>Hey there, stranger. Thanks for coming by to take a look
                    at my portfolio. Things may look pretty dull, and basic now, but I am just
                    starting out on this crazy journey of learning how to be a web developer.
                    So if you come back again, chances are, things will look a lot nicer.
                </p>
            </div>
        </div>
    );
};


export default AboutMe;