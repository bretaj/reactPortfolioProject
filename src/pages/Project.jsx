import React from 'react';
import Projects from '../components/Projects.jsx';
import image1 from '../assets/circuit.png';
import image2 from '../assets/abstractcircuit.png';
import image3 from '../assets/codeBunch.png'

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
            image={image3}
            link="https://github.com/bretaj"
            description="textextext" />
            <Projects
            image={image3}
            link="https://github.com/bretaj"
            description="textextext" />
            <Projects
            image={image3}
            link="https://github.com/bretaj"
            description="textextext" />
            </div>
            </>
    );
    
}

export default Project;