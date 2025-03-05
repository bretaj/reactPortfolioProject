import React from 'react';
import Projects from '../components/Projects.jsx';
import image1 from '../assets/circuit.png';
import image2 from '../assets/abstractcircuit.png';
import image3 from '../assets/codeBunch.png'
import image4 from '../assets/brackets.png'
import image5 from '../assets/reactScript.png'
import image6 from '../assets/vsCode.png'
// TODO: import more images, and put to respective cards
const style = {
    margin: '20px',
    fontSize: '1.75rem',
};

function Project() {
    return (
            <>
            <p style ={style}>Portfolio</p>
            <div className='project-container'>
            <Projects 
            image={image1}
            link="https://github.com/bretaj"
            description="textextext"/>
            <Projects
            image={image2}
            link="https://github.com/bretaj"
            description="textextext" />
            <Projects
            image={image3}
            link="https://github.com/bretaj"
            description="textextext" />
            <Projects
            image={image4}
            link="https://github.com/bretaj"
            description="textextext" />
            <Projects
            image={image5}
            link="https://github.com/bretaj"
            description="textextext" />
            <Projects
            image={image6}
            link="https://github.com/bretaj"
            description="textextext" />
            {/* TODO: change linkes to actual projects from GitHub */}
            </div>
            </>
    );
    
}

export default Project;